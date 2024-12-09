import { useState } from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import PackingList from "./components/packinngList/PackingList";
import Stats from "./components/stats/Stats";

function App() {
  const [items, setItems] = useState([])
  const handleAddItems = (item) => {
    setItems((prev) => [...prev, item])
  }
  return (
    <div className="app">
      <Header />
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

export default App;
