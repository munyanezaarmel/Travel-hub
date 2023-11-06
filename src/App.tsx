import "./index.css";
import Landing from "./components/Landing/Landing";
import { BookingStoreContextProvider } from "./contexts/BookingStore";
function App() {
  return (
    <BookingStoreContextProvider>
      <div>
        <Landing />
      </div>
    </BookingStoreContextProvider>
  );
}

export default App;
