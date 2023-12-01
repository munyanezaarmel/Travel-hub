import "./index.css";
import Landing from "./components/Landing/Landing";
import { BookingStoreContextProvider } from "./contexts/BookingStore";
import axios from "axios"; "axios"
function App() {

  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination',
    params: {query: 'new'},
    headers: {
      'X-RapidAPI-Key': 'a1c077e666mshaf95f0491cb17aap16aed6jsn1c2d8f67b04b',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
  };
 async function  getDara(){
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

  return (
    <BookingStoreContextProvider>
      <div>
        <button onClick={getDara}>get data</button>
        <Landing />
      </div>
    </BookingStoreContextProvider>
  );
}

export default App;
