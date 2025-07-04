import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = { description, quantity: Number(quantity), packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }
  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need For your trip 😍</h3>
    <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
      {Array.from({ length: 20 }, (_, i) => (i + 1)).map(num => <option value={num} key={num}>{num}</option>)}
    </select>
    <input type="text" placeholder="Item..." value={description} onChange={(event) => setDescription(event.target.value)} />
    <button type="submit" >Add</button>
  </form>
}