import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-secondary);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8rem;
  width: 90%;
  max-width: 400px;
  min-height: 500px;
  background-color: var(--color-primary);
`;

const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  color: var(--color-text);
  text-align: center;
`;

const Input = styled.input`
  height: 4rem;
  background-color: var(--color-secondary);
  border: none;
`;

const Button = styled.button`
  font-size: 2rem;
  background-color: var(--color-red);
  color: var(--color-text);
  border: none;
  padding: 1rem;
`;
export const Styled = {
  Wrapper,
  Card,
  Title,
  Input,
  Button,
};
