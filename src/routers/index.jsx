import { createBrowserRouter } from "react-router-dom";
import {LandingPage} from "../pages/LandingPage"
import {App} from "../App"
import { MovieDetails } from "../pages/MovieDetails";

export const router = createBrowserRouter([
     {
          path: "/",
          element:<App component={<LandingPage/>}/>
     },
     {
          path: "/movieDetails/:movieId",
          element:<App component={<MovieDetails/>}/>
     }
]);
