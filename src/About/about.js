import React from 'react'
import img1 from '../Images/hotel.png'
import img2 from '../Images/fresh.png'
import img3 from '../Images/foods.png'


const About = () => {
  return (
    <div className="about-container" id="About">
      <h1 className='ms-3 my-3 '>About Us !</h1>
      <div className="about text-center">
        <div className="about-us px-3">
          <h1> TastyBites - Bringing Deliciousness to Your Doorstep!</h1>
          <p className='lead mt-3'>At TastyBites, we are passionate about good food and delightful dining experiences. Our journey began with the vision of delivering mouthwatering dishes from the finest restaurants to food enthusiasts like you. With a commitment to quality, convenience, and customer satisfaction, we take pride in being your go-to food delivery service.</p>
        </div>
      </div>

      <div className="steps-container mt-4">
        <h1 className='display-6 my-2'>TastyBites Experiences</h1>
        <div className="d-flex step-wrapper justify-content-center">
          <div className="row w-100">
            <div className="col-md-4 "
            data-aos="fade-up"
            data-aos-duration="1000" 
            
            >

              <div className="box">
                <div className="img">
                  <img src={img1} alt="browseImage" className='img-fluid' />
                </div>
                <h5 className='fw-bold mt-2'> Own Restaurants</h5>
                <p className='lead fs-6 '> We partner with renowned restaurants known for their delectable dishes.</p>
              </div>
            </div>

            <div className="col-md-4 "
            data-aos="fade-up"
            data-aos-duration="1000"
        
            >
              <div className="box">
                <div className="img">
                  <img src={img2} alt="browseImage" className='img-fluid' />
                </div>
                <h5 className='fw-bold mt-2'> Fresh Ingredients</h5>
                <p className='lead fs-6 '>Our chefs use the freshest and highest-quality ingredients to craft every dish.</p>
              </div>
            </div>

            <div className="col-md-4 "
               data-aos="fade-up"
               data-aos-duration="1000"
            >
              <div className="box">
                <div className="img">
                  <img src={img3} alt="browseImage" className='img-fluid' />
                </div>
                <h5 className='fw-bold mt-2'> Customizable Order</h5>
                <p className='lead fs-6 '>Customize your orders to suit your preferences and dietary requirements.</p>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  )
}

export default About