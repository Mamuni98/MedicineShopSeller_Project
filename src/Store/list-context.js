import React, { useState } from "react";
const ListContext = React.createContext({
  items: [],
  onAddMedicine: (list) => {},
  decreaseAmount: (amount) => {},
});

export const ListProvider = (props) => {
  const [itemLists, setItemLists] = useState([]);

  const addMedicineHandler = (list) => {
    setItemLists((prevlist) =>{
     return [list, ...prevlist];
    });
  };

  const decreaseAmountHandler = () => {};
  return (
    <ListContext.Provider
      value={{
        items: itemLists,
        onAddMedicine: addMedicineHandler,
        decreaseAmount: decreaseAmountHandler,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
export default ListContext;
