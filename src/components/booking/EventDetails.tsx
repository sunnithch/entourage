import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../stores/booking';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const eventDetailsSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  duration: z.number().min(1, 'Duration is required'),
  engagementType: z.enum(['presence', 'interaction', 'social']),
  specialRequests: z.string().optional(),
});

type EventDetailsForm = z.infer<typeof eventDetailsSchema>;

export default function EventDetails() {
  const navigate = useNavigate();
  const { selectedMembers, setEventDetails } = useBooking();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventDetailsForm>({
    resolver: zodResolver(eventDetailsSchema),
    defaultValues: {
      duration: 2,
      engagementType: 'presence',
    },
  });

  const onSubmit = (data: EventDetailsForm) => {
    setEventDetails(data);
    navigate('/booking/review');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-light text-stone-900 mb-2">
          Event Details
        </h2>
        <p className="text-stone-600">
          {selectedMembers.length} members selected for your event
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Date
            </label>
            <input
              type="date"
              {...register('date')}
              className="w-full rounded-lg border border-stone-300 px-3 py-2"
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Time
            </label>
            <input
              type="time"
              {...register('time')}
              className="w-full rounded-lg border border-stone-300 px-3 py-2"
            />
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Duration (hours)
          </label>
          <select
            {...register('duration', { valueAsNumber: true })}
            className="w-full rounded-lg border border-stone-300 px-3 py-2"
          >
            {[2, 3, 4, 5, 6].map((hours) => (
              <option key={hours} value={hours}>
                {hours} hours
              </option>
            ))}
          </select>
          {errors.duration && (
            <p className="mt-1 text-sm text-red-600">{errors.duration.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Engagement Type
          </label>
          <div className="space-y-3">
            {[
              {
                value: 'presence',
                label: 'Presence Only',
                description: 'Members will attend and create ambiance',
              },
              {
                value: 'interaction',
                label: 'Active Interaction',
                description: 'Members will engage with other guests',
              },
              {
                value: 'social',
                label: 'Social Media Promotion',
                description: 'Includes live posting and tagging',
              },
            ].map(({ value, label, description }) => (
              <label
                key={value}
                className="flex items-start p-4 border border-stone-200 rounded-lg cursor-pointer hover:bg-stone-50"
              >
                <input
                  type="radio"
                  {...register('engagementType')}
                  value={value}
                  className="mt-1 text-sage-600 focus:ring-sage-500"
                />
                <div className="ml-3">
                  <p className="text-stone-900 font-medium">{label}</p>
                  <p className="text-stone-600 text-sm">{description}</p>
                </div>
              </label>
            ))}
          </div>
          {errors.engagementType && (
            <p className="mt-1 text-sm text-red-600">
              {errors.engagementType.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            {...register('specialRequests')}
            rows={4}
            className="w-full rounded-lg border border-stone-300 px-3 py-2"
            placeholder="Any specific requirements or preferences..."
          />
        </div>

        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={() => navigate('/booking')}
            className="px-6 py-2 text-stone-600 hover:text-stone-900"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-sage-600 text-white rounded-full hover:bg-sage-700"
          >
            Review Booking
          </button>
        </div>
      </form>
    </div>
  );
}