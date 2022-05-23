import React, { useEffect, useState } from "react";
import { Col, Row, Card } from "antd";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    fetch("https://my-first-firestore-mb.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data)) // data -> restaurants
      .catch(console.error);
  }, []); // fetch our API
  return (
    <section>
      <Row gutter={16}>
        {!restaurants ? (
          <h2>Loading...</h2>
        ) : (
          restaurants.map((restaurant) => (
              <Col style={{width: '300px', margin: '1em'}} key={restaurant.id}>
                <Card 
                cover={<img alt={`Photo of how ${restaurant.name}}`} src={restaurant.image} />}
                hoverable>
                <Card.Meta title={restaurant.name} description={restaurant.address} />
            </Card>
            </Col>
          ))
        )}
      </Row>
    </section>
  );
}

export default RestaurantList;
