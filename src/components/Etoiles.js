import etoileRose from '../assets/icon/etoile-rose.png'
import etoileGrise from '../assets/icon/etoile-grise.png'
export default function Etoiles({rating}) {
    const etoiles = [1, 2, 3, 4, 5];
    return (
        <>
        {etoiles.map((etoile) =>
            rating >= etoile 
            ? <img src={etoileRose} alt="étoile rose" />        
            :<img src={etoileGrise} alt="étoile grise" /> 
        )}
        </>
    );
  }