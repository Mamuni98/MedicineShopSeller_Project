import React, { useState } from "react";
import AddMedicine from "./Components/Medicine/AddMedicine";
import { ListProvider } from "./Store/list-context";
import MedicineLists from "./Components/Medicine/MedicineLists";
import CartButton from "./Components/Cart/CartButton";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <ListProvider>
      <CartButton onCart={showCartHandler} />
      {cartShown && <Cart onClose={hideCartHandler} />}
      <AddMedicine />
      <MedicineLists />
    </ListProvider>
  );
}

export default App;
