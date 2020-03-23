import React from 'react';
import { Card, Button, Table, Form, Select, Modal, DatePicker } from 'antd';
import axios from './../../axios/index';
import Utils from './../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;
export default class City extends React.Component {
    _isMounted = false;

    state = {
        list: []
    }

    params = {
        page: 1
    }
    componentDidMount() {
        this._isMounted = true;
        this.requestList();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    requestList = () => {
        let _this = this;
        axios.ajax({
            url: '/order/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            let list = res.result.item_list.map((item, index) => {
                item.key = index;
                return item;
            });
            this.setState({
                list: list,
                pagination: Utils.pagination(res, (current)=>{
                    _this.params.page = current;
                    _this.requestList();
                })
            })
        })
    }

    handleConfirm = () => {
        let item = this.state.selectedItem;
        if(!item) {
            Modal.warning({
                title: '提示',
                content: '请先选择一条订单',
            });
            return;
        }
        window.open(`/#/common/order/detail/${item.id}`,'_blank')
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    render(){
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        return (
            <div className="ui-container">
                <Card>
                    <BaseForm />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.handleConfirm}>订单详情</Button>
                    <Button type="primary">结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index)
                                }
                            }
                        }}
                    />
                </div>
                <Modal 
                    title="开通城市"
                    visible={this.state.isShowOpenCity}
                    onCancel={() => {
                        this.setState({
                            isShowOpenCity: false
                        })
                    }}
                    onOk={this.handleSubmit}
                >
                </Modal>
            </div>
        );
    }
}

class BaseForm extends React.Component{
    render(){
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    <Select
                        style={{width:100}}
                        placeholder="全部"
                        name="city_id"
                    >
                        <Option value="">全部</Option>
                        <Option value="1">北京市</Option>
                        <Option value="2">天津市</Option>
                        <Option value="3">深圳市</Option>
                    </Select>
                </FormItem>
                <FormItem label="订单时间">
                    <DatePicker  />
                </FormItem>
                <FormItem label="订单状态">
                    <Select
                        style={{ width: 80 }}
                        placeholder="全部"
                        name="op_mode"
                    >
                        <Option value="">全部</Option>
                        <Option value="1">进行中</Option>
                        <Option value="2">结束行程</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
