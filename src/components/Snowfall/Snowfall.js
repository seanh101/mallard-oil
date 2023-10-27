

import { useEffect } from 'react';
import './Snowfall.css';  // Assuming you will move the relevant CSS to Snowfall.css

const Snowfall = () => {

  useEffect(() => {
    const root = document.getElementById('root');

    // Create 100 snowflakes (you can adjust this number)
    for (let i = 0; i < 100; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      const position = Math.random() > 0.5 ? Math.random() * 15 : 85 + Math.random() * 15;
snowflake.style.left = `${position}vw`;

      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      root.appendChild(snowflake);
    }

    // Cleanup function to remove snowflakes when component unmounts
    return () => {
      const snowflakes = document.querySelectorAll('.snowflake');
      snowflakes.forEach(flake => flake.remove());
    }
  }, []);  // Empty dependency array ensures this runs once on mount and cleanup on unmount

  return null;  // This component does not need to render anything in the JSX

}

export default Snowfall;
