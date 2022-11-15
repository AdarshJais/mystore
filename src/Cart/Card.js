import React from 'react'
import "./Card.css"
function Card(props) {
    const {image,category,description,price,rating,title,qty}=props?.item
  return (
        <div class="card">
            <img src={image} alt="Denim Jeans"  style={{width:"100%", height:"100%"}}/>
            <h1>{title}</h1>
            <p class="price">qty: {qty} </p>
            <p class="price">${price} each</p>
            <p class="price">Total : ${price * qty}</p>
            <p>{description}</p>
            {/* <p><button>Add to Cart</button></p> */}
       </div>
  )
}

export default Card