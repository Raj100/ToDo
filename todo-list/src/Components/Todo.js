import React, { useState} from "react";

export default function Todo(props){
    const [text, settext] = useState("");
    const handleOnChange = (event) => {
      settext(event.target.value);
      console.log(text);
    };
    const handleAdd = () => {
    }
    return (
      <div className="todo">
        <div>
          <h2>ToDo List</h2>
          <input type="text" value={text} onChange={handleOnChange} />
          <button onClick={handleAdd}>add</button>
          {text}
        </div>
      </div>
    );
}
