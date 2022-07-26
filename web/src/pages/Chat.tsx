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
    <div className='flex flex-col h-screen'>{/* 
      <div className='bg-red-500 h-14'>1</div>
      <div className='bg-zinc-700 flex-grow h-full overflow-y-scroll flex flex-col'>
          <p>
          Lore leo, rutrum sed lectus et, scelerisque pellentesque ex. Fusce convallis lectus quam, vitae iaculis leo scelerisque at. Donec ullamcorper augue ac urna tristique egestas. Suspendisse potenti. Nulla varius ultrices sem sed congue. Nulla tincidunt lacinia nulla non aliquam. Integer sit amet urna at quam tempor laoreet. Sed dignissim quam velit, a posuere mi dignissim et.
          </p>
          <p>
          Lore leo, rutrum sed lectus et, scelerisque pellentesque ex. Fusce convallis lectus quam, vitae iaculis leo scelerisque at. Donec ullamcorper augue ac urna tristique egestas. Suspendisse potenti. Nulla varius ultrices sem sed congue. Nulla tincidunt lacinia nulla non aliquam. Integer sit amet urna at quam tempor laoreet. Sed dignissim quam velit, a posuere mi dignissim et.
          </p>
      </div>
      <div className='bg-zinc-200 h-14'>3</div> */}
      <Header user={'Another User'} />
      <Messages messages={messages} user={user} />
      <InputArea sendMessage={sendMessage} user={user} />
    </div>
  )
}
