import React, {useState} from "react";


function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false);
  const itemClass = addToCart ? "in-cart" : ""

  const handleCart = () => {
    setAddToCart(!addToCart)
  }


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add"> {addToCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;

// create function to change the state to t/f
// then set a condition
// need to toggle it on button click
// need to import state on the item component