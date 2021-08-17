import './App.css';
import TodoForm from './features/components/TodoForm';
import TodoGroup from './features/components/TodoGroup';

function App() {
  return (
    <div className="App">
    <h1>Hello, TodoList</h1>
      <TodoGroup/>
      <TodoForm/>
    </div>
  );
}

export default App;
