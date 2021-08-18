import './App.css';
// import TodoForm from './features/components/TodoForm';
// import TodoGroup from './features/components/TodoGroup';
import TodoList from './features/components/TodoList';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import React from 'react';
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/components/DoneList';

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
    // <div className="App">
    // <h1>Hello, TodoList</h1>
    //   <TodoGroup/>
    //   <TodoForm/>
    // </div>
  );
}

export default App;
