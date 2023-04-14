import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem/index";

function App() {
  const [tasks, setTasks] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [inputValue, setInputValue] = useState(null);
  const [deleteAllVisibility, setDeleteAllVisibility] = useState(false);
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };
  const onClickCreate = () => {
    if (tasks.length === 0) setDeleteAllVisibility(true);
    const now = new Date().getTime();
    setTasks(() => [
      ...tasks,
      {
        text: inputValue,
        id: now,
      },
    ]);
    setInputValue("");
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
      setDeleteAllVisibility(false);
    }
  };

  const onClickDeleteAll = (id) => {
    setTasks([]);
    setCheckedItems(new Set());
    setDeleteAllVisibility(false);
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
              checkedItemHandler={checkedItemHandler}
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

export default App;
