import React from 'react'

function stock() {
  return (
    <div>stock</div>
  )
}

export default stock




//import React from 'react'
//import { UseEffect } from 'react'
//import { UseState } from 'react'
//import Axios from 'axios'

 /*const Stock = () => {
    const [stock,setStock] = UseState([])
    UseEffect (()=>{
        const fetchData = async ()=>{
          
            try{
                const res=await Axios.get("http://localhost:8800/stock")
              
                 setStock (res.data);
                 
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[]);


  return <div>
   
    <h1>Zincat stock</h1>
    <div className="Stock">
<button on click ={Stock}></button>
        {stock.map(stock=>(
          <div>
            <h2>{stock.stockID}</h2>
               <p>{stock.qty}</p>
               <p>{stock.productname}</p>
               <p>{stock.name}</p>
               <p>{stock.price}</p>
               <p>{stock.manufacturedate}</p>
               <p>{stock.expirydate}</p>
               <p>{stock.discount}</p>
               
            </div>

        ))}
        
     </div>
    </div>;


  
 
        };



export default Stock;*/