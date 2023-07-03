import React from 'react'
import { Link } from 'react-router-dom'

const Articles = () => {
  return (
    <section className="latest spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span>Latest News</span>
            <h2>Fashion New Trends</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-1.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-1.jpg")'}} />
            <div className="blog__item__text">
              <span><img src="assets/img/icon/calendar.png" alt='' /> 16 February 2020</span>
              <h5>What Curling Irons Are The Best Ones</h5>
              <Link to=''>Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-2.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-2.jpg")'}} />
            <div className="blog__item__text">
              <span><img src="assets/img/icon/calendar.png" alt='' /> 21 February 2020</span>
              <h5>Eternity Bands Do Last Forever</h5>
              <Link to=''>Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic set-bg" data-setbg="assets/img/blog/blog-3.jpg" style={{backgroundImage: 'url("assets/img/blog/blog-3.jpg")'}} />
            <div className="blog__item__text">
              <span><img src="assets/img/icon/calendar.png" alt='' /> 28 February 2020</span>
              <h5>The Health Benefits Of Sunglasses</h5>
              <Link to=''>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}

export default Articles