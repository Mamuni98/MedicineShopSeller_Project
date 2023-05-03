import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseAmount: (item) => {},
  order: () => {}
});

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalMedicineAmount, setTotalMedicineAmount] = useState(Number(0));

  const addItemInCartHandler = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (prevItem) => prevItem.id === item.id
    );
    const existingCartItem = cartItems[existingItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + item.amount,
  
      };
      updatedItems = [...cartItems];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = [...cartItems, item];
    }
    setCartItems(updatedItems);

    setTotalMedicineAmount((prevTotal) => {
      const totalPrice = prevTotal + item.price * Number(item.amount);
      return totalPrice;
    });
  };

  const removeItemFromCartHandler = (id) => {
    const existingItemIndex = cartItems.findIndex(
      (prevItem) => prevItem.id === id
    );
    const existingCartItem = cartItems[existingItemIndex];

    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = cartItems.filter((item) => item.id !== id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - Number(1),
      };
      updatedItems = [...cartItems];
      updatedItems[existingItemIndex] = updatedItem;
    }
    setCartItems(updatedItems);
    setTotalMedicineAmount(totalMedicineAmount - Number(existingCartItem.price));
  };

  const increaseAmountHandler = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (prevItem) => prevItem.id === item.id
    );
    const existingCartItem = cartItems[existingItemIndex];

    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + Number(1),
    };
    let updatedItems = [...cartItems];
    updatedItems[existingItemIndex] = updatedItem;
    setCartItems(updatedItems);
    setTotalMedicineAmount(totalMedicineAmount + existingCartItem.price);
  };

  const orderItemsHandler = () => {
    setCartItems([]);
    setTotalMedicineAmount(Number(0));
  }

  const cartContext = {
    items: cartItems,
    totalAmount: totalMedicineAmount,
    addItem: addItemInCartHandler,
    removeItem: removeItemFromCartHandler,
    increaseAmount: increaseAmountHandler,
    order: orderItemsHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
