import { create } from 'zustand';

export interface EntourageMember {
  id: string;
  name: string;
  tagline: string;
  image: string;
  price: number;
  traits: string[];
  availability: string[];
}

interface BookingState {
  selectedMembers: EntourageMember[];
  eventDetails: {
    date: string;
    time: string;
    duration: number;
    engagementType: 'presence' | 'interaction' | 'social';
    specialRequests: string;
  } | null;
  addMember: (member: EntourageMember) => void;
  removeMember: (memberId: string) => void;
  setEventDetails: (details: BookingState['eventDetails']) => void;
  reset: () => void;
}

export const useBooking = create<BookingState>((set) => ({
  selectedMembers: [],
  eventDetails: null,
  addMember: (member) =>
    set((state) => ({
      selectedMembers: [...state.selectedMembers, member],
    })),
  removeMember: (memberId) =>
    set((state) => ({
      selectedMembers: state.selectedMembers.filter((m) => m.id !== memberId),
    })),
  setEventDetails: (details) => set({ eventDetails: details }),
  reset: () => set({ selectedMembers: [], eventDetails: null }),
}));