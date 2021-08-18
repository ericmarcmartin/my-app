// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from "./store/store";
// import 'antd/dist/antd.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import App from './App';
import { Provider } from 'react-redux';
import store from "./store/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  FileDoneOutlined,
  NumberOutlined
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { Route, Link, BrowserRouter, Switch } from "react-router-dom";

import TodoList from './features/components/TodoList';
// import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/components/DoneList';


const { Header, Sider, Content } = Layout;

class Index extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
      <Layout >
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >To Do List</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
            <Menu.Item key="1" icon={<UnorderedListOutlined />} className="menuItem">
              Manage Lists<Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" icon={<FileDoneOutlined />} className="menuItem">
              View Done Lists<Link to="/done" />
            </Menu.Item>
            <Menu.Item key="3" icon={<NumberOutlined />} className="menuItem">
              Version<Link to="/ds" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ height: '1000px' }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              maxHeight: '100%'
            }}
          >
            <Provider store={store}>
              <Switch>
              <Route exact path="/" component={TodoList}></Route>
              <Route exact path="/done" component={DoneList}></Route>
            </Switch>
            </Provider>
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

export default Index;