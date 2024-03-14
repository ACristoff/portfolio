'use client'
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Card, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const experiences = [
    {
        name: 'Microsoft',
        image: '/images/MicrosoftLogo.png',
        altText: 'Microsoft Logo',
        position: 'Full Stack Engineer',
        height: 60,
        width: 300,
        description: 'Working within the web team to provide a triple A web experience for Gears of War fans, as well as providing value to the studio by supporting internal development.'
    },
    {
        name: 'Espresso Dolce',
        image: '/images/EspressoDolceLogo.png',
        altText: 'Espresso Dolce Logo',
        position: 'Web Developer',
        height: 60,
        width: 60,
        description: 'Worked on a robust mom & pop ecommerce site specializing in espresso machines. Heavily emphasizing SEO for products, and a great customer experience.'
    },
    {
        name: 'ProAce',
        image: '/images/ProAceLogo.jpg',
        altText: 'Pro Ace Logo',
        position: 'Web Developer',
        height: 60,
        width: 300,
        description: 'Worked on front-end and back-end systems. Strong focus on making a customer-facing website optimized for conversions and SEO.'
    },
    {
        name: 'Spicebox Books',
        image: '/images/SpiceBoxLogo.png',
        altText: 'Spicebox Logo',
        position: 'Web Developer',
        height: 60,
        width: 110,
        description: 'Overhauled a website meant to service both regular consumers at an individual level, and supply partners on a bulk scale. Managing different kinds of customers and streamlining the process of working with retail partners.'
    },
]

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
    window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
};

const ExperienceCarousel = () => {

    const carouselWidth = useWindowDimensions().width >= 800 ? 40 : 100
    const [carouselMode, setCarouselMode] = useState(carouselWidth)

    useEffect(() => {

        console.log(carouselWidth)
        setCarouselMode(carouselWidth)

    }, [carouselWidth])

    return (
        <Carousel 
            useKeyboardArrows
            centerMode
            centerSlidePercentage={carouselMode}
            swipeable
            emulateTouch
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            interval={6000}
            width='100%'
        >
            {experiences.map((e) => {
                return (
                        <Paper 
                            elevation={3} 
                            key={e.name} 
                            style={{
                                marginLeft: 50,
                                marginRight: 50,
                                marginBottom:35,
                                padding:15,
                                minHeight: 200
                            }}
                        >
                            <div 
                                style={{
                                    width:'100%',
                                    display: 'flex',
                                    // flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <div style={{width: e.width}}>
                                    <Image src={`${e.image}`} alt={e.name} width={e.width} height={e.height}/>
                                </div>
                            </div>                            
                            <Typography variant='h4'>{e.position}</Typography>
                            <Typography variant='body1'>@ {e.name}</Typography>
                            <Typography variant='body2'>{e.description}</Typography>
                        </Paper>
                )
            })}
        </Carousel>
    )
}



export default ExperienceCarousel