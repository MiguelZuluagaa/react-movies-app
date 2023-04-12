import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {LandingPage} from "../pages/LandingPage"

export default function MyRoutes(){
     return(
          <Router>
               <Routes>
                    <Route path="/" element={<LandingPage/>}/>
               </Routes>
          </Router>
     );
}
