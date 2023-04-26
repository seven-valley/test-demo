import "./Error.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';
export default function Error() {
  return (
    <>
    <section className="home">
      <Header />
      <div className="error">
        <h1 className="alert404">404</h1>
        <h2 className="description">
          Oups! La page que vous demandez n'existe pas
        </h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </section>
    <Footer/>
    </>  
  );
}
