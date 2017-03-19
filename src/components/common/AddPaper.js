import React from 'react';
import { Button,Upload,Modal,Icon } from 'antd';
import styles from '../../styles/less/add_paper.less';
import URLS from '../../constants/URLS';
export default class AppComponent extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        showCardFlag: false, //显示下载模板
        showLoadingFlag: false, //显示模板解析中
        showFailFlag: false, //显示模板失败
      }

      this.showCard = this.showCard.bind(this);
      this.hideCard = this.hideCard.bind(this);
      this.showLoading = this.showLoading.bind(this);
      this.hideLoading = this.hideLoading.bind(this);
      this.showError = this.showError.bind(this);
      this.hideError = this.hideError.bind(this);
    }

    showCard() {
      this.setState({
        showCardFlag: true
      })
    }
    hideCard() {
      this.setState({
        showCardFlag: false
      })
    }

    showLoading() {
      this.setState({
        showLoadingFlag: true
      })
    }
    hideLoading() {
      this.setState({
        showLoadingFlag: false
      })
    }

    showError() {
      this.setState({
        showFailFlag: true
      })
    }

    hideError() {
      this.setState({
        showFailFlag: false
      })
    }

    render() {
        const { showCardFlag, showLoadingFlag, showFailFlag } = this.state;
        const onUplaod = (info) => {
          this.showLoading();
            if (info.file.status !== 'uploading') {
              //上传中
            }
            if (info.file.status === 'done') {
              //上传成功
              this.hideLoading();
              this.hideCard();
              alert('done!');
            } else if (info.file.status === 'error') {
              //上传失败
              this.showError()
            }
        };
        const props = {
                name: 'file',
                action: URLS.UPLOAD_PAPER_URL,
                headers: {
                  authorization: 'authorization-text',
                },
                onChange: onUplaod,
        };
        return(
            <div onMouseOver={this.showCard} onMouseOut={this.hideCard} className={styles.root}>
                <Button className={'btn-common ' + styles['btn-add']}>+ 新增试卷</Button>

                <div className={styles.container} style={{display: showCardFlag ? 'inline-block' : 'none'}} >
                    <div className={styles.item}>
                        <i className={styles.img}></i>
                        没有模板，<br />
                        <a href="#">下载模板</a>
                    </div>
                    <div className={styles.item}>
                        <i className={styles.img}></i>
                        试卷已填入模板，<br />
                        <Upload {...props}><a href="javascript:;">点击上传</a></Upload>
                    </div>
                </div>

                <Modal visible={showLoadingFlag} closable={false} width={'330px'} footer={null}>
                  <p className={styles['loading-content']}>
                    <Icon type="loading" style={{fontSize:20,marginRight:25}}/>模板解析中，请等待...
                  </p>
                </Modal>

                <Modal title={'上传失败'} visible={showFailFlag} width={'375px'} onCancel={this.hideError}  footer={null}>
                  <div className={styles.content}>
                    请确认模板内容后重试
                  </div>
                  <div className={styles.footer}>
                    <Button className={styles.sbtn} style={{width:140}} onClick={this.hideError}>确定</Button>
                  </div>
                </Modal>
            </div>
        )
    }

}
