import '../styles//navBar.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function NavBar() {
  return (


    <div >
      <ul>
        <li style={{ marginTop: 10}}><Link to="/">Home</Link></li>
        <li style={{ marginTop: 10}}><Link to="favouritess">Favourites</Link></li>
        <li style={{ marginTop: 10}}><Link to="search">Search</Link></li>
        <li style={{ float: 'right' }}><Link to="/"> <img id='nasaImg' src="https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg" /></Link></li>
      </ul>

    </div>






  );
}

export default NavBar;
