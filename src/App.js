import { useState } from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import PackingList from "./components/packinngList/PackingList";
import Stats from "./components/stats/Stats";

function App() {
  const [items, setItems] = useState([]);


  
  
  

  const handleAddItems = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const handleDelete = (id) => {
   const updatedItem =  items.filter((item) => item.id !== id)
   setItems(updatedItem)
  }

  const handleClearList =  () => {
    const confirm = window.confirm("Are you sure you want to clear the list?")
    if(confirm) setItems([])
  }


  const modifyItem = (id, newDescription) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, description: newDescription } : item
      )
    );
  };

  const handleModify = (id) => {
    const newDescription = prompt("Enter the new description:");
    
    if (newDescription) {
      modifyItem(id, newDescription);
    }
  };

  
  const handleCheckBox = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  
  

  return (
    <div className="app">
      <Header />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} handleDelete={handleDelete} handleModify=
      {handleModify} handleCheckBox={handleCheckBox} handleClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
