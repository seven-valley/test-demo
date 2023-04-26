import "./Card.css";
import { useNavigate } from "react-router-dom";
// props : logement (envoyer depuis Home.js)
export default function Card({ logement }) {
  const navigate = useNavigate();
  
  function naviguer() {
    navigate(`/logement/${logement.id}`);
  }

  return (
    <div className="card" onClick={naviguer}>
      <img src={logement.cover} alt={logement.title} />
      <div>{logement.title}</div>
    </div>
  );
}
