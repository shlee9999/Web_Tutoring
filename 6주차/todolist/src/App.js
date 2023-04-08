import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem/index";
function App() {
  const [tasks, setTasks] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
    // console.log(checkedItems);
  };
  const onClickCreate = () => {
    if (tasks.length === 0) {
      document.querySelector(".delete_all").style.visibility = "visible";
    }
    const now = new Date().getTime();
    const item = document.querySelector(".input_text");

    const t = item.value;
    setTasks(() => [
      ...tasks,
      {
        text: t,
        id: now,
      },
    ]);
    item.value = null;
  };

  const onClickDelete = (id) => {
    setTasks((prev) =>
      prev.filter((value, index) => parseInt(id) !== value.id)
    );
    setCheckedItems((prev) => {
      if (prev.has(parseInt(id))) {
        prev.delete(parseInt(id));
      }
      return prev;
    });

    if (tasks.length === 1) {
      //비동기처리때문에 1로해야 하는듯
      document.querySelector(".delete_all").style.visibility = "hidden";
    }
  };

  const onClickDeleteAll = (id) => {
    setTasks((prev) => []);
    document.querySelector(".delete_all").style.visibility = "hidden";
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
              task={item}
              checkedItemHandler={checkedItemHandler}
            ></TodoItem>
          ))}
          <p className="delete_all" onClick={onClickDeleteAll}>
            모두 지우기
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
