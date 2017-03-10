import React from 'react';
import styles from '../../styles/less/header.less';
import { USER_INFO_REQUESTED, LOGOUT_REQUESTED } from '../../constants/header';
import { Icon } from 'antd';
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        const { dispatch } = this.props;
        dispatch({type: LOGOUT_REQUESTED})
    }

    render() {
        const { userAccount } = this.props;
        return(
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="../images/logo.png" />
                </div>
                <div className={styles.home}>
                  <Icon type="home" />首页
                </div>
                <div className={styles.right}>
                  <span className={styles.name}>于俊</span>
                  <span className={styles.logout}>退出</span>
                </div>
            </header>
        )
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({type: USER_INFO_REQUESTED});
    }
}

Header.defaultProps = {};

export default Header;
