import React, { Component } from 'react';
import { Form, Input, Select, Button,Breadcrumb } from 'antd';
const { Option } = Select;
class SateModelManage extends Component {
    render(){
        return(
            <div>
                <Breadcrumb>
                  <Breadcrumb.Item>卫星管理</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}
export default SateModelManage;