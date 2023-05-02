import React, { useContext } from "react";
import Card from "../../UI/Card";
import classes from "./MedicineLists.module.css";
import ListContext from "../../Store/list-context";
import Medicine from "./Medicine";

const MedicineLists = () => {
  const listCntxt = useContext(ListContext);
  return (
    <Card className={classes.medicine}>
      <ul>
        {listCntxt.items.map((item) => (
          <Medicine
            key={item.id}
            id={item.id}
            name={item.MdcnName}
            description={item.description}
            amount={item.amount}
            price={item.price}
          />
        ))}
      </ul>
    </Card>
  );
};
export default MedicineLists;
