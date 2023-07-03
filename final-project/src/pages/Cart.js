import React from 'react'
import { Button } from 'react-bootstrap'
import {MdRemoveShoppingCart} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { clear, decrement, increment, removefromcart } from '../Store/cartSlice'
import { Link } from 'react-router-dom'


const Cart = () => {
  const dispatch=useDispatch()
  const cartItems=useSelector(state=>state.cart)

  const totalPrice= cartItems.reduce((acc,product)=>{
       acc += product.price  *(product.quantity) 
    return acc
  },0)

  console.log(cartItems)
  return (
    <div>
  <section className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__text">
            <h4>Shopping Cart</h4>
            <div className="breadcrumb__links">
              <a href="./index.html">Home</a>
              <a href="./shop.html">Shop</a>
              <span>Shopping Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Shopping Cart Section Begin */}
  <section className="shopping-cart spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="shopping__cart__table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
               {
                cartItems.map((item)=>{
                  console.log(item);
                  return  <tr>
                  <td className="product__cart__item">
                    <div className="product__cart__item__pic">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="product__cart__item__text">
                      <h6>{item.title}</h6>
                      
                    </div>
                  </td>
                  <td className="quantity__item">
                    <div className="quantity">
                      <div className="pro-qty-2">
                        <Button onClick={()=>dispatch(decrement(item))} variant="light" size="sm">-</Button>
                       <span> {item.quantity} </span>
                       <Button onClick={()=>dispatch(increment(item))} variant="light" size="sm">+</Button>

                      </div>
                    </div>
                  </td>
                  <td className="cart__price">$ {item.price}</td>
                  <td className="cart__close">     <Button onClick={()=>dispatch(removefromcart(item))} variant="outline-danger" size="sm">
                  <MdRemoveShoppingCart />
                  
                  </Button></td>
                </tr>
                })
               }
              
          
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="continue__btn">
                <Link to='/shop'>Continue Shopping</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="continue__btn update__btn">
                <Link onClick={()=>dispatch(clear())}><i className="fa fa-spinner" /> Update cart</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="cart__discount">
            <h6>Discount codes</h6>
            <form action="#">
              <input type="text" placeholder="Coupon code" />
              <button type="submit">Apply</button>
            </form>
          </div>
          <div className="cart__total">
            <h6>Cart total</h6>
            <ul>
              <li>Total <span>$ {totalPrice.toFixed(2)}</span></li>
            </ul>
            <Link to='' className="primary-btn">Proceed to checkout</Link>
          </div>
        </div>
      </div>
    </div>
  </section>


    
    </div>
  )
}
export default Cart