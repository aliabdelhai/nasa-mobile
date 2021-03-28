

import React, { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react'

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { useHistory, useLocation, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


function MediaCard(props) {

    const location = useLocation().pathname

    const addImageToFav = function () {
        const fav = { title: props.info.title, imgUrl: props.info.imgUrl, description: props.info.explanation }
        props.nasaStore.addImageToFav(fav)
    }

    const removeImageFromFav = function () {
        props.nasaStore.removeImageFromFav(props.info._id)
    }

   

    return (
        <div >
            {location == "/favouritess" ?
                <Link to={`/favourite/${props.info._id}`}>
                    <CardMedia component="img" alt="photo" width="100%" image={props.info.imgUrl} title={props.info.title} />
                 </Link>
                : <CardMedia component="img" alt="photo" width="100%" image={props.info.imgUrl} title={props.info.title} />
            }

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{props.info.title}</Typography>
                {<Typography variant="body2" color="textSecondary" component="p">{props.info.explanation}</Typography>}
                {!location.includes('/favouritess') ?
                <Typography variant="body2" color="textSecondary" component="p">{props.info.description}</Typography>: null}

            </CardContent>


            <CardActions style={{ justifyContent: 'center' }}>
                <Button size="small" color="primary" >
                    {location == "/favouritess" ?
                        <FavoriteIcon color="action" fontSize="large" style={{ color: 'red' }} onClick={removeImageFromFav} /> 
                        : location == "/search" ? 
                        <FavoriteBorderIcon color="action" fontSize="large" style={{ color: 'red' }} onClick={addImageToFav} />
                        : null} 
                </Button>
            </CardActions>

        </div>
    );
}

export default inject("nasaStore")(observer(MediaCard))

