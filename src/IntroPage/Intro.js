import React from 'react'
import { Link } from 'react-router-dom'
import './intro.css'
import bg from '../Images/introbg.jpg'

const Intro = () => {
  return (

    <div className="intro-container" style={{backgroundImage:`url(${bg})`}}>
       <div className="wrapper" data-aos="zoom-in"
       data-aos-duration="1000">
          <h1 className='display-4'>Welcome to TastyBites</h1>
          <h3 className="mt-3 display-6"> Bringing Deliciousness to Your Doorstep</h3>
         <p className='lead mx-3 mt-3'>At TastyBites, we believe that every meal should be a memorable experience. We bring you a delightful array of culinary delights right to your doorstep. Indulge in a world of flavors, crafted with love by our talented chefs</p>

         <button className="start-btn mx-auto">
         <Link to='/home' className='home-link'>Get Started  <i className="fa fa-chevron-right text-white ms-3 fs-6" aria-hidden="true"></i></Link>
        
         </button>
       </div>
    </div>
  )
}

export default Intro


    // <>
    //   <div>Intro

    //   </div>
   
    // </>