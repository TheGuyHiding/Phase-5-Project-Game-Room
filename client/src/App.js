import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar";
import Login from "./Components/Login";
import SnakeGame from "./Components/SnakeGame";

function App() {
  const [page, setPage] = useState("/")
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar onChangePAge={setPage} />
        <Route path="/games" />
        <Route path="/leaderbaords" />
        <Route exact path="/login" element = {<Login />}/>
        <SnakeGame />
      </div>
    </BrowserRouter>
  );
}

export default App;
