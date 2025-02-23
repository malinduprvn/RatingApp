import { useState } from "react";
import "./Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [employeeId, setEmployeeId] = useState("");

  const handleClick = (rate) => {
    setRating(rate);
  };

  return (
    <div className="rating-container">
      <h1>Diamond Cutters Limited</h1>
      <h2>Rate your experience</h2>

      <div className="emoji-rating">
        {["😡", "😞", "😐", "😊", "😁"].map((emoji, index) => (
          <span
            key={index}
            className={`emoji ${rating >= index + 1 ? "selected" : ""}`}
            onClick={() => handleClick(index + 1)}
          >
            {emoji}
          </span>
        ))}
      </div>

      <p>Your rating: {rating}</p>

      <label>Employee IC Number</label>
      <input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Enter your IC number"
      />

      <button className="SubmitBtn">Submit</button>
    </div>
  );
};

export default Rating;
