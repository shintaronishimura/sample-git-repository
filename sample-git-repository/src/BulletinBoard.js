import React, { useState } from "react";
import MessageComponent from "./components/MessageComponent";

function BulletinBoard() {
  const [messages, setMessages] = useState([]);
  const version = MessageComponent();

  const handleAddMessage = (e) => {
    e.preventDefault();
    const input = e.target.elements.message.value;
    setMessages([...messages, input]);
    e.target.reset();
  };

  const h1TextMessages = ["掲示板1", "掲示板2", "掲示板3"];

  const submitButtonLabels = ["投稿する", "Send", "Submit"];

  const h1TextMassage = h1TextMessages[version - 1];
  const submitButtonLabel = submitButtonLabels[version - 1];

  return (
    <div>
      <h1>{h1TextMassage}</h1>
      <form onSubmit={handleAddMessage}>
        <input type="text" name="message" />
        <button type="submit">{submitButtonLabel}</button>
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
