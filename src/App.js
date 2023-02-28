
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';

import { Banner } from './components/Banner'; 


import { Skills } from './components/Skills';
import Cards from './components/Cards/Cards';
import ContactProps from './components/Contact/ContactProps';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Cards/>
      <ContactProps/>
      
      
    </div>
  );
}

export default App;
