import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

// Plant categories with at least 6 products each
const categories = [
  {
    name: "Indoor Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 300, description: "Low maintenance indoor plant", image: "https://images.unsplash.com/photo-1593697820986-34f93f63efc7?w=150&h=150&fit=crop" },
      { id: 2, name: "Peace Lily", price: 450, description: "Air purifying plant", image: "https://images.unsplash.com/photo-1592150382367-b9b3efb0dd16?w=150&h=150&fit=crop" },
      { id: 3, name: "Spider Plant", price: 350, description: "Decorative hanging plant", image: "https://images.unsplash.com/photo-1614699923445-cdbe2be85c0c?w=150&h=150&fit=crop" },
      { id: 4, name: "ZZ Plant", price: 500, description: "Survives low light", image: "https://images.unsplash.com/photo-1610696257192-4f083c65a0b3?w=150&h=150&fit=crop" },
      { id: 5, name: "Aloe Vera", price: 250, description: "Medicinal plant", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=150&h=150&fit=crop" },
      { id: 6, name: "Fiddle Leaf Fig", price: 700, description: "Large decorative plant", image: "https://images.unsplash.com/photo-1599423300746-b62533397364?w=150&h=150&fit=crop" },
    ],
  },
  {
    name: "Flowering Plants",
    plants: [
      { id: 7, name: "Rose", price: 100, description: "Classic flowering plant", image: "https://images.unsplash.com/photo-1599940560193-5125da47aa04?w=150&h=150&fit=crop" },
      { id: 8, name: "Marigold", price: 50, description: "Vibrant orange flowers", image: "https://images.unsplash.com/photo-1596641023452-4f7c3b9a8c5c?w=150&h=150&fit=crop" },
      { id: 9, name: "Orchid", price: 400, description: "Exotic flowering plant", image: "https://images.unsplash.com/photo-1617196035203-c91c3d3c1b16?w=150&h=150&fit=crop" },
      { id: 10, name: "Tulip", price: 150, description: "Spring seasonal plant", image: "https://images.unsplash.com/photo-1600441101944-57a1d8f3f7cb?w=150&h=150&fit=crop" },
      { id: 11, name: "Sunflower", price: 120, description: "Bright and cheerful", image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=150&h=150&fit=crop" },
      { id: 12, name: "Dahlia", price: 200, description: "Beautiful decorative flower", image: "https://images.unsplash.com/photo-1603033471931-c2674fc77f8c?w=150&h=150&fit=crop" },
    ],
  },
];

const ProductCard = ({ product, onAddToCart, quantity }) => (
  <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", width: "200px", textAlign: "center", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
    <img src={product.image} alt={`${product.name} plant`} width="150" height="150" style={{ borderRadius: "8px" }} />
    <h3>{product.name}</h3>
    <p style={{ fontSize: "14px", color: "#555" }}>{product.description}</p>
    <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
    <button
      onClick={() => onAddToCart(product)}
      style={{ padding: "8px 12px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
    >
      Add to Cart {quantity > 0 && `(${quantity})`}
    </button>
  </div>
);

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div style={{ padding: "20px" }}>
      {categories.map((category) => (
        <div key={category.name} style={{ marginBottom: "40px" }}>
          <h2>{category.name}</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {category.plants.map((product) => {
              const quantity = cartItems.find((item) => item.id === product.id)?.quantity || 0;
              return <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} quantity={quantity} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
