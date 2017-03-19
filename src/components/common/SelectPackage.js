import React from 'react';
import { Modal, Input, Checkbox,Button } from 'antd';
import styles from '../../styles/less/modal.less';

export default class AppComponent extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        id: props.id,
        visible: false,
      }
    }

    showModal = () => {
      this.setState({ visible: true })
  }

    handleOk = (e) => {
      alert(this.state.id)
    }

    handleCancel = (e) => {
      this.setState({ visible: false })
    }

    onChange = () => {

    }

    render() {
        const { visible } = this.state;
        const { name, disabled, isRight } = this.props;
        const CheckboxStyle = {
              marginRight:40
        };
        const getPackge = (name,checked) => {
              return (
                <span className={checked ? styles['package--checked'] : styles['package']}>{name}</span>
              )
        }
        return(
          <div style={{display:'inline-block'}}>
            <Input value={'不限制产品包'} onClick={this.showModal} />
            <Modal title={'选择产品包'} visible={disabled ? false :visible} width={'790px'} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
              <div className={styles.content}>
                <Checkbox onChange={this.onChange} style={CheckboxStyle}>不限制产品包</Checkbox>
                <Checkbox onChange={this.onChange} style={CheckboxStyle}>全选</Checkbox>
                <Checkbox onChange={this.onChange} style={CheckboxStyle}>反选</Checkbox>
                <div className={styles.packages}>
                    {getPackge('移动1对1早教班')}
                    {getPackge('hahahah')}
                    {getPackge('移动1对1早教班',true)}
                </div>
              </div>
              <div className={styles.footer}>
                <Button className={styles['sbtn-cancel']} style={{width:90}} onClick={this.handleCancel}>取消</Button>
                <Button className={styles['sbtn']} style={{width:90}} onClick={this.handleOk}>确定</Button>
              </div>
            </Modal>
          </div>
        )
    }
}
