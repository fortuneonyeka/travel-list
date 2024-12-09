import React from "react";

const ItemList = ({ item,handleDelete, handleModify }) => {
  return (
    <div>
      <li>
        {" "}
        <span
          style={
            item.packed
              ? { textDecoration: "line-through", textTransform: "capitalize" }
              : { textTransform: "capitalize" }
          }>
          {item.quantity} {item.description}{" "}
        </span>{" "}
        <button onClick={() =>handleModify(item.id)}>✒️</button>
        <button onClick={() =>handleDelete(item.id)}>❌</button>
      </li>
    </div>
  );
};

export default ItemList;
