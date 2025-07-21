import React,{ useState} from 'react'
import './App.css';
import Popup from './Components/Popup/Popup';
import Epson from './Pages/Epson';


function App() {
  const[showModal, setShowModal] = useState(true);
  return (
    <div>
      <Popup show={showModal} onClose={ () => setShowModal(false)}/>
      <Epson/>
      
    </div>
  );
}

export default App;
