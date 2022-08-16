//import { useState } from "react";
import './App.scss';
import  Contact from "./components/Contact";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";

import { useDispatch, useSelector } from 'react-redux';


import { Cv } from "./Cv/Cv"
import { clickAbout, clickEducation, clickExperience, clickMore } from './Redux/Cv/cv.actions';

const {contact, aboutMe, education, experience, languages, habilities} = Cv;

function App() {
  const dispatch = useDispatch();
  const menu = useSelector(state => {
     return state.menuBlock.menu}
  )

  //const [menu, setMenu] = useState(0);

  return (
    <div className="app">
     <div className="app">
        <Contact contact={contact} />

      <div className="navbar">
        <button 
        className="custom-btn btn-4"
        onClick={() => dispatch(clickAbout())}>
          Sobre mi
        </button>

        <button 
        className="custom-btn btn-4"
        onClick={() => dispatch(clickEducation())}>
          Formación
        </button>

        <button 
        className="custom-btn btn-4"
        onClick={() => dispatch(clickExperience())}>
          Experiencia
        </button>
        
        <button 
        className="custom-btn btn-4"
        onClick={() => dispatch(clickMore())}>
          Otros datos
        </button>
      </div>
      
        {menu === 1 ? (<About aboutMe={aboutMe} />) 
        : menu === 2 ? (<Education education={education}/>) 
        : menu === 3 ? (<Experience experience={experience} />) 
        : menu === 4 ? (<More languages={languages} habilities={habilities} />) 
        : ("")
        }


    </div>
    </div>

  );
}

export default App;
