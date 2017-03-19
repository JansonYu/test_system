import React from 'react';
import { Modal,Button } from 'antd';
import styles from '../../styles/less/modal.less';
import { GET_PAPER_DELETE_REQUESTED, GET_PAPER_LIST_REQUESTED  } from '../../constants/home';
export default class AppComponent extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        visible: false,
      }
    }

    showModal = () => {
      this.setState({ visible: true })
    }

    handleOk = (e) => {
        const { dispatch, paperInfo, queryListParams } = this.props;
        const queryParams = {
          paperId: paperInfo.paperId
        }

        dispatch({type: GET_PAPER_DELETE_REQUESTED, queryParams});
        this.handleCancel();
        //刷新tanle
        dispatch({type:GET_PAPER_LIST_REQUESTED, queryListParams});
    }

    handleCancel = (e) => {
      this.setState({ visible: false })
    }

    render() {
        const { visible } = this.state;
        const { paperInfo } = this.props;
        return(
          <div className={styles['handle-cell']}>
            <span className={styles.handle} onClick={this.showModal}>删除</span>
            <Modal title={'删除试卷'} visible={visible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
              <div className={styles.content}>
                删除后将不可恢复，确定删除《{paperInfo.paperName}》？
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
