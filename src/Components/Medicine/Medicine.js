import React, { useContext, useState, useEffect } from "react";
import classes from "./Medicine.module.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import CartContext from "../../Store/cart-context";
import ListContext from "../../Store/list-context";
const Medicine = (props) => {
  const cartCntxt = useContext(CartContext);
  const listCntxt = useContext(ListContext);
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (props.amount === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [props.amount, isValid]);
  const addItemToCartHandler = (event) => {
    event.preventDefault();
    const items = {
      id: props.id,
      name: props.name,
      amount: Number(1),
      price: Number(props.price),
    };
    if (isValid) {
      cartCntxt.addItem(items);
      listCntxt.addingToCart(props.id);
    }
  };

  const outOfStock = <h3 style={{ color: "red" }}>Out of Stock</h3>;

  return (
    <Card>
      <li className={classes.list}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>Rs.{props.price.toFixed(2)}</div>
        </div>
        <div>
          <div className={classes.amount}>
            {props.amount > 0 ? props.amount : outOfStock}
          </div>
          {isValid && <Button onClick={addItemToCartHandler}>+Add</Button>}
        </div>
      </li>
    </Card>
  );
};
export default Medicine;
