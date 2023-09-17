'use client'
import React, { useEffect, useState } from 'react'

interface MessageList {
  messages: string[]
}

interface MessageInput {
  onSendMessage: (message: string) => void
}

// Componente que muestra la lista de mensajes
const MessageList = ({ messages }: MessageList) => {
  return (
    <div>
      <h2>Chat en tiempo real</h2>
      {messages.map((message) => (
        <div>{message}</div>
      ))}
    </div>
  )
}

// Componente de entrada de mensaje
const MessageInput = ({ onSendMessage }: MessageInput) => {
  const [message, setMessage] = useState('')

  const handleInputChange = (event: any) => {
    setMessage(event.target.value)
  }

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message)
      setMessage('')
    }
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Escribe un mensaje...'
        value={message}
        onChange={handleInputChange}
      />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  )
}

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([])

  // Función para enviar un nuevo mensaje
  const sendMessage = (newMessage: string) => {
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    // Simular mensajes entrantes en tiempo real (cada 3 segundos)
    const intervalId = setInterval(() => {
      const newMessage = `Mensaje nuevo ${messages.length + 1}`
      sendMessage(newMessage)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [messages])

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={sendMessage} />
    </div>
  )
}

export default Chat
