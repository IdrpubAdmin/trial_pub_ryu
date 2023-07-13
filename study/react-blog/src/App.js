import React, { useState } from 'react';
import './App.css';

function App() {

  let [따봉, 따봉변경 ] = useState(0);
  let [글제목] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );

  function PostList(props, propsFn) {
    return (
      <div className="list">
        <h4>
          { props.postData[2] }
          <span >좋아요 </span> { props.postLike }
        </h4>
        <p>2월 17일 발행</p>
      </div>
    )
  }

  return (
    <div className="App">

      <div className="black-nav" style={ {color:'yellow', fontSize: '30px'}}>
        개발 Blog
      </div>

      <PostList postData={글제목} postLike={따봉}></PostList>

    </div>
  );
}

export default App;
