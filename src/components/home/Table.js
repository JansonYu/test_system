import React from 'react';
import { Link } from 'react-router';

import styles from '../../styles/less/table.less'

class Table extends React.Component {
    constructor(props){
      super(props);
      this.state = {

      };

      this.getTableRows = this.getTableRows.bind(this);
    }

    getTableRows(){
      const { tableData, showLoading} = this.props;
      if(!tableData || !tableData.length) {
        if(showLoading){
            return null
        } else {
            return (
                <tr className={styles.nodata}>
                    <td>抱歉，无符合查询结果的数据</td>
                </tr>
            )
        }
      }else{
        let rows = [];
        let tr;
        tableData.forEach( (data, index)=>{
          tr = <tr className={styles.row} key={'tr_' + index}>
          <td className={styles.cell}>{index+1}</td>
          <td className={styles.cell}>{data.name}</td>
          <td className={styles.cell}>{data.email}</td>
          <td className={styles.cell}>{data.title}</td>
          <td className={styles.cell}><Link to={data.hash}>{data.hash}</Link></td>
          <td className={styles.cell}>{data.email}</td>
          <td className={styles.cell}>{data.title}</td>
          <td className={styles.cell}><Link to={data.hash}>{data.hash}</Link></td>
          </tr>;
          rows[rows.length] = tr;
        } );
        return rows;
      }
    }

    render() {
        return (
            <table className={styles.main} id="componentsHomeTable">
                <thead className={styles.header}>
                    <tr className={styles.row}>
                        <th className={styles['header-cell']}>
                            试卷名称
                        </th>
                        <th className={styles['header-cell']}>
                            学院
                        </th>
                        <th className={styles['header-cell']}>
                            一级项目
                        </th>
                        <th className={styles['header-cell']}>
                            二级项目
                        </th>
                        <th className={styles['header-cell']}>
                            科目
                        </th>
                        <th className={styles['header-cell']}>
                            题量
                        </th>
                        <th className={styles['header-cell']}>
                            状态
                        </th>
                        <th className={styles['header-cell']}>
                            操作
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.getTableRows()}
                </tbody>
            </table>
        )
    }
}

Table.defaultProps = {};

export default Table;
