import React, { useContext } from "react";
import classes from "./Medicine.module.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import CartContext from "../../Store/cart-context";
import ListContext from "../../Store/list-context";
const Medicine = (props) => {
  const cartCntxt = useContext(CartContext);
  const listCntxt = useContext(ListContext);
  //console.log(props.amount);
  const hasAmount = props.amount > 0;
  const addItemToCartHandler = (event) => {
    event.preventDefault();
    const items = {
      id: props.id,
      name: props.name,
      amount: Number(1),
      price: Number(props.price),
    };
    cartCntxt.addItem(items);
    listCntxt.addingToCart(props);
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
          <div className={classes.action}>
            {hasAmount && (
              <Button className={classes.btn} onClick={addItemToCartHandler}>
                +Add
              </Button>
            )}
          </div>
        </div>
      </li>
    </Card>
  );
};
export default Medicine;
