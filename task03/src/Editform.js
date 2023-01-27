import React, { useState, useContext } from 'react'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { todoContext } from './Context'

const Editform = () => {
    const param=useParams();
    const navigate=useNavigate()
    
const {state,dispatch}=useContext(todoContext);
const find=state.products.find((ele)=>ele.id==(param.id));
console.log(find)

const [form,setForm]=useState(find);
console.log(form)
    console.log(param)
    const handleInput =(event)=>{
        const {name,value} = event.target;
        setForm({...form,[name]:value})
      }
const updatebtn=()=>{
dispatch({
    type:"editform",
    payload:form
})
navigate('/profile')
}

  return (
    <from>
        
        <div className='login-page'>
          <div className='login-box'>
          <h2>EDIT FORM OR OPEN</h2>
              <input type="text" className="editform-name" placeholder="Product Name*" name="productname" value={form.productname} onChange={handleInput}/>
              <input type="text" className="editform-price" placeholder="Product Price*"  name='price' value={form.price} onChange={handleInput}/>
           
            <Button className='update-btn'variant="text" onClick={updatebtn}>UPDATE</Button>
            </div>
          </div>
        </from>
  )
}///

export default Editform