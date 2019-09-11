import React, { Component } from 'react';
import RouteWrapper from '../../components/RouteWrapper';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './index.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Index extends Component{
    componentDidMount(){
        // console.log(this.props)
    }
    render(){
        const { routes } = this.props;
        return (
            <div className='Index'>
                <Layout>
                    <Header className='header'>快响卫星一体化测试系统</Header>
                    <Layout>
                        <Sider width={200}>
                            <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key='sub1' title={<span>测试配置管理</span>}>
                                    <Menu.Item key="1"><NavLink to='/index/sateModelManage'>卫星型号管理</NavLink></Menu.Item>
                                    <Menu.Item key="2"><NavLink to='/index/sateModel'>卫星型号</NavLink></Menu.Item>
                                    <Menu.Item key="3"><NavLink to='/index/instrumentModelManage'>仪器型号管理</NavLink></Menu.Item>
                                    <Menu.Item key="4"><NavLink to='/index/instrumentModel'>仪器型号</NavLink></Menu.Item>
                                </SubMenu>
                            </Menu>
                            
                        </Sider>
                        <Content>
                            <RouteWrapper routes={ routes }></RouteWrapper>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Index