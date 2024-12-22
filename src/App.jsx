import { WeatherProvider } from "./provider";
import { FavouriteProvider } from "./provider";
import { LocationProvider } from "./provider";
import Page from "./Page";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
