import React from 'react';

const MessageComponent = () => {
  const version = process.env.REACT_APP_VERSION;

  let message;
  if (version === 'version1') {
    message = 1;
  } else if (version === 'version2') {
    message = 2;
  } else {
    message = 3;
  }

  return message;
};

export default MessageComponent;

