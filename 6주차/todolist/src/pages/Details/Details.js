import { useParams, useNavigate } from "react-router-dom";
import "./Details.css";
import { useState, useEffect } from "react";

const Details = () => {
  const { id } = useParams();
  const item = JSON.parse(localStorage.getItem(id));
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);
  const [Checked, setChecked] = useState(item.checked);
  const navigate = useNavigate();
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      const item = JSON.parse(localStorage.getItem(id));
      item.text = editText;
      localStorage.setItem(id, JSON.stringify(item));
    }
  };

  const onClickDelete = () => {
    navigate("/");
    const taskIds = JSON.parse(localStorage.getItem("taskIds"));
    console.log("taskIds : " + taskIds);
    localStorage.removeItem(parseInt(id));
    for (let i = 0; i < taskIds.length; i++) {
      console.log(i + ". " + id + " " + taskIds[i]);
      console.log(typeof id);
      console.log(typeof taskIds[i]);
      if (taskIds[i] === parseInt(id)) {
        console.log("삭제! id = " + id);
        taskIds.splice(i, 1);
        i--;
      }
    }
    localStorage.setItem("taskIds", JSON.stringify(taskIds));
  };

  const checkedHandler = () => {
    setChecked(!Checked);
  };
  useEffect(() => {
    item.checked = Checked;
    localStorage.setItem(id, JSON.stringify(item));
  }, [Checked]);
  return (
    <div className="Details">
      <p className="logo">todolist</p>
      <div className="details_container">
        <h1>
          <input type="checkbox" checked={Checked} onChange={checkedHandler} />
          Todo
        </h1>
        {isEditing ? (
          <input
            className="details_editor details_text"
            value={editText}
            onChange={handleEditChange}
            onKeyPress={handleOnKeyPress}
          />
        ) : (
          <p className="details_text">{item.text}</p>
        )}
        <div className="details_button_container">
          <button className="edit_button" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete_button" onClick={onClickDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Details;
