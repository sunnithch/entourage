import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../stores/booking';
import { format } from 'date-fns';
import { BookingSummary } from '../ui/BookingSummary';
import { SelectedMembers } from '../ui/SelectedMembers';

export default function ReviewConfirm() {
  const navigate = useNavigate();
  const { selectedMembers, eventDetails } = useBooking();

  if (!eventDetails) {
    navigate('/booking/details');
    return null;
  }

  const totalAmount = selectedMembers.reduce((sum, member) => sum + member.price, 0);
  const serviceFee = totalAmount * 0.1; // 10% service fee
  const total = totalAmount + serviceFee;

  const handleConfirm = () => {
    navigate('/booking/payment');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-light text-stone-900 mb-2">
          Review Your Booking
        </h2>
        <p className="text-stone-600">
          Please review your booking details before proceeding to payment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <BookingSummary
            date={eventDetails.date}
            time={eventDetails.time}
            duration={eventDetails.duration}
            engagementType={eventDetails.engagementType}
            specialRequests={eventDetails.specialRequests}
          />

          <SelectedMembers members={selectedMembers} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md h-fit space-y-4">
          <h3 className="text-lg font-medium text-stone-900 mb-4">
            Price Breakdown
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between text-stone-600">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Service Fee (10%)</span>
              <span>${serviceFee.toFixed(2)}</span>
            </div>
            <div className="h-px bg-stone-200 my-2" />
            <div className="flex justify-between text-lg font-medium text-stone-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="pt-6 space-y-4">
            <button
              onClick={handleConfirm}
              className="w-full py-3 bg-sage-600 text-white rounded-full hover:bg-sage-700"
            >
              Proceed to Payment
            </button>
            <button
              onClick={() => navigate('/booking/details')}
              className="w-full py-3 text-stone-600 hover:text-stone-900"
            >
              Back to Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}