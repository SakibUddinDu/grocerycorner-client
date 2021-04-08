import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';

const Admin = () => {
    return (
       
            <Router>
      {/* <Header></Header> */}
        <Switch>
          <Route path="/addProduct">
              <AddProduct></AddProduct>
          </Route>
          <Route  path="/manageProduct">
              
          </Route>
          <Route path="/login">
            {/* <Login></Login> */}
          </Route>
          </Switch>
        </Router>
        
    );
};

export default Admin;