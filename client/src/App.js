import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar";
import Login from "./Components/Login";
import SnakeGame from "./Components/SnakeGame";
import TetrisGame from "./Components/TetrisGame";

function App() {
  const [page, setPage] = useState("/");

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar onChangePAge={setPage} />
        <Switch>
          <Route path="/games" />
          <Route path="/leaderbaords" />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/snakegame">
            <SnakeGame />
          </Route>
          <Route path="/tetrisgame">
            <TetrisGame />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
