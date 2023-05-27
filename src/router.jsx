import { Routes, Route} from "react-router-dom";
import Home from "./Containers/Home/Home.jsx";
import Formation from "./Containers/Formation/Formation.jsx"
import Consulting from "./Containers/Consulting/Consulting.jsx"


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="formation" element={<Formation />} />
            <Route path="consulting" element={<Consulting />} />
        </Routes>
    )
}

export default Router;