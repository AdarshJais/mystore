import React,{useEffect, useState} from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom';

function Cart() {
    let navigate = useNavigate();
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
      let savedCartItems = localStorage.getItem("cartItems")
      if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems))
      }
    }, [])
    
    return (
      <div style={{flex:1,display:"flex",flexDirection:"row", flexWrap:"wrap"}}>
        {cartItems?.length <= 0 &&  <div style={{display:"flex",alignItems:"center",flex:1, justifyContent:"center" }}> 
            <button onClick={()=>{
                navigate("/products")
            }}> Add Products</button>
        </div>}
        
        {cartItems.map((item)=>{
            return <Card item={item}/>
        })}
      </div>
    )
}
export default Cart