import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import {  useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Store/productSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loading'

const Shop = () => {
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getProducts())
},[dispatch])
  
  const {products,loading,error}=useSelector(state=>state.products)
  const [category,setCategory]=useState('')
  const [search,setSearch]=useState('')

 
const filterProduct=products.filter((product)=>{
  const filterCategory= product.category.toLocaleLowerCase().includes(category.toLocaleLowerCase())  || category==='' || product.category === category
 const filterSearch= product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  return filterCategory && filterSearch
})


  return (
    <div>
    <section className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__text">
                        <h4>Shop</h4>
                        <div className="breadcrumb__links">
                            <a href="./index.html">Home</a>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section className="shop spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="shop__sidebar">
          <div className="shop__sidebar__search">
            <form action="#">
              <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search..." />
              <button type="submit"><span className="icon_search" /></button>
            </form>
          </div>
          <div className="shop__sidebar__accordion">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-heading">
                  <Link to='' data-toggle="collapse" data-target="#collapseOne">Categories</Link>
                </div>
                <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                  <div className="card-body">
                    <div className="shop__sidebar__categories">
                    <ul style={{cursor:'pointer'}}>
                    <li value='' onClick={(e) => setCategory(e.target.getAttribute("value"))}>All ({products.length})</li>
                    <li value='Men' onClick={(e) => setCategory(e.target.getAttribute("value"))}> Men  </li>
                    <li value='Women' onClick={(e) => setCategory(e.target.getAttribute("value"))}>Women </li>
                    <li value='Bags' onClick={(e) => setCategory(e.target.getAttribute("value"))}>Bags </li>
                    <li value='Accessories' onClick={(e) => setCategory(e.target.getAttribute("value"))}>Accessories </li>
                    <li value='Kids' onClick={(e) => setCategory(e.target.getAttribute("value"))}>Kids </li>
                    <li value='Kids' onClick={(e) => setCategory(e.target.getAttribute("value"))}>Kids </li>
                    <li value='Kids' onClick={(e) => setCategory(e.target.getAttribute("value"))}>Kids </li>
                  </ul>
                  
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-heading">
                  <Link to='' data-toggle="collapse" data-target="#collapseTwo">Branding</Link>
                </div>
                <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                  <div className="card-body">
                    <div className="shop__sidebar__brand">
                      <ul>
                        <li>Louis Vuitton</li>
                        <li>Chanel</li>
                        <li>Hermes</li>
                        <li>Gucci</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-heading">
                  <Link to='' data-toggle="collapse" data-target="#collapseThree">Filter Price</Link>
                </div>
                <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                  <div className="card-body">
                    <div className="shop__sidebar__price">
                      <ul>
                        <li><Link to=''>$0.00 - $50.00</Link></li>
                        <li><Link to=''>$100.00 - $150.00</Link></li>
                        <li><Link to=''>$100.00 - $150.00</Link></li>
                        <li><Link to=''>$150.00 - $200.00</Link></li>
                        <li><Link to=''>$200.00 - $250.00</Link></li>
                        <li><Link to=''>250.00+</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-heading">
                  <Link to='' data-toggle="collapse" data-target="#collapseFour">Size</Link>
                </div>
                <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                  <div className="card-body">
                    <div className="shop__sidebar__size">
                      <label htmlFor="xs">xs
                        <input type="radio" id="xs" />
                      </label>
                      <label htmlFor="sm">s
                        <input type="radio" id="sm" />
                      </label>
                      <label htmlFor="md">m
                        <input type="radio" id="md" />
                      </label>
                      <label htmlFor="xl">xl
                        <input type="radio" id="xl" />
                      </label>
                      <label htmlFor="2xl">2xl
                        <input type="radio" id="2xl" />
                      </label>
                      <label htmlFor="xxl">xxl
                        <input type="radio" id="xxl" />
                      </label>
                      <label htmlFor="3xl">3xl
                        <input type="radio" id="3xl" />
                      </label>
                      <label htmlFor="4xl">4xl
                        <input type="radio" id="4xl" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-heading">
                  <Link to='' data-toggle="collapse" data-target="#collapseSix">Tags</Link>
                </div>
                <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                  <div className="card-body">
                    <div className="shop__sidebar__tags">
                      <Link to=''>Product</Link>
                      <Link to=''>Bags</Link>
                      <Link to=''>Shoes</Link>
                      <Link to=''>Fashio</Link>
                      <Link to=''>Clothing</Link>
                      <Link to=''>Hats</Link>
                      <Link to=''>Accessories</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="shop__product__option">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="shop__product__option__left">
                <p>Showing 1–12 of 126 results</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="shop__product__option__right">
                <p>Sort by Price:</p>
                <select>
                  <option value>Low To High</option>
                  <option value>$0 - $55</option>
                  <option value>$55 - $100</option>
                </select>
              </div>
            </div>
          </div>
        </div>
 
        
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {
          !loading ? filterProduct.map((item)=>{
            return  <ProductCard key={item.id} item={item} /> 
          }) :<Loader /> 
        }
        </div>

        {

          error && <h1> error ...</h1>
        }
     
      
    
    
    
        
      </div>
    </div>
  </div>
</section>



    
    </div>
  )
}

export default Shop