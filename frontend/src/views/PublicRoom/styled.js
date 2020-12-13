import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-secondary);
`;

const SideBar = styled.div`
  background-color: var(--color-primary);
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

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Messages = styled.div`
  flex: 1 1 0;
  overflow: auto;
  margin: 2rem;
`;

const AdminMessageWrapper = styled.div`
  margin: 1rem 0;

  width: 100%;
  display: flex;
  justify-content: center;
`;

const AdminMessage = styled.div`
  padding: 1rem;
  font-size: 1.6rem;
  color: var(--color-text);
  background-color: var(--color-primary);
`;

const MessageContent = styled.div`
  padding: 1rem 2rem;
`;

const Username = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

const Message = styled.p`
  font-size: 1.8rem;
`;

const Date = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

const MessageWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.self ? 'flex-end' : 'flex-start')};

  ${MessageContent} {
    background-color: ${(props) => (props.self ? 'var(--color-text)' : 'var(--color-primary)')};
  }

  ${Username}, ${Message}, ${Date} {
    color: ${(props) => (props.self ? 'var(--color-primary)' : 'var(--color-text)')};
  }
`;

const WriteMessage = styled.form`
  display: flex;
  padding: 2rem 0;
  background-color: var(--color-primary);
`;

const MessageInput = styled.input`
  flex-grow: 1;
  background-color: var(--color-secondary);
  padding: 1rem;
  color: var(--color-text);
  border: none;
  font-size: 2rem;
`;

const Button = styled.div`
  padding: 1rem;
  display: flex;
  background-color: var(--color-red);
  margin-left: 1rem;
  align-items: center;
  cursor: pointer;
`;

const ButtonText = styled.p`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-text);
`;

export const Styled = {
  Wrapper,
  SideBar,
  Title,
  UserList,
  UserItem,
  Chat,
  Messages,
  AdminMessageWrapper,
  AdminMessage,
  MessageWrapper,
  MessageContent,
  Username,
  Message,
  Date,
  WriteMessage,
  MessageInput,
  Button,
  ButtonText,
};
