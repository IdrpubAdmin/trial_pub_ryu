import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/Main.js";
import ShopDetail from "./pages/ShopDetail.js";
import Cart from "./pages/Cart.js";
import { createContext, useState } from "react";
import data from "./data";

export let Context1 = createContext();


function App() {
  let navigate = useNavigate();

  let [shoesData, setShoseData] = useState(data);
  let [leftCount]= useState([10, 11, 12])

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/main')}}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/main" element={
          <Main shoesData={shoesData} setShoseData={setShoseData} />
        }></Route>
        <Route path="/detail/:id" element={
          <Context1.Provider value={{leftCount, shoesData}}>
            <ShopDetail shoesData={shoesData} />
          </Context1.Provider>
        }></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>

    </div>

  );
}

export default App;
