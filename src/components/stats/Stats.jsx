import React from "react";

const Stats = ({items}) => {
  if(items.length < 1) return <p className="stats"> <em>Start adding to your luggage 🚀</em></p>

  const numItems = items.length
const packedItems= items.filter((item) =>item.packed).length
const packedPercentage = numItems > 0  ? Math.round((packedItems/numItems)*100): 0
  return (
    <footer className="stats">
      
      <em>
      💼 {packedPercentage === 100 ? `You have fully packed and  ready to go ✈️ ` :` You have  ${numItems > 0 ? numItems: 0} items on 
    your list, and you have already packed ${packedItems} items ⏭ `}
      ({packedPercentage}%)
    </em>
      
      
      
      
    </footer>
  );
};

export default Stats;
