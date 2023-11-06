import { createContext, ReactNode, useState } from "react";

enum TravellerType {
  CHILD,
  ADULT
}

interface Booking {
  id: string;
  destination: string;
  travellers: Record<TravellerType, number>;
}

interface AddBookingRequest {
  destination: string;
  travellers: Record<TravellerType, number>;
}

interface BookingStore {
  bookings: Booking[];
  addBooking: (request: AddBookingRequest) => void;
  cancelBooking: (id: string) => void;
}

interface BookingStoreContextProviderProps {
  children: ReactNode;
}

export const BookingStoreContext = createContext<BookingStore>({
  bookings: [],
  addBooking: () => {},
  cancelBooking: () => {}
})

const generateId = () => Date.now().toString(36);

export const BookingStoreContextProvider = ({ children }: BookingStoreContextProviderProps) => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const addBooking = (request: AddBookingRequest) => bookings.push({ id: generateId(), ...request });
  const cancelBooking = (id: string) => setBookings(bookings.filter(b => b.id !== id));
  return (
    <BookingStoreContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingStoreContext.Provider>
  )
}