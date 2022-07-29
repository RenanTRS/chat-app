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

  const sendMessage = async ({ user, message }: messagesType) => {
    await socket.emit('send_message', { user, message, room }) //send for server
    setMessages([...messages, { user, message }])
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages([...messages, data]) //get new messages
    })
  }, [messages])

  return (
    <>
      <Header user={'Another User'} />
      <Messages messages={messages} user={user!} />
      <InputArea sendMessage={sendMessage} user={user!} />
    </>
  )
}
