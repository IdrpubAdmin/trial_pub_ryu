import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  let [글제목, 글제목변경] = useState('남자 코트 추천');

  return (
    <div className="App">

      <div className="black-nav" style={ {color:'yellow', fontSize: '30px'}}>
        개발 Blog
      </div>

      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발행</p>
      </div>

    </div>
  );
}

export default App;
