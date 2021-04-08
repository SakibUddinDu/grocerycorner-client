import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([])
    useEffect(()=> {
        fetch("https://shielded-retreat-60482.herokuapp.com/orders?email="+loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    }, [])

    return (
        <div>
            <h3>You Have {orders.length} orders</h3>
            <table class="table">
      <thead>
        <tr>
          <th scope="col"> Name</th>
          <th scope="col">Customer Email</th>
          <th scope="col">Order Time</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
     </table>
            {
                orders.map( order => <OrderDetails order={order} ></OrderDetails>)
            } 
            
        </div>
    );
};

export default Orders;