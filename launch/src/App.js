import React from 'react';
import Formm from './launch2.0/Form/Formm';
import Marquee from './launch2.0/Marquee/Marquee';
import Animate from './launch2.0/Animation/Animate';
import Services from './services/Services';
import Serv from '../src/services/Serv'





function App() {
  return (
    <div>
    <div >
      <Formm/>
      <Animate/> 
      <Marquee/>
      <Services/>
      <Serv/>    
      </div>
    
    </div>
    
  );
}

export default App;