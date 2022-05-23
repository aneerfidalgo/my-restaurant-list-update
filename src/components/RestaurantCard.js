import { Col, Card, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../App";


const { Meta } = Card;

export default function RestaurantCard({ restaurant }) {
  let navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <Col style={{ width: "300px", margin: "1em" }}>
      <Card
      loading={!restaurant}
        onClick={() => navigate(`/restaurants/${restaurant?.id}`)}
        cover={restaurant &&  <img alt={restaurant?.name} src={restaurant?.image} /> }
        hoverable>
        <Meta title={restaurant?.name} 
          description={restaurant?.address} />
          {user && <Rate />}
      </Card>
    </Col>
  );
}
