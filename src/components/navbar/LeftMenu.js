import React, { Component } from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal" className="primary-color">
                <Menu.Item key="mail" className="white-color">
                    <a href="" style={{color: "white"}}>Home</a>
                </Menu.Item>
                <SubMenu title={<span className="white-color">Blogs</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="" style={{color: "white"}}>Contact Us</a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default LeftMenu;