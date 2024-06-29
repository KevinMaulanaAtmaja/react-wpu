export default function Item({ item, onDelItem, onToggleItem }) {
    return (
        <li key={item.id}>
        <input
            type="checkbox"
            checked={item.checked}
            onChange={() => onToggleItem(item.id)}
        />
        <span style={item.checked ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.unit} {item.name}
        </span>
        <button onClick={() => onDelItem(item.id)}>&times;</button>
        </li>
    );
}
