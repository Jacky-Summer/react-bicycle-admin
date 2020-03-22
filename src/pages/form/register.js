import React from 'react'
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload, InputNumber} from 'antd'
import moment from 'moment';
import { PlusCircleOutlined } from '@ant-design/icons';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const TextArea = Input.TextArea;
class FormRegister extends React.Component{

    state={}

    handleSubmit = ()=>{
        console.log(this.props.form)
    }

    getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg:imageUrl,
                loading: false,
            }));
        }
    }

    render(){
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        const rowObject = {
            minRows: 4, maxRows: 6
        }
        return (
            <div className="ui-container">
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            <Input placeholder="请输入用户名" name="userName" rules={[{  required: true, message: '用户名不能为空' }]}/>
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            <Input type="password" placeholder="请输入密码" name="userPwd"/>
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            <RadioGroup defaultValue="1">
                                <Radio value="1" name="sex">男</Radio>
                                <Radio value="2" name="sex">女</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            <InputNumber name="age" />
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            <Select name="state">
                                <Option value="1">咸鱼一条</Option>
                                <Option value="2">风华浪子</Option>
                                <Option value="3">北大才子一枚</Option>
                                <Option value="4">百度FE</Option>
                                <Option value="5">创业者</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            <Select mode="multiple" name="interest" defaultValue={['1', '2']}>
                                <Option value="1">游泳</Option>
                                <Option value="2">打篮球</Option>
                                <Option value="3">踢足球</Option>
                                <Option value="4">跑步</Option>
                                <Option value="5">爬山</Option>
                                <Option value="6">骑行</Option>
                                <Option value="7">桌球</Option>
                                <Option value="8">麦霸</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            <Switch name="isMarried"/>
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                name="birthday"
                                initialValue={moment('2018-08-08')}
                            />
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            <TextArea
                                autosize={rowObject}
                                name="address"
                            />
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>                  
                            <TimePicker name="time"/>
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            <Upload
                                name="userImg"
                                listType="picture-card"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                onChange={this.handleChange}
                            >
                            {this.state.userImg?<img src={this.state.userImg} alt=""/>:<PlusCircleOutlined />}
                            </Upload>
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Checkbox name="userImg">我已阅读过<a href="http://www.baidu.com">协议</a></Checkbox>
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default FormRegister;