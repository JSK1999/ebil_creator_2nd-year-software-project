//nadun//import logo from './logo.svg';
import React ,{useState} from "react";
import axios from 'axios';
import './App.css';
//import useNavigate from "react-router-dom"
import classes from "./App.css";
import backgroundLogo from "../src/images/Background vector group.png";
import logo from "../src/images/zr red.png";



function App() {
const[useridReg,setuseridReg] = useState("");
const[passwordReg,setpasswordReg] = useState("");

const[userid,setuserid] = useState("");
const[password,setpassword] = useState("");


const [loginStatus,setloginStatus] = useState("");


//const navigate = useNavigate();

const register = ()=>{
  axios.post("http://localhost:8800/userreg",{userid:useridReg,
  password:passwordReg,
})
  .then((response)=>{
    console.log(response);
  });

};

const login = ()=>{
  axios.post("http://localhost:8800/userpw",{userid:userid,
  password:password,
})
  .then((response)=>{
    if(response.data.message){
      setloginStatus(response.data.message)
    }else{
      setloginStatus(response.data[0].userid)
    }

  });

};
//after the click the data should be saved in the //database ., the function is written for that.
  return (
    <div>
          <div className={classes.signI_main_div}>
 <div className="App">
<img src={logo} alt="zr image" className={classes.signIn_logo} />
<div className={classes.signIn_second_div}>
        <div className={classes.signIn_third_div}>
        <h1 className={classes.signIn_third_div_heding}>Sign In</h1>
          <p className={classes.signIn_third_div_para}></p>

  {/* <div className="registration">
   <h1>Registration</h1><br></br> */}
    <label>userid </label><br></br>
    <input type="text" onChange={(e)=>{
      setuseridReg(e.target.value);
    }}
    />
  <br></br>
    <label>Password </label><br></br>
    <input type = "text"onChange={(e)=>{
      setpasswordReg(e.target. value);
    }}
    /><br></br>
    <button onClick={register}>register</button>
  </div>


  {/* <div className="login">
    <h1>Login</h1><br></br>
    <input type = "text" placeholder="userid..." onChange={(e)=>{
      setuserid(e.target.value);
    }}
    /><br></br>
    <input type = "passsword" placeholder="password..."onChange={(e)=>{
      setpassword(e.target.value);
    }}
    /><br></br>
    <button onClick={login}>login</button>
    
  </div> */}


  
</div>
</div>
</div>
<h1>{loginStatus}</h1>

<img
        className={classes.signIn_image}
        src={backgroundLogo}
        alt="background image"
      />
    </div>
    //</div>


  );
}

export default App;
