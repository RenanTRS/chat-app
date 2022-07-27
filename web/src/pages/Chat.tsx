import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { InputArea } from '../components/InputArea'
import { Messages } from '../components/Messages'

export const Chat = () => {
  const { user } = useParams()
  type messagesType = {
    user: string
    message: string
  }
  const [messages, setMessages] = useState<messagesType[]>([])

  const sendMessage = ({ user, message }: messagesType) => {
    setMessages([...messages, { user, message }])
  }

  /* useEffect(() => {
    console.log(messages)
  }, [messages]) */

  return (
    <div className="flex flex-col h-screen">
      <Header user={'Another User'} />
      <Messages messages={messages} user={user!} />
      <InputArea sendMessage={sendMessage} user={user!} />
    </div>
  )
}
