import React, {useEffect ,useState} from "react";
import axios from "axios";

export default function Todo(props){
    const [text, settext] = useState("");
    const [users, setusers] = useState([]); 
    useEffect(() => {
      axios
        .get("http://localhost:8000/getdata")
        .then((users) => {
          setusers(users.data);
          console.log(users.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },[]);   
    const handleOnChange = (e) => {
      settext(e.target.value);
    };

    let handleAdd = async(e) => {
      e.preventDefault()
      
      try{
        alert("Todo Added");
        await axios.post("http://localhost:8000/",{ text })
      }
      catch(e){
        console.log(e)
      }
      // setitems((olditems)=>{
      //   return[...olditems,text];
      // });
    }
    const handleComplete = (id) => {}
    const todolistarea = document.getElementById("todoarea")
    const handleEdit = (id) => {
    }
    const handleDelete = (id) => {
    }
    return (
      <div className="todo">
        <div>
          <h2>ToDo List</h2>
          <form action="post">
          <input type="text" value={text} onChange={handleOnChange} />
          <button type="submit" onClick={handleAdd}>add</button>
          </form>
          <ol id="textarea">
          {
            users.map(user=>{
              return <>
              <li>{user.text}</li>
              </>
            })
          }
          </ol>
        </div>
      </div>
    );
}
