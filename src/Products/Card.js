import React from 'react'
import "./Card.css"
function Card(props) {
    const {image,category,description,price,rating,title,id}=props?.item
    console.log(image)

    const addToCart = (item) =>{
        let cartItems = []
          if (localStorage.getItem("cartItems")){
            cartItems = JSON.parse(localStorage.getItem("cartItems"))
            let existingItemIndex = cartItems.findIndex(x => x?.id === item?.id)
            if (existingItemIndex >= 0){
                cartItems[existingItemIndex].qty = cartItems[existingItemIndex].qty + 1 
            }else{
                item.qty = 1
                cartItems.push(item)
            }
          }else{
            item.qty = 1
            cartItems.push(item)
          }
          localStorage.setItem("cartItems",JSON.stringify(cartItems))
    }

  return (
        <div class="card"  key={id}>
            <img src={image} alt="Denim Jeans"  style={{width:"100%", height:"100%"}}/>
            <h1>{title}</h1>
            <p class="price">${price}</p>
            <p>{description}</p>
            <p>
                <button onClick={()=>{
                addToCart(props.item)
            }}>
                Add to Cart</button></p>
       </div>
  )
}

export default Card