import React, {useContext} from "react";
import Card from "../UI/Card";
import classes from "./MedicineLists.module.css";
import ListContext from "../Store/list-context";

const MedicineLists = () => {
    const listCntxt = useContext(ListContext);
  return (
    <Card className={classes.medicine}>
      <ul>
        {listCntxt.items.map((item) => (
          <li key={item.id}>
            {item.MdcnName} - {item.description} - Rs.{item.price.toFixed(2)} - {item.amount}
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default MedicineLists;
