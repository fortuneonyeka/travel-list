import React, { useState } from "react";
import Item from "../item/Item";

const PackingList = ({ items,handleDelete, handleModify, handleCheckBox, handleClearList}) => {
  const [sortBy, setSortBy] = useState("input")

  let sortedItems;
  if(sortBy === "input") {
    sortedItems = items

  } else if(sortBy ===  "description"){
    sortedItems = [...items].sort((a,b) => a.description.localeCompare(b.description))
  } else if(sortBy ===  "packed") {
    sortedItems = [...items].sort((a,b) => a.packed - b.packed)
  }else  if(sortBy  === "quantity") {
    sortedItems = [...items].sort((a,b) =>a.quantity -b.quantity)
  }

  


    
    
 
  
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} handleDelete={handleDelete} handleModify={handleModify} handleCheckBox={handleCheckBox}/>
        ))}
      </ul>
      <div className="actions">
        <select name="" id="" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="packed">Sort by Packed status</option>
          <option value="description" >Sort by  Descriptions</option>
          <option value="quantity" >Sort by  quantity</option>
          </select>

          <button onClick={handleClearList}>clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
