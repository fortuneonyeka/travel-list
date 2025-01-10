import React, { useState } from "react";

const Form = ({ handleAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Let's Pack Your Luggage For The Trip 😎</h3>
        <select name="select" value={quantity} id="" onChange={handleQuantity}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item ...."
          value={description}
          onChange={handleChange}
          required
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
