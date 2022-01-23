import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);

  ////////////////
  useEffect(() => {
    console.log("한번만 실행 ");
  }, []);
  // const one = () => {
  //   console.log("함수 사용으로 한번만 실행 !~");
  // };
  // useEffect(one, []);
  //////////////////

  useEffect(() => {
    console.log("키워드가 변화할때 실행");
    if (keyword !== "" && keyword.length > 5) {
      console.log("검색", keyword);
    }
  }, [keyword]); //keyword 가 변할때만 실행

  useEffect(() => {
    console.log("카운터가 변화할 때 실행");
  }, [counter]); //keyword 가 변할때만 실행

  useEffect(() => {
    console.log("키워드 + 카운터");
  }, [keyword, counter]); //keyword 가 변할때만 실행

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='검색하세요'
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
