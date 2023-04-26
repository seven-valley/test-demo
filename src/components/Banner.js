import "./Banner.css";


export default function Banner({texte,image}) {
    return (
        <section className="banner">
            <img className="img-banner" src={image} alt="#" />
            <span className="texte-banner">{texte} </span>
        </section>
    );
  }