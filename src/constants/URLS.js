const URLS =  {
    HOME_GET_COLLEGE_URL: '/paper/commonUtil/getAllCollege', //学院列表
    HOME_GET_FIRST_URL: '/paper/commonUtil/getAllProjectFirstByCollegeId',//一级项目列表
    HOME_GET_SECOND_URL: '/paper/commonUtil/getAllProjectSecondByFirstId',//二级项目列表
    HOME_GET_SUBJECT_URL: '/paper/commonUtil/getAllSubjectByProjectSecondId',//科目列表
    GET_ALL_PACKAGE_URL: '/paper/commonUtil/getAllPackageByCondition',//可选产品包列表
    GET_PAPER_LIST_URL: '/paper/teacher/queryPaperList',//考试试卷列表
    UPLOAD_PAPER_URL: '/paper/teacher/uploadPaperTemplate',//上传试卷
    SAVE_PAPER_URL: '/paper/teacher/savePaper',//保存试卷
    SAVE_AND_SET_PAPER_URL: '/paper/teacher/savePaperAndSetOnline',//保存并上线
    ONLINE_URL: '/paper/teacher/setOnline',//上线
    OFFLINE_URL: '/paper/teacher/setOffline',//下线
    DELETE_URL: '/paper/teacher/deletePaper',//删除
    CLOSE_URL: '/paper/teacher/closeExam',//关闭
    SHOW_LINK_INFO_URL: '/paper/teacher/showLinkInfo'//显示链接详情
}

export default URLS;
