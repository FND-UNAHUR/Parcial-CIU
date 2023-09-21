import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from './Message';

function Chat() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    // Actualiza el tiempo cada segundo
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleSendMessage = async () => {
    if (userMessage.trim() === '') return;

    // Agrega el mensaje del usuario al historial
    setChatHistory([...chatHistory, { text: userMessage, type: 'user' }]);
    setUserMessage('');

    try {
      // Envía el mensaje del usuario a Dialogflow
      const response = await axios.post(
        'https://dialogflow.googleapis.com/v2/projects/YOUR_PROJECT_ID/agent/sessions/YOUR_SESSION_ID:detectIntent',
        {
          queryInput: {
            text: {
              text: userMessage,
              languageCode: 'es',
            },
          },
        },
        {
          headers: {
            Authorization: 'Bearer YOUR_DIALOGFLOW_ACCESS_TOKEN',
          },
        }
      );

      // Agrega la respuesta del chatbot al historial
      const chatbotResponse = response.data.queryResult.fulfillmentText;
      setChatHistory([...chatHistory, { text: chatbotResponse, type: 'bot' }]);
    } catch (error) {
      console.error('Error al enviar mensaje a Dialogflow', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Evita el comportamiento predeterminado del Enter (enviar formulario)
      handleSendMessage(); // Llama a la función para enviar el mensaje
    } else if (e.key === 'Enter' && e.shiftKey) {
      // Inserta un salto de línea en el campo de entrada
      setUserMessage((prevMessage) => prevMessage + '\n');
    }
  };

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Hola, ¿en qué puedo ayudarte?</h1>
        <span className="time">{currentTime}</span>
      </div>
      <div className="message-container">
        {chatHistory.map((message, index) => (
          <Message key={index} text={message.text} type={message.type} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={handleKeyDown} // Agrega este evento onKeyDown
        />
        <button className="send-button" onClick={handleSendMessage}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Chat;