import React, { useState } from 'react'

import Banner from '../components/Banner'
import { useDispatch, useSelector } from 'react-redux'
import CountDown from '../components/CountDown'
import InstaWall from '../components/InstaWall'
import Articles from '../components/Articles'
import ProductCard from '../components/ProductCard'
import { useEffect } from 'react'
import { getProducts } from '../Store/productSlice'
import Carousel from '../components/carousel/Carousel'


const Home = () => {
  const dispatch=useDispatch()
  const {products}=useSelector(state=>state.products)
  console.log(products)
  const [bestSellers,setBestSellers]=useState([])
  const [newArrival,setNewArrival]=useState([])
  const [hotSales,setHotSales]=useState([])

useEffect(()=>{
  const filterSellers=products.filter(product=>product.rate>=4.5)
  setBestSellers(filterSellers)

  const filternewArrival=products.slice(-4)
  setNewArrival(filternewArrival)
  const filterHotSales=products.filter(product=>product.brand ==='Louis Vuitton' || product.brand==='Gucci' )
  setHotSales(filterHotSales)
},[products])

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
<div>
  <Carousel/>
  <Banner />
  <section className="product spad">
    <div className="container">
  

      <div>
      <h2 style={{margin:'20px'}}>Best Sellers</h2>
      <div style={{display:'flex', flexWrap:'wrap'}}>
      {
        bestSellers.map((item)=>{
          return <ProductCard key={item.id} item={item} /> 
        })
      }
       
      </div>
      
      </div>

      <div>
      <h2 style={{margin:'20px'}}>New Arrivals</h2>
      <div style={{display:'flex', flexWrap:'wrap'}}>
      {
        newArrival.map((item)=>{
          return <ProductCard key={item.id} item={item} /> 
        })
      }
       
      </div>
      
      </div>
      <div>
      <h2 style={{margin:'20px'}}>Hot Sales</h2>
      <div style={{display:'flex', flexWrap:'wrap'}}>
      {
        hotSales.map((item)=>{
          return <ProductCard key={item.id} item={item} /> 
        })
      }
       
      </div>
      
      </div>
     
    </div>
  </section>
  <CountDown />
 <InstaWall />
 <Articles />

</div>

  )
}

export default Home