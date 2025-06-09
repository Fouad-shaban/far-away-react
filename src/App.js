import { useState } from 'react';
import './index.css';


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];


function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  
  function handleDeleteItem(id) {
  setItems((prevItems) => prevItems.filter(item => item.id !== id));
  
}

function handleTogglePacked(id) {
  setItems(prevItems =>
    prevItems.map(item =>
      item.id === id ? { ...item, packed: !item.packed } : item
    )
  );
}

  return (
    <>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onTogglePacked={handleTogglePacked} />
      <Stats />
    </>
  );
}

export default App;


function Logo() {
  return <h1>✨ Far Away</h1>;
}

function Form({onAddItem}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    
    const newItem = {description, quantity: Number(quantity), packed: false, id: Date.now()};
    console.log(newItem);

    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }
  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need For your trip 😍</h3>
    <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
      {Array.from({ length: 20 }, (_, i) => (i + 1)).map(num => <option value={num} key={num}>{num}</option>)}
    </select>
    <input type="text" placeholder="Item..." value={description} onChange={(event) => setDescription(event.target.value)} />
    <button type="submit" >Add</button>
  </form>
}

function PackingList({ items, onDeleteItem, onTogglePacked }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onTogglePacked={onTogglePacked} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onTogglePacked }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}} className={` ${item.packed ? "packed" : ""}`}>
      <input type="checkbox" checked={item.packed} onChange={() => onTogglePacked(item.id)} />
      <span>{item.quantity} {item.description}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return <footer className="stats">
    <em> you have X items on Your List, and you already packed X (x%)</em>
  </footer>

}
