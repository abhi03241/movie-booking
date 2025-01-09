import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const seats = Array(30).fill(false); // Mock 30 seats

  const handleSeatSelect = (index) => {
    setSelectedSeats((prev) =>
      prev.includes(index) ? prev.filter((seat) => seat !== index) : [...prev, index]
    );
  };

  const handleBooking = () => {
    navigate("/summary", { state: { selectedSeats } });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center">Select Your Seats</h1>
      <div className="grid grid-cols-6 gap-4 mt-6">
        {seats.map((_, index) => (
          <div
            key={index}
            className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 cursor-pointer ${
              selectedSeats.includes(index) ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleSeatSelect(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button
        onClick={handleBooking}
        className="mt-8 bg-blue-500 text-white py-2 px-6 rounded"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default SeatSelection;
