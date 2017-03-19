import React from 'react';
import styles from '../../styles/less/header.less';
import { USER_INFO_REQUESTED, LOGOUT_REQUESTED } from '../../constants/header';
import { Icon } from 'antd';
class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          isHome: false
        }
        this.logout = this.logout.bind(this);
    }

    logout() {
        const { dispatch } = this.props;
        dispatch({type: LOGOUT_REQUESTED})
    }

    render() {
        const { userAccount } = this.props;
        const { isHome } = this.state;
        return(
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="../images/logo.png" />
                </div>
                <div className={styles.home + ' ' +(isHome ? '' : styles['home--active'])}>
                  <Icon type="home" style={{marginRight:10}} />首页
                </div>
                <div className={styles.right}>
                  <span className={styles.name}>XX</span>
                  <span className={styles.logout}>退出</span>
                </div>
            </header>
        )
    }
    componentDidMount() {
        const { dispatch } = this.props;
        // dispatch({type: USER_INFO_REQUESTED});
    }
}

Header.defaultProps = {};

export default Header;
