import { useState } from "react";
import "./index.css";
const TodoItem = ({ text, index, setTasks, checkedItemHandler }) => {
  const [bChecked, setChecked] = useState(false);
  const checkedHandler = ({ target }) => {
    setChecked(!bChecked);
    console.log(target);
    checkedItemHandler(parseInt(index), target.checked);
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      const new_input = document.querySelector(".editor");
      setTasks((prev) => {
        prev[index] = new_input.value;
        return [...prev];
      });
      new_input.remove();
    }
  };
  return (
    <div
      onKeyPress={handleOnKeyPress}
      onDoubleClick={() => {
        const input = document.querySelector(`#input_text_${index}`);
        const new_input = document.createElement("input");
        input.appendChild(new_input);
        new_input.value = input.textContent;
        new_input.className = "editor";
        new_input.focus();
      }}
      className="item"
      id={`item_${index}`}
    >
      <div className="left_box">
        <input
          type="checkbox"
          checked={bChecked}
          onChange={(e) => checkedHandler(e)}
        ></input>
        <p className="text" id={`input_text_${index}`}>
          {`${text}`}
        </p>
      </div>
      <div className="button_container">
        <button
          className="edit_button"
          onClick={() => {
            const input = document.querySelector(`#input_text_${index}`);
            const new_input = document.createElement("input");
            input.appendChild(new_input);
            new_input.value = input.textContent;
            new_input.className = "editor";
            new_input.focus();
          }}
        >
          Edit
        </button>
        <button id={`${index}`} className="delete_button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
