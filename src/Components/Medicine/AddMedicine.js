import React, { useRef, useContext } from "react";
import classes from "./AddMedicine.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import ListContext from "../../Store/list-context";


const AddMedicine = (props) => {
  const listCntxt = useContext(ListContext);
  const nameInputRef = useRef();
  const desInputRef = useRef();
  const priceInputRef = useRef();
  const amountInputRef = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const description = desInputRef.current.value;
    const price = priceInputRef.current.value;
    const amount = amountInputRef.current.value;
    const listOfItems = {
      id: Math.random().toString(),
      MdcnName: name,
      description: description,
      price: Number(price),
      amount: Number(amount),
    };
    listCntxt.onAddMedicine(listOfItems);
    nameInputRef.current.value = "";
    desInputRef.current.value = "";
    priceInputRef.current.value = "";
    amountInputRef.current.value = "";
  };
  return (
    <Card className={classes.form}>
      <form onSubmit={onSubmitHandler}>
        <Input
          label="Medicine Name"
          ref={nameInputRef}
          input={{
            id: "amount",
            type: "text",
          }}
        />
        <Input
          label="Description"
          ref={desInputRef}
          input={{
            id: "description",
            type: "text",
          }}
        />
        <Input
          label="Price"
          ref={priceInputRef}
          input={{
            id: "price",
            type: "text",
          }}
        />
        <Input
          label="Amount"
          ref={amountInputRef}
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "100",
            step: "1",
            defaultValue: "1",
          }}
        />
        <div className={classes.action}>
          <Button type="submit">Add Medicine</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddMedicine;
