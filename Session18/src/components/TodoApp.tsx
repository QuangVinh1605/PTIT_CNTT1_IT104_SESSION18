import React, { useReducer, useEffect, useState } from "react";

// Kiểu dữ liệu công việc
interface Todo {
  id: number;
  text: string;
}

// Kiểu action cho reducer
type Action =
  | { type: "ADD"; payload: string }
  | { type: "DELETE"; payload: number }
  | { type: "SET"; payload: Todo[] };

// Reducer quản lý state
function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD":
      if (!action.payload.trim()) return state; // không thêm nếu rỗng
      const newTodo: Todo = { id: Date.now(), text: action.payload };
      return [...state, newTodo];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "SET":
      return action.payload;
    default:
      return state;
  }
}

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  // Load dữ liệu từ localStorage khi app khởi động
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      dispatch({ type: "SET", payload: JSON.parse(stored) });
    }
  }, []);

  // Lưu dữ liệu vào localStorage khi todos thay đổi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div className="todo-container">
      <h2>Danh sách công việc</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Thêm</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button className="delete" onClick={() => handleDelete(todo.id)}>
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
