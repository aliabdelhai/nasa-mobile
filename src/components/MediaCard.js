

import React, { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react'
import { Snackbar } from '@material-ui/core';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import { useLocation, Link } from 'react-router-dom';
import ReactSnackBar from "react-js-snackbar";
import { AddOneStore } from './stores/AddOneStore';


function MediaCard(props) {


    const location = useLocation().pathname

    const add = function () {
        const fav = new AddOneStore(props.info.title, props.info.imgUrl, props.info.explanation)
        props.nasaStore.addImageToFav(fav)
    }

    const remove =  ()=> {
        props.nasaStore.removeImageFromFav(props.info._id)
       
    }

  
   

    return (
        <div >
            {location == "/favouritess" ?
                <Link to={`/favourite/${props.info._id}`}>
                    <CardMedia component="img" alt="photo" width="100%" image={props.info.imgUrl} title={props.info.title} />
                 </Link>
                : <CardMedia component="img" alt="photo" width="80%" image={props.info.imgUrl} title={props.info.title} />
            }

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{props.info.title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{props.info.explanation}</Typography>
                {!location.includes('/favouritess') ?
                <Typography variant="body2" color="textSecondary" component="p">{props.info.description}</Typography>: null}

            </CardContent>


            <CardActions style={{ justifyContent: 'center' }}>
                <Button size="small" color="primary" >
                    {location == "/favouritess" ?
                        <FavoriteIcon color="action" fontSize="large" style={{ color: 'red' }} onClick={remove} /> 
                        : location == "/search" ? 
                        <FavoriteBorderIcon color="action" fontSize="large" style={{ color: 'red' }} onClick={add} />
                        : null} 
                         
                            
                </Button>
            </CardActions>


        </div>
    );
}

export default inject("nasaStore")(observer(MediaCard))

