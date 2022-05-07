import { memo } from "react";
import React from "react";

const Home = (props) => {
  console.log("inner components", props.tata);
  return (
    <div>
      <h1>Home Components</h1>
    </div>
  );
};

export default memo(Home);
