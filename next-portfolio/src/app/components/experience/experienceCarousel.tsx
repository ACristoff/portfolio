// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const experiences = [
    {
        image: '/images/MicrosoftLogo.png',
        altText: 'Microsoft Logo',
        position: 'Full Stack Engineer',
        height: 60,
        width: 300,
        description: 'Contract role at The Coalition. Working within the web team to provide a AAA web experience for Gears of War fans, as well as providing value to the studio by supporting internal development.'
    },
    {
        image: '/images/EspressoDolceLogo.png',
        altText: 'Espresso Dolce Logo',
        position: 'Web Developer',
        height: 60,
        width: 60,
        description: 'Worked on a robust mom & pop ecommerce site specializing in espresso machines. Heavily emphasizing SEO for products, and a great customer experience.'
    },
    {
        image: '/images/ProAceLogo.jpg',
        altText: 'Pro Ace Logo',
        position: 'Web Developer',
        height: 60,
        width: 300,
        description: 'Worked on front-end and back-end systems. Strong focus on making a customer-facing website optimized for conversions and SEO.'
    },
    {
        image: '/images/SpiceBoxLogo.png',
        altText: 'Spicebox Logo',
        position: 'Web Developer',
        height: 60,
        width: 110,
        description: 'Overhauled a website meant to service both regular consumers at an individual level, and supply partners on a bulk scale. Managing different kinds of customers and streamlining the process of working with retail partners.'
    },
]


const ExperienceCarousel = () => {
    return (
        <section>
            [Carousel]
            <Carousel useKeyboardArrows={true}>
                <div>Test1</div>
                <div>Test2</div>
            </Carousel>
        </section>
    )
}



export default ExperienceCarousel