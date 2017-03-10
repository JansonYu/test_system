import React from 'react';
import styles from '../../styles/less/header.less';
import { USER_INFO_REQUESTED, LOGOUT_REQUESTED } from '../../constants/header';

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
                    <a href="/"></a>
                </div>
                <div className={styles.logout} onClick={this.logout}>
                </div>
                <div className={styles['user-info']}>
                    {userAccount}
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
