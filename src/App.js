import React from 'react';
import './App.css';
import InfiniteListExample from "./components/infinite-scroller/InfiniteScroller";
import Sidebar from "./components/sider/sider";
import Navbar from "./components/navbar";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
import Table1 from "./components/table";
import LayoutExample from "./components/layout";
import ImageSlider from "./components/carousel";
import ProductCard from "./components/card-product";
import DashboardLayout from "./containers/dashboard/layout";
import CustomCard from "./components/card-product/custom-card";

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      {/*<InfiniteListExample />*/}
      {/*<LayoutExample />*/}
      {/*<DashboardLayout />*/}
      <CustomCard />
    </div>
  )
}

export default App;
