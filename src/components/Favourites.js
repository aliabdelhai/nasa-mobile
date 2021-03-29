import '../styles//favourites.css';
import { observer, inject } from 'mobx-react'

import MediaCard from './MediaCard';
import { makeStyles } from '@material-ui/core/styles';

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
          {props.favs.map(f=> <MediaCard info={f} key={f._id} />)}   
        </div>

 
  );
}

export default inject("nasaStore")(observer(Favourites))

