import React from "react";

function Item({ item }) {
 
  const handleAddToCart=()=>{
    console.log(item.isInCart);
    const itemData={
      isInCart: !item.isInCart
    }
    fetch(`http://localhost:4000/items/${item.id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  })
  .then((r) => r.json())
  .then((updatedItem) => console.log(updatedItem));

  } 
  const handleDelete=()=>{
    fetch(`http://localhost:4000/items/${item.id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((r) => r.json())
    .then((updatedItem) => console.log(updatedItem));
     
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={handleAddToCart}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Item;
