import React, { Component } from 'react';
import { Card, Spin, Alert } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

import './ui.less'
class Loadings extends Component {

    render() {
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
        return (
            <div className="ui-container">
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" style={{ marginRight: 10 }}/>
                    <Spin style={{ marginRight: 10 }}/>
                    <Spin size="large" style={{ marginRight: 10 }}/>
                    <Spin indicator={antIcon} />
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                    <Spin tip="Loading...">
                        <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                        />
                    </Spin>
                    <Spin tip="Loading...">
                        <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="success"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}

export default Loadings;