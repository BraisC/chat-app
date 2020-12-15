import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SideBar } from './SideBar';
import { Styled } from './styled';

const MobileHeader = ({ users, currentUser, roomName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((v) => !v);
    // I suppose this is fine as it is not React-created DOM
    document.querySelector('body').classList.toggle('noscroll');
  };

  const firstLine = {
    closed: {
      rotate: 0,
      marginTop: 0,
      backgroundColor: 'var(--color-text)',
    },
    open: { rotate: 45, marginTop: '1px', backgroundColor: 'var(--color-red)' },
  };
  const secondLine = {
    closed: { opacity: 1 },
    open: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  const thirdLine = {
    closed: { rotate: 0, backgroundColor: 'var(--color-text)' },
    open: { rotate: -45, backgroundColor: 'var(--color-red)' },
  };

  return (
    <>
      <Styled.MobileHeader>
        <Styled.RoomName>Estás na sala: {roomName}</Styled.RoomName>
        <Styled.Hamburger
          initial={false}
          animate={isMenuOpen ? 'open' : 'closed'}
          onClick={handleClick}
        >
          <Styled.HamburgerLine style={{ originX: '0.3rem' }} variants={firstLine} />
          <Styled.HamburgerLine variants={secondLine} />
          <Styled.HamburgerLine style={{ originX: '0.3rem' }} variants={thirdLine} />
        </Styled.Hamburger>
      </Styled.MobileHeader>
      <AnimatePresence>
        {isMenuOpen && (
          <SideBar key="sidebar" closeMenu={handleClick} users={users} currentUser={currentUser} />
        )}
        {isMenuOpen && (
          <Styled.Overlay
            key="overlay"
            initial={{ opacity: '0' }}
            animate={{ opacity: '1' }}
            exit={{ opacity: '0' }}
            onClick={handleClick}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
