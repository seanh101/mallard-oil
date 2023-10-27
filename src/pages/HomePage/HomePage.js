import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Map from './SSC-map.png';
import truck from './oil-truck.jpg';
import snow1 from './snow1.jpeg';
import snow2 from './snow2.jpeg';

function HomePage() {
    const images = [truck, snow1, snow2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFadeIn(true);
        }, 6000); // 6 seconds

        return () => clearInterval(timer);
    }, [currentImageIndex, images.length]);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeIn(false);
        }, 3000); // 3 seconds (half of 6 seconds)

        return () => clearTimeout(fadeTimer);
    }, [fadeIn]);

    return (
        <div className='container'>
            <Header />
            <div className='inner-container'>
                <section className='truck'>
                    <img src={images[currentImageIndex]} alt='truck' className={fadeIn ? 'oil-truck fade-in' : 'oil-truck'} />
                </section>
                <section className='description'>
                    <h1 id='welcome'>#1 Local Heating Oil Supplier</h1>
                    <p>With over four decades of service, Mallard Oil has been the go-to provider for all your heating oil needs. Our commitment ensures your home stays warm during the cold New England winters. Experience the warmth with Mallard Oil.</p>
                </section>
                
                <section className='bioheat'>
                    <h2>Introducing Eco-friendly Bio-Heat</h2>
                    <p><span role="img" aria-label="leaf">🍃</span> Environmentally Friendly: A cleaner and greener alternative to traditional heating oil. It's derived from renewable resources.</p>
                    <p><span role="img" aria-label="fire">🔥</span> An Easy Switch: Compatible with existing heating systems.</p>
                    <p><span role="img" aria-label="money-bag">💰</span> Cost-Effective: Cost-effective, guaranteeing warmth and comfort without breaking the bank.</p>
                    <p>Contact us today to switch!</p>
                </section>
                
                <section className='maps'>
                    <img src={Map} alt='map' className='map'/>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.8848522262024!2d-70.9119671!3d42.216905600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e363d41400d2e7%3A0x680fbdc5489382e3!2s16%20French%20St%2C%20Hingham%2C%20MA%2002043!5e0!3m2!1sen!2sus!4v1697046657180!5m2!1sen!2sus" 
                        width="600" 
                        height="450" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade" 
                        title='location' 
                        className='location'
                    ></iframe>
                </section>
            </div>

            <footer>
                <p>Mallard Oil &copy; 2023 | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default HomePage;
