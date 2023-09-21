import React from 'react';

function Message({ text, type }) {
  const messageTypeClass = type === 'bot' ? 'message-bot' : 'message-user';

  return (
    <div className={`message ${messageTypeClass}`}>
      {text}
    </div>
  );
}

export default Message;
