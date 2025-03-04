import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(null); // Allow null for better UX

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) return;
    onRatingSubmit(productId, rating);
    setRating(0); // Reset after submission
    setHoveredRating(null); // Reset hover state
  };

  return (
    <div className="mt-4 text-center">
      <div className="flex justify-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            role="button"
            aria-label={`Rate ${star} stars`}
            className={`text-3xl cursor-pointer transition-all duration-300 ${
              (hoveredRating || rating) >= star ? "text-yellow-500" : "text-gray-400"
            }`}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(null)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button
        className={`mt-2 px-4 py-1 rounded-md transition-all ${
          rating > 0
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;
