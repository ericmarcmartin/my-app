import './App.css';
// import TodoForm from './features/components/TodoForm';
// import TodoGroup from './features/components/TodoGroup';
import TodoList from './features/components/TodoList';

import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/components/DoneList';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';


const { TabPane } = Tabs.TabPane;
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
          <div className="tabcontent"><h2><Link to="/">To Do List</Link></h2></div>
          <div className="tabcontent"><h2><Link to="/done">Done List</Link></h2></div>
          <div className="container">

            <header className="App">
              <p>Hello React!</p>
            </header>
            <Switch>
              <Route exact path="/" component={TodoList}></Route>
              <Route exact path="/done" component={DoneList}></Route>
              <Route exact path="*" component={NotFoundPage}></Route>
            </Switch>
          </div>
      </BrowserRouter>
    </React.Fragment>


          /* <div>
            <BrowserRouter>
              <div className="tabcontent"><h2><Link to="/">To Do List</Link></h2></div>
              <div className="tabcontent"><h2><Link to="/done">Done List</Link></h2></div>
              <Switch>
                <Route exact path="/" component={TodoList}></Route>
                <Route exact path="/done" component={DoneList}></Route>
                <Route exact path="*" component={NotFoundPage}></Route>
              </Switch>
            </BrowserRouter>
          </div> */
          
  );
}

export default App;
