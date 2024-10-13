import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nutrition App</h1>
      </header>
      <main>
        <nav>
          <a className="App-link" href="/nutrition-wheel">
            Nutrition Wheel
          </a>
          <a className="App-link" href="/macro-builder">
            Meal Builder
          </a>
          <a className="App-link" href="/meal-calendar">
            Meal Calendar
          </a>
        </nav>
      </main>
    </div>
  );
}

export default App;
