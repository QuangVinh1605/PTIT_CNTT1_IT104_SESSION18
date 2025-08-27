import React, { useReducer } from "react";

type State = {
  gender: string;
};

type Action = {
  type: "SET_GENDER";
  payload: string;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_GENDER":
      return { gender: action.payload };
    default:
      return state;
  }
};

const InputRadio: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { gender: "Nam" });

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Chọn giới tính</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <label>
          <input
            type="radio"
            value="Nam"
            checked={state.gender === "Nam"}
            onChange={(e) =>
              dispatch({ type: "SET_GENDER", payload: e.target.value })
            }
          />
          Nam
        </label>

        <label>
          <input
            type="radio"
            value="Nữ"
            checked={state.gender === "Nữ"}
            onChange={(e) =>
              dispatch({ type: "SET_GENDER", payload: e.target.value })
            }
          />
          Nữ
        </label>

        <label>
          <input
            type="radio"
            value="Khác"
            checked={state.gender === "Khác"}
            onChange={(e) =>
              dispatch({ type: "SET_GENDER", payload: e.target.value })
            }
          />
          Khác
        </label>
      </div>

      <p style={{ marginTop: "20px" }}>
        <strong>Giới tính đang chọn: </strong> {state.gender}
      </p>
    </div>
  );
};

export default InputRadio;
