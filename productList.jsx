import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 300,
    description: "Low maintenance indoor plant",
    image:
      "https://images.unsplash.com/photo-1593697820986-34f93f63efc7",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 450,
    description: "Air purifying plant",
    image:
      "https://images.unsplash.com/photo-1592150382367-b9b3efb0dd16",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Plants</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="150"
              height="150"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
