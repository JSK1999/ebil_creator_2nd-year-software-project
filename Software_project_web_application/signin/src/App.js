import logo from './logo.svg';
import React ,{useState} from "react";
import axios from 'axios';
import './App.css';





function App() {
const[useridReg,setuseridReg] = useState("");
const[passwordReg,setpasswordReg] = useState("");

const[userid,setuserid] = useState("");
const[password,setpassword] = useState("");

const register = ()=>{
  axios.post("http://localhost:8800/userreg",{userid:useridReg,
  password:passwordReg,
})
  .then((response)=>{
    console.log(response);
  });

};

const login = ()=>{
  axios.post("http://localhost:8800/userlog",{userid:userid,
  password:password,
})
  .then((response)=>{
    console.log(response);
  });

};
//after the click the data should be saved in the //database ., the function is written for that.
  return (
    <div>
<div className="App">
  <div className="registration">
    <h1>Registration</h1><br>
   
    
    </br>
    <label>userid</label>
    <input type="text" onChange={(e)=>{
      setuseridReg(e.target.value);
    }}
    />
    
    <label>Password</label>
    <input type = "text"onChange={(e)=>{
      setpasswordReg(e.target. value);
    }}
    />
    <button onClick={register}>Register</button>
  </div>
  <div className="login">
    <h1>Loginin</h1>
    <input type = "text" placeholder="userid..." onChange={(e)=>{
      setuserid(e.target.value);
    }}
    />
    <input type = "passsword" placeholder="password..."onChange={(e)=>{
      setpassword(e.target.value);
    }}
    />
    <button onClick={login}>Login</button>
    
  </div>
</div>
    </div>

  );
}

export default App;
