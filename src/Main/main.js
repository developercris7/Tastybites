import React from 'react'
import { Link } from 'react-scroll';
import burger from '../Images/burgerbg.png'
import img1 from '../Images/onlineorder.png'
import img2 from '../Images/delivery.png'
import img3 from '../Images/food.png'
const Main = () => {
    return (
        <div className="main-container px-3 mt-5" id="Home">

            <div className="row p-3 d-flex">
                <div className="col-lg-6 col-12 my-auto" data-aos="fade-right" data-aos-duration="1500">
                    <span className="display-5">Easy Way  to make an order</span><br />

                    <div className="my-2">
                        <span className="display-6">
                        <strong className='fw-bold' style = {{color:"	#ff7400"}}>    HUNGRY ? </strong>
                        Just Wait Food at your Door.
                        </span>
                    </div>
                    <p className='lead mt-2'>At TastyBites, we're on a mission to satisfy your cravings and bring the joy of good food to your doorstep.Explore our wide range of delicious cuisines and place your order now.</p>
                    <div className="d-flex mb-2">
                        <button className='btn
                        text-white d-flex align-items-center' style = {{backgroundColor:"	#ff7400"}}>  <Link
                        className='nav-link mx-1'
                        to="Menu"
                        spy={true}
                        smooth={true}
                        offset={-60} duration={100} >
                        Order Now
                    </Link> <i className="fa fa-caret-down ms-1 fs-6" aria-hidden="true"></i></button>
                        <button className='btn text-white ms-md-5 ms-4 d-flex align-items-center'
                        style = {{backgroundColor:"	#ff7400"}}><Link
                        className='nav-link mx-1'
                        to="Menu"
                        spy={true}
                        smooth={true}
                        offset={-60} duration={100} >
                        See Foods
                    </Link> <i className="fa fa-caret-down ms-1 fs-6" aria-hidden="true"></i></button>
                    </div>

                    <div className="d-flex flex-wrap mt-4">
                        <span className='fs-5 me-3'><i className="fa fa-check me-2" aria-hidden="true" style = {{color:"	#ff7400"}}></i>Free Delivery</span>
                        <span className='fs-5 '><i className="fa fa-check me-2" aria-hidden="true" style = {{color:"	#ff7400"}}></i>100% Secure</span>
                    </div>

                </div>

                <div className="col-lg-5 col-12 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="1500">
                    <img src={burger} alt="" className="img-fluid" />

                </div>

            </div>

            <div className="steps-container">
                <h1 className='display-6 my-2' 
                >How it Works!</h1>

                <div className="d-flex step-wrapper justify-content-center">
                    <div className="row w-100">
                        <div className="col-md-4 "    data-aos="fade-up"
                        data-aos-duration="1000">
                            <div className="box">
                                <div className="img">
                                    <img src={img1} alt="browseImage" className='img-fluid' />
                                </div>
                                <h5 className='fw-bold mt-2'>Browse and Order</h5>
                                <p className='lead fs-6 '>Explore our diverse menu and discover dishes that pique your interest.</p>
                            </div>
                        </div>
                        <div className="col-md-4 "    data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100">
                            <div className="box">
                                <div className="img">
                                    <img src={img2} alt="browseImage" className='img-fluid' />
                                </div>
                                <h5 className='fw-bold mt-2'>Fast Delivery</h5>
                                <p className='lead fs-6 '> Sit back and relax while we swiftly deliver your freshly prepared meal to your doorstep.</p>
                            </div>
                        </div>
                        <div className="col-md-4 "
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        >
                            <div className="box">
                                <div className="img">
                                    <img src={img3} alt="browseImage" className='img-fluid' />
                                </div>
                                <h5 className='fw-bold mt-2'>Enjoy Your Meal</h5>
                                <p className='lead fs-6 '>Delight in the flavors and savor each bite as you experience the joy of a culinary masterpiece.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main