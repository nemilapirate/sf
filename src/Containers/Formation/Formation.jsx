import Img1 from "../../assets/img-formation/formation1.jpg"
import Img2 from "../../assets/img-formation/Formation2.jpg"
import Separation from "../../assets/img-formation/moyenne_barre_c_1.png"
import Separation2 from "../../assets/img-formation/moyenne_barre_nb_2.png"
import "./Formation.css"

export default function Formation() {
  return (
    <>
      <div className="main-content-formation">

        <div className="content-formation">
          <img src={Img1} alt="" className="img-formation" />
          <p className="txt-formation">
            Chez Seed Formation nous alternons entre la pédagogie participative et la pédagogie active. <br />
            La pédagogie participative favorise l’intervention des apprenants dans le cadre d’un scénario pédagogique dirigé par le formateur. <br />
            La pédagogie active quant à elle, met les apprenants en situation réelle, les obligeant à prendre du recul sur leur travail et à réfléchir sur les bonnes pratiques à suivre. <br />
            En ce qui concerne le déroulé des sessions ou journées de formation celles-ci sont découpées en plusieurs parties.<br />
            La partie théorique qui est accompagnée de supports écrits et visuels qui seront fournis aux apprenants afin que ces derniers n’aient aucune note manuscrite à prendre (ou du moins le moins possible) afin de rester concentrés sur le cours.<br />
            La partie pratique qui se compose deux approches différentes.
          </p>
        </div>
        <img src={Separation} alt="" className="separation" />
        <div className="content-formation">
          <p className="txt-formation">
            Une approche sous forme de travaux diriger qui sont une mise en application directe de la partie théorique mais en alliant également un échange par le biais de question avec les apprenants fond bien le lien entre la théorie et la pratique (pédagogie active).<br/>
            Et une approche travaux pratique sous forme d’une mise en situation, ou les apprenants devront mettre en place en autonomie les éléments vus en cours et durant les TD ; mais également éléments non aborder afin de les confronter aux situations qu’il pourra rencontrer en entreprise (pédagogie active).<br/>
            Toute session de formation se terminera par un bilan de compétence effectué par le biais d’une évaluation des apprenants.<br/>
            Nous insistons sur le fait qu’il s’agit d’un bilan permettant de mesurer les compétences des apprenants à un instant T et que le but de ce bilan est de déterminer quelle partie de la formation est maitrisée et quelle partie est à revoir.<br/>
            Cette évaluation pourra être soit théorique, sous forme de questions ouvertes ou de QCM, ou pratique sous la forme d’une mise en situation (mode projet).<br/> 
            Une fois le bilan effectué il sera retourné à l’apprenant ainsi qu’à votre structure afin que vous puissiez également avoir un retour continu du déroulé de la formation et de l’évolution des apprenants.
          </p>
          <img src={Img2} alt="" className="img-formation" />
        </div>
        <div className="content-separation2">
          <img src={Separation2} alt="" className="separation" />
        </div>
      
      </div>

      <div className="second-content-formation">
        <div className="content-txt-formation">
          <p className="txt-section-formation">
            Dans un souci de qualité, nous vous demanderons ainsi qu’à vos apprenants d’effectuer une évaluation des prestations que nous avons réalisées au sein de votre structure. Ceci est important pour nous, car il nous permet d’améliorer la qualité des services qui vous sont proposés. 
          </p>
        </div>
        <div className="content-information-formation">
          <h4 className="title-presta">
            Nos prestations de formation peuvent s’organiser de différentes manières en fonction de vos besoins :
          </h4>
          <ul className="list-formation">
            <li><span className="span-listForm">-</span> En présentiel ou à distance.</li>
            <li><span className="span-listForm">-</span> De reconversion en continu ou en alternance(1)</li>
            <li><span className="span-listForm">-</span> Diplôment(1) ou non</li>
            <li><span className="span-listForm">-</span> Sur cursus complet(1), des modules spécifiques (Windows, Linux, etc)(1,2,) une   technologie ou outils spécifiques (ADDS, Apache, etc)(2)</li>
            <li><span className="span-listForm">-</span> Durée modulable d’une journée à plusieurs semaines(2) </li>
          </ul>
          <span className="info-list-form">1 : Ne concerne que les organismes de formation, 2 ne concerne que les entreprises privées.</span><br/>
          <span className="info-list-form">2 : Ne concerne que les entreprises privées.</span>
        </div>
        <h6 className="title-presta">Vous trouverez plus d’informations sur l’ensemble de nos prestations dans la section catalogue de    formation du site.
        </h6>
      </div>
    </>
  
  )
}
