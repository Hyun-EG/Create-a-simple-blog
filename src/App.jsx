/* eslint-disable */

import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  let [cloth, setCloth] = useState([
    "유아 코트 추천",
    "남자 코트 추천",
    "최신 유행 코트",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...cloth];
          copy = copy.sort();
          setCloth(copy);
        }}
      >
        정렬
      </button>
      <button
        onClick={() => {
          setCloth(["유아 코트 추천", "남자 코트 추천", "최신 유행 코트"]);
        }}
      >
        복구
      </button>

      {cloth.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {cloth[i]}
              <span
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                🎈
              </span>{" "}
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...cloth];
                copy.splice(i, 1);
                setCloth(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...cloth];
          copy.unshift(inputValue);
          setCloth(copy);
        }}
      >
        +
      </button>

      <Modal2 />

      {!modal == false ? (
        <Modal
          color={"orange"}
          cloth={cloth}
          setCloth={setCloth}
          title={title}
        />
      ) : null}
    </>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.cloth[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.cloth];
          copy[0] = "여자 코트 추천";
          props.setCloth(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

class Modal2 extends React.Component {
  //클래스문법 constructor , super , render
  constructor() {
    super();
    this.state = {
      //state 사용법
      name: "Park",
      age: 27,
    };
  }
  render() {
    return (
      <div>
        안녕 {this.state.name}
        <button
          onClick={() => {
            this.setState({ name: "SeongHyun" }); // 상태변경
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
