import React, { useState } from 'react';
import Games from '../HomeComponents/games';
import LoginModal from '../ModalComponent/loginModal';

function GameLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleGameClick = () => {
    if (!isLoggedIn) {
      setShowRegisterModal(true);
    }
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <div>
      <Games onGameClick={handleGameClick} />
      <LoginModal
        showModal={showRegisterModal}
        closeModal={closeRegisterModal}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default GameLogin;
