import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, } from 'react-router-dom'
import { addtocart } from '../Store/cartSlice'
import { toast } from 'react-toastify';

const ProductCard = ({item}) => {
  const dispatch=useDispatch()
  const handleAdd =()=>{
dispatch(addtocart(item))
toast.success('product added successfuly')

  } 
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
    <div className="product__item">
      <div className="product__item__pic set-bg" data-setbg='' style={{backgroundImage: `url(${item.img})`}}>
        <ul className="product__hover">
          <li><Link to=''><img src="assets/img/icon/heart.png" alt='' /></Link></li>
          <li><Link to=''><img src="assets/img/icon/compare.png" alt='' /> <span>Compare</span></Link></li>
          <li><Link to={`/shop-detail/${item.id}`}><img src="assets/img/icon/search.png" alt='' /></Link></li>
        </ul>
      </div>
      <div className="product__item__text">
        <h6>{item.title}</h6>
        <Link onClick={handleAdd}  className="add-cart">+ Add To Cart</Link>
        <div className="rating">
          <i className="fa fa-star-o" />
          <i className="fa fa-star-o" />
          <i className="fa fa-star-o" />
          <i className="fa fa-star-o" />
          <i className="fa fa-star-o" />
        </div>
        <h5>${item.price}</h5>
        <div className="product__color__select">
          <label htmlFor="pc-13">
            <input type="radio" id="pc-13" />
          </label>
          <label className="active black" htmlFor="pc-14">
            <input type="radio" id="pc-14" />
          </label>
          <label className="grey" htmlFor="pc-15">
            <input type="radio" id="pc-15" />
          </label>
        </div>
      </div>
    </div>
  </div>


  )
}

export default ProductCard