import React from 'react';
import { Link } from 'react-router';
import { Form, Col, Row, Select, Input ,Button} from 'antd';
import CONSTANTS from '../../constants/home';
const FormItem = Form.Item;
const Option = Select.Option;
class QueryForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        collegeId: 'all',
        projectFirstId: 'all',
        projectSecondId: 'all',
        subjectId: 'all',
        paperType: 'all',
        paperName: '',
        resetFlag: false
      };

      this.getColField = this.getColField.bind(this);
      this.submit = this.submit.bind(this);
      this.reset = this.reset.bind(this);
      this.changeName = this.changeName.bind(this);
    }

    componentDidMount(){
      const { dispatch } = this.props;
      dispatch({type:CONSTANTS.GET_COLLEGE_REQUESTED}); //学院列表
    }
    /*
     *
     *封装select组件
     * 学院、一级项目、二级项目、科目统一调用
     * name label显示的中文名 field选中存储的字段
     * data 数据
    */
    getColField = (name, field, data) => {
        const { dispatch } = this.props;
        const fieldValue = this.state[field];
        const formItemLayout = {
              labelCol: { span: 7 },
              wrapperCol: { span: 17 }
        };
        const formateData = (data)=> {
              let defaultVal = [];
              defaultVal.push(<Option key='all'>全部</Option>);
              if(data && data.length){
                data.forEach((val,i) =>{
                  defaultVal.push(<Option key={val.id}>{val.name}</Option>);
                })
              }
              return defaultVal;
        };
        //change 事件
        const handleChanges = (value) =>{
              this.setState({
                [field]: value
              });
              var queryListParams = { id: value };
              switch (field) {
                  //学院change 事件
                  case 'collegeId':
                    dispatch({type:CONSTANTS.GET_FIRST_PROJECT_REQUESTED,queryListParams}); //一级项目
                    break;

                  //一级项目change 事件
                  case 'projectFirstId':
                    var queryListParams = Object.assign({},queryListParams,{collegeId: this.state.collegeId});
                    dispatch({type:CONSTANTS.GET_SECOND_PROJECT_REQUESTED,queryListParams}); //二级项目
                    break;

                  //二级项目change 事件
                  case 'projectSecondId':
                    dispatch({type:CONSTANTS.GET_SUBJECT_REQUESTED,queryListParams}); //科目
                    break;
              }
        }

        return (
            <Col span={6}>
              <FormItem {...formItemLayout} label={name}>
                  <Select value={fieldValue} onChange={handleChanges} >
                    {formateData(data)}
                  </Select>
              </FormItem>
            </Col>
        )
    }
    //提交
    submit = (e) => {
      const { dispatch } = this.props;
      const  collegeId = this.state.collegeId == 'all' ? '' : this.state.collegeId;
      const  projectFirstId = this.state.projectFirstId == 'all' ? '' : this.state.projectFirstId;
      const  projectSecondId = this.state.projectSecondId == 'all' ? '' : this.state.projectSecondId;
      const  subjectId = this.state.subjectId == 'all' ? '' : this.state.subjectId;
      const  paperType = this.state.paperType == 'all' ? '' : this.state.paperType;
      const { paperName } = this.state;
      const queryListParams = { collegeId, projectFirstId, projectSecondId,subjectId,paperType,paperName};
      dispatch({type: CONSTANTS.GET_PAPER_LIST_REQUESTED, queryListParams});
    }
    //重置
    reset = () => {
        this.setState({
          collegeId: 'all',
          projectFirstId: 'all',
          projectSecondId: 'all',
          subjectId: 'all',
          paperType: 'all',
          paperName: '',
        })
    }
    //试卷名称 输入事件
    changeName(e) {
      this.setState({
        paperName: e.target.value
      })
    }

    render() {
      const { collegeData, firstProjectData, secondProjectData, subjectData } = this.props;
      const btnStyle = {
        background: '#eee',
        border: '1px solid #ccc',
        width: '90px',
        marginLeft: '10px'
      };
      const typeData = [{
            id:0,
            name:'模考'
          },{
            id:1,
            name:'刷题'
          }
      ];
      const getNameInput = () => {
        return (
          <Col span={6}>
            <FormItem labelCol={{span: 7}} wrapperCol={{span: 17}} label={'试卷名称'}>
                <Input value={this.state.paperName} onChange={this.changeName}/>
            </FormItem>
          </Col>
        )
      }

      return (
        <Form onSubmit={this.submit}>
          <Row>
              {this.getColField('学院', 'collegeId', collegeData)}
              {this.getColField('一级项目', 'projectFirstId', firstProjectData)}
              {this.getColField('二级项目', 'projectSecondId', secondProjectData)}
          </Row>
          <Row>
              {this.getColField('科目', 'subjectId', subjectData)}
              {this.getColField('类型', 'paperType', typeData)}
              {getNameInput()}
              <Col span={4} offset={1}>
                <Button htmlType="submit" style={btnStyle}>查询</Button>
                <Button style={btnStyle} onClick={this.reset}>重置</Button>
              </Col>
          </Row>
        </Form>
      )
    }
}

const Query = Form.create()(QueryForm);

export default Query;
