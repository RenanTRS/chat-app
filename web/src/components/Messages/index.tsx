import { useEffect, useRef } from 'react'

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
    <>
      <main className="h-[calc(100vh-8rem)] flex">
        <div className="overflow-y-scroll w-full max-h-full self-end">
          <ul className="px-3 pt-4 flex flex-col gap-4 min-h-[2.5rem] w-full">
            {messages.map((message, key) => {
              return (
                <li
                  key={key}
                  className={`${
                    message.user === user
                      ? 'bg-green-500 rounded-t-xl rounded-l-xl self-end'
                      : 'bg-zinc-200 rounded-t-xl rounded-r-xl self-start'
                  } max-w-[11.25rem] py-3 px-2 text-base, leading-tight break-all`}
                >
                  {message.message}
                </li>
              )
            })}

            <div ref={messageRef} />
          </ul>
        </div>
      </main>
    </>
  )
}
