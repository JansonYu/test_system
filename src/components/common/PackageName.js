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
        return(
          <span className={checked ? styles['package--checked'] : styles['package']}>{name}</span>
        )
    }
}
