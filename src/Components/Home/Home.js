import React, { useEffect, useState } from 'react';
import GroceryItems from '../GroceryItems/GroceryItems';
import Header from '../Header/Header';
import './Home.css';


const Home = () => {
  const [groceryItems, setGroceryItems] = useState([])

  useEffect(() => {
    fetch('https://shielded-retreat-60482.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setGroceryItems(data) )
  }, [])


    return (
      <div>
        <Header></Header>
          <div>
                    <form className="d-flex mt-5">
                        <input type="text" className="form-control" placeholder="Search" />
                        <button className="btn btn-primary">Search</button>
                    </form>
                </div>  
        <div className="row">
        
            {
                groceryItems.map( groceryItem =><GroceryItems  groceryItem={groceryItem}></GroceryItems>)
            }
        </div>
      </div>
    );
};

export default Home;