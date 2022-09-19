/*eslint-disable*/

import "./App.css";
import { useState } from "react";

function App() {
  let [postTitle, setPostTitle] = useState([
    "여자 코트 추천",
    "잠옷 추천",
    "먹을거 추천",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTiltle] = useState(0);
  let [contents, setContents] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      <button
        onClick={() => {
          setPostTitle([...postTitle.sort()]);
        }}
      >
        가나다순 정렬
      </button>

      <button
        onClick={() => {
          let copy = [...postTitle];
          copy[0] = "도토리 줍기";
          setPostTitle(copy);
        }}
      >
        글수정
      </button>

      {postTitle.map((a, i) => {
        return (
          <div key={i} className="list">
            <h4
              onClick={() => {
                setModal(!modal);
                setTiltle(i);
              }}
            >
              {a}{" "}
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                👍좋아요
              </span>
              {like[i]}
            </h4>
            <button
              onClick={() => {
                let copy = [...postTitle];
                copy.splice(i, 1);
                setPostTitle(copy);
                // setPostTitle([...postTitle].splice(i, 1));
              }}
            >
              삭제
            </button>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          setContents(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...postTitle];
          copy.unshift(contents);
          setPostTitle(copy);
          console.log();
        }}
      >
        눌러방
      </button>

      {modal ? (
        <Modal
          color={"skyblue"}
          setPostTitle={setPostTitle}
          postTitle={postTitle}
          title={title}
        />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.postTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.postTitle];
          copy[0] = "너구리몽이";

          props.setPostTitle(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
};

export default App;
