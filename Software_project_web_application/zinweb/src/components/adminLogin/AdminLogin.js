import React, { useState } from 'react';
import styles from './AdminLogin.module.css';
import Header from '../header';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
//import PasswordEncrypt from './passwordEncrypt';

// const [firstName, setFirstName] = useState(null);
// const [lastName, setLastName] = useState(null);
// const [email, setEmail] = useState(null);
// const [password,setPassword] = useState(null);
// const [confirmPassword,setConfirmPassword] = useState(null);




function AdminLogin() {
  const [values, setValues] = useState({
    rid: "",
    nic: "",
    registrationdate: "",
    fullname: "",
    password: "",
    email: "",
    phoneNo: "",
    type: "",
    address: ""
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
      await axios.post("http://localhost:8800/salesrep", values)
      Navigate("/")
    } catch (err) {
      console.log(err);
    }

  }


  return (

    <div className={styles.main}>
      <div className={styles.sub_main}>
        <div className="form">
          <div className="form-body">
            <div className="rid">
              <label className="form__label" for="rid">RID </label>
              <input className="form__input" type="text" id="rid" name="rid" placeholder="rid" onChange={handleChange} />
            </div>
            <div className="nic">
              <label className="form__label" for="nic">NIC</label>
              <input type="text" name="nic" id="nic" className="form__input" placeholder="nic" onChange={handleChange} />
            </div>
            <div className="registrationdate">
              <label className="form__label" for="registrationdate">registrationdate</label>
              <input type="text" name="registrationdate" id="registrationdate" className="form__input" placeholder="registrationdate" onChange={handleChange} />
            </div>
            <div className="fullname">
              <label className="form__label" for="fullname">fullname </label>
              <input className="form__input" name="fullname" type="fullname" id="fullname" placeholder="fullname" onChange={handleChange} />
            </div>
            <div className="password">
              <label className="form__label" for="password">Password </label>
              <input className="form__input" name="password" type="password" id="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div className="email">
              <label className="form__label" for="email">Email </label>
              <input type="email" id="email" name="email" className="form__input" placeholder="Email" onChange={handleChange} />
            </div>

            <div className="phoneNo">
              <label className="form__label" for="phoneNo">phoneNo</label>
              <input className="form__input" name="phoneNo" type="phoneNo" id="phoneNo" placeholder="phoneNo" onChange={handleChange} />
            </div>
            <div className="type">
              <label className="form__label" for="type">type</label>
              <input className="form__input" name="type" type="type" id="type" placeholder="type" onChange={handleChange} />
            </div>
            <div className="address">
              <label className="form__label" for="address">address</label>
              <input className="form__input" name="address" type="address" id="address" placeholder="address" onChange={handleChange} />
            </div>
          </div>


          <div class="footer">
            <button type="submit" class="btn" onClick={handleClick}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AdminLogin;
