import React from 'react';
import AdminLogin from "./components/adminLogin/AdminLogin";
import Header from './components/header';
import Adddetails from './salesreplogin/adddetails';
import Loginin from './salesreplogin/loginin';
import Additem from '/stock/additem';
import Removeitem from '/stock/removeitem';
import Updateitem from '/stock/updateitem';





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
          <Route path ="/additem" element={<Additem/>}/>
          <Route path ="/removeitem" element={<Removeitem/>}/>
          <Route path ="/updateitem" element={<Updateitem/>}/>
          

        </Routes>
      </BrowserRouter>

    </div>
  );
}




export default App;

