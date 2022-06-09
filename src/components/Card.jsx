import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div>
      <img src={props.image} alt={props.description} />
      <p> {props.description}</p>
    </div>
  );
}
