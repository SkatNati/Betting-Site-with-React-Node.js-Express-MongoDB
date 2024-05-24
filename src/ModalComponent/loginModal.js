import React, { useState } from 'react'
import './loginModal.css'
import Logo from '../Assets/images/logo3.png'
import PhoneInput from 'react-phone-number-input';
import { MdKey } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
import axios from'axios'

function LoginModal() {
  const [phoneNumber, setNumber] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false); 
  const [showModal3, setShowModal3] = useState(false); 
  const [showModal4, setShowModal4] = useState(false); 
  const [showHeaderModal, setShowHeaderModal] = useState(true); 
  const [showHeaderModal2, setShowHeaderModal2] = useState(false); 
  const [showDepositModal, setShowDepositModal] = useState(false); 

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  const closeModal3 = () => {
    setShowModal3(false);
  };
  const closeModal4 = () => {
    setShowModal4(false);
  };

  const closeModal5 = () => {
    setShowDepositModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/register', {phoneNumber, password, confirmPassword})
    .then(result => {
      if(result.data === "Registered"){
        goToLoginPage();
      }
      console.log(result)})
    .catch(err => console.log(err))

    // Check if passwords match
    // if (formData.password!== formData.confirmPassword) {
    //   alert("Passwords do not match.");
    //   return; // Prevent form submission if passwords do not match
    // }
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/login', {phoneNumber, password})
    .then(result => {
      
      if(result.data === "Success"){
        gotoLoggedIn()
      } else if(result.data === "RegisterFirst"){
        goToRegisterPage()
      }else if(result.data === "Incorrect"){
        alert("Try Again")
      }
      console.log(result)
    }
    )
    .catch(err => console.log(err))

    // Check if passwords match
    // if (formData.password!== formData.confirmPassword) {
    //   alert("Passwords do not match.");
    //   return; // Prevent form submission if passwords do not match
    // }
  }

  // const handleChange = (e) => {
  //   setFormData({...formData, [e.target.name]: e.target.value });
  // };

  const [formData, setFormData] = useState({
    password: '',
    phone: '', 
    confirmPassword: '',
  });

  const handleReset = (e) => {
    setShowModal4(true);
    setShowModal3(false);
  }

  const goToLoginPage = () => {
    setShowModal2(true); // Update this line to show the modal
    setShowModal(false); 
    setShowModal3(false); 
    setShowModal4(false); 
  };

  const goToDepositPage = () => {
    setShowDepositModal(true); // Update this line to show the modal
    setShowModal2(false); 
  };

  const gotoLoggedIn = () => {
    setShowHeaderModal(false);
    setShowHeaderModal2(true);
    setShowModal2(false);
  };

  const gotoLogOut = () => {
    setShowHeaderModal(true);
    setShowHeaderModal2(false);
  };

  const goToResetPage = () => {
    setShowModal3(true); // Update this line to show the modal
    setShowModal2(false); 
    setShowModal4(false); 
  };

  const goToRegisterPage = () => {
    setShowModal(true); // Update this line to show the modal
    setShowModal2(false); 
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  if(showModal || showModal2 || showModal3 || showModal4 || showDepositModal){
    document.body.classList.add('active-modal')
  } else{
    document.body.classList.remove('active-modal')
  }

  return (
      <>

    {/* Register Modal structure */}
    {showModal && (
      <div className='modal-overlay' onClick={closeModal}>
        <div className='modal-content' onClick={stopPropagation}>
          <div className='modal-header'>
            <div className='modal-header-logo'> 
              <img className='logo-modal' src={Logo} alt='' />   
            </div>
            <div className='modal-header-close'> 
              <button className='close-modal-btn' onClick={closeModal}>×</button>
            </div>
          </div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            {/* <div className='modal-content-form-phone'>
              <label htmlFor="phone">Phone Number</label>
              <PhoneInput
                placeholder=""
                onChange={(e) => setNumber(e.target.value)}
                defaultCountry="ET"
              />
            </div> */}
            <div className='modal-content-form'>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="number" name="number" placeholder="0912345678" onChange={(e) => setNumber(e.target.value)} required />
            </div>
            <div className='modal-content-form'>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="pass" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className='modal-content-form'>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="" onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <div className='modal-content-form-check'>
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">I confirm that I am OVER 18 *</label>
            </div>
            <div className='modal-content-form-check'>
              <input type="checkbox" id="privacy" name="privacy" required />
              <label htmlFor="privacy">If you continue, you’ll confirm that you’ve read and agree with the terms of use and the privacy policy</label>
            </div>
            <button className='modal-reg-btn'  type="submit">Register</button>
            <div className='modal-content-haveAcc'>
              <span className='modal-haveAcc'>Have an account | </span>
              <span onClick={goToLoginPage} className='modal-login'>Login</span>
            </div>
          </form>
        </div>
      </div>
    )}

    {/* Login Modal structure */}
    {showModal2 && (
      <div className='modal-overlay' onClick={closeModal2}>
        <div className='modal-content' onClick={stopPropagation}>
          <div className='modal-header'>
            <div className='modal-header-logo'> 
              <img className='logo-modal' src={Logo} alt='' />   
            </div>
            <div className='modal-header-close'> 
              <button className='close-modal-btn' onClick={closeModal2}>×</button>
            </div>
          </div>
          <h2>Login</h2>
          <form onSubmit={handleSubmitLogin}>
            {/* <div className='modal-content-form-phone'>
              <label htmlFor="phone">Phone Number</label>
              <PhoneInput
                placeholder=""
                onChange={(e) => setNumber(e.target.value)}
                defaultCountry="ET"
              />
            </div> */}
            <div className='modal-content-form'>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="number" name="number" placeholder="0912345678" onChange={(e) => setNumber(e.target.value)} required />
            </div>
            <div className='modal-content-form'>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" placeholder="" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='modal-content-form-check'>
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">Keep me logged in</label>
            </div>
            <button className='modal-reg-btn' type="submit">Login</button>
            <div className='modal-content-haveAcc'>
              <span onClick={goToResetPage} className='modal-login-haveAcc'>Forget Password | </span>
              <span onClick={goToRegisterPage} className='modal-login'>Register</span>
            </div>
          </form>
        </div>
      </div>
    )}

    {/* Deposit Modal structure */}
    {showDepositModal && (
      <div className='deposit-modal-overlay' onClick={closeModal5}>
        <div className='deposit-modal-content' onClick={stopPropagation}>
          <div className='deposit-modal-header'>
            <div className='deposit-modal-header-close'> 
              <button className='close-deposit-modal-btn' onClick={closeModal5}>×</button>
            </div>
          </div>
          <h2>Deposit</h2>
          <p className='deposit-modal-p'>
            Choose from the following options to deposit to your account.
          </p>
          <div className='deposit-modal-btns'>
            <button className='deposit-modal-btn'>Chapa</button>
            <button className='deposit-modal-btn'>Santem Pay</button>
          </div>
        </div>
      </div>
    )}

    {/* Reset Password Modal structure */}
    {showModal3 && (
      <div className='modal-overlay' onClick={closeModal3}>
        <div className='modal-content' onClick={stopPropagation}>
          <div className='modal-header'>
            <div className='modal-header-logo'> 
              <img className='logo-modal' src={Logo} alt='' />   
            </div>
            <div className='modal-header-close'> 
              <button className='close-modal-btn' onClick={closeModal3}>×</button>
            </div>
          </div>
          <h2>Reset Password</h2>
          <form>
            <div className='modal-content-form-phone'>
              <label htmlFor="phone">Phone Number</label>
              <PhoneInput
                id="phone"
                placeholder=""
                required
                defaultCountry="ET"
              />
            </div>
            <button className='modal-reg-btn' onClick={handleReset} type="submit">Send</button>
            <div className='modal-content-haveAcc'>
            <span className='modal-haveAcc'>Back to | </span>
            <span onClick={goToLoginPage} className='modal-login'>Login</span>
          </div>
          </form>
        </div>
      </div>
    )}

    {/* Temporary Code Modal structure */}
    {showModal4 && (
      <div className='modal-overlay' onClick={closeModal4}>
        <div className='modal-content' onClick={stopPropagation}>
          <div className='modal-header'>
            <div className='modal-header-logo'> 
              <img className='logo-modal' src={Logo} alt='' />   
            </div>
            <div className='modal-header-close'> 
              <button className='close-modal-btn' onClick={closeModal4}>×</button>
            </div>
          </div>
          <h2>Reset Password</h2>
          <form>
            <div className='modal-content-form-phone'>
              <label htmlFor="phone">Phone Number</label>
              <PhoneInput
                placeholder=""
                required
                defaultCountry="ET"
              />
            </div>
            <span className='modal-tempocode'>Temporary code has been sent</span>
            <button className='modal-reg-btn' onClick={goToLoginPage} type="submit">Login</button>
            <div className='modal-content-haveAcc'>
            <span onClick={goToResetPage} className='modal-login-haveAcc'>Send the code again</span>
          </div>
          </form>
        </div>
      </div>
    )}

    {/* Header Login Modal structure */}
    {showHeaderModal && (   
    <div className='upper-modall'>
      <form onSubmit={handleSubmitLogin}>
        <div className='upper-user'>
          <div className='upper-number'>
            <FaUser className='upper-number-icon' />
            <button className='upper-number-btn'>+251 (0)</button>
            <input type="text" placeholder="Number" onChange={(e) => setNumber(e.target.value)} required />
          </div>
          <div className='upper-pass'>
            <MdKey className='upper-pass-icon' />
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className='upper-btns'>
            <button className='btn-help' type="">?</button>
          </div>
          <div className='upper-btns'>
            <button className='btn' type="">Login</button>
          </div>
        </div> 
      </form>
      <div className=''>
        <button className='btn' onClick={goToRegisterPage} type="">Register</button>
      </div>
    </div>
    )}

    {/* Header Logged in Modal structure */}
    {showHeaderModal2 && (   
      <div className='upper-user'>
        <div className='upper-number'>
          <i className='bx bxs-user'></i>
          <span className='upper-greetUser'>Hello </span>
          <span className='upper-name-user'>Guest User </span>
        </div>
        <div className='upper-pass'>
          <span className='upper-balance'>Balance: 0 ETB</span>
        </div>
        <div className='upper-btns'>
          <button className='btn-help' type="">?</button>
        </div>
        <div className='upper-btns'>
          <button onClick={goToDepositPage} className='btn' type="">Deposit</button>
        </div>
        <div className='upper-btns'>
          <button className='btn' onClick={gotoLogOut} type="">Log out</button>
        </div>
      </div>
    )}
      </>
  )
}

export default LoginModal
