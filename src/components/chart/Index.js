import React from 'react';
import Chart from './Chart';
import styles from '../../styles/less/chart.less';
import { Icon,Table } from 'antd';
export default class AppComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          isHome: false
        }
    }


    render() {

      const columns = [{
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a href="#">{text}</a>,
              }, {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
              }, {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
              }, {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                      <span>
                        <a href="#">Action 一 {record.name}</a>
                        <span className="ant-divider" />
                        <a href="#">Delete</a>
                        <span className="ant-divider" />
                        <a href="#" className="ant-dropdown-link">
                          More actions <Icon type="down" />
                        </a>
                      </span>
                    ),
                    }];

        const data = [{
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
              },{
                    key: '2',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
              },{
                    key: '3',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
              },{
                    key: '4',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                }];
        return(
            <div className={styles.root}>
                <div className={styles.header}>
                    <h1>试卷分析<span className={styles['h1-point']}>（参考人数：2965）</span></h1>
                </div>
                <div className={styles.container}>
                    <p className={styles.title}>各题正确率：（仅客观题）</p>
                    <div className={styles['chart-container']}>
                        <Chart />
                    </div>
                </div>
                <div className={styles.container}>
                    <p className={styles.title}>答题详情</p>
                    <Table columns={columns} dataSource={data} className={styles.table} />
                </div>
            </div>
        )
    }

}
