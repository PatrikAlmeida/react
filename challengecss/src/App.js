import './App.css';
import Details from './components/Details';

function App() {
  const myCars = [
    { name: "Fusca", km: 10000, color: "Branca" },
    { name: "Polo", km: 32000, color: "Cinza" },
    { name: "Onix", km: 0, color: "Preto" },
  ]

  return (
    <div className="App">
      <h1>Detalhes dos Carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Details car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
