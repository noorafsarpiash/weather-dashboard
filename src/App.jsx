import Header from "./components/header/Headser";
import WeatherBoard from "./components/Weather/WeatherBoart";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
