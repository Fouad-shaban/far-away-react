export default function Item({ item, onDeleteItem, onTogglePacked }) {
  return (
    <li >
      <input type="checkbox" checked={item.packed} onChange={() => onTogglePacked(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}} className={` ${item.packed ? "packed" : ""}`}>{item.quantity} {item.description}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}