import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import AddProduct from "./Components/AddProduct/AddProduct";
import CheckOut from "./Components/CheckOut/CheckOut";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PrivetRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   
    <div className="App">
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      {/* <Header></Header> */}
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute path="/checkout/:_id">
            <CheckOut></CheckOut>
          </PrivetRoute>
          {/* <Route path="/checkout/:_id">
            <CheckOut></CheckOut>
          </Route> */}
         
           
               {/* <Route path="/userinfo">
          <UserInfoData></UserInfoData>
          </Route>
          <PrivetRoute path="/register">
            <Register></Register>
          </PrivetRoute>
          <PrivetRoute path="/adminPanel">
            <AdminPanel></AdminPanel>
          </PrivetRoute>*/}
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route> 
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
     
    </div>
  );
}

export default App;
