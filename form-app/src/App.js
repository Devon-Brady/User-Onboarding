import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import schema from './validation/formSchema';
import axios from 'axios'
import {useState, useEffect} from 'react'


function App() {

  const [users, setUsers]= useState([]);
function makeUserList(para){
  const arr = [...users]
  arr.push(para);
  setUsers(arr);
}
  axios
  .get()
  return (
    <div>
    <Form userFunc={makeUserList}/>
    <div>{JSON.stringify(users)}</div>
    </div>
  );
    
    
  
}

export default App;
