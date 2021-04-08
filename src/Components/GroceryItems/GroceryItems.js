import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const GroceryItems = ({ groceryItem }) => {
  const {_id, name, price} =  groceryItem;
  console.log(groceryItem);
  return (
    <Card
      className=" container col-md-3 mt-5  pl-5 "
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={groceryItem.pic} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="d-flex justify-content-between mt-5">
          <h3>${price}</h3>
          <Link to={`/checkout/${_id}`}>
          <Button  variant="primary">Buy Now</Button>
          </Link>
     
        </div> 
      </Card.Body>
    </Card>
  );
};

export default GroceryItems;
