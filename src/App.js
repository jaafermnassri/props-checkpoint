
import './App.css';
import React from "react";
import Profil from './profile/profile';
import Fullname from './profile/fullname'

function App() {
  return (
    <div className="App">
      <Profil>
    < Fullname firstName="Jaafer" lastName="Mnassri" />
      
      </Profil>
    </div>
  );
}

export default App;
