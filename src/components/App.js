import { useState } from 'react';
import '../index.css';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';


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
    setItems(prevItems =>prevItems.map(item =>item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmClear = window.confirm("Are you sure you want to clear the list?");
    if (!confirmClear) return;
    setItems([]);
  }

  return (
    <>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onTogglePacked={handleTogglePacked} onClearList={handleClearList} />
      <Stats items={items} />
    </>
  );
}

export default App;










