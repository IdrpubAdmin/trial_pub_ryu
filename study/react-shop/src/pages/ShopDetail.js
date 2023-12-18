import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Context1 } from "../App";

let YellowBtn = styled.button`
  background:${props => props.bg};
  color:black;
  padding:10px;
`

function TabContents({currentTab, shoesData}){
  let [fade , setFade] = useState('')
  useEffect(()=>{
    setTimeout(()=>{ setFade('end')}, 10)
    return ()=>{
      setFade('')
    }
  }, [currentTab])

  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>,<div>내용2</div>][currentTab]}
    </div>
  )
}

function ShopDetail(props) {

  useEffect(()=>{
    // console.log("useEffect")
    // console.log(count)
  })

  let { leftCount } = useContext(Context1)

  let [count, setCount] = useState(0)

  let { id} = useParams();
  let [ currentTab, setCurrentTab ] = useState(0)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={props.shoesData[id].img}  width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoesData[id].title}</h4>
          <p>{props.shoesData[id].content}</p>
          <p>{props.shoesData[id].price}원</p>
          <YellowBtn bg="red" onClick={()=> {setCount(count+1)}}>주문하기</YellowBtn>
        </div>
      </div>

      { leftCount }

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{
            setCurrentTab(0)
          }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{
            setCurrentTab(1)
          }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{
            setCurrentTab(2)
          }}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContents currentTab={currentTab} shoesData={props.shoesData}/>
    </div>
  )
}

export default ShopDetail
