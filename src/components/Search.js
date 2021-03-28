import '../styles//search.css';

import { observer, inject } from 'mobx-react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MediaCard from './MediaCard';
import { PropTypes } from 'mobx-react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: 200,
        },
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    gridCard: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: theme.spacing(2),
        margin: theme.spacing(2),
        ['@media (max-width:780px)']: {
            display: "block",
        }
    }
}));


function Search(props) {
    const classes = useStyles();
    const [input, setInput] = useState('')

    const handleInput = function (e) {
        setInput(e.target.value)
    }
    
    const search = function() {
        props.nasaStore.searchFor(input)
    }

    return (
        <div >
            <div className={classes.root} >
                <TextField
                    label="search"
                    id="outlined-size-small"
                    defaultValue=""
                    variant="outlined"
                    size="small"
                    value={input}
                    onChange={handleInput}
                />
                <Button variant="contained" color="primary" onClick={search}>
                    SEARCH
            </Button>

                <div className={classes.gridCard}>
                    {props.nasaStore.search.map((d, i) => <MediaCard info={d} key={i} />)}
                </div>
            </div>

        </div>


    );
}

export default inject("nasaStore")(observer(Search))
