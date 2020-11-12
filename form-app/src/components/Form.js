import React from 'react';
import {useState, useEffect} from 'react';
import  schema from '../validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';



const initialValues = {
    name:'',
    email:'',
    password:'',
    termsOfService: false,
  }
  const initialFormErrors = {
    name: '',
    email:'',
    password:'',
    termsOfService:'',
  }

export default function Form(prop){
const [ values , setValues] = useState(initialValues);
const[errors, setErrors] = useState(initialFormErrors);

function changeValues(e){
const correctValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    function validate (){
        yup
        .reach(schema,e.target.name)
        .validate(correctValue)
        .then((res) => {
            console.log(res);
            setErrors({...errors,[e.target.name]:''})
        })
        .catch((err) =>{
            setErrors({...errors,[e.target.name]:err.message})
        })

    }
    validate();
    
    setValues({...values,[e.target.name]:correctValue})
}
function SubmitData (e){
    e.preventDefault();
    axios
    .post(`https://reqres.in/api/users`,values)
    .then((res)=>{
        prop.userFunc(res.data);
        console.log(res);
        setValues(initialValues);
    })
    .catch((err)=>{
        console.log(err)
    })
}

return (
    <form onSubmit={SubmitData}>
        <label>Name
            <input type="text" name="name" value={values.name} onChange={changeValues}/>
        </label>
        {errors.name ? <div>{errors.name}</div> : ""}
        <br/>
        <label>Email
            <input type='email' name='email' value={values.email} onChange={changeValues}/>
        </label>
        {errors.email ? <div>{errors.email}</div> : ""}
        <br/>
        <label>Password
            <input type='password' name='password' value={values.password} onChange={changeValues}/>
        </label>
        {errors.password ? <div>{errors.password}</div> : ""}
        <br/>
        <label>Terms of Service
            <input type='checkbox' name='termsOfService' checked={values.termsOfService} onChange={changeValues}/>
        </label>
        {errors.termsOfService ? <div>{errors.termsOfService}</div> : ""}
        <br/>
        <button >Submit</button>
        
    </form>
)
};