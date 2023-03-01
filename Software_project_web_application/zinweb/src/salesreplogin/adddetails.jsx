import react from 'react'
 import { UseEffect } from 'react'
 import { UseState } from 'react'

 import Axios from 'axios'

const Adddetails = () => {
     const [adddetails,setdetails] = UseState([])
     UseEffect(()=>{
         const fecthAllAdddetails =async ()=>{
             try{
                 const res = await Axios.get("http://localhost:8800/add")
                 console.log(res)
                 setdetails(res.data);

             }catch(err){
                 console.log(err)
             }
         }
         fecthAllAdddetails()

 },[])
  return (
    <div>
        <h1>Zincat SalesRep Details</h1>
        <div className="salesrep">

            {adddetails.map(salesrep=>(

                <div className="salesrep" key ={salesrep.NIC}> 
                {salesrep.cover && <img src={"salesrep.cover"} alt=""/>}
                <h2>{salesrep.fullname}</h2>
                <p>{salesrep.password}</p>
                <span>{salesrep.email}</span>
                </div>

            ))}

        </div>
        <button>add new salesrep</button>
    </div>
  )
}

export default Adddetails