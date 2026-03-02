import './App.css';
import logo from './assets/580b57fcd9996e24bc43c529.png'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Movie from './pages/Movie';

function App() {
 

  return (
    <>
        <nav className='nav-bar'>
          <div className='logo'>
            <img
            src={logo}
            alt="Netflix"
            className="netflix-logo"
          />
          </div>
          <ul className='nav-link'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/movie'>Movie</NavLink>
              <NavLink to='/about'>About</NavLink>
          </ul>

          <div className="nav-control">
          <NavLink to="/login" className="signin-btn">Sign In</NavLink>
        </div>
        </nav>

      <Outlet/>

      <footer className="footer">
  <p className="footer-top">
    Questions? Call <a href="#">1-800-012-3456</a>
  </p>

  <div className="footer-links">
    <a href="#">FAQ</a>
    <a href="#">Help Center</a>
    <a href="#">Account</a>
    <a href="#">Media Center</a>

    <a href="#">Investor Relations</a>
    <a href="#">Jobs</a>
    <a href="#">Ways to Watch</a>
    <a href="#">Terms of Use</a>

    <a href="#">Privacy</a>
    <a href="#">Cookie Preferences</a>
    <a href="#">Corporate Information</a>
    <a href="#">Contact Us</a>
  </div>

  <div className="footer-lang">
    <select>
      <option>English</option>
      <option>ไทย</option>
    </select>
  </div>

  <p className="footer-country">Netflix Thailand</p>
</footer>
    </>
  )
}

export default App
