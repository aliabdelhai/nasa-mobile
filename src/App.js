import './App.css';
import NavBar from './components/NavBar'
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Search from './components/Search';
import Favourites from './components/Favourites';
import { observer, inject } from 'mobx-react'
import axios from "axios";

function App(props) {
  
  useEffect(async()=> {
    const arr = await axios.get('/favourites')
    props.nasaStore.favs = arr.data  
    console.log(props.nasaStore)
  }, [])

  return (
    <Router>
        <NavBar />
        <Route path="/" exact render={() => <Home/>} />
        <Route path="/search" exact render={() => <Search />} />
        <Route path="/favouritess" exact render={() => <Favourites favs={props.nasaStore.favs} />} />
        <Route path="/favourite/:id" exact render={({match}) => <Favourites match={match} favs={[props.nasaStore.favs.find(f => f._id == match.params.id )]}/>} />

    </Router>
  );
}


export default inject("nasaStore")(observer(App))