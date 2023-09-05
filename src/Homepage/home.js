import React, {useState } from 'react'
import Header from '../Header/header'
import Main from '../Main/main'
import Menu from '../Menu/menu'
import About from '../About/about'
import Footer from '../Footer/footer'

const Home = () => {

  const [tab, setTab] = useState("Burger")
  const [notification,setNotification] = useState(false)
  const [foods, setFoods] = useState(
    [
      {
        id: 1,
        type: "Snacks",
        foodName: "Slice Cake",
        addCart: false,
        coverImage: "https://i.ibb.co/fx8grm0/slice-cheesecake-with-strawberry-top-579873-1552.jpg",
        price: 9
      },
      {
        id: 2,
        type: "Snacks",
        foodName: "Chocolate Cake",
        addCart: false,
        coverImage: "https://i.ibb.co/DCDGZd2/chocolate-cake-decorated-with-forest-fruits-blueberries-strawberries-blackberries-ai-generative-1238.jpg",
        price: 19
      },
      {
        id: 3,
        type: "Snacks",
        foodName: "Strawberry shake",
        addCart: false,
        coverImage: "https://i.ibb.co/hLsknzn/strawberry-smoothie-105495-418.jpg",
        price: 14
      },
      {
        id: 4,
        type: "Snacks",
        foodName: "Orange Juice",
        addCart: false,
        coverImage: "https://i.ibb.co/x1PjTcL/fresh-orange-juice-glass-dark-background-1150-45560.jpg",
        price: 12
      },
      {
        id: 5,
        type: "Snacks",
        foodName: "Strawberry Ice",
        addCart: false,
        coverImage: "https://i.ibb.co/KbPvz5J/summer-gourmet-dessert-fresh-strawberry-ice-cream-sundae-generative-ai-188544-8572.jpg",
        price: 20
      },
      {
        id: 6,
        type: "Snacks",
        foodName: "Cone Ice",
        addCart: false,
        coverImage: "https://i.ibb.co/pvQgSrL/ice-cream-cone-with-strawberry-chocolate-generative-ai-188544-12425.jpg",
        price: 18
      },
      {
        id: 7,
        type: "Snacks",
        foodName: "Cookies",
        addCart: false,
        coverImage: "https://i.ibb.co/vs6YX5L/oatmeal-cookies-wooden-table-white-background-with-copy-space-88281-4854.jpg",
        price: 14
      },
      {
        id: 8,
        type: "Snacks",
        foodName: "Pop Corn",
        addCart: false,
        coverImage: "https://i.ibb.co/BBfqm9h/cinema-with-popcorn-box-23-2148133614.jpg",
        price: 12
      },
      {
        id: 9,
        type: "Burger",
        foodName: "Chicken burger",
        addCart: false,
        coverImage: "https://i.ibb.co/r6b8SkK/delicious-indulgent-burger-with-fresh-ingredients-958261-261-1.jpg",
        price: 22
      },
      {
        id: 10,
        type: "Burger",
        foodName: "Tomato sandwich ",
        addCart: false,
        coverImage: "https://i.ibb.co/DWZzrjy/sandwich-with-cheese-tomato-cucumber-sausage-salad-wood-114173-31.jpg",
        price: 20
      },
      {
        id: 11,
        type: "Burger",
        foodName: "Cheese Burger",
        addCart: false,
        coverImage: "https://i.ibb.co/rGV0k6c/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai-188544-12302.jpg",
        price: 22
      },
      {
        id: 12,
        type: "Burger",
        foodName: "Sandwich cheese ",
        addCart: false,
        coverImage: "https://i.ibb.co/thHNWKr/grilled-cheese-tomato-sandwich-white-background-214995-2900.jpg",
        price: 20
      },
      {
        id: 13,
        type: "Burger",
        foodName: "Peparoni pizza",
        addCart: false,
        coverImage: "https://i.ibb.co/kHkDdQ6/pizza-pepperoni-table-140725-5396.jpg",
        price: 25
      },
      {
        id: 14,
        type: "Burger",
        foodName: "Hot Dogs",
        addCart: false,
        coverImage: "https://i.ibb.co/n8t8mkQ/barbecue-grilled-hot-dogs-with-yellow-american-mustard-dark-wooden-background-152625-357.jpg",
        price: 22
      },
      {
        id: 15,
        type: "Burger",
        foodName: "Veg Pizza",
        addCart: false,
        coverImage: "https://i.ibb.co/jDPzKgG/vegetable-pizza-no-meat-tomato-pepper-onion-mushroom-corn-fresh-vegetables-meal-snack-88242-14562.jpg",
        price: 25
      },
      {
        id: 16,
        type: "Burger",
        foodName: "Mixed Pizza",
        addCart: false,
        coverImage: "https://i.ibb.co/rc7HLtw/mixed-pizza-with-various-ingridients-140725-3790.jpg ",
        price: 25
      },
      {
        id: 17,
        type: "Biryani",
        foodName: "Chicken Biryani",
      addCart: false,
      coverImage: "https://i.ibb.co/wYqV6nF/chicken-biriyani-using-jeera-rice-arranged-earthenware-with-raitha-grey-background-527904-8.jpg",
      price: 25
    },
  {
    id:18,
    type:"Biryani",
    foodName:"Mutton Biryani",
    addCart:false,
    coverImage: "https://i.ibb.co/vjRwLvK/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai-188544-13480.jpg"  ,
    price:25
    },
  {
    id:19,
    type:"Biryani",
    foodName:"Veg Biryani",
    addCart:false,
    coverImage:  "https://i.ibb.co/Fw6fht6/indian-vegetable-pulav-biryani-made-using-basmati-rice-served-terracotta-bowl-selective-focus-466689.jpg",
    price:25
    },
  {
    id:20,
    type:"Biryani",
    foodName:"Fish Biryani",
    addCart:false,
    coverImage:  "https://i.ibb.co/GCLNmvR/fish-biryani-spicy-and-delicious-malabar-biryani-or-hydrabadi-biryani-dum-biriyani.jpg" ,
    price:30
    },
  {
    id:21,
    type:"Biryani",
    foodName:"Egg Biryani",
    addCart:false,
    coverImage:"https://i.ibb.co/LYrWVyn/indian-egg-biryani-anda-rice-served-kadhai-kadai-with-yogurt-dip-selective-focus-466689-68120-1.jpg" ,
     price: 25
    }    
    ])
  
 

const [cartDisplay, setCartDisplay] = useState(false)

const handleAddToCart = (id) => {
  const newFoods = foods.map((food) => (food.id === id) ? { id, type: food.type, foodName: food.foodName, addCart: !food.addCart ,coverImage:food.coverImage,price:food.price} : (food))
  setFoods(newFoods)
  setNotification(true)
}

const handleDeleteCart = (id) => {
  const newFoods = foods.map((food) => (food.id === id) ? { id, type: food.type, foodName: food.foodName, addCart: !food.addCart  ,coverImage:food.coverImage,price:food.price} : (food))
  setFoods(newFoods)
}

return (
  <div className="container-fluid">
    <Header
      cartDisplay={cartDisplay} setCartDisplay={setCartDisplay}
      cartFood={foods.filter((food) => food.addCart === true)}
      handleDeleteCart={handleDeleteCart}
      notification = {notification}
      setNotification = {setNotification}
    />
    <Main />
    <Menu tab={tab} setTab={setTab} foods={foods.filter((food) => (food.type === tab))} handleAddToCart={handleAddToCart} />
    <About />
    <Footer />
  </div>
)
}

export default Home