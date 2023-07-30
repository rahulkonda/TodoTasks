import { useRef, useState } from "react";
import apifetch from "../utils/apiManager";
import TodoList from "./TodoList";

export default function UserTodos() {
  const [id, setId] = useState();
  const [userTodosUrl, setuserTodosUrl] = useState();
  const userRef = useRef();
  // let userTodosUrl  = 'https://dummyjson.com/todos/user'
  const getUserTodos = async () => {
    const userKey = userRef.current.value;
    const url = "https://dummyjson.com/users/search?q=" + userKey;
    const { data, error } = await apifetch(url);
    if (data && data.users.length > 0) {
      const userId = data.users[0].id;
      setId(userId);
      const url = `https://dummyjson.com/users/${userId}/todos`;
      setuserTodosUrl(url);
    }
  };
  return (
    <>
      <div className="userForm">
        <div className="formElement">
          <label htmlFor="user">User : </label>
          <input id="user" ref={userRef} />
        </div>
        <div className="formElement">
          <button onClick={getUserTodos}>Get Todos</button>
        </div>
        <div className="formElement">
          {userTodosUrl && <TodoList url={userTodosUrl} />}
        </div>
        <div className="formElement"></div>
        <br />
      </div>
    </>
  );
}
