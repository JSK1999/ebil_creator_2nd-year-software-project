//import logo from './logo.svg';
import React ,{useState} from "react";
import axios from 'axios';
import './App.css';





function App() {
const[useridReg,setuseridReg] = useState("");
const[passwordReg,setpasswordReg] = useState("");

const[userid,setuserid] = useState("");
const[password,setpassword] = useState("");

const [loginStatus,setloginStatus] = useState("");

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
<div className="App">
  <div className="registration">
    <h1>Registration</h1>
    <label>userid </label>
    <input type="text" onChange={(e)=>{
      setuseridReg(e.target.value);
    }}
    />
  
    <label>Password </label>
    <input type = "text"onChange={(e)=>{
      setpasswordReg(e.target. value);
    }}
    />
    <button onClick={register}>register</button>
  </div>
  <div className="login">
    <h1>Login</h1>
    <input type = "text" placeholder="userid..." onChange={(e)=>{
      setuserid(e.target.value);
    }}
    />
    <input type = "passsword" placeholder="password..."onChange={(e)=>{
      setpassword(e.target.value);
    }}
    />
    <button onClick={login}>login</button>
    
  </div>
</div>
<h1>{loginStatus}</h1>
    </div>

  );
}

export default App;
