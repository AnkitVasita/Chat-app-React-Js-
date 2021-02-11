import React from "react";
import { useParams } from "react-router-dom";

const Check = () => {
  const { roomId } = useParams();

  return (
    <div>
      <h1>it is working {roomId}.</h1>
    </div>
  );
};

export default Check;
