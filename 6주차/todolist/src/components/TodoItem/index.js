import { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const TodoItem = ({ task }) => {
  const [Checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const checkedHandler = () => {
    setChecked(!Checked);
  };
  const handleEdit = (e) => {
    setIsEditing(true);
  };
  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      const item = JSON.parse(localStorage.getItem(task.id));
      item.text = editText;
      localStorage.setItem(task.id, JSON.stringify(item));
    }
  };
  const onClickText = () => {
    localStorage.setItem(`edit`, editText);
    // console.log(localStorage.getItem(task.id));
  };

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem(task.id));
    console.log(item.checked);
    if (Checked === item.checked) return;
    setChecked(item.checked);
  }, []);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem(task.id));
    item.checked = Checked;
    localStorage.setItem(task.id, JSON.stringify(item));
  }, [Checked, task.id]);

  return (
    <div
      onKeyPress={handleOnKeyPress}
      onDoubleClick={handleEdit}
      className={`item ${Checked ? "text_toggle" : ""}`}
      id={`item_${task.id}`}
    >
      <div className="left_box">
        <input type="checkbox" checked={Checked} onChange={checkedHandler} />
        {isEditing ? (
          <input
            type="text"
            className="editor"
            value={editText}
            onChange={handleEditChange}
          />
        ) : (
          <Link
            to={`./details/${task.id}`}
            className="text"
            onClick={onClickText}
          >
            {editText}
          </Link>
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
