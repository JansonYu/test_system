import React from 'react';
import { Icon, Modal } from 'antd';
import styles from '../../styles/less/modal.less';

export default class Modals extends React.Component {
    constructor(props){
      super(props);

    }

    render() {
        const { title, visible, content, handleOk, handleCancel,isAlert } = this.props;
        return(
          <Modal title={title} visible={visible} onOk={handleOk} onCancel={handleCancel} footer={null}>
            <div className={styles.root}>
              <div className={styles.body}>
                <p>{content}</p>
              </div>
              <div className={styles.footer}>
              {isAlert ? (
                <div className={styles.sfooter}>
                  <button className={styles.btn} onClick={handleOk}>确定</button>
                </div>
              ) : (
                <div className={styles.dfooter}>
                  <button className={styles.btn+ ' ' + styles.cancel} onClick={handleCancel}>取消</button>
                  <button className={styles.btn} onClick={handleOk}>确定</button>
                </div>
              )}
              </div>
            </div>
          </Modal>

        )
    }

}
