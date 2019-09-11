import React, { Component } from 'react';
import './sateModel.css'
import { Table, Button, Input, Select, Form, Breadcrumb } from 'antd';
import http from '../../server';
class SateModel extends Component {
    constructor(){
        super();
        this.state={
            dataSource: [],
            columns: [
                {
                  title: '卫星型号',
                  dataIndex: 'Model',
                },
                {
                  title: '卫星代号',
                  dataIndex: 'Code',
                },
                {
                  title: '生产厂家',
                  dataIndex: 'Manufacturer',
                },
                {
                  title: '创建时间',
                  dataIndex: 'CreateTime',
                },
                {
                  title: '最后操作人',
                  dataIndex: 'UpdateUserName',
                },
            ],
            formLayout: [
              {
                labelCol: {span: 4},
                wrapperCol: {span: 4}
              }

            ]
        }
    }
    async componentDidMount(){
        await http.post('/api/SatelliteModel/Query',{PageIndex: 1, PageSize: 10, Item:{data:''}}).then(res => {
            if(res.data.Status === 200) {
                res.data.Data.ItemList.map(item => {
                    return item.key = item.ID
                })
                this.setState({
                    dataSource: res.data.Data.ItemList
                })
            }
        })
    }
    render(){
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
        };
        const {columns,dataSource,formLayout} = this.state
        return(
            <div>
                <Breadcrumb>
                  <Breadcrumb.Item>卫星型号管理</Breadcrumb.Item>
                </Breadcrumb>
                <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}  layout="inline">
                  <Form.Item label="Field A"  >
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                  <Form.Item label="Field B">
                    <Input placeholder="input placeholder" />
                  </Form.Item>
                  <Form.Item >
                    <Button type="primary">查询</Button>
                  </Form.Item>
                </Form>
                <Table rowSelection={rowSelection}  columns={columns} dataSource={dataSource} pagination={{}}/>
            </div>
        )
    }
}
export default SateModel;