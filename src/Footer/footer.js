import React from 'react'
import logo from '../Images/logo2.png'

const Footer = () => {
  return (
   <footer className="footer-container" id="Footer">
       <div className="footer-wrapper py-md-3">
           <div className="footers mb-1">
             
            <img src={logo} alt="logo" className='img-fluid logo  m-0'  />
             <p className='fs-5 '>Delight Your Taste Buds with TastyBites.</p>
        

           </div>
           <div className="footers mb-1">
               <h4>Delivery Time</h4>
               
               <p>Sunday - Thursday <br /> 10.00AM to 11.00PM</p>

               <p>Friday - Saturday <br /> Off-day</p>


           </div>
           <div className="footers mb-1">
           <h4>Contact</h4>
               
               <p>Location:123,street,US</p>
               <p>Phone : <span className='ms-2'>000-000-000-000</span></p>
               <p>Email : <span className='ms-2'>trendybites@gmail.com</span></p>
             

           </div>
           <div className="footers mb-1">
              <h4>Follow Us</h4>
              <div className="d-flex justify-content-center justify-content-md-start ">
                <img src="https://img.icons8.com/?size=1x&id=118497&format=png" alt="FB" className='c-img'/>
                <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png " alt="insta" className='c-img' />
                <img src="https://img.icons8.com/?size=512&id=114450&format=png" alt="Twitter" className='c-img' />
                <img src="" alt="" />
                <img src="https://img.icons8.com/?size=1x&id=35084&format=png" alt="email" className='c-img'/>

              </div>
           </div>
       </div>
   </footer>
  )
}

export default Footer