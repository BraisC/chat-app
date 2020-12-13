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
  box-shadow: var(--shadow);
`;

const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  color: var(--color-text);
  text-align: center;
`;

const Input = styled.input`
  padding: 1.2rem;
  text-align: center;
  background-color: var(--color-secondary);
  border: none;
  font-size: 2rem;
  color: var(--color-text);
`;

const Button = styled.button`
  font-size: 2.3rem;
  background-color: var(--color-red);
  color: var(--color-text);
  border: none;
  font-weight: 700;
  padding: 1.5rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }
`;
export const Styled = {
  Wrapper,
  Card,
  Title,
  Input,
  Button,
};
