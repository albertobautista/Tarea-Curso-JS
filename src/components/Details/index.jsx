import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { brand } = useParams();

  return <div>{brand}</div>;
};

export default Details;
