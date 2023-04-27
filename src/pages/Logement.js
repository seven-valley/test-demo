import {useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";

import Footer from "../components/Footer";
import Etoiles from "../components/Etoiles";
import logements from "../assets/data/logements.json";
import styles from './Logement.module.css'


export default function Logement() {
    
    function getLogement(id){
        // parcourrir ts les logement 
        // pour trouver le logement en fct de L'ID
        for ( let l of logements){
           // console.log(l.id);
           // console.log(id);
            if (l.id == id){
                return l;
            }
        }
        return -1;
    }
    const {id} = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState({});
    const [items, setItems] = useState('');
    // quand on fait une action au demarrage
    // il faut utiliser useEffect
    
   
    useEffect(() => {
        let l = getLogement(id);
        //if (l == -1) navigate('/error/');
        // if ternaire
        (l===-1) && navigate('/error/');
        setLogement(l);
        //console.log(l);
        console.log(l.equipments);
        setItems(l.equipments.map((e,i) => <li key={i}>{e}</li>));
      },[]); 
      // []: cad useEffect est appelé qu'une seul fois
      // on ne veut que useEffect soit appeler des qu'il y a un render
    
      // return on verifie qu'il ya une logement pour afficher l html
      // avec un if ternaire
   
      
      return logement.id &&(
        <>
        <section className="home">
         <Header />
       
        <Slider pictures={logement.pictures}/>
        <div className={styles.container}>
            <div className={styles.gauche}>
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
                {logement.tags.map((tag,index) => <h3 key={index}>{tag}</h3>)}
            </div>
            <div className={styles.droite}>
            <img className={styles.portrait} src={logement.host.picture} alt={logement.host.name} />
            <h4>{logement.host.name}</h4>
            <div><Etoiles  rating={logement.rating} /></div>
            </div>
        </div>
        <div className={styles.container}>
        <div className={styles.container50}>
        <Collapse titre="Description" texte={logement.description} />
        </div>
        <div className={styles.container50}>
        <Collapse titre="Equipements" texte={items} />
        </div>
        </div>
        </section>
        <Footer />
        </>
    );
  }