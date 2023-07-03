import React from 'react'

const Contact = () => {
  return (
    <div>
   <div>
  
  <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d399.23888170613407!2d10.09486958674892!3d36.820651269301415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stn!4v1684974513491!5m2!1sen!2stn" height={500} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} title='map'/>
  </div>
  
  <section className="contact spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="contact__text">
            <div className="section-title">
              <span>Information</span>
              <h2>Contact Us</h2>
              <p>As you might expect of a company that began as a high-end interiors contractor, we pay
                strict attention.</p>
            </div>
            <ul>
              <li>
                <h4>America</h4>
                <p>195 E Parker Square Dr, Parker, CO 801 <br />+43 982-314-0958</p>
              </li>
              <li>
                <h4>France</h4>
                <p>109 Avenue Léon, 63 Clermont-Ferrand <br />+12 345-423-9893</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="contact__form">
            <form action="#">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="col-lg-12">
                  <textarea placeholder="Message" defaultValue={""} />
                  <button type="submit" className="site-btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    
    </div>
  )
}

export default Contact