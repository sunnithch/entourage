import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';

interface BookingSummaryProps {
  date: string;
  time: string;
  duration: number;
  engagementType: 'presence' | 'interaction' | 'social';
  specialRequests?: string;
}

const engagementTypeLabels = {
  presence: 'Presence Only',
  interaction: 'Active Interaction',
  social: 'Social Media Promotion',
};

export function BookingSummary({
  date,
  time,
  duration,
  engagementType,
  specialRequests,
}: BookingSummaryProps) {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');
  const formattedTime = format(new Date(`2000-01-01T${time}`), 'h:mm a');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h3 className="text-lg font-medium text-stone-900 mb-4">
        Event Details
      </h3>

      <div className="space-y-4">
        <div className="flex items-start">
          <Calendar className="w-5 h-5 text-sage-600 mt-0.5 mr-3" />
          <div>
            <p className="font-medium text-stone-900">{formattedDate}</p>
            <p className="text-stone-600">Date</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-5 h-5 text-sage-600 mt-0.5 mr-3" />
          <div>
            <p className="font-medium text-stone-900">
              {formattedTime} ({duration} hours)
            </p>
            <p className="text-stone-600">Time & Duration</p>
          </div>
        </div>

        <div className="flex items-start">
          <Users className="w-5 h-5 text-sage-600 mt-0.5 mr-3" />
          <div>
            <p className="font-medium text-stone-900">
              {engagementTypeLabels[engagementType]}
            </p>
            <p className="text-stone-600">Engagement Type</p>
          </div>
        </div>

        {specialRequests && (
          <div className="flex items-start">
            <MessageSquare className="w-5 h-5 text-sage-600 mt-0.5 mr-3" />
            <div>
              <p className="font-medium text-stone-900">Special Requests</p>
              <p className="text-stone-600">{specialRequests}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}