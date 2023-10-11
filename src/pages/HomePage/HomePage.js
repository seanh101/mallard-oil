import React from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import Map from './SSC-map.png'
import mallard from './mallard.jpg'

function HomePage() {
    return (
<div>
        <Header />
        <div className='container'>
        
        
        <h4>"We don't fly south for the winter!" </h4>
        <img className='mallard' src={mallard} alt='mallard'></img>
        <div className='description'>
        <p>Welcome to Mallard Oil – Your Trusted Source for Reliable Heating Oil Services in the South Shore, Massachusetts!</p> 
        <h4>Proudly serving the South Shore for over 40 years!</h4>
        <p>With over four decades of dedicated service to our community, Mallard Oil has been the go-to provider for all your heating oil needs. Our commitment to warmth and comfort is backed by years of experience, ensuring that your home stays cozy during even the coldest New England winters.</p>  
            
        <p>At Mallard Oil, we don't just deliver oil; we deliver peace of mind. Join our long-standing tradition of excellence, and experience the warmth that comes with choosing Mallard Oil.</p>
        </div>
        <div className='bioheat'>
        <p>We're thrilled to introduce our eco-friendly Bio-Heat option!</p>

        <p>🍃 Environmentally Friendly: Bio-Heat is a cleaner and greener alternative to traditional heating oil. It's derived from renewable resources, reducing our carbon footprint and helping you reduce your environmental impact.</p>

        <p>🔥 Efficient and Reliable: Bio-Heat burns cleanly and efficiently, keeping your home warm and comfortable during even the coldest New England winters. Plus, it's compatible with your existing heating system.</p>

        <p>💰 Cost-Effective: Not only does Bio-Heat benefit the environment, but it's also easy on your wallet. It's a cost-effective choice that won't compromise on warmth and comfort.</p>

        <p>Join us in embracing a more sustainable and eco-conscious future with Bio-Heat from [Your Company Name]. Discover the warmth and peace of mind that comes from choosing a responsible and reliable heating solution. Contact us today to make the switch! 🌿</p>
        </div>
        <div className='maps'>
   <img className='map' src={Map} alt='map'></img>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.8848522262024!2d-70.9119671!3d42.216905600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e363d41400d2e7%3A0x680fbdc5489382e3!2s16%20French%20St%2C%20Hingham%2C%20MA%2002043!5e0!3m2!1sen!2sus!4v1697046657180!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location' className='location'></iframe>
   </div>
        </div>
        </div>
    );
}

export default HomePage;