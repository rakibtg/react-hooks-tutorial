import React, { useEffect } from "react";

export default function User(props) {
  // componentWillUnmount life-cycle.
  useEffect(() => {
    return () => {
      console.log("Good by users!!");
    };
  });

  return <h2>Users!!</h2>;
}
