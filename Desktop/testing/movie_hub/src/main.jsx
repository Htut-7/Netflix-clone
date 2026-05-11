import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './router/Router';
import AuthContextProvider from './Context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(

  <AuthContextProvider>
       <Router/>
        <ToastContainer/>
  </AuthContextProvider>


)
