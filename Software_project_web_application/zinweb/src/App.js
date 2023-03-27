import React from 'react';
import AdminLogin from "./components/adminLogin/AdminLogin";
//import Header from './components/header';
import Adddetails from './salesreplogin/adddetails';
import Loginin from './salesreplogin/loginin';






import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/loginin" element={<AdminLogin />} />
          <Route path="/add" element={<Adddetails />} />
          <Route path="/login" element={<Loginin />} />
          <Route path="/adminlog" element={<AdminLogin />} />
         
        
        </Routes>
      </BrowserRouter>

    </div>
  );
}




export default App;

