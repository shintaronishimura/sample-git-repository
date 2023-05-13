import React, { useState } from 'react';

function BulletinBoard() {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = (e) => {
    e.preventDefault();
    // メッセージの追加処理を実装する
  };

  return (
    <div>
      <h1>掲示板</h1>
      <form onSubmit={handleAddMessage}>
        <input type="text" />
        <button type="submit">投稿する</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default BulletinBoard;
