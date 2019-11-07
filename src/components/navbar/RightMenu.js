import React, { Component } from 'react';
import { Menu } from 'antd';

class RightMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal" className="primary-color white-color">
                <Menu.Item key="mail">
                    <a href="" style={{color: "white"}}>Signin</a>
                </Menu.Item>
                <Menu.Item key="app">
                    <a href="" style={{color: "white"}}>Signup</a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default RightMenu;