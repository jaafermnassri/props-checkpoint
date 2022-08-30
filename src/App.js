
import './App.css';
import React from "react";
import Profil from './profile/profile';

function App() {
  return (
    <div className="App">
      <Profil Fullname="Jaafer Mnassri" bio="29 years old Graphic designer and fullstack web developer" profession="HTML||CSS||JAVASCRIPT||REACT JS">
      <img className="photodeprofil" src="./414c8d65d2884a1b510f62928415532d.png"></img>
      </Profil>
    </div>
  );
}

export default App;
