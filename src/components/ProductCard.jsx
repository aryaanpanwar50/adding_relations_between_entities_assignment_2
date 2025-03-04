import React from "react";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-80">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl"
      />
      <h3 className="text-xl font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 font-semibold text-lg text-blue-600">
        ⭐ {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)
      </p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
