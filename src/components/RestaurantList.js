import React, { useEffect, useState } from "react";
import { Row } from "antd";
import RestaurantCard from "./RestaurantCard";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    fetch("https://my-first-firestore-mb.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data)) // data -> restaurants
      .catch(console.error);
  }, []); // fetch our API
  return (
    <section style={{ marginTop: '60px' }}>
      <Row>
        {!restaurants ? 
          <h2>Loading...</h2>
         : 
          restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} key={restaurant.id} />)}
      </Row>
    </section>
  );
}

export default RestaurantList;
