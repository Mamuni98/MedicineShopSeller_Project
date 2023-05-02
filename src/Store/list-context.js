import React, { useState } from "react";
const ListContext = React.createContext({
  items: [],
  amount: null,
  cartUpdateAmount: (id) => {},
  onAddMedicine: (list) => {},
  addingToCart: (amount) => {},
});

export const ListProvider = (props) => {
  const [itemLists, setItemLists] = useState([]);
  const [itemAmount, setItemAmount] = useState();

  const addMedicineHandler = (list) => {
    setItemLists((prevlist) => {
      return [list, ...prevlist];
    });
  };

  const manageAmountHandler = (id, amount) => {
    const existingItemIndex = itemLists.findIndex(
      (prevItem) => prevItem.id === id
    );
    const existingListItem = itemLists[existingItemIndex];
    let updatedItems;
    const updatedItem = {
      ...existingListItem,
      amount: existingListItem.amount - 1,
    };
    updatedItems = [...itemLists];
    updatedItems[existingItemIndex] = updatedItem;

    setItemLists(updatedItems);
    setItemAmount((prev) => {
      return updatedItem.amount});
  };
  const updateAmountHandler = (id) => {
    const existingItemIndex = itemLists.findIndex(
      (prevItem) => prevItem.id === id
    );
    const existingListItem = itemLists[existingItemIndex];
    setItemAmount(existingListItem.amount);
  }
  return (
    <ListContext.Provider
      value={{
        items: itemLists,
        amount: itemAmount,
        cartUpdateAmount: updateAmountHandler,
        onAddMedicine: addMedicineHandler,
        addingToCart: manageAmountHandler
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
export default ListContext;
