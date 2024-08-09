import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import.meta.env.BACKEND_API_URL;

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        process.env.BACKEND_API_URL + "/api/v1/todos"
      );
      setTodos(response.data.todo);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);

  return (
    <>
      <div>
        <p>ToDo Application</p>
        <div>
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <li>{todo.title}</li>
                <p>{todo.description ? todo.description : "No description"}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
