import React , { Component } from 'react';
import Charts from 'ant-design-pro/lib/Charts';
import 'ant-design-pro/dist/ant-design-pro.css'
export default class Dashboard extends Component {
    render(){
        return (
            <div style={{ textAlign: 'center' }}>
            <Charts.WaterWave
              height={161}
              title="补贴资金剩余"
              percent={34}
            />
            <Charts.Gauge
                title="核销率"
                height={164}
                percent={87}
            />
          </div>
        )
    }
}