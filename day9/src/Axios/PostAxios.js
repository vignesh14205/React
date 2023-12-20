import axios from 'axios';
import React,{useState} from 'react'

export default function PostAxios() {

    const[name,setName]=useState('');

    const handleChange=(event)=>{setName(event.target.value)}

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post(' http://localhost:3009/user',{name}).then(res=>{console.log(res.data)})
    }
  return (
    <div>
      <h1>Axios Post</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleChange}></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
