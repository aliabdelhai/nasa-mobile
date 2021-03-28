import '../styles//favourites.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import MediaCard from './MediaCard';
import { makeStyles } from '@material-ui/core/styles';
import { ContactsOutlined } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  gridCard: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: theme.spacing(2),
      margin: theme.spacing(2),
    ['@media (max-width:780px)']: { 
      display: "block",
    }
  }
}));

function Favourites(props) {
  const classes = useStyles();
  return (
        <div className={classes.gridCard}>
          {props.favs.map(f=> <MediaCard info={f} key={f._id}/>)}   

        </div>

 
  );
}

export default Favourites;
