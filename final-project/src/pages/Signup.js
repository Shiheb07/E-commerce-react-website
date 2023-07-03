import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../Store/userSlice'
import { toast } from 'react-toastify'

const Signup = () => {
  const dispatch=useDispatch()
  const navigate  =useNavigate()
  const [userData,setUserData]=useState({})

  const handleChange=(e)=>{
setUserData({
  ...userData,
  [e.target.name]:e.target.value
})
  }

  const handleSubmit=(e)=>{
e.preventDefault()
dispatch(register({userData,navigate}))
toast.success('signup succeded')
  }
  return (
    <div className='container'  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
<form onSubmit={(e)=>handleSubmit(e)} className="col-lg-8 col-md-6">
  <h6 className="coupon__code"> Already Have An Account? <Link to='/login' >Click
      here</Link> to log in</h6>
  <h6 className="checkout__title">Billing Details</h6>
  <div className="row">
    <div className="col-lg-6">
      <div className="checkout__input">
        <p>Fist Name<span>*</span></p>
        <input name='first-name' onChange={(e)=>handleChange(e)}  type="text" />
      </div>
    </div>
    <div className="col-lg-6">
      <div className="checkout__input">
        <p>Last Name<span>*</span></p>
        <input name='last-name' onChange={(e)=>handleChange(e)} type="text" />
      </div>
    </div>
  </div>
  <div className="checkout__input">
    <p>Country<span>*</span></p>
    <input name='country' onChange={(e)=>handleChange(e)} type="text" />
  </div>
  <div className="checkout__input">
    <p>Address<span>*</span></p>
    <input name='street-adresse' onChange={(e)=>handleChange(e)} type="text" placeholder="Street Address" className="checkout__input__add" />
    <input name='Apartment-adresse' onChange={(e)=>handleChange(e)} type="text" placeholder="Apartment, suite, unite ect (optinal)" />
  </div>
  <div className="checkout__input">
    <p>Town/City<span>*</span></p>
    <input name='town' onChange={(e)=>handleChange(e)} type="text" />
  </div>
  <div className="checkout__input">
    <p>Country/State<span>*</span></p>
    <input name='state ' onChange={(e)=>handleChange(e)} type="text" />
  </div>
  <div className="checkout__input">
    <p>Email<span>*</span></p>
    <input name='email' onChange={(e)=>handleChange(e)} type="email" />
  </div>
  <div className="row">
    <div className="col-lg-6">
      <div className="checkout__input">
        <p>Password<span>*</span></p>
        <input name='password' onChange={(e)=>handleChange(e)} type="password" />
      </div>
    </div>
    <div className="col-lg-6">
      <div className="checkout__input">
        <p>Confirm Password<span>*</span></p>
        <input name='confirm-password' onChange={(e)=>handleChange(e)} type="password" />
      </div>
    </div>
  </div>
  <div className="checkout__input__checkbox">
    
    
  </div>
  
  <div className="checkout__input__checkbox">
    
  </div>
  <Button type='submit' variant='dark' className='p-2'>  SignUp</Button>
  <br /><br /><br /><br />
</form>


    </div>
  
  )
}

export default Signup