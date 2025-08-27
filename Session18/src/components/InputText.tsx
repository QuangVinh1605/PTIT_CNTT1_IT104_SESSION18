import React, { useReducer } from "react";

type State = {
  text: string;
};

type Action = {
  type: "SET_TEXT";
  payload: string;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_TEXT":
      return { text: action.payload };
    default:
      return state;
  }
};

const InputText: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { text: "" });

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Nhập chuỗi và hiển thị</h2>
      <input
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "SET_TEXT", payload: e.target.value })
        }
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        placeholder="Nhập chuỗi..."
      />

      <p>
        <strong>Kết quả: </strong> {state.text}
      </p>
    </div>
  );
};

export default InputText;
