import React from 'react';
import './promotion.css';
import Img1 from '../Assets/images/jet.png';
import Img2 from '../Assets/images/pp.png';

function Promotion() {
  const sliderRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1); // 1 for forward, -1 for backward
  const imgWidth = 1100; // Adjust this value to the actual width of your images

  // Function to handle automatic sliding
  const autoSlide = () => {
    const slider = sliderRef.current;
    if (slider) {
      let newIndex = currentIndex + direction;
      
      if (newIndex >= 2) {
        newIndex = 2;
        setDirection(-1); // Switch to backward
      } else if (newIndex <= 0) {
        newIndex = 0;
        setDirection(1); // Switch to forward
      }

      setCurrentIndex(newIndex);
      slider.scrollTo({
        left: newIndex * imgWidth,
        behavior: 'smooth',
      });
    }
  };

  // Call autoSlide every second
  React.useEffect(() => {
    const intervalId = setInterval(autoSlide, 7000); // Slide every 1000 milliseconds (1 second)
    return () => clearInterval(intervalId); // Clean up on unmount
  }, [currentIndex, direction]);

  return (
    <div className='promotion'>
      <div ref={sliderRef} className='slider' style={{ display: 'flex', overflow: 'hidden' }}>
        <img id='slider-1' src={Img1} className='promotion-img' alt='' />
        <img id='slider-2' src={Img2} className='promotion-img' alt='' />
        <img id='slider-3' src={Img1} className='promotion-img' alt='' />
      </div>
      <div className='slider-nav'>
        <a href='#slider-1'></a>
        <a href='#slider-2'></a>
        <a href='#slider-3'></a>
      </div>
    </div>
  );
}

export default Promotion;
