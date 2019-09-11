import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
class InstrumentModel extends Component {
    render(){
        return(
            <div>
                <Breadcrumb>
                  <Breadcrumb.Item>仪器管理</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}
export default InstrumentModel;