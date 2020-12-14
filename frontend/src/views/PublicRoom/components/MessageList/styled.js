import styled from 'styled-components';

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

export const Styled = {
  AdminMessageWrapper,
  AdminMessage,
  MessageWrapper,
  MessageContent,
  Username,
  Message,
  Date,
};
