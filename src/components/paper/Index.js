import React from 'react';
import styles from '../../styles/less/paper.less';
import Question from './Question';
import CONSTANTS from '../../constants/home';
import SelectPackage from '../common/SelectPackage';

import {Form,Button,Input,Select,Row,Col } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class Paper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          collegeId: 'all',
          firstPro: 'all',
          secondPro: 'all',
        }
    }

    componentDidMount(){
      const { dispatch } = this.props;
      dispatch({type:CONSTANTS.GET_COLLEGE_REQUESTED}); //学院列表
    }

    getColField = (params) => {
        const { name, field, data, isInput,notMust } = params;
        const fieldValue = this.state[field];
        const formItemLayout = {
              labelCol: { span: 5 },
              wrapperCol: { span: 19 }
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

        const handleChanges = (value) =>{
              this.setState({
                [field]: value
              })
        }
        // debugger
        return (
            <Col span={8}>
              <FormItem {...formItemLayout} label={name}>
                { isInput ? (
                    <Input style={{width:250}}/>
                ):(
                    <Select value={fieldValue} onChange={handleChanges} style={{width:250}} >
                      {formateData(data)}
                    </Select>
                )}
                {notMust ? null : (<span className={styles.star}>*</span>)}
              </FormItem>
            </Col>
        )
    }

    render() {

        const { collegeData } = this.props;
        const fonterBtnStyle = {
          width: 180,
          height:42,
          marginLeft: 10
        }

        return(
          <div className={styles.root}>
            <div className={styles.header}>
                <h1>所有试卷列表</h1>
            </div>
            <div className={styles.container}>
                <p className={styles.name}>1701模拟考试</p>
                <div className={styles.type}>
                    <span className={styles['line-bar']}></span>
                    <p className={styles['type-name']}>选择题<span className={styles['type-info']}>（2题，共24分）</span></p>
                    <span className={styles['line-bar--right']}></span>
                </div>
                <div className={styles.questions}>
                    <Question index={1} title={'下列句子没有语病的一项'} isRight={true} />
                    <Question index={1} title={'下列句子没有语病的一项'} />
                    <Question index={1} title={'下列句子没有语病的一项'} />
                    <Question index={1} title={'下列句子没有语病的一项'} />
                    <Question index={1} title={'下列句子没有语病的一项'} />
                    <Question index={1} title={'下列句子没有语病的一项'} />
                </div>
                <div className={styles['re-upload']}>
                  <Button className={'btn-common'} style={{width:200,height:45}}>重新上传</Button>
                </div>
            </div>
            <div className={styles.container}>
                <Form>
                    <Row>
                        {this.getColField({
                            name: '学院',
                            field: 'collegeId',
                            isInput: true
                        })}
                        {this.getColField({
                            name: '一级项目',
                            field: 'collegeId',
                            data: collegeData,
                            notMust: true
                        })}
                        {this.getColField({
                            name: '二级项目',
                            field: 'collegeId',
                            data: collegeData,
                        })}
                    </Row>
                    <Row>
                        {this.getColField({
                            name: '学院',
                            field: 'collegeId',
                            isInput: true
                        })}
                        {this.getColField({
                            name: '一级项目',
                            field: 'collegeId',
                            data: collegeData,
                            notMust: true
                        })}
                        <SelectPackage />
                    </Row>
                </Form>
            </div>
            <div className={styles.footer}>
                <Button className={'btn-common ' +styles['btn-footer']}>保存，以后上线</Button>
                <Button className={'btn-common ' +styles['btn-footer']}>保存并后上线</Button>
            </div>
          </div>
        )
    }

}

Paper.defaultProps = {};

export default Paper;
