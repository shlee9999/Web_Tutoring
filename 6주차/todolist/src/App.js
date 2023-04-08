import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem/index";
function App() {
  const [tasks, setTasks] = useState([]);
  const onClickCreate = () => {
    const item = document.querySelector(".input_text");
    console.log(item.value);
    setTasks([...tasks, item.value]);
    item.value = null;
  };

  const onClickDelete = (id) => {
    setTasks((prev) => prev.filter((value, index) => parseInt(id) !== index));
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickCreate();
    }
  };

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
        <p className="logo">todolist</p>
      </div>
      <div className="submit_container">
        <input
          type="text"
          className="input_text"
          placeholder="할 일을 적으세요"
          onKeyPress={handleOnKeyPress}
        />
        <button type="button" onClick={onClickCreate} className="submit_button">
          Submit
        </button>

        <div className="task_container">
          {tasks.map((item, index) => (
            <TodoItem
              setTasks={setTasks}
              key={`item_${index}`}
              index={`${index}`}
              text={`${item}`}
            ></TodoItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
