import React from "react";
import { Text } from "./Text";

const Card = (props) => {
  return (
    <div>
      <Text>{props.id}</Text>
      <Text>{props.title}</Text>
      <Text>{props.body}</Text>
    </div>
  );
};

export default Card;
