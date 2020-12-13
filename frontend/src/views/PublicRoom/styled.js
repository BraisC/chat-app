import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-secondary);
`;

const SideBar = styled.div`
  background-color: var(--color-primary);
  min-height: 100vh;
  min-width: 25rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  color: var(--color-text);
  text-align: center;
  margin-top: 3rem;
`;

const UserList = styled.div`
  padding: 2rem;
`;

const UserItem = styled.p`
  font-size: 2rem;
  color: ${(props) => (props.self ? 'var(--color-red)' : 'var(--color-text)')};
`;

export const Styled = {
  Wrapper,
  SideBar,
  Title,
  UserList,
  UserItem,
};
