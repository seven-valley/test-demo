import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import textes from "../assets/data/about.json";
import image from "../assets/img/banner/banner-about.jpg";
export default function About() {
  // textes =[...] du JSON
    return (
      <>
      <section className="home">
        <Header />
        <Banner texte={""} image={image}/>
        {
            /* pour chaque texte on appelle le composant Collapse */
            textes.map(
              (info) => (
              <Collapse titre={info.title} texte={info.text} />
            ))
          }
       
      </section>
      <Footer />
      </>
    );
  }