import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Movie = ({ title, img, description }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} style={{ maxHeight: "15rem" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Movie;
