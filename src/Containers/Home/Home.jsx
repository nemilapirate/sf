import Navbar from "../../Components/Navbar/Navbar.jsx";
import AboutComponent from "../../Components/AboutComponent/AboutComponent.jsx";
import "./Home.css"

export default function Home() {
    return (
      <>
      <Navbar />
      <AboutComponent />
      <footer className="footer-container"></footer>
      </>
    );
}