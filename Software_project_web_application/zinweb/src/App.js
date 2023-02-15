
import React from "react";
import AdminLogin from "./components/adminLogin/AdminLogin";
import zincat from './image/zincat.png';


function App() {
  return (
    <div className="App">
      <br></br>
      <img src={zincat} className = "zincat" class= "center"  alt = ""/>
      <br></br>
      <AdminLogin />
    </div>
  );
}

export default App;

