import React, { useState } from 'react';

import Axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


// const [firstName, setFirstName] = useState(null);
// const [lastName, setLastName] = useState(null);
// const [email, setEmail] = useState(null);
// const [password,setPassword] = useState(null);
// const [confirmPassword,setConfirmPassword] = useState(null);
function Additem() {
  const [values, setValues] = useState({
    stockID: "",
    qty: "",
    productname: "",
    name:"",
    price: "",
    manufacturedate: "",
    expirydate: "",
    discount: ""

      });
  const Navigate = useNavigate()

  const handleChange = (e) => {
    setValues((value) => ({ ...value, [e.target.name]: e.target.value }))
  };

  console.log(values);

  // const handleInputChange = (e) => {
  //     const {id , value} = e.target;
  //     if(id === "rid"){
  //         setFirstName(value);
  //     }
  //     if(id === "nic"){
  //         setLastName(value);
  //     }
  //     if(id === "registrationdate"){
  //         setEmail(value);
  //     }
  //     if(id === "fullname"){
  //         setPassword(value);
  //     }
  //     if(id === "password"){
  //         setConfirmPassword(value);
  //     }
  //     if(id === "email"){
  //       setConfirmPassword(value);
  //   }
  //   if(id === "phoneNo"){
  //     setConfirmPassword(value);
  // }
  // if(id === "type"){
  //   setConfirmPassword(value);
  // }
  // if(id === "address"){
  //   setConfirmPassword(value);
  // }
  // }

  // const handleSubmit  = () => {
  //     console.log(rid,nic,registrationdate,fullname,password,email,phoneNo,type,address);
  // }

  const handleClick = async e => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:8800/additem", values)
      Navigate("/")
    } catch (err) {
      console.log(err);
    }

  }


  return (

   // <div className={styles.main}>
     // <div className={styles.sub_main}>
        <div className="form">
          <div className="form-body">
            <div className="stockID">
              <label className="form__label" for="stockID">stockID </label>
              <input className="form__input" type="text" id="stockID" name="stockID" placeholder="stockID" onChange={handleChange} />
            </div>
            <div className="qty">
              <label className="form__label" for="qty">qty</label>
              <input type="int" name="qty" id="qty" className="form__input" placeholder="qty" onChange={handleChange} />
            </div>
            <div className="productname">
              <label className="form__label" for="productname">productname</label>
              <input type="text" name="productname" id="productname" className="form__input" placeholder="productname" onChange={handleChange} />
            </div>
            <div className="name">
              <label className="form__label" for="name">name </label>
              <input className="form__input" name="name" type="name" id="name" placeholder="name" onChange={handleChange} />
            </div>
            <div className="manufacturedate">
              <label className="form__label" for="manufacturedate">manufacturedate </label>
              <input className="form__input" name="manufacturedate" type="manufacturedate" id="manufacturedate" placeholder="manufacturedate" onChange={handleChange} />
            </div>
            <div className="expirydate">
              <label className="form__label" for="expirydate">expirydate </label>
              <input type="expirydate" id="expirydate" name="expirydate" className="form__input" placeholder="expirydate" onChange={handleChange} />
            </div>

            <div className="discount">
              <label className="form__label" for="discount">discount</label>
              <input className="form__input" name="discount" type="discount" id="discount" placeholder="discount" onChange={handleChange} />
            </div>
          <div class="footer">
            <button type="submit" class="btn" onClick={handleClick}>Add</button>
          </div>
        </div>
   </div>
    //</div>
  )
}


export default Additem;




















