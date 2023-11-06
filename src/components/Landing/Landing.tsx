import { useContext } from "react";
import Header from "../Header/Header";
import Hero from "../Hero";
import Form from "../Form";
import { BookingStoreContext } from "../../contexts/BookingStore";

export default function Landing() {
  //const bookingContext = useContext(BookingStoreContext);
  return (
    <div>
      <Header />
      <Hero />
      <Form />
      <div>
        Your upcoming trips
        <ol>
          <li>Barcelona (2 adults) - 17th November, 2023</li>
        </ol>
      </div>
    </div>
  );
}
