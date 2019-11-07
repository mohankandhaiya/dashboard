import React, {Component} from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Sidebar from "../../../components/sider/sider";
import Categorybar from "../../../components/category-bar";
import ProductCard from "../../../components/card-product";

const { Header, Content, Sider } = Layout;

class DashboardLayout extends Component {
    render(){
        return(
            <Layout>
                <Layout>
                    <Sider theme="light" >
                        <Sidebar />
                        <Sidebar />
                    </Sider>
                    <Layout>
                    <Header className="layout-header layout-header-categorybar">
                        <Categorybar />
                    </Header>
                    <Content>
                        {/*<ImageSlider />*/}
                        {/*<Table1 />*/}

                        <ProductCard />
                    </Content>
                    </Layout>
                    {/*<Sider theme="light" width="250">*/}
                    {/*    <Sidebar />*/}
                    {/*    <Sidebar />*/}
                    {/*</Sider>*/}
                </Layout>
            </Layout>
        )
    }
}

export default DashboardLayout