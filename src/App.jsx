import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10,
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15,
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  // Function to handle rating submission
  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              totalRatings: product.totalRatings + 1,
              avgRating:
                (product.avgRating * product.totalRatings + newRating) /
                (product.totalRatings + 1),
            }
          : product
      )
    );
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center p-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRatingSubmit={handleRatingSubmit}
        />
      ))}
    </div>
  );
}

export default App;
