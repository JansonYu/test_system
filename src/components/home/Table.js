import React from 'react';
import { Link } from 'react-router';
import { Table } from 'antd';
import styles from '../../styles/less/table.less';
import Modals from '../common/Modal';
import PaperDel from '../common/PaperDel';
import PaperLink from '../common/PaperLink';
import PaperSpan from '../common/PaperSpan';

import { GET_PAPER_LIST_REQUESTED } from '../../constants/home';
export default class AppComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        showModal: false,
        modalTitle: '',
        modalContent: '',
        tableLoading: true
      };

      this.query = this.query.bind(this);
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
      this.handleTableChange = this.handleTableChange.bind(this);
    }

    componentDidMount(){
      this.query();
    }

    componentWillReceiveProps(nextProps){
      this.setState({
          tableLoading: false
      })
    }

    query() {
        const { dispatch, queryListParams } = this.props;
        dispatch({type: GET_PAPER_LIST_REQUESTED, queryListParams});
    }
    //表格change 事件
    handleTableChange (pagination) {
      const  { dispatch } = this.props;
      const { current, pageSize } = pagination;
      const parms = this.props.queryListParams;
      const queryListParams = Object.assign({},parms,{current},{pageSize})
      dispatch({type: GET_PAPER_LIST_REQUESTED,queryListParams})
    }

    /*
    * 打卡弹窗
    */
    showModal() {
      this.setState({
        showModal: true
      })
    }
    /*
    * 关闭弹窗
    */
    hideModal() {
      this.setState({
        showModal: false
      })
    }

    render() {

        const { showModal, modalTitle, modalContent, modalOK} = this.state;
        const  { paperListData }  = this.props;
        const pagination = {
            total: paperListData.total,
            current: paperListData.pageNo,
            pageSize: paperListData.pageSize,
            showQuickJumper : true,
            showSizeChanger : true
        }
        //表格 title
        const columns = [
                {
                      title: '试卷名称',
                      dataIndex: 'paperName',
                },{
                      title: '学院',
                      dataIndex: 'collegeName',
                },{
                      title: '一级项目',
                      dataIndex: 'projectFirstName',
                },{
                      title: '二级项目',
                      dataIndex: 'projectSecondName',
                },{
                      title: '科目',
                      dataIndex: 'subjectName',
                },{
                      title: '题量',
                      dataIndex: 'questionAmount',
                },{
                      title: '类型',
                      dataIndex: 'paperType',
                      render: (text, record) => (
                        <div>
                          <PaperSpan type={'模考'} {...this.props}/>
                          <PaperSpan type={'结束'} isRight={true} disabled={true} {...this.props}/>
                        </div>
                      )
                },{
                      title: '状态',
                      render: (text, record) => (
                        <div>
                          <PaperSpan type={'上线'} paperInfo={record} {...this.props}/>
                          <PaperSpan type={'下线'} paperInfo={record} isRight={true} disabled={false} {...this.props}/>
                        </div>
                      )
                },{
                      title: '操作',
                      render: (record) => (
                        <div>
                          <span className={styles.handle}>详情</span>
                          <span className={styles.handle}>编辑</span>
                          <span className={styles.handle}>分析</span>
                          <span className={styles.handle}>复制</span>
                          <PaperDel paperInfo={record} {...this.props}/>
                          <PaperLink paperInfo={record} {...this.props}/>
                        </div>
                      )
                }
        ];

        return (
            <div>
              <Table
                  columns={columns}
                  dataSource={paperListData.rows}
                  pagination = {pagination}
                  onChange = {this.handleTableChange}
                  loading = {this.state.tableLoading}
                  rowKey='paperId'
                  className={styles.table} />
              <Modals title={modalTitle} visible={showModal} content={modalContent} handleOk={modalOK} handleCancel={this.hideModal} isAlert={false}/>
            </div>
        )
    }
}
