import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../assets/data/logements.json";
import image from "../assets/img/banner/banner.jpg";
/* Link remplace la balise a */
export default function Home() {
  return (
    <>
      <section className="home">
        <Header />
        <Banner texte={"Chez vous, partout et ailleurs"} image={image}/>
        <div className="cards">
          {
            /* pour chaque logement on appelle le composant Card */
            logements.map(
              (logem) => (
              <Card key={logem.id} logement={logem} />
            ))
          }
        </div>
      </section>
      <Footer />
    </>
  );
}
