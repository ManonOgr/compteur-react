import { useState } from 'react';
import InputCompteur from './Compteur/Compteur';

function App() {
  const [compteurs, setCompteurs] = useState([])

  function ajoutCompteurs (){
    setCompteurs([...compteurs, 1])
  };

  function supprimerCompteurs (){
    compteurs.pop();
    setCompteurs([...compteurs])
  };

  return (
    <div className="App">
      <button className='addCountBtn' onClick={ajoutCompteurs}>Ajouter un compteur</button>
      <button className='deleteCountBtn' onClick={supprimerCompteurs}>Supprimer un compteur</button>
      <div>
        {compteurs.map(n=><InputCompteur/>)}
      </div>
    </div>
  );
}

export default App;