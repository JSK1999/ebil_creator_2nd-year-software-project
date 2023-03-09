import React from 'react';

import Additem from './item/additem';
import Stock from './item/stock';
import Updateitem from './item/updateitem';
import{
  BrowserRouter,
  Routes,
  Route,
}
from "react-router-dom";





class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
        Stock: [],
        DataisLoaded: false
    };
}
componentDidMount() 
{fetch(
  "http://localhost:8800/stock")
              .then((res) => res.json())
              .then((json) => {
                  this.setState({
                      Stock: json,
                      DataisLoaded: true
                  });
              })
            }
              render() {
                const { DataisLoaded, Stock } = this.state;
                if (!DataisLoaded) return <div>
                    <h1> Pleses wait some time.... </h1> </div> ;



function App() {
  return (
    <div className="App">



<BrowserRouter>
                      <Routes>
                      <Route path ="/additem" element={<Additem/>}/>
                      <Route path ="/stock" element={<Stock/>}/>
                      <Route path ="/updateitem" element={<Updateitem/>}/>
                     
                     </Routes> 
                     </BrowserRouter></div>

)
}

                     return (
                      <div className="App">
<h1> Fetch data from an api in react </h1>  {
                Stock.map((Stock) => ( 
                <ol key = { Stock.ID } >
                    stockID: {Stock.ID }, 
                    qty: { Stock.qty }, 
                    productname: {Stock.productname},
                    name:{Stock.name},
                    price:{Stock.price},
                    manufaturedate:{Stock.manufacturedate},
                   expirydate: {Stock.expirydate},
                    discount:{Stock.discount}

                    </ol>




                ))
            }


</div>
 );

}
}


export default App;

