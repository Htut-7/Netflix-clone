import App from "../App";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Movies from "../pages/Movies";
import TVShow from "../pages/TVShow";
import MovieDetail from "../pages/MovieDetail";
import ShowDetail from "../pages/ShowDetail";
import WishList from "../pages/WishList";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export default function Router(){

  let {authReady,user}=useContext(AuthContext);

  const isAuthenticated=!!user;


  const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:'',
            element: isAuthenticated ? <Home/> : <Navigate to='/login'/>
        },
        {
            path: '/register',
            element: !isAuthenticated ? <Register/> : <Navigate to='/'/>
        },
        {
            path:'/login',
            element: !isAuthenticated ? <Login/> : <Navigate to='/'/>
        },
        {
          path: '/movie',
          element: isAuthenticated ? <Movies/> : <Navigate to='/login'/>
        },
        {
          path:'/show',
          element: isAuthenticated ? <TVShow/>  : <Navigate to='/login'/>
        },
        {
          path:'/moviedetail/:id',
          element: isAuthenticated ? <MovieDetail/> : <Navigate to='/login'/>
        },
        {
          path: '/showDetail/:id',
          element: isAuthenticated ? <ShowDetail/> : <Navigate to='/login'/>
        },
        {
          path: '/wishlist',
          element: isAuthenticated ? <WishList/> : <Navigate to='/login'/>
        }
    ]
  },
]);

return (
  authReady && <RouterProvider router={router}/>
)

}

