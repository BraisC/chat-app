import styled from 'styled-components';
import { motion } from 'framer-motion';

const MobileHeader = styled.header`
  padding: 0.5rem 0;
  display: flex;
  background: var(--color-primary);
  align-items: center;
  justify-content: flex-end;
  transition: background-color 0.2s ease, color 0.2s ease;
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 35px;
  margin-top: 15px;
`;

const Hamburger = styled(motion.div)`
  width: 9rem;
  padding: 0.6rem 3rem;
  color: var(--color-text);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 100%;
`;

const HamburgerLine = styled(motion.span)`
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--color-text);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 6;
  background-color: var(--color-transparency-show);
  transition: all 0.2s ease;
`;

const RoomName = styled.p`
  font-size: 20px;
  color: var(--color-text);
  max-width: 80%;
  overflow: hidden;
`;

export const Styled = {
  MobileHeader,
  Hamburger,
  HamburgerLine,
  Overlay,
  RoomName,
};
