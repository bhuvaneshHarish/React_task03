import React, { useState,useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {todoContext} from "./Context"

const Login = () => {
  const [data,setdata]=useState({});
  const {state,dispatch} = useContext(todoContext)

  const handleInput =(event)=>{
    const {name,value} = event.target;
    setdata({...data,[name]:value,id:state.products.length,qty:1})
  }

  console.log(data)
  console.log(state)

  const handleSubmit =(event)=>{
    event.preventDefault();
    dispatch({
      type:"add_to_cart",
      payload: [...state.products,data],
    })
    setdata({productname:"",price:""});
 
    
  }


  return (
    <div>
      <form>
      <div className='login-page'>
        <div className='login-box'>
          <h3>PRODUCT DATA</h3>
            <TextField className="prod-name" label="Product Name*" value={data.productname} variant="outlined" name="productname" onChange={handleInput}/>
            <TextField className="prod-price"  label="Product Price*" value={data.price} variant="outlined" name='price' onChange={handleInput}/>
            <Button className='sub-btn' variant="text" onClick={handleSubmit}>SUBMIT</Button>
       </div>
      </div>
      </form>
    </div>
  )
}

export default Login