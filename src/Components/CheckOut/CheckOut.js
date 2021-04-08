// import { Button } from "bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Header from "../Header/Header";

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  const { _id } = useParams();
  const [product, setProduct] = useState({});
  console.log(product);

  useEffect(() => {
    fetch("https://shielded-retreat-60482.herokuapp.com/product/" + _id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [_id]);

  const handleCheckOut = () =>{
    const productDetails = {...loggedInUser, ...product, orderTime: new Date()}
    fetch("https://shielded-retreat-60482.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
    .then(res =>res.json())
    .then(data =>{
      // console.log(data);
      if(data){
        alert('Order Placed Successfully')
      }
    })
  }

  return (
    <div>
      <Header></Header>
      <h2>Checkout</h2>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>1</td>
            <td ><img style={{width: "100px", height:"50px"}} src={product.pic} alt=""/></td>
            <td>{product.price}</td>
          </tr>
        </tbody>
      </table>
      <Button onClick={handleCheckOut} className="mt-5">Checkout</Button>
      {/* <Button className="mt-5">Checkout</Button> */}
    </div>
  );
};

export default CheckOut;
