import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import avator from '../../resources/icons/Avatar face.png';
import logo from '../../resources/icons/logo.png';
import "./Header.css";

const Header = () => {

  
  return (
    <div>
      
        <Navbar expand="lg" >
        <Navbar.Brand href="#">
          <a class="navbar-brand" href="#home"><img className="logo" src={logo} alt="" /></a> 
          </Navbar.Brand>
          <Nav className="mr-5 navItems">
            <Link className="navItem" to="/home">Home</Link>
            <Link className="navItem"  to="/orders">Orders</Link>
            <Link  className="navItem" to="/admin">Admin</Link>
            <Link  className="navItem" to="/deals">Deals</Link>
            <Link to="/login">
                <Button  variant="outline-dark">LogIn</Button>
            </Link>
          </Nav>
          <Navbar.Brand href="#">
          <a class="navbar-brand" href="#home"><img className="logo" src={avator} alt="" /></a> 
          </Navbar.Brand>
        </Navbar>
   
    </div>
  );
};

export default Header;



// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//     return (
//         <div>
//             <div className="my-5">

//                 <nav class="navbar navbar-expand-lg navbar-light">
                    // {/* <a class="navbar-brand" href="#home"><img className="logo" src={logo} alt="" /></a> */}
//                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarNav">
//                         <ul class="navbar-nav ml-auto">
//                             <li class="nav-item active">
//                                 <Link to="/home" class="nav-link">Home <span class="sr-only">(current)</span></Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link to="/donation" class="nav-link">Donation</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link to="/event" class="nav-link">Event</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link to="/Blog" class="nav-link">Blog</Link>
//                             </li>
//                             <li class="nav-item">
//                             <Link to="/register"><Button className="btn btn-primary px-4 mr-2 mb-2">Register</Button></Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link to="/adminPanel"><Button className="btn btn-dark px-4"> Admin </Button></Link>
//                             </li>
                            
//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default Header;