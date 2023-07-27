import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from 'react';

function App() {
  const n = 15
  const [name] = useState("Matheus")

  return (
    <div className="App">
      {/* css global */}
      <h1>React com CSS</h1>
      {/* css de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* inline css */}
      <p style={{ color: "magenta", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      <p style={{ color: "magenta", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={name === "Matheus" ? ({color: "green", backgroundColor: "#000"}) : null}>Teste nome</h2>
    </div>
  );
}

export default App;
