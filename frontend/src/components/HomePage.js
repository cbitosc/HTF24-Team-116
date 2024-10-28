// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components_css/HomePage.css';
import Carousel from './Carousel';
import MissionSection from './MissionSection';
import BannerSection from './BannerSection';

const HomePage = () => {
    return (
        <div>
            <div className="homepage">
                <h1>Welcome to the Pollution Control Platform</h1>
                <p>
                    Join us in the fight against pollution! Participate in eco-friendly challenges, 
                    track your carbon footprint, and earn rewards for your contributions.
                </p>
                <div class="carousel-align">
                    <Carousel />
                </div>
            </div>
            <MissionSection />
            <BannerSection />
        </div>
    );
};

export default HomePage;
