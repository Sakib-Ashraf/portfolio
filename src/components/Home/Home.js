import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <>
            <section id="home" className="main-banner parallaxie">
                <div className="heading">
                    <h1>hello i'm Dominic</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h3 className="cd-headline clip is-full-width">
                        <span>Lorem ipsum dolor sit amet </span>
                        <span className="cd-words-wrapper">
                            <b className="is-visible">Web Developer</b>
                            <b>Web Design</b>
                            <b>Creative Design</b>
                            <b>Graphic Design</b>
                        </span>
                    </h3>
                </div>
            </section>

            <svg id="clouds" className="hidden-xs" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 85 100" preserveAspectRatio="none">
                <path d="M-5 100 Q 0 20 5 100 Z
            M0 100 Q 5 0 10 100
            M5 100 Q 10 30 15 100
            M10 100 Q 15 10 20 100
            M15 100 Q 20 30 25 100
            M20 100 Q 25 -10 30 100
            M25 100 Q 30 10 35 100
            M30 100 Q 35 30 40 100
            M35 100 Q 40 10 45 100
            M40 100 Q 45 50 50 100
            M45 100 Q 50 20 55 100
            M50 100 Q 55 40 60 100
            M55 100 Q 60 60 65 100
            M60 100 Q 65 50 70 100
            M65 100 Q 70 20 75 100
            M70 100 Q 75 45 80 100
            M75 100 Q 80 30 85 100
            M80 100 Q 85 20 90 100
            M85 100 Q 90 50 95 100
            M90 100 Q 95 25 100 100
            M95 100 Q 100 15 105 100 Z">
                </path>
            </svg>
        </>
    );
}

export default Home;
