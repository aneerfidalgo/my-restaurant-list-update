import { Col, Card } from "antd";
import React from "react";

const { Meta } = Card;

export default function RestaurantCard({ restaurant }) {
  return (
    <Col style={{ width: "300px", margin: "1em" }}>
      <Card
        cover={
          <img alt={restaurant.name} src={restaurant.image} />
        }
        hoverable
      >
        <Meta title={restaurant.name} description={restaurant.address} />
      </Card>
    </Col>
  );
}
