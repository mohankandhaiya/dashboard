import React, {Component} from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Table1 from "../table";
import Navbar from "../navbar";
import Sidebar from "../sider/sider";
import ImageSlider from "../carousel";
import Categorybar from "../category-bar";
import ProductCard from "../card-product";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class LayoutExample extends Component {
    render(){
        return(
            <Layout>
                <Header className="layout-header">
                    <Navbar />
                </Header>
                <Header className="layout-header layout-header-categorybar">
                    <Categorybar />
                </Header>
                <Layout>
                    <Sider theme="light" >
                        <Sidebar />
                        <Sidebar />
                    </Sider>
                    <Content>
                        {/*<ImageSlider />*/}
                        {/*<Table1 />*/}
                        <ProductCard />
                    </Content>
                    {/*<Sider theme="light" width="250">*/}
                    {/*    <Sidebar />*/}
                    {/*    <Sidebar />*/}
                    {/*</Sider>*/}
                </Layout>
            </Layout>
        )
    }
}

export default LayoutExample