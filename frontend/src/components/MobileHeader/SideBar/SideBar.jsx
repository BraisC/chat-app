import ThemeToggler from 'components/ThemeToggler';

import { motion } from 'framer-motion';
import { Styled } from './styled';

const sidebarVariants = {
  close: {
    //transition activated will make the children hide before the sidebar
    x: '100%',
    /* transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    }, */
  },
  open: {
    x: '3rem',
    transition: {
      //when: 'beforeChildren', //this will make the children animate after the sidebar ends animation
      // delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};
// These variants execute when the father (sidebar) changes its animation state
const itemVariants = {
  close: { x: '160px', transition: { duration: 0.1 } },
  open: { x: '0', transition: { duration: 0.1 } },
};

const logoVariants = {
  close: { opacity: 0, transition: { duration: 0 } },
  open: { opacity: 1, transition: { duration: 0.1, delay: 0.5 } },
};

const MenuItem = ({ value, same }) => (
  <motion.li key={value} variants={itemVariants}>
    <p>
      <span style={{ color: same && 'var(--color-red)' }}>{`${value}`}</span>
    </p>
  </motion.li>
);

const SideBar = ({ users, currentUser }) => (
  <Styled.SideBar initial="close" animate="open" exit="close" variants={sidebarVariants}>
    <Styled.Wrapper>
      <Styled.Logo variants={logoVariants}>Que foi?</Styled.Logo>
      <Styled.Nav>
        <Styled.Menu>
          {users.map((user) => (
            <MenuItem key={user.name} value={user.name} same={currentUser.name === user.name} />
          ))}
        </Styled.Menu>
      </Styled.Nav>
      <ThemeToggler />
    </Styled.Wrapper>
  </Styled.SideBar>
);

export default SideBar;
