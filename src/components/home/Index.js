import React from 'react';
import Link from 'react-router';

import CONSTANTS from '../../constants/home';
import Table from '../../components/home/Table';
import styles from '../../styles/less/home.less';

class Home extends React.Component {
    query() {
        const { dispatch } = this.props;
        // dispatch({
        //     type: CONSTANTS.GET_DATA_REQUESTED
        // })
    }

    componentDidMount() {
        this.query();
    }

    render() {
        const { dispatch, tableData, showLoading } = this.props;
        return (
            <div className={styles['table-container']} id="componentsIndex">
                <Table dispatch={dispatch} tableData={tableData} {...this.props}/>
            </div>
        )
    }
}

export default Home;
