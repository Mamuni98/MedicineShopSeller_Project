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

  const manageCartHandler = (item) => {
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

  return (
    <ListContext.Provider
      value={{
        items: itemLists,
        onAddMedicine: addMedicineHandler,
        addingToCart: manageCartHandler,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
export default ListContext;
