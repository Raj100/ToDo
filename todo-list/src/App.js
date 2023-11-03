import "./App.css";
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";


function App() {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Todo/>
      <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
      </div>
    </>
  );
}

export default App;
