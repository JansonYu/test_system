import React from 'react';
import { Modal, Select, Button, Row, Col, InputNumber } from 'antd';
import styles from '../../styles/less/modal.less';
import CONSTANTS from '../../constants/home';
const Option = Select.Option;
// 上线 下线 模考 结束 统一组件
export default class AppComponent extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        visible: false,
        onlineType: '', //要上线试卷的类型
        onlineTime: ''  //若上线试卷为模拟考 需要填时长
      }
    }

    showModal = () => {
      this.setState({ visible: true })
    }

    handleOk = (e) => {
      const { type, dispatch, paperInfo, queryListParams } = this.props;
      var queryParams = { paperId: paperInfo.paperId };

      if(type == '上线'){
          queryParams = Object.assign({}, queryParams,{
            paperType: this.state.onlineType,
            totalTime: this.state.onlineTime
          });
          dispatch({type: CONSTANTS.GET_PAPER_ONLINE_REQUESTED, queryParams})

      }else if(type == '下线'){
          dispatch({type: CONSTANTS.GET_PAPER_OFFLINE_REQUESTED, queryParams})

      }else if(type == '结束'){
          dispatch({type: CONSTANTS.GET_PAPER_CLOSE_REQUESTED, queryParams})

      }else if(type == '模拟'){
          dispatch({type: CONSTANTS.GET_PAPER_CLOSE_REQUESTED, queryParams})

      }
      //刷新表格
      this.handleCancel();
      dispatch({type: CONSTANTS.GET_PAPER_LIST_REQUESTED, queryListParams});
    }

    handleCancel = (e) => {
      this.setState({ visible: false })
    }

    changeType = (val) => {
      this.setState({ onlineType: val })
    }
    changeOnlineTime = (val) => {
      this.setState({ onlineTime: val })
    }

    render() {
        const { visible, onlineType, onlineTime } = this.state;
        const { paperInfo, type, disabled, isRight } = this.props;
        //下线
        const getOffContent = () => {
          return (
            <span>下线后，学员端不可见，确定下线《{paperInfo.paperName}》？</span>
          )
        }
        //上线
        const getOnContent = () => {
          return (
            <Row>
              <Col span={'4'}>
                  试卷类型
              </Col>
              <Col span={'7'}>
                  <Select value={onlineType} onChange={this.changeType} style={{width:100}}>
                      <Option value="">请选择</Option>
                      <Option value="MODEL_EXAM">模拟考</Option>
                      <Option value="COMMON_EXERCISES">刷题</Option>
                  </Select>
              </Col>
              {onlineType == 'MODEL_EXAM' ? (
                <span>
                <Col span={'4'}>
                    考试时长
                </Col>
                <Col span={'7'}>
                    <InputNumber value={onlineTime} onChange={this.changeOnlineTime} style={{width:60,marginRight:10}} />分钟
                </Col></span>
              ): null}
            </Row>
          )
        }
        //结束
        const getEndContent = () => {
          return (
            <div>
              <span>结束模拟考</span>
            </div>
          )
        }
        //模拟考
        const getSimulateContent = () => {
          return (
            <div>
              <span>模拟考</span>
            </div>
          )
        }

        const getContent = () => {
            switch(type){
              case '上线':
                return getOnContent();
                break;
              case '下线':
                return getOffContent();
                break;
              case '结束':
                return getEndContent();
                break;
              case '模考':
                return getSimulateContent();
                break;
            }
        }

        return(
          <div style={{display:'inline-block'}}>
            <span className={styles['handle-span'] +' '+ (disabled ? styles['span-disabled'] : '') + ' '+(isRight? styles['span-right']:'')} onClick={this.showModal}>
              {type}
            </span>
            <Modal title={type} visible={disabled ? false :visible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
              <div className={styles.content}>
                {getContent()}
              </div>
              <div className={styles.footer}>
                <Button className={styles['sbtn-cancel']} onClick={this.handleCancel}>取消</Button>
                <Button className={styles['sbtn']} onClick={this.handleOk}>确定</Button>
              </div>
            </Modal>
          </div>
        )
    }
}
