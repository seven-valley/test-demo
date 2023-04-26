import React, { useState } from "react";
import "./Slider.css";
import flecheDroite from "../assets/icon/fleche-droite.png";
import flecheGauche from "../assets/icon/fleche-gauche.png";

export default function Slider({ pictures }) {
  // utilisation du crochet useState pour créer une var d’état (index),
  // pour garder une trace de la position actuelle dans le carrousel.
  //console.log(pictures);
  const [index, setIndex] = useState(0);

  // Les fonctions handlePrevious et handleNext s’occupent des mises à jour
  //de la valeur d’index lorsque l’utilisateur clique sur le Précédent et Prochain boutons
  const precedent = () => {
    const newIndex = index - 1;
    /* si inférieur à 0, on revient à 2*/
    setIndex(newIndex < 0 ? pictures.length - 1 : newIndex);
  };

  const suivant = () => {
    const newIndex = index + 1;
    /* si supérieur à 2 on revient à 0*/
    setIndex(newIndex >= pictures.length ? 0 : newIndex);
  };

  return (
    <>
      <div className="carousel">
        
        <img className="photo" src={pictures[index]} />
        <img className="fg" src={flecheGauche} onClick={precedent} />
        <img className="fd" src={flecheDroite} onClick={suivant} />
      </div>
    </>
  );
}
