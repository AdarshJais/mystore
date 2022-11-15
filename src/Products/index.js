import React,{useEffect, useState} from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(json=>setProducts(json))
    }, [])
    
    return (
      <div style={{flex:1,display:"flex",flexDirection:"row", flexWrap:"wrap"}}>
        <div style={{height:50, width:"100%",display:"flex", justifyContent:"flex-end"}}> 
            <button onClick={()=>{
                navigate("/cart")
            }}> Go To Cart</button>
        </div>
        {products.map((item)=>{
            return <Card item={item}/>
        })}
      </div>
    )
}
export default Products