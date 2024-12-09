import React from "react";
import Item from "../item/Item";

const PackingList = ({ items,handleDelete, handleModify }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} handleDelete={handleDelete} handleModify={handleModify}/>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
