import React, { useState } from "react";
const ListContext = React.createContext({
  items: [],
  onAddMedicine: (list) => {},
  addingToCart: (amount) => {},
});

export const ListProvider = (props) => {
  const [itemLists, setItemLists] = useState([]);

  const addMedicineHandler = (list) => {
    setItemLists((prevlist) => {
      return [list, ...prevlist];
    });
  };

  const manageAmountHandler = (item) => {
    const existingItemIndex = itemLists.findIndex(
      (prevItem) => prevItem.id === item.id
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
  };
  // const updateAmountHandler = (id) => {
  //   const existingItemIndex = itemLists.findIndex(
  //     (prevItem) => prevItem.id === id
  //   );
  //   const existingListItem = itemLists[existingItemIndex];
  //   setItemAmount(existingListItem.amount);
  // cartUpdateAmount: updateAmountHandler,
  // }
  return (
    <ListContext.Provider
      value={{
        items: itemLists,
        onAddMedicine: addMedicineHandler,
        addingToCart: manageAmountHandler,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
export default ListContext;
