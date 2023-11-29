import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Todo from "./Components/Todo/Todo";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import login from "./Pages/login";
import todo from "./Pages/todo";


function App() {
  return (
    <div>
    <Navbar />
    <div className="app">
      <Todo />
      <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
    </div>
</div>
  );
}

export default App;
