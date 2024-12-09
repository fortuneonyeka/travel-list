import React from 'react'

const ItemList = ({item}) => {
  return (
    <div>
      <li> <span style={item.packed ? {textDecoration:"line-through", textTransform:"capitalize"} : {textTransform:"capitalize"}}>{item.quantity} {item.description} </span> <button>❌</button></li>
    </div>
  )
}

export default ItemList
