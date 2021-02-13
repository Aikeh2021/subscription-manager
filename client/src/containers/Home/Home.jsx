import React from 'react';
import CarouselComp from '../../components/Carousel/CarouselComp';
import VideoGames from '../../assets/logos/VideoGames.jpeg';
import Audiobook from '../../assets/logos/Audiobook.jpeg';
import Netflix from '../../assets/logos/Netflix.jpeg';
import Spotify from '../../assets/logos/Spotify.jpeg';
import SubscriptionBox from '../../assets/logos/SubscriptionBox.jpeg';
import VideoGames2 from '../../assets/logos/VideoGames2.jpeg';
import {Link} from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <h1 style={{textAlign:"center", fontFamily: 'Monoton'}}>WELCOME TO SUB MANNY</h1>
            <div className="divider"></div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col s12">
                    <CarouselComp image1={VideoGames} image2={Audiobook} image3={Netflix} image4={Spotify} image5={SubscriptionBox} image6={VideoGames2} />
                    </div>
                </div>
            </div>
    <div className="divider"></div>
            <h2 style={{textAlign:"center", fontFamily: 'Monoton'}}>TO GET STARTED</h2>
            <p style={{fontFamily: 'Roboto', fontSize: "20px", textAlign:"center"}}>Create an account to start tracking subscriptions. Already have an account? Login to alter your tracked subscriptions. </p>
            <div className="row">
            <div className="col s8 center m12">
            <Link to="/login" class="waves-effect waves-light btn-large" style={{borderRadius: 30, backgroundColor: "#008000", fontFamily: 'Roboto'}}>Login to Account</Link>
            <span style={{padding: 100}}></span>
            <Link to="/signup" class="waves-effect waves-light btn-large" style={{borderRadius: 30, backgroundColor: "#008000", fontFamily: 'Roboto'}}>Create an Account</Link>
            </div>
            </div>
        
        </div>
    );
};

export default Home;