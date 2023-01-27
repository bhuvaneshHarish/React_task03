import React, { useContext, useState } from 'react'
import { todoContext } from './Context'
import Button from '@mui/material/Button';
import Editform from './Editform';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const {state,dispatch}=useContext(todoContext)
  const [form,setform] = useState(false);
  const navigate=useNavigate()
  const edit = (product) =>{
      setform(true)
       navigate(`/Editform/${product.id}`)
}
const deleteproduct=(product)=>{
const del=state.products.filter((el)=>el.id!==product.id);
    dispatch({
      type:"deleteitem",
      payload:del})
}
const decrement=(product)=>{
    if(product.qty>1){
      state.products.map((pro)=>(pro.id == product.id),
      ...state.products, product.qty--  
    )  
    dispatch({
      type:"add_to_cart",
      payload:state.products}) 
}}
const increment=(product)=>{
    state.products.map((pro)=>(pro.id == product.id),
    ...state.products, product.qty++
  )
  dispatch({
    type:"add_to_cart",
    payload:state.products
})
}
return(
    <>
      <div className='cart-table'>
        <table className='profile-table'>
          <tr>
            <th className='table-head'>PRODUCT NAME</th>
            <th className='table-head'>PRODUCT PRICE</th>
            <th className='table-head'>QTY</th>
            <th className='table-head'>TOTAL</th>
            <th className='table-head'>BUTTON</th>
          </tr>
            {state.products.map((product,index) => (
            <tr key={index}>
            <td className='product-data'>{product.productname}</td>
            <td className='product-data'>{product.price}</td>
            <td className='product-data'>
                <button onClick={()=>decrement(product)} >-</button>
                    <span>{product.qty}</span>
                <button onClick={()=>increment(product)} >+</button></td>
            <td className='product-data'>{product.price*product.qty}</td>
            <td className='product-data'>
              <button className='edit-btn' onClick={ () => edit(product)}>EDIT</button>
              <button className='del-btn' onClick={()=>deleteproduct(product)}>DELETE</button>
            </td>
          </tr>
         ))}
        </table>
      </div>

      {form ?<Editform/>
           
                  
              :null
      }
</>
  )
}



export default Profile

