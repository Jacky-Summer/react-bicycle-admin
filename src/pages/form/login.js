import React from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserAddOutlined, LockOutlined } from '@ant-design/icons';
const FormItem = Form.Item;
class FormLogin extends React.Component{

    onFinish = values => {
        console.log('Success:', values);
      };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    render(){
        return (
            <div className="ui-container">
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop:10}}>
                    <Form style={{width:300}} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} >
                        <FormItem>
                            <Input  
                                name="userName" 
                                prefix={<UserAddOutlined />} 
                                placeholder="请输入用户名"
                                rules={[
                                    { required:true, message:'用户名不能为空' },
                                    { min:5,max:10, message:'长度不在范围内' },
                                    { pattern:new RegExp('^\\w+$','g'), message:'用户名必须为字母或者数字' }]}
                            />
                        </FormItem>
                        <FormItem>
                            <Input 
                                name="userPwd"
                                prefix={<LockOutlined />} 
                                type="password" 
                                placeholder="请输入密码" 
                            />
                        </FormItem>
                        <FormItem>
                            <Checkbox name="remember" checked>记住密码</Checkbox>
                            <a href="https://github.com/Jacky-Summer" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default FormLogin;