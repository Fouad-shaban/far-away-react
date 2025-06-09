
export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const packedPercent = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <>
    
    <footer className="stats">
      {totalItems === 0 ? <em>Start adding some items to your packing list! 🧳</em> : 
      <em>
        You have {totalItems} item{totalItems !== 1 ? 's' : ''} on your list, and you already packed {packedItems} ({packedPercent}%)
      </em>
}
    </footer>
    </>
  );
}
