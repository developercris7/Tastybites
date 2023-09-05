import React, { useEffect } from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-scroll';
import logo from '../Images/logo1.png'

const Header = ({ cartDisplay, setCartDisplay, cartFood, handleDeleteCart, notification, setNotification }) => {
    const [show, setShow] = useState(false);
    const [total, setTotal] = useState(0)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // var total=0;
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < cartFood.length; i++) {
            sum += cartFood[i].price
        }
        setTotal(sum)
    }, [cartFood])

    const handleCartOpen = () => {
        setCartDisplay(true)
        setNotification(false)
    }
  const handleCartClose = () => {
    setCartDisplay(false)
    setNotification(false)
  }
    return (
        <div className="header-container">
            <div className="d-flex justify-content-between align-items-center position-fixed top-0 w-100 bg-white" style={{ height: "64px",zIndex:"10" }} >
               
                <img src={logo} alt="logo"
                className='img-fluid logo m-0'
                style={{height:"64px"}}
             />
                <div className=" d-none d-md-flex">
                    <Link
                        className='link  mx-3'
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-60} duration={100} >
                        Home
                    </Link>
                    <Link
                        className='link  mx-3'
                        to="Menu"
                        spy={true}
                        smooth={true}
                        offset={-60} duration={100} >
                        Menu
                    </Link>

                    <Link
                        className='link  mx-3'
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-60} duration={100} >
                        About
                    </Link>
                    <Link
                        className='link  mx-3'
                        to="Footer"
                        spy={true}
                        smooth={true}
                        offset={-60} duration={100} >
                        Contact
                    </Link>
                  
                </div>

                {/* cart Section Starts*/}

                {(cartDisplay) ? (<div className="cart position-absolute  p-2" data-aos = "zoom-in" data-aos-duration="500">
                    <div className="d-flex justify-content-between align-items-center px-2 py-1">
                        <h3 className='my-auto'>Your Foods</h3>
                      
                        <i className="fa-solid fa-xmark fs-4" onClick={() => handleCartClose()} role="button"></i>
                    </div>

                    <div className="cart-body">

                        {(cartFood.length) ? (
                            cartFood.map((cartItem) => (
                                <div className="cart-item bg-white w-100 py-2 d-flex justify-content-between px-2 align-items-center mt-2 rounded">
                                    <div className="food-details d-flex">
                                        <img src={cartItem.coverImage} alt="" className='img-fluid cart-img rounded' />
                                        <div className='ms-3'>
                                            <span>{cartItem.foodName}</span> <br />
                                            <span>${cartItem.price}</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center flex-wrap'>
                                        <i class="fa-solid fa-trash-can  fs-5                                 mx-2 " role="button" onClick={() => handleDeleteCart(cartItem.id)} ></i>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='h-100 d-flex justify-content-center align-items-center'>
                                <span className=' fs-4  text-center text-white'>Your Cart is Empty !</span>
                            </div>
                        )}



                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className='h3 '>Total : ${total} </span>
                       
                    </div>
                </div>) : (null)}

                {/* Cart Section Ends */}

                <div className="header-btn me-3 me-md-4 d-flex justify-content-center align-items-center">
                    <button className="btn p-2">
                        <i className="fa fa-shopping-bag fs-5 bag-icon" aria-hidden="true" onClick={() => handleCartOpen()}>
                            {
                             (notification) ? ( <div className="notify" onClick={()=> setCartDisplay (true)}></div>) : null
                            }
                        </i>
                    </button>
                    <button className="btn p-2">
                        <i className="fa fa-user fs-5" aria-hidden="true"></i>
                    </button>

                    <button className="btn d-md-none " onClick={handleShow}>
                        <i class="fa fa-bars fs-3" aria-hidden="true"></i>
                    </button>
                </div>

            </div>
            <Offcanvas show={show} onHide={handleClose} placement='end' style={{width:"75%"}}>
                <Offcanvas.Header>
                    <Offcanvas.Title className="fw-bold fs-3">TastyBites</Offcanvas.Title>
                    <i className="fa-solid fa-xmark fs-4"
                    role='button'
                    onClick={()=>handleClose()}
                    >
                        
                    </i>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <Link
                            className='nav-link text-dark text-uppercase fw-bold m-2 fs-6'
                            to="Home"
                            spy={true}
                            smooth={true}
                            offset={-60} duration={100}
                            onClick={handleClose} >
                            Home
                        </Link>
                        <Link
                            className='nav-link text-dark text-uppercase fw-bold m-2 fs-6'

                            to="Menu"
                            spy={true}
                            smooth={true}
                            offset={-60} duration={100}
                            onClick={handleClose} >
                            Menu
                        </Link>

                        <Link
                             className='nav-link text-dark text-uppercase fw-bold m-2 fs-6'
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={-60} duration={100}
                            onClick={handleClose} >
                            About
                        </Link>
                        <Link
                             className='nav-link text-dark text-uppercase fw-bold m-2 fs-6'
                            to="Footer"
                            spy={true}
                            smooth={true}
                            offset={-60} duration={100}
                            onClick={handleClose} >
                            Contact
                        </Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Header