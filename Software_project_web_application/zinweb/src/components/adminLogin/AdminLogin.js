import React from 'react';
import classes from './adminLogin.module.css';


const AdminLogin = () => {
  return (
    <div className={classes.main_div}>
     <div className={classes.div_l}>
     
        <div className={classes.image}>  </div>
   </div>

     <div className={classes.div_r}>  
     <h1 className={classes.center}>Welcome</h1>
     <p className={classes.para1}>Please login to Admin Dashboard.</p>
     <input className={classes.input} type ='text' placeholder='username'></input>
     <input className={classes.input} type ='password'     placeholder='password'></input>
     <button className={classes.btn}>Login</button>
     </div>
    
    </div>
  )
}
export default AdminLogin;



