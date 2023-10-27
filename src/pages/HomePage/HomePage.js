import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Snowfall from '../../components/Snowfall/Snowfall';
import Map from './SSC-map.png';
import truck from './oil-truck.jpg';
import snow1 from './snow1.jpeg';
import snow2 from './snow2.jpeg';

function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageClass, setCurrentImageClass] = useState('fade-in');

    const images = [truck, snow1, snow2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageClass('fade-out');
            
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setCurrentImageClass('fade-in');
            }, 1000); // delay to switch image after fading out
        }, 4000); // time to switch to next image
    
        return () => clearInterval(interval);
    });
    

    return (
        <div className='container'>
            <Header />
            <Snowfall />
            <div className='inner-container'>
                <section className={`truck ${currentImageClass}`} style={{backgroundImage: `url(${images[currentIndex]})`}}>
                    {/* Content can be placed here if needed, but for now, it's empty */}
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
                        src="https://www.google.com/maps/embed?pb=..." 
                        width="600" 
                        height="450" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade" 
                        title='location' 
                        className='location'
                    ></iframe>
                </section>
                <section className="contact">
                    <h2>Contact Us</h2>
                    <a href="mailto:seanharrington4189@gmail.com">
                        <span role="img" aria-label="mail">📧</span>
                    </a>
                </section>
            </div>

            <footer>
                <p>Mallard Oil &copy; 2023 | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default HomePage;

