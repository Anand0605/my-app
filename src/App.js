
import { useState } from 'react';
import './App.css';
import deleteIcon from "./xx.svg"
import editIcon from "./edit.svg"


function App() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const [uid, setUid] = useState()

  const handleInput = (e)=>{
    setInput(e.target.value)
  }
  const handleUpdate = ()=>{
    list.splice(uid, 1, input)
    if(input.length===0){
      return alert("error")
    }
    setList([...list,list[uid] = input])
    setInput("")
  }
  const handleDelete = (i)=>{
    const filterList = list.filter((elm)=> elm != list[i])
    console.log("filterList", filterList)
    setList(filterList)
  }
  const handleEdit = (i)=>{
    const filterList = list.filter((elm)=> elm === list[i])
    console.log("filterList", filterList)
    setInput(filterList[0])
    setUid(i)
  }

  return (
    <div className='App'>
      <h2>Todo App</h2>
      <div className='container'>
        <div className='input-box'>
          <input type='text' value={input} onChange={(e)=>handleInput(e)} /><button onClick={handleUpdate}>Update</button>
        </div>
        <div className='list'>
            <ul>
               {list.map((item,i)=> <li key={i} >{item} <img src={deleteIcon} alt='delet-icon' onClick={()=>handleDelete(i)}/>  <img src={editIcon} alt='delet-icon' onClick={()=>handleEdit(i)}/></li>)}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
