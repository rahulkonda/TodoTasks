import { useEffect, useState } from "react";
import apifetch from "../utils/apiManager";

export default function TodoList({ url }) {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await apifetch(url);
      if (data) {
        setTodos(data.todos);
      } else if (error) {
        setError(error);
      }
    };
    fetchTodos();
  }, [url]);
  if (error) {
    return `error while fetching todos: ${error}`;
  }
  if (todos) {
    return (
      <table>
        {todos.map(({ id, todo, completed, userId }) => {
          return (
            <tr key={id}>
              <td>{todo}</td>
              <td>
                {completed && <span>Done</span>}
                {!completed && <span>Not Done</span>}
              </td>
              <td>{userId}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}
