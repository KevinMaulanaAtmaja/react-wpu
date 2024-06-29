import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: "Teh 🍵",
    quantity: 2,
    unit: "sachet",
    checked: true,
  },
  {
    id: 2,
    name: "Wortel 🥕",
    quantity: 250,
    unit: "gram",
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral 💧",
    quantity: 5,
    unit: "botol",
    checked: false,
  },
];


function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items,item]);
  }

  function handleDelItem(id){
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id){
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item));
  }

  function handleClearItems(){
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDelItem={handleDelItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;