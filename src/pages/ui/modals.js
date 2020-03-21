import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd'
import './ui.less'
class Buttons extends Component {

    state = { visible: false };

    handleOpen = (type) => {
        this.setState({
            [type]: true,
        });
    };

    handleConfirm = (type) => {
        Modal[type]({
            title:'确认？',
            content:'你确定你学会了React了吗？',
            onOk(){
                console.log('Ok')
            },
            onCancel(){
                console.log('Cancel')
            }
        });
    }

    render() {
        return (
            <div className="ui-container">
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
                </Card>
                <Modal
                    title="这是模态框"
                    visible={this.state.showModal1}
                    onCancel={() => {
                        this.setState({
                            showModal1:false
                        })
                    }}
                >
                    <p>这是模态框的内容</p>
                </Modal>
                <Modal
                    title="这是模态框"
                    visible={this.state.showModal2}
                    footer={[
                        <Button key="back" onClick={() => {
                            this.setState({
                                showModal2:false
                            })
                        }}>
                          Return
                        </Button>,
                        <Button key="submit" type="primary">
                          Submit
                        </Button>,
                    ]}
                >
                    <p>这是模态框的内容</p>
                </Modal>
                <Modal
                    title="这是模态框"
                    style={{ top:20 }}
                    visible={this.state.showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3:false
                        })
                    }}
                >
                    <p>这是模态框的内容</p>
                </Modal>
                <Modal
                    title="这是模态框"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4:false
                        })
                    }}
                >
                    <p>这是模态框的内容</p>
                </Modal>
            </div>
        );
    }
}

export default Buttons;