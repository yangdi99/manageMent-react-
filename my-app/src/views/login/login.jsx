import React, { Component } from 'react';
import './login.css'
import {Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';
import http from '../../server';

class Login extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                console.log('Received values of form: ', values);
                this.toLogin(values);
            }
        })
    }
    componentDidMount(){

    }
    async toLogin(values){
        await http.post('/api/Login/Login',{LoginName:values.username,Password:values.password}).then(res=>{
            if(res.data.Status === 200) {
                sessionStorage.name = values.username;
                sessionStorage.token = res.data.Data;
                this.props.history.push('/index/sateModelManage');
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='Login'>
                <div className='login-wrap'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.toLogin.bind(this)}>
                            Login
                        </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default Form.create({})(Login);