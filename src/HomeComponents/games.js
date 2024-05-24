import React from 'react';
import 'react-phone-number-input/style.css'; 
import './games.css'
import Img1 from '../Assets/images/img1.png'
import Img2 from '../Assets/images/img2.png'
import Img3 from '../Assets/images/img3.png'
import Img4 from '../Assets/images/img4.png'
import Img5 from '../Assets/images/img5.png'
import Img6 from '../Assets/images/img6.png'
import Img7 from '../Assets/images/img7.png'
import Img8 from '../Assets/images/img8.png'
import LoginModal from '../ModalComponent/loginModal';

function Games() {
  return (
    
    <div className='games'>
      {/* <LoginModal /> */}
      <div className='games-title-button'>
        <h2 className='games-title'>Crash Games</h2>
        <button className='games-btn'>Show All</button>
      </div>
      <div className='games-container'>
        <div className='games-content'>
          <img className='games-img' src={Img1} alt='Game' />
          <button className='games-content-btn'>JetX</button>
        </div>
        <div className='games-content'>
          <img className='games-img' src={Img2} alt='Game' />
          <button className='games-content-btn'>Atlantis</button>
        </div>
        <div className='games-content'>
          <img className='games-img' src={Img3} alt='Game' />
          <button className='games-content-btn'>Ninja Crash</button>
        </div>
        <div className='games-content'>
          <img className='games-img' src={Img4} alt='Game' />
          <button className='games-content-btn'>Aviator</button>
        </div>
        <div className='games-content'>
          <img className='games-img' src={Img5} alt='Game' />
          <button className='games-content-btn'>GreyHound Racng</button>
        </div>
      </div>
      <div className='games-container'>
        <div className='games-content'>
          <img className='games-img' src={Img6} alt='Game' />
          <button className='games-content-btn'>Virtual Keno</button>
        </div>
        <div className='games-content'>
          {/* <img className='games-img' onClick={goToRegisterPage} src={Img6} alt='Game' /> */}
          {/* <button className='games-content-btn'>JetX</button> */}
        </div>
        <div className='games-content'>
          {/* <img className='games-img' onClick={goToRegisterPage} src={Img1} alt='Game' /> */}
          {/* <button className='games-content-btn'>JetX</button> */}
        </div>
        <div className='games-content'>
          {/* <img className='games-img' onClick={goToRegisterPage} src={Img1} alt='Game' /> */}
          {/* <button className='games-content-btn'>JetX</button> */}
        </div>
        <div className='games-content'>
          {/* <img className='games-img' onClick={goToRegisterPage} src={Img1} alt='Game' /> */}
          {/* <button className='games-content-btn'>JetX</button> */}
        </div>
      </div>

      <div className='games-title-button'>
        <h2 className='games-title'>Spribes</h2>
        <button className='games-btn'>Show All</button>
      </div>
      <div className='games-container'>
        <div className='games-content'>
          <img className='games-img' src={Img7} alt='Game' />
          <button className='games-content-btn'>Plinko</button>
        </div>
        <div className='games-content'>
          <img className='games-img' src={Img8} alt='Game' />
          <button className='games-content-btn'>Keno</button>
        </div>
        <div className='games-content'>
          {/* <img className='games-img' onClick={goToRegisterPage} src={Img1} alt='Game' /> */}
          {/* <button className='games-content-btn'>JetX</button> */}
        </div>
        <div className='games-content'>
          {/* <img className='games-img' onClick={goToRegisterPage} src={Img1} alt='Game' /> */}
          {/* <button className='games-content-btn'>JetX</button> */}
        </div>
        <div className='games-content'>
          {/* <img className='games-img' onClick={goToRegisterPage} src={Img1} alt='Game' /> */}
          {/* <button className='games-content-btn'>JetX</button> */}
        </div>
      </div>
    </div>
  )
}

export default Games
