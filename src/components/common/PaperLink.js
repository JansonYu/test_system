import React from 'react';
import { Modal, Row, Col, Select,Button } from 'antd';
import styles from '../../styles/less/modal.less';
import { GET_PAPER_LINK_INFO_REQUESTED  } from '../../constants/home';
import CopyToClipboard from 'react-copy-to-clipboard';
const Option = Select.Option;
export default class AppComponent extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        visible: false,
        imgWidth:150 //二维码默认大小
      }
    }

    componentDidMount() {
    }

    showModal = () => {
      const { dispatch } = this.props;
      const queryParams = {
        paperId: this.props.paperInfo.paperId
      };
      dispatch({type: GET_PAPER_LINK_INFO_REQUESTED , queryParams })
      this.setState({ visible: true })
    }

    handleCancel = (e) => {
      this.setState({ visible: false })
    }

    changeWidth = (val) => {
      this.setState({ imgWidth: val })
    }

    render() {
        const { visible, imgWidth} = this.state;
        const { disabled, linkInfoData} = this.props;
        return(
          <div className={styles['handle-cell']}>
            {disabled ? <span className={styles['handle--disabled']}>查看链接</span> :
              <span className={styles.handle} onClick={this.showModal}>查看链接</span>}

            <Modal title={'试卷链接'} width={'720px'} visible={visible} onCancel={this.handleCancel} footer={null}>
              <div className={styles.content}>
                <Row style={{marginBottom:20}}>
                  <Col span={8}>
                    <span>试卷名称：</span>
                    <span className={styles.gray3}>{linkInfoData.paperName}</span>
                  </Col>
                  <Col span={8}>
                    <span>学院：</span>
                    <span className={styles.gray3}>{linkInfoData.collegeName}</span>
                  </Col>
                  <Col span={8}>
                    <span>一级项目：</span>
                    <span className={styles.gray3}>{linkInfoData.projectFirstName}</span>
                  </Col>
                </Row>
                <Row>
                  <Col span={8}>
                    <span>二级项目：</span>
                    <span className={styles.gray3}>{linkInfoData.projectSecondName}</span>
                  </Col>
                  <Col span={8}>
                    <span>科目：</span>
                    <span className={styles.gray3}>{linkInfoData.subjectName}</span>
                  </Col>
                  {
                    linkInfoData.paperType == 'MODEL_EXAM' ? (
                      <Col span={8}>
                        <span>状态：</span>
                        <span className={styles.gray3}>
                            {linkInfoData.status == 'ACTIVE'?'已上线':'未上线'}
                        </span>
                      </Col>
                    ): null
                  }
                </Row>
              </div>
              <div className={styles.sfooter}>
                  <a href={linkInfoData.url} target="_blank" className={styles.url}>{linkInfoData.url}</a>
                      <CopyToClipboard text={linkInfoData.url || ''}>
                          <Button className={styles.sbtn} style={{width:120}} onClick={this.copyLink}>复制链接</Button>
                      </CopyToClipboard>
                  <div className={styles['code-container']}>
                      <div className={styles['code-img']} style={{width:imgWidth + 'px', height:imgWidth + 'px'}}>
                          <img src="#" />
                      </div>
                      <div className={styles['code-down']}>
                          <span className={styles.label}>大小</span>
                          <Select value={imgWidth.toString()} style={{width: 80}} onChange={this.changeWidth} >
                            <Option value="150">150</Option>
                            <Option value="200">200</Option>
                          </Select><br />
                          <Button className={styles.sbtn} style={{width:120}} onClick={this.handleOk}>下载二维码</Button>
                      </div>
                  </div>
                </div>
            </Modal>
          </div>
        )
    }
}
