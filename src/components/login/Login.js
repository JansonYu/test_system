import React from 'react';
import styles from '../../styles/less/login.less';

import { LOGIN_REQUESTED } from '../../constants/login';

class Login extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          errorMessage: ''
        }
        
        this.handleLoginClick = this.handleLoginClick.bind(this);
      }
      handleLoginClick(e){
        //清除错误信息显示
        this.setState({
          errorMessage: ''
        })
        const { dispatch } = this.props;
        const j_username = this.refs['username'].value.trim();
        const j_password = this.refs['password'].value.trim();
        if(j_username.length == 0){
          this.setState({
            errorMessage: '请输入263邮箱'
          })
          return;
        }
        if(j_password.length == 0){
          this.setState({
            errorMessage: '请输入密码'
          })
          return;
        }
        const params = { j_username, j_password };
        dispatch({type: LOGIN_REQUESTED, params});
      }

      render() {
        const { errorMessage } = this.state;
        return (
            <div className={styles.root}>
                <div className={styles['sunlands-logo']}></div>
                <div className={styles.container}>
                    <div className={styles.form}>
                        <div className={styles['eye-logo']}></div>
                        {
                                errorMessage !== '' ? <div className={styles.error}>{errorMessage}</div> : null
                        }
                        <form>
                            <input ref="username" placeholder="请输入用户名" className={styles['input-username']}/>
                            <input ref="password" placeholder="密码" type="password" className={styles.input}/>
                            <div className={styles.submit} onClick={this.handleLoginClick}>登录</div>
                        </form>

                    </div>
                    
                </div>
            </div>
        );
      }    
}

export default Login;