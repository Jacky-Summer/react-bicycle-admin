import React, { Component } from 'react';
import { Card, Button, notification } from 'antd'
import './ui.less'
class Notice extends Component {

    openNotificationWithIcon = (type, direction) => {
        if(direction) {
            notification.config({
                placement: direction,
                bottom: 50,
                duration: 3,
            });
        }
        notification[type]({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      };

    render() {
        return (
            <div className="ui-container">
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('success')}>成功</Button>
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('info')}>信息</Button>
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('warning')}>警告</Button>
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('error')}>错误</Button>
                </Card>
                <Card title="通知提醒框控制方向" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('success', 'topLeft')}>成功</Button>
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('info', 'topRight')}>信息</Button>
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('warning', 'bottomLeft')}>警告</Button>
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('error', 'bottomRight')}>错误</Button>
                </Card>
        </div>
        );
    }
}

export default Notice;