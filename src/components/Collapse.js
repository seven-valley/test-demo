import "./Collapse.css";
import { useState } from 'react'
import openImg from '../assets/icon/open.png'
import closeImg from '../assets/icon/close.png'
export default function Collapse({titre,texte,liste}) {
    const [deplier, setDeplier] = useState(false);
    function changer(){
        setDeplier(!deplier);
    }
    return (
        <div className="collapse">
        <div className="banner-collapse" onClick={changer}>
            {titre}
            {deplier 
            ? <img src={closeImg} alt="Fermer" /> 
            : <img src={openImg} alt="Ouvrir"  />}
        </div>
        {/* si deplier est true alors jaffiche */}
        {deplier && (<div className="banner-texte">{texte}</div>)}
    </div>
    );
  }