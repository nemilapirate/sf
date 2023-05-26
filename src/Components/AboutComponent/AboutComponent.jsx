import Picture from "../../assets/img-about/pict-about.jpg"
import Angle1 from "../../assets/img-about/angle_carré_c_1.png"
import Angle2 from "../../assets/img-about/angle_carré_nb_2.png"
import "./AboutComponent.css"

export default function AboutComponent() {
  return (
    <>
    <h1 className="h1-about">Seed Formation</h1>
    <div className="main-content-about">
        <div className="content-photo">
            <img className="angle angle1" src={Angle1} alt="" />
            <img className="picture" src={Picture} alt="" />
            <img className="angle angle2"  src={Angle2} alt=""/>
        </div>
        <div className="content-txt-about">
          <h2 className="second-title">Qui sommes-nous ?</h2>
            <p className="txt-about first-content-txt-about">
              Forts de plusieurs années d’expérience dans le domaine de l’IT, nous proposons de mettre nos compétences à votre
              service.<br/> Que vous soyez un organisme de formation <br/>(école, centre de formation, CFA, Greta, etc).<br/> Une collectivité,
              une association ou une entreprise (TPE, PME), <br/>Seed Formation s’engage à vous proposer des prestations
              dimensionnées à vos besoins.<br/>
            </p>
            <p className="txt-about second-content-txt-about">
              <h3 className="h3-about">Nos prestations :</h3> <br/>
              Besoin d’un formateur pour assurer une session complète ou un module de formation sur des cursus TAI TSSR, etc.<br/>
              Vous souhaitez réaliser des formations sur une technologie en particulier, une sensibilisation à une bonne pratique
              informatique et cybersécurité.<br/>
            </p>
            <p className="txt-about third-content-txt-about">
              Consultez notre rubrique Formation et ses sous-catégories.<br/>
              Vous créez votre entreprise et vous avez besoin de conseils dans la conception et la mise en place de votre
              infrastructure.<br/>
              Votre organisation rencontre des problèmes de qualité de service ou de sécurité avec son SI.<br/>
              Consultez notre page Consulting.
            </p>
        </div>
    </div>
    </>
  )
}
