import '../styles//navBar.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function NavBar() {
  return (
     
        <div className="nav-wrapper">

          <div className="left-side">
            <div className="nav-link-wrapper">
              <Link to="/">home</Link>
            </div>
            <div className="nav-link-wrapper">
             <Link to="/search">search</Link>
            </div>
            <div className="nav-link-wrapper">
              <Link to="/favouritess">Favourites</Link>
            </div>
          </div>

          <div className="right-side">
            <div className="nav-link-wrapper">
              <img id='nasaImg' src="https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg" />
            </div>
          </div>
        </div>

 
  );
}

export default NavBar;
