import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
//배열 사용
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); //배열사용
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    //함수를 보낼때 첫번쨰 argument로 현재 state로 보냄,
    // 기존 toDO +  새로운 toDo를 리턴하여 계산함
    // 1.               [] => [toDo, []]
    setToDos((currentArray) => [toDo, ...currentArray]); //배열사용
    //2.
    setToDo(""); //
  };
  console.log(toDos);
  return (
    <div>
      <h1>My to Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='작성하세요'
        />
        <button> Add to Do </button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idex) => (
          <li key={idex}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
