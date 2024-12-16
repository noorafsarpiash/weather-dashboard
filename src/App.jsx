import Header from "./components/header/Headser";
import WeatherBoard from "./components/Weather/WeatherBoart";
import { WeatherProvider } from "./provider";
function App() {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
