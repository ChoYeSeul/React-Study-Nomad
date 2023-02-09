// useEffect는 화면이 다 그려지고 나서 그 이후 실행된다.
import { useState } from "react";

function TodoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const toDoChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") return;
    setToDo("");
    setToDos((prevList) => [...prevList, toDo]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={toDoChange} value={toDo} type="text" placeholder="Write your to do.." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((text, index) => {
          return <li key={`${index}toDos`}>{text}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
