import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';



function App() {
  //const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    { id: 1, brand: "Ferrari", color:"Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color:"Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color:"Azul", newCar: false, km: 234 },
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
      <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
      <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* loop em arrays de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
      {/* fragment */}
      <Fragments propFragments="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
    </div>
  );
}

export default App;
