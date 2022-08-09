import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { InputArea } from '../components/InputArea'
import { Messages } from '../components/Messages'
import { socket, room, connectToRoom } from '../lib/socketIO'

type messagesType = {
  user: string
  message: string
}

connectToRoom() //socket connect

export const Chat = () => {
  const { user } = useParams()
  const [messages, setMessages] = useState<messagesType[]>([])
  const [isTypingMessage, setIsTypingMessage] = useState<boolean>(false)
  const [typingUser, setTypingUser] = useState<string>('')

  const sendMessage = async ({ user, message }: messagesType) => {
    await socket.emit('send_message', { user, message, room }) //send for server
    setMessages([...messages, { user, message }])
  }

  const typingMessage = async (value: boolean, typeUser: string) => {
    await socket.emit('typing_message', { typeUser, room })
    setIsTypingMessage(value)
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages([...messages, data]) //get new messages
    })
  }, [messages])

  useEffect(() => {
    socket.on('type_message', (data) => {
      setTypingUser(data.typeUser)
    })
  }, [isTypingMessage])

  return (
    <>
      <Header typingUser={typingUser} />
      <Messages messages={messages} user={user!} />
      <InputArea
        sendMessage={sendMessage}
        user={user!}
        typingMessage={typingMessage}
      />
    </>
  )
}
