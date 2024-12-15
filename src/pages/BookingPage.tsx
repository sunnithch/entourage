import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingLayout from '../components/booking/BookingLayout';
import EntourageSelection from '../components/booking/EntourageSelection';
import EventDetails from '../components/booking/EventDetails';
import ReviewConfirm from '../components/booking/ReviewConfirm';
import Payment from '../components/booking/Payment';

export default function BookingPage() {
  return (
    <BookingLayout>
      <Routes>
        <Route path="/" element={<EntourageSelection />} />
        <Route path="/details" element={<EventDetails />} />
        <Route path="/review" element={<ReviewConfirm />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
      </Routes>
    </BookingLayout>
  );
}