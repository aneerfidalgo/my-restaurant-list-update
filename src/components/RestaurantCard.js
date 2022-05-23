import { Col, Card } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";

const { Meta } = Card;

export default function RestaurantCard({ restaurant }) {
  let navigate = useNavigate()
  return (
    <Col style={{ width: "300px", margin: "1em" }}>
      <Card
      loading={!restaurant}
        onClick={() => navigate(`/restaurants/${restaurant?.id}`)}
        cover={restaurant &&  <img alt={restaurant?.name} src={restaurant?.image} /> }
        hoverable>
        <Meta title={restaurant?.name} description={restaurant?.address} />
      </Card>
    </Col>
  );
}
