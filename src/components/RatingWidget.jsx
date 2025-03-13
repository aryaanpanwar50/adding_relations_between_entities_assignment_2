import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (value) => setRating(value);
  const handleMouseOver = (value) => setHoveredRating(value);
  const handleMouseLeave = () => setHoveredRating(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          onMouseOver={() => handleMouseOver(star)}
          onMouseLeave={handleMouseLeave}
          style={{ color: (hoveredRating || rating) >= star ? "gold" : "gray", cursor: "pointer" }}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
};

export default RatingWidget;
