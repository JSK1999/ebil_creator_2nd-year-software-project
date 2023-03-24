// import React, { useState } from 'react';
// import styles from './AdminLogin.module.css';
// import Header from '../header';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom';
// //import PasswordEncrypt from './passwordEncrypt';

// // const [firstName, setFirstName] = useState(null);
// // const [lastName, setLastName] = useState(null);
// // const [email, setEmail] = useState(null);
// // const [password,setPassword] = useState(null);
// // const [confirmPassword,setConfirmPassword] = useState(null);




// function AdminLogin() {
//   const [values, setValues] = useState({
//     rid: "",
//     nic: "",
//     registrationdate: "",
//     fullname: "",
//     password: "",
//     email: "",
//     phoneNo: "",
//     type: "",
//     address: ""
//   });

  
//   const Navigate = useNavigate()

//   const handleChange = (e) => {
//     setValues((value) => ({ ...value, [e.target.name]: e.target.value }))
//   };

//   console.log(values);


//   const handleClick = async e => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8800/salesrep", values)
//       Navigate("/")
//     } catch (err) {
//       console.log(err);
//     }

//   }


//   return (

//     <div className={styles.main}>
//       <div className={styles.sub_main}>
//         <div className="form">
//           <div className="form-body">
//             <div className="rid">
//               <label className="form__label" for="rid">RID </label>
//               <input className="form__input" type="text" id="rid" name="rid" placeholder="rid" onChange={handleChange} />
//             </div>
//             <div className="nic">
//               <label className="form__label" for="nic">NIC</label>
//               <input type="text" name="nic" id="nic" className="form__input" placeholder="nic" onChange={handleChange} />
//             </div>
//             <div className="registrationdate">
//               <label className="form__label" for="registrationdate">registrationdate</label>
//               <input type="text" name="registrationdate" id="registrationdate" className="form__input" placeholder="registrationdate" onChange={handleChange} />
//             </div>
//             <div className="fullname">
//               <label className="form__label" for="fullname">fullname </label>
//               <input className="form__input" name="fullname" type="fullname" id="fullname" placeholder="fullname" onChange={handleChange} />
//             </div>
//             <div className="password">
//               <label className="form__label" for="password">Password </label>
//               <input className="form__input" name="password" type="password" id="password" placeholder="Password" onChange={handleChange} />
//             </div>
//             <div className="email">
//               <label className="form__label" for="email">Email </label>
//               <input type="email" id="email" name="email" className="form__input" placeholder="Email" onChange={handleChange} />
//             </div>

//             <div className="phoneNo">
//               <label className="form__label" for="phoneNo">phoneNo</label>
//               <input className="form__input" name="phoneNo" type="phoneNo" id="phoneNo" placeholder="phoneNo" onChange={handleChange} />
//             </div>
//             <div className="type">
//               <label className="form__label" for="type">type</label>
//               <input className="form__input" name="type" type="type" id="type" placeholder="type" onChange={handleChange} />
//             </div>
//             <div className="address">
//               <label className="form__label" for="address">address</label>
//               <input className="form__input" name="address" type="address" id="address" placeholder="address" onChange={handleChange} />
//             </div>
//           </div>


//           <div class="footer">
//             <button type="submit" class="btn" onClick={handleClick}>Register</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default AdminLogin;


import React, { useRef, useState } from "react";
import classes from "./RegisterRep.module.css";
import backgroundDesign from "../../assets/Background vector group.png";
import logo from "../../assets/zr red.png";
import { useNavigate } from "react-router-dom";
import ResitrationSuccess from "./ResitrationSuccess";
import axios from "axios";







const RegisterRep = () => {
  const nameInputRef = useRef();
  const mobileInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const cPasswordInputRef = useRef();
  const nicInputRef = useRef();
  const addressInputRef = useRef();
  const dobInputRef = useRef();
  const documentInputRef = useRef();
  const dateInputRef = useRef();
  const [genderInput,setGenderInput] = useState();

  //validation logic values
  const [validationLogic,setValidationLogic] = useState();
  const [passwordValidLogic,setPasswordValidLogic] = useState();
  const [emailValidLogic,setEmailValidLogic] = useState();
  const [nicValidLogic,setNicValidLogic] = useState();
  const[buttonLogic,setButtonLogic] = useState(false);

  const navigation = useNavigate();




  const genderHandler = event =>{
    setGenderInput(event.target.value);
   
  }

// const handleClick = async e =>{
//   e.preventDefault();
//   try{
//     await axios.post ("http://localhost:8800/salesrep",inputValues)

//   }catch(err){
//     console.log(err);

//   }
// }


  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    const inputValues ={
      fullname:nameInputRef.current.value,
      phonenumber:mobileInputRef.current.value,
      email:emailInputRef.current.value,
      password:passwordInputRef.current.value,
      reenterpassword:cPasswordInputRef.current.value,
      NIC:nicInputRef.current.value,
      adressValue:addressInputRef.current.value,
      dobValue:dobInputRef.current.value,
      documentValue:documentInputRef.current.value,
      registrationdate:dateInputRef.current.value,
      sex:genderInput
    }

    if(inputValues.fullname.trim()===''|| inputValues.phonenumber.trim()===''||inputValues.email.trim()===''|| inputValues.password.trim()===''||inputValues.reenterpassword.trim()===''|| inputValues.NIC.trim()===''||inputValues.adressValue.trim()===''|| inputValues.dobValue===''|| inputValues.registrationdate===''){
      setValidationLogic(true);
      console.log('setting true')
      return;
      
    }else{
      setValidationLogic(false)
    }

      // FORM VALIDATION

      


  // password validation

  if(inputValues.password!== inputValues.reenterpassword){
    setPasswordValidLogic(true);
    return;
  }else{
    setPasswordValidLogic(false);
  }

  // email validation

  const emailString = String(inputValues.email);


 if(!(emailString.includes('@'))){
  setEmailValidLogic(true);
  console.log("email does not have @");
  return;
 }else{
  setEmailValidLogic(false)
 }

 //NIC validation
 const nicString = String(inputValues.NIC);
 if(!(nicString.match('V')||nicString.includes('v'))){
  setNicValidLogic(true);
  console.log("nic does not has v");
  return;
 }else{
  setNicValidLogic(false);
 }



    console.log(inputValues.fullname,inputValues.phonenumber,inputValues.email,inputValues.password,inputValues.reenterpassword,inputValues.nicValue,inputValues.adressValue,inputValues.dobValue,inputValues.documentValue,inputValues.registrationdate,inputValues.sex);

    console.log("validlogic",validationLogic,"email logic",emailValidLogic,"password logic",passwordValidLogic,"nic logic",nicValidLogic);

    if(!((validationLogic ===true)||(passwordValidLogic ===true)||(emailValidLogic ===true)||(nicValidLogic ===true))){
      console.log('validation all are correct');



        // sending data to backend

        const handleClick = async e =>{
          e.preventDefault();
          try{
            await axios.post ("http://localhost:8800/salesrep",inputValues)
        
          }catch(err){
            console.log(err);
        
          }
        }

        handleClick();
      setButtonLogic(true);
      // navigation("/");
    }
  };

  const imgOnclickHandler = ()  =>{
      navigation("/");
  }





 

  return (
    <div className={classes.main_div}>
      {!buttonLogic &&(<div className={classes.secondry_div}>
        <img  className={classes.zr_logo}  onClick={imgOnclickHandler} src={logo} alt="zr red logo" />
        <form onSubmit={formSubmitHandler} className={classes.form_main}>
          <h2 className={classes.form_heading}>
            Sales Representative Registration
          </h2>
          <table className={classes.form_table}>
            <tbody>
              <tr className={classes.form_tr1}>
                <td>
                  Name <br></br>
                  <input
                    ref={nameInputRef}
                    type="text"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  Mobile <br></br>
                  <input
                    ref={mobileInputRef}
                    type="text"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  Email <br></br>
                  <input
                    ref={emailInputRef}
                    type="text"
                    className={`${classes.form_inputs} ${emailValidLogic &&(classes.err_style)}`}
                  />
                </td>
              </tr>
              <tr className={classes.form_tr2}>
                <td>
                  Password <br></br>
                  <input
                    ref={passwordInputRef}
                    type="password"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  Confirm Password <br></br>
                  <input
                    ref={cPasswordInputRef}
                    type="password"
                    className={`${classes.form_inputs} ${passwordValidLogic &&(classes.err_style)}`}
                  />
                </td>

                <td>
                  NIC <br></br>
                  <input
                    ref={nicInputRef}
                    type="text"
                    className={`${classes.form_inputs} ${nicValidLogic &&(classes.err_style)}`}
                  />
                </td>
              </tr>
              <tr className={classes.form_tr3}>
                <td>
                  Address <br></br>
                  <input
                    ref={addressInputRef}
                    type="text"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  DOB <br></br>
                  <input
                    ref={dobInputRef}
                    type="date"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  Document <br></br>
                  <input
                    ref={documentInputRef}
                    type="file"
                    className={classes.form_inputs}
                  />
                </td>
              </tr>
              <tr className={classes.form_tr4}>
                <td>
                  Date <br></br>
                  <input
                    ref={dateInputRef}
                    type="date"
                    className={classes.form_inputs}
                  />
                </td>

                <td>
                  Sex <br></br>
                  {/* <div className={classes.td_div}><input   value="option1"   type = 'radio' name ="name" className={classes.form_input_radio} /> <span>Male </span> </div>
                <div className={classes.td_div}><input   value="option2" checked type = 'radio' name ="name" className={classes.form_input_radio} /> <span>Female</span>  </div> */}
                  <select className={classes.form_select}  id="gender" name="gender" form="gender" onChange={genderHandler}>
                  <option value=" "> </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option> 
                  </select>
                </td>

                {/* <td>
                empty   <br ></br>
                <input type = 'text' />
              </td> */}
              </tr>
            </tbody>
          </table>
          {validationLogic && <p className={classes.err_para}>All inputs should  be filled*</p>}
          <div className={classes.form_button_div}>
            <button type="submit" className={classes.form_cancel} >
              {" "}
              Cancel
            </button>
            <button className={classes.form_continue}>Continue</button>
          </div>
          
        </form>
      
      </div>  )}
   {buttonLogic&&(<ResitrationSuccess  style ={classes.erro_message} />  )}
      <img
        className={classes.img_back}
        src={backgroundDesign}
        alt="background vector"
      />
    </div>
  );
};

export default AdminLogin;
