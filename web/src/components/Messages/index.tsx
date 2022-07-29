import { useEffect, useRef } from 'react'
import { Message } from './Message'

interface MessagesProps {
  messages: {
    user: string
    message: string
  }[]
  user: string
}

export const Messages = ({ messages, user }: MessagesProps) => {
  const messageRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    messageRef.current?.scrollIntoView() //automatic scroll down
  }, [messages])

  return (
    <ul className="px-3 pt-16 pb-14 w-full h-full flex flex-col gap-4">
      {messages.map((message, key) => {
        return <Message key={key} message={message} user={user} />
      })}

      <div ref={messageRef} />
    </ul>
  )
}
