import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/AddProduct/AddProduct";
import CheckOut from "./Components/CheckOut/CheckOut";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
// export const AdminPanelContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  // const [adminPanel, setAdminPanel] = useState({})
  
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        {/* <AdminPanelContext.Provider value={ [adminPanel, setAdminPanel]}> */}
        <Router>
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
            <PrivateRoute path="/checkout/:_id">
              <CheckOut></CheckOut>
            </PrivateRoute>
         
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
         
            <PrivateRoute path="/admin">
              <AddProduct></AddProduct>
            </PrivateRoute>
            {/* <Route path="/admin">
              <AddProduct></AddProduct>
            </Route>
         
             <Route path="/checkout/:_id">
              <CheckOut></CheckOut>
            </Route>
            <Route path="/orders">
              <Orders></Orders>
            </Route> */}

            <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        {/* </AdminPanelContext.Provider> */}
      </UserContext.Provider>
    </div>
  );
};

export default App;
