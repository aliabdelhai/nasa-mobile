import '../styles//home.css';
import axios from 'axios'
import { Component, useState, useEffect } from 'react';


function Home() {
    const [data, setData] = useState([])

    useEffect(async () => {
        const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=qjTIdphy4kyWhH3hrdTiJ2OyWWjLJqk6RBLOQchQ")
        setData(response.data)
    }, [])

    return (
        <div >
            <center>
            <div className="title">{data.title}</div>
            <img className='homeImg' src={data.url}/>
            <div className='desc'>{data.explanation}</div>
            </center>


        </div>


    );
}

export default Home;
