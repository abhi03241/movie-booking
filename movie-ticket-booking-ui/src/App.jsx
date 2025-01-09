import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import SeatSelection from "./components/SeatSelection";
import BookingSummary from "./components/BookingSummary";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/seats/:id" element={<SeatSelection />} />
          <Route path="/summary" element={<BookingSummary />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
