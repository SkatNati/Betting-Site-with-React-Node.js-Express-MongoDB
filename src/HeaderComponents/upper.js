import React from 'react';
import 'react-phone-number-input/style.css'; 
import './upper.css'
import LoginModal from '../ModalComponent/loginModal';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";

function Upper() {
  return (
    <div className='upper'>
      <LoginModal />

      <div className='upper-icons'>
        <div className='upper-support'>
          <HiChatAlt2 className='support-icon' />
          <span>Support</span>
        </div>
        <div className='upper-social'>
          <FaFacebookF className='social-icon'/>
          <IoLogoInstagram className='social-icon' />
          <FaTiktok className='social-icon' />
          <FaTelegram className='social-icon-telegram' />
        </div>
      </div>
    </div>
  )
}

export default Upper
