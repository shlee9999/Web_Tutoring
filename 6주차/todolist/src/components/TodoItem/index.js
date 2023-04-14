import { useState } from "react";
import "./index.css";
const TodoItem = ({ task, checkedItemHandler }) => {
  const [bChecked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const checkedHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(parseInt(task.id), target.checked);
  };
  const handleEdit = (e) => {
    setIsEditing(true);
  };
  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      // //input값을 저장해야 함
      // setEditText(e.target.value); //여기 안에 변경된 input text 넣어주면 됨
      setIsEditing(false);
    }
  };

  return (
    <div
      onKeyPress={handleOnKeyPress}
      onDoubleClick={handleEdit}
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
        />
        {isEditing ? (
          <input
            type="text"
            className="editor"
            value={editText}
            onChange={handleEditChange}
          />
        ) : (
          <p className="text" id={`input_text_${task.id}`}>
            {editText}
          </p>
        )}
      </div>
      <div className="button_container">
        <button className="edit_button" onClick={handleEdit}>
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
