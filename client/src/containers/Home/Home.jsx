// import React from 'react';
import React, { useEffect } from "react";
import M from "materialize-css";
import Apple from "../../assets/images/Apple.png";
import Hulu from "../../assets/images/Hulu.jpg";
import Netflix from "../../assets/images/Netflix.jpg";
import Roku from "../../assets/images/Roku.png";
import Spotify from "../../assets/images/Spotify.jpg";


const Home = () => {

    useEffect(() => {
        // Init Tabs Materialize JS
        let tabs = document.querySelectorAll(".tabs");
        M.Tabs.init(tabs);
    });

    return (

        <div className="carousel carousel-slider">
            <a className="carousel-item" href="/"/><img src={Apple} alt="apple" style={{width: "20%"}}/>
            <a className="carousel-item" href="/"/><img src={Hulu} alt="hulu" style={{width: "20%"}}/>
            <a className="carousel-item" href="/"/><img src={Netflix} alt="netflix" style={{width: "20%"}}/>
            <a className="carousel-item" href="/"/><img src={Roku} alt="roku" style={{width: "20%"}}/>
            <a className="carousel-item" href="/"/><img src={Spotify} alt="spotify" style={{width: "20%"}}/>
        </div>
    );
};

export default Home;