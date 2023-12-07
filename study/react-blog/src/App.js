import React, { useState } from "react";
import "./App.css";


function PostList(props, propsFn) {
  let tempList = [];
  for (let i = 0; i < props.postData.length; i++) {
    tempList.push(
      <div className="post-list">
        <h4>
          <span onClick={()=>{
            props.postViewFn(!props.postViewStts)
          }}>
            {props.postData[i]}
          </span>

          <span onClick={ () => {
            props.postLikeFn(props.postLike + 1);
          }}> ❤️좋아요 </span>
          {props.postLike}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    );
  }
  return tempList;
}

const PostView = (props) => {
  return (
    <div className="post-view">
      <h4>{props.pvTit}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

function App() {

  let [따봉, 따봉변경] = useState(0);
  let [글제목, 글제목변경] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]);
  let [postViewStatus, setPostViewStatus] = useState( false)
  let [inputVal, setInputVal] = useState('')

  return (
    <div className="App">
      <div className="black-nav" style={{ color: "yellow", fontSize: "30px" }}>
        개발 Blog
      </div>

      <button onClick={
        () => {
          let copy글제목 = [...글제목];
          copy글제목[0] = "해적선";
          글제목변경(copy글제목);
        }
      }>
        글제목 변경
      </button>

      <PostList postData={글제목} postLike={따봉} postLikeFn={따봉변경}  postViewStts={postViewStatus} postViewFn={setPostViewStatus}  />

      <input type="text" onChange={(e)=>{
        setInputVal(e.target.value)
        console.log(e.target.value)
      }}/>
      {inputVal}

      {
        postViewStatus ?  <PostView pvTit={글제목} /> : null
      }


    </div>
  );
}

export default App;
