import Header from "./components/header/Headser";
import WeatherBoard from "./components/Weather/WeatherBoart";
import { WeatherProvider } from "./provider";
import { FavouriteProvider } from "./provider";
import { LocationProvider } from "./provider";
function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
