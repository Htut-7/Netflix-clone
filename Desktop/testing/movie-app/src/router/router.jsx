import App from "../App";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import About from "../pages/About";
import Detail from "../pages/Detail";

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:'',
            element: <Home/>
        },
        {
            path:'/movie',
            element: <Movie/>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
          path:'/movie/:id',
          element: <Detail/>
        }
    ]
  },
]);

export default router;