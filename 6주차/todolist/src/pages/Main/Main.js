import "./Main.css";
import { useEffect, useState } from "react";
import TodoItem from "../../components/TodoItem/index";

function Main() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [deleteAllVisibility, setDeleteAllVisibility] = useState(false);

  const onClickCreate = () => {
    if (inputValue === "") return;
    if (tasks.length === 0) setDeleteAllVisibility(true);
    const now = new Date().getTime();
    const new_task = {
      text: inputValue,
      id: now,
      checked: false,
    };
    setTasks(() => [...tasks, new_task]);
    setInputValue("");
    localStorage.setItem(`${now}`, JSON.stringify(new_task));
    const taskIds = JSON.parse(localStorage.getItem("taskIds") || "[]");
    taskIds.push(now);
    localStorage.setItem("taskIds", JSON.stringify(taskIds));
  };

  const onClickDelete = (id) => {
    setTasks((prev) =>
      prev.filter((value, index) => parseInt(id) !== value.id)
    );
    console.log("id = " + id);
    if (tasks.length === 1) {
      setDeleteAllVisibility(false);
    }
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

  const onClickDeleteAll = () => {
    setTasks([]);

    setDeleteAllVisibility(false);
    localStorage.clear();
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickCreate();
      load_items();
    }
  };
  const load_items = () => {
    setTasks([]);
    const taskIds = JSON.parse(localStorage.getItem("taskIds") || "[]");
    for (let i = 0; i < taskIds.length; i++) {
      const key = taskIds[i];
      const value = JSON.parse(localStorage.getItem(key));
      setTasks((prev) => [...prev, value]);
    }
  };
  // localStorage.clear();
  useEffect(() => {
    load_items();
  }, []);

  return (
    <div
      className="App"
      onClick={(e) => {
        const $target = e.target?.closest(".delete_button");
        if (!$target) return;
        onClickDelete($target.id);
      }}
      onDoubleClick={(e) => {}}
    >
      <div>
        <p className="logo" onClick={onClickDeleteAll}>
          todolist
        </p>
      </div>
      <div className="submit_container">
        <input
          type="text"
          className="input_text"
          placeholder="할 일을 적으세요"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleOnKeyPress}
          value={inputValue}
        />
        <button type="button" onClick={onClickCreate} className="submit_button">
          Submit
        </button>

        <div className="task_container">
          {tasks.map((item, index) => (
            <TodoItem
              setTasks={setTasks}
              key={`item_${item.id}`}
              task={item}
            ></TodoItem>
          ))}
          {deleteAllVisibility ? (
            <p className="delete_all" onClick={onClickDeleteAll}>
              모두 지우기
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
