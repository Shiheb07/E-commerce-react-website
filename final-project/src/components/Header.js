import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink , useLocation ,useNavigate   } from 'react-router-dom'
const Header = () => {
    const  navigate=useNavigate()
    const location = useLocation();
    const isActive = (match) => {
        if (match === location.pathname){
            return true;
        } else {
            return false;
        }

      };

      const cartItems=useSelector(state=>state.cart)

  const totalPrice= cartItems.reduce((acc,product)=>{
       acc += product.price  *(product.quantity) 
    return acc
  },0)
  return (
    
<header className="header">
<div className="header__top">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-7">
        <div className="header__top__left">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
      </div>
      <div className="col-lg-6 col-md-5">
        <div className="header__top__right">
          <div className="header__top__links">
            <Link to='signup'>Sign in</Link>
            <button  onClick={()=>navigate('/signup')}>Sign up</button>
          </div>
          <div className="header__top__hover">
            <span>Usd <i className="arrow_carrot-down" /></span>
            <ul>
              <li>USD</li>
              <li>EUR</li>
              <li>USD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-lg-3 col-md-3">
      <div className="header__logo">
        <Link to='/'> <img src="assets/img/logo.png"  alt=''/> </Link>
      </div>
    </div>
    <div className="col-lg-6 col-md-6">
      <nav className="header__menu mobile-menu">
        <ul>
          <li className={isActive("/") ? 'active' : ""}><NavLink  to='/'>Home</NavLink></li>
          <li  className= {isActive("/shop") ? 'active' : ""}><NavLink  to='/shop'>Shop</NavLink></li>
    
          <li className={isActive("/blogs") ? 'active' : ""}><NavLink  to='/blogs'>Blogs</NavLink></li>

          <li className={isActive("/contact") ? 'active' : ""}><NavLink  to='/contact'>Contact Us</NavLink></li>

        </ul>
      </nav>
    </div>
    <div className="col-lg-3 col-md-3">
      <div className="header__nav__option">
      <NavLink to='/cart'>   <img src="assets/img/icon/cart.png" alt=''  /> <span>0</span></NavLink>
        <div className="price">${totalPrice}</div>
      </div>
    </div>
  </div>
  <div className="canvas__open"><i className="fa fa-bars" /></div>
</div>
</header>

  )
}

export default Header