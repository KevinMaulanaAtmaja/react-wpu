import { useState } from "react";
import Item from './Items'


export default function GroceryList({ items, onDelItem, onToggleItem, onClearItems }) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;

    switch (sortBy) {
        case "name":
        sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
        case "checked":
        sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
        break;
        default:
        sortedItems = items;
        break;
    }

    return (
        <>
        <div className="list">
            <ul>
            {sortedItems.map((item) => (
                <Item
                item={item}
                key={item.id}
                onDelItem={onDelItem}
                onToggleItem={onToggleItem}
                />
            ))}
            </ul>
        </div>
        <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Descending</option>
            <option value="name">A - Z</option>
            <option value="checked">✅</option>
            </select>
            <button onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
        </>
    );
}
