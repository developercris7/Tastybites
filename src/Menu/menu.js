import React from 'react'
import img1 from '../Images/hamburger.png'
import img2 from '../Images/activeBurger.png'
import img3 from '../Images/biryani.png'
import img4 from '../Images/activeBiryani.png'
import img5 from '../Images/inactiveSnack.png'
import img6 from '../Images/activeSnack.png'

const Menu = ({ tab, setTab, foods, handleAddToCart }) => {

     const items = [
          {
               id: 1,
               name: "Burger",
               inactive: img1,
               active: img2
          },
          {
               id: 2,
               name: "Biryani",
               inactive: img3,
               active: img4
          },
          {
               id: 3,
               name: "Snacks",
               inactive: img5,
               active: img6
          },
     ]
     return (
          <div className="menu-container" id="Menu">
               <h1 className='ms-3'>Foods for You !</h1>
               <div className="menu-header ps-lg-5">
                    {items.map((item) => (
                         <div className={`tabOptions ${item.name === tab ? "active-tab" : ""}`} key={item.id} onClick={() => setTab(item.name)} role="button">
                              <div className="img-box ">
                                   <img src={(tab === item.name) ? item.active : item.inactive} alt="foods" className='img-fluid' />
                              </div>
                              <span className='tab-name'>{item.name}</span>
                         </div>
                    ))}


               </div>

               <main className='food-wrapper'>

                    {
                         foods.map((food) => (
                              <div className="food p-0" key={food.id} data-aos="fade-down"
                              data-aos-duration="1000"
                              data-aos-delay="200"
                              >
                                   <div className="food-img bg-success">
                                   <img src={food.coverImage} alt={food.foodName} className='w-100 h-100' />
                                   </div>
                                  
                                   <div className=" px-lg-2 mt-md-1 px-2">
                                       
                                       <span className='food-name'>{food.foodName}</span>
                                       <br />

                                       <div className='d-flex justify-content-between align-items-center mt-0'>
                                        <span className='fs-6'>${food.price}</span>
                                        {(!food.addCart) ? (
                                             <button className='cart-btn' onClick={() => handleAddToCart(food.id)}>Add <i className="fa-regular fa-plus"></i></button>
                                        ) : (
                                        <div data-aos="zoom-in"
                                        
                                        data-aos-duration = "1000"
                                        ><button className='cart-btn '
                                        ><i class="fa-solid fa-circle-check"></i> Added</button></div>
                                      )}
                                       </div>
                                   </div>
                              </div>
                         ))
                    }


               </main>
          </div>
     )
}

export default Menu