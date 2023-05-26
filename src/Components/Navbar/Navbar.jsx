import { NavLink } from "react-router-dom";
import LogoSeed from "../../assets/logo.png"
import LogoLinkedin from "../../assets/logolinkedin.png"
import logoInsta from "../../assets/logoinsta.png"

import "./Navbar.css"

export default function Navbar() {
  return (
    <>
    <div className="content-logo-navbar">
          <div className="content-logo-social">
              <img className="main-logo" src={LogoSeed} alt="Logo de l'entreprise Seed Formation" />
              <div className="content-social">
                  <img className="logo-social" src={LogoLinkedin} alt="Logo de Linkedin pour sur notre compte pro"  />
                  <img className="logo-social" src={logoInsta} alt="Logo d'instagram pour suivre notre compte instagram" />
              </div>
          </div>
          
          <nav className="content-navbar">
              <NavLink className="navbar-link" to="">Accueil</NavLink>
              <NavLink className="navbar-link" to="/formation">Formation</NavLink>
              <NavLink className="navbar-link" to="/consulting">Consulting</NavLink>
              <NavLink className="navbar-link" to="/contact">Contact</NavLink>
          </nav>
      </div>
    </>
  )
}
