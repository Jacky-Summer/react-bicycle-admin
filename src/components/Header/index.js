import React, { Component } from 'react';
import { Row, Col } from 'antd'
import Utils from '../../utils/utils'
import './index.less'

class Header extends Component {

    UNSAFE_componentWillMount() {
        this.setState({
            username: 'Jacky'
        })
        setInterval(() => {
            let sysTime = Utils.formatDate(new Date().getTime())
            this.setState({
                sysTime
            })
        }, 1000)
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.username}</span>
                        <span className="logout">退出</span>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;