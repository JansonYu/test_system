import React from 'react';
import styles from '../../styles/less/question.less';
import { Icon } from 'antd';
export default class AppComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { index, title,stuAnswer,isRight  } = this.props;
        const getStuTitle = () => {
            return (
              <p className={styles.title}>
                    <span className={isRight ? styles['triangle-right'] : styles['triangle-wrong']}>
                        <Icon type={isRight ? 'check' : 'close'} className={styles['triangle-flag']} />
                    </span>
                    <span className={styles['title-name']}>
                        <span className={isRight ? styles['indexs-right'] : ['indexs-wrong']}>{index}</span>{title}
                    </span>
              </p>
            )
        };
        const getTitle = () => {
            return (
              getStuTitle()
            )
        }
        return(
          <div className={styles.root}>
            {getTitle()}
            <div className={styles.content}>
              A:哈哈哈哈哈哈哈哈哈哈
            </div>
            <div className={styles.answer}>
              <p className={styles.yellow}>参考答案 ：B</p>
              <span className={styles['answer-title']}>解析：</span>
              <p className={styles['answer-info']}>点啊大大大大的顶顶顶
              顶顶顶顶顶顶啊大大大大的顶顶顶顶顶顶顶顶顶啊大大大大的顶顶顶顶顶顶顶
              顶顶啊大大大大的顶顶顶顶顶顶顶顶顶啊大大大大的顶顶顶顶顶顶顶顶顶顶大</p>
            </div>
          </div>
        )
    }

}
