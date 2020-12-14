import { Fragment, memo, useCallback } from 'react';
import dayjs from 'dayjs';
import { Styled } from './styled';

const MessageList = memo(({ messages, user }) => {
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView();
    }
  }, []);

  return (
    <>
      {messages.map((m, i) => {
        const lastMessage = messages.length - 1 === i;
        return (
          <Fragment key={m.date}>
            {m.username === 'Administrador' ? (
              <Styled.AdminMessageWrapper ref={lastMessage ? setRef : null}>
                <Styled.AdminMessage>{m.text}</Styled.AdminMessage>
              </Styled.AdminMessageWrapper>
            ) : (
              <Styled.MessageWrapper
                ref={lastMessage ? setRef : null}
                self={m.username === user.name.trim().toLowerCase()}
              >
                <Styled.MessageContent>
                  <Styled.Username>{m.username}</Styled.Username>
                  <Styled.Message>{m.text}</Styled.Message>
                  <Styled.Date>{dayjs(m.date).format('DD/MM/YY - H:mm')}</Styled.Date>
                </Styled.MessageContent>
              </Styled.MessageWrapper>
            )}
          </Fragment>
        );
      })}
    </>
  );
});

export default MessageList;
