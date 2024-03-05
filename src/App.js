import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';

function App() {
  const [input, setInput] = useState('')
  return (
    <div className="container">
     <h1 className="title">Buscar CEP</h1>

     <div className="containerInput">

      <input 
      type="text"
      placeholder="Digite seu cep..."
       value={input} onChange={(e) => setInput(e.target.value) }/>

      <button className="buttonSearch">
        <FiSearch size={25} color="#000" />
      </button>
      </div>

      <main className="main">
        <h2>CEP: 790003222</h2>

        <span>Rua teste algum</span>
        <span>Complemento : Algum complemento</span>
        <span>Villa Rosa</span>
        <span>Campo Grande - MS</span>
      </main>
     </div>
   
  );
}

export default App;
