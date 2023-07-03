import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { login } from '../Store/userSlice'

const LogIn = () => {
  const dispatch=useDispatch()
  const navigate  =useNavigate()
  const [userData,setUserData]=useState({})

  const handleChange=(e)=>{
setUserData({
  ...userData,
  [e.target.name]:e.target.value
})
  }
  console.log(userData)

  const handleSubmit=(e)=>{
e.preventDefault()
dispatch(login({userData,navigate}))

toast.success('login succeded')
  }
  console.log(userData);
  return (
    <div className='container'  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
<form onSubmit={(e)=>handleSubmit(e)} className="col-lg-8 col-md-6">
  <h6 className="coupon__code"> Need To Signup? <Link to='/signup' >Click
      here</Link> to Sign up</h6>
  <h6 className="checkout__title">Billing Details</h6>
 
  <div className="checkout__input">
    <p>Email<span>*</span></p>
    <input name='email' placeholder='email..' onChange={(e)=>handleChange(e)} type="text" />
  </div>
  <div className="checkout__input">
    <p>Password<span>*</span></p>
    <input name='password' onChange={(e)=>handleChange(e)} type="text" placeholder="password.." className="checkout__input__add" />
    
  </div>
  
  <div className="checkout__input__checkbox">
    
    
  </div>
  
  
  <Button type='submit' variant='dark' className='p-2'>  LogIn</Button>
  <br /><br /><br /><br />
</form>


    </div>
  
  )
}

export default LogIn