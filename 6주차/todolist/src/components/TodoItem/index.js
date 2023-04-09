import { useState } from "react";
import "./index.css";
const TodoItem = ({ task, setTasks, checkedItemHandler }) => {
  const [bChecked, setChecked] = useState(false);
  const checkedHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(parseInt(task.id), target.checked);
  };
  const onClickEditButton = (e) => {
    const input = document.querySelector(`#input_text_${task.id}`);
    const new_input = document.createElement("input");
    input.appendChild(new_input);
    new_input.value = input.textContent;
    new_input.className = "editor";
    new_input.focus();
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      const new_input = document.querySelector(".editor");
      setTasks((prev) => {
        prev.forEach((element) => {
          if (element.id === task.id) {
            element.text = new_input.value;
          }
        });
        return [...prev];
      });
      new_input.remove();
    }
  };
  return (
    <div
      onKeyPress={handleOnKeyPress}
      onDoubleClick={() => {
        const input = document.querySelector(`#input_text_${task.id}`);
        const new_input = document.createElement("input");
        input.appendChild(new_input);
        new_input.value = input.textContent;
        new_input.className = "editor";
        new_input.focus();
      }}
      className="item"
      id={`item_${task.id}`}
    >
      <div className="left_box">
        <input
          type="checkbox"
          checked={bChecked}
          onChange={(e) => {
            checkedHandler(e);
            const t = document.querySelector(`#input_text_${task.id}`);
            t.classList.toggle("text_toggle");
          }}
        ></input>
        <p className="text" id={`input_text_${task.id}`}>
          {`${task.text}`}
        </p>
      </div>
      <div className="button_container">
        <button className="edit_button" onClick={onClickEditButton}>
          Edit
        </button>
        <button id={`${task.id}`} className="delete_button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
