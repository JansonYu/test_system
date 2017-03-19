import React from 'react';
import styles from '../../styles/less/chart.less';
import Amcharts from 'amcharts3-react';
import { Icon } from 'antd';
export default class AppComponent extends React.Component {

    constructor(props) {
        super(props);

        this.creatChart = this.creatChart.bind(this)
    }

    creatChart (){
      let configs = {
        "type": 'serial',
        "theme": 'none',
        "categoryField": 'index',
        "rotate": true,
        "startDuration": 1,
        "categoryAxis": {
          gridPosition: 'start',
          position: 'left'
        },
        "color": "#666",
        "trendLines": [],
        "graphs": [
          {
            balloonText: "[[title]][[index]]:<br />[[value]]%正确率",
            fillAlphas: 0.8,
            columnWidth:0.3,
            id: "AmGraph-1",
            lineAlpha: 0.2,
            title: "题目",
            type: "column",
            valueField: "score"
          }
        ],
        "chartCursor": {
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0.1,
            "cursorColor":"#000000",
             "fullWidth":true,
            "valueBalloonsEnabled": false,
            "zoomable": false
        },
        "guides":[],
        "valueAxes": [
      		{
      			"id": "ValueAxis-1",
      			"position": "top",
      			"axisAlpha": 0,
            "gridAlpha": 0,
            "unit": "%",
      		}
      	],
        "dataProvider": [
        		{
        			"index": 1,
        			"score": 23.5,
        		},
        		{
        			"index": 2,
        			"score": 33.5,
        		},
        		{
        			"index": 3,
        			"score": 43.5,
        		},
        		{
        			"index": 4,
        			"score": 53.5,
        		},
        		{
        			"index": 5,
        			"score": 63.5,
        		},
        		{
        			"index": 6,
        			"score": 73.5,
        		}
        ]
      }

      return React.createElement(Amcharts, configs);
    }

    render() {
        return(
            <div className={styles['chart-main']}>
              {this.creatChart()}
            </div>
        )
    }

}
