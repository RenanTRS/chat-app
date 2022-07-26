import { useState } from 'react'
import { Header } from '../components/Header'
import { InputArea } from '../components/InputArea'
import { Messages } from '../components/Messages'

export const Chat = () => {
  const user = 'Renan'
  type messagesType = {
    user: string
    message: string
  }
  const [messages, setMessages] = useState<messagesType[]>([])

  const sendMessage = ({ user, message }: messagesType) => {
    setMessages([...messages, { user, message }])
  }

  return (
    <>
      <Header user={'Another User'} />
      <Messages messages={messages} user={user} />
      <InputArea sendMessage={sendMessage} user={user} />
    </>
  )
}
