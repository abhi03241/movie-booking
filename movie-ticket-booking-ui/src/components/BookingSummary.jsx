import React from "react";
import { useLocation } from "react-router-dom";

const BookingSummary = () => {
  const { state } = useLocation();
  const { selectedSeats } = state || { selectedSeats: [] };

  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold">Booking Summary</h1>
      <p className="mt-4">Seats: {selectedSeats.join(", ")}</p>
      <p className="mt-4">Total Cost: ₹{selectedSeats.length * 200}</p>
      <button className="mt-6 bg-green-500 text-white py-2 px-6 rounded">
        Confirm
      </button>
    </div>
  );
};

export default BookingSummary;
