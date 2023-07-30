import TodoList from "./components/TodoList";
import UserTodos from "./components/UserTodos";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <UserTodos />

      {/* <TodoList url="https://dummyjson.com/todos" /> */}
    </div>
  );
}
