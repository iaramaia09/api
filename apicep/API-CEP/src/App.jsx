import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const handleBuscaCep = async (event) => {
    try{
      const response = await fetch(`${cep}`);
      if (!response.ok)
    }catch(error){
      console.log(error);
    }
  }


  return (
    <>
      <div className='container'>
        <h1>Preencha o Edereço</h1>
        <input
        type="number"
        placeholder='Digite seu CEP'
        value={cep}
        onChange={(e) => setCep(e. target. value)}
        />
        <button>Buscar</button>
          <div className='endereco'>
            {endereco ? (
              <>
              <p> {endereco}</p>
              </>
            ) : null}
          </div>


      </div>
    </>
  )
}


export default App


