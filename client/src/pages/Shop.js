import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Shop() {
  const user = useSelector(state => state.user);
  return (
    <h1>ShopPage</h1>
  )
}
