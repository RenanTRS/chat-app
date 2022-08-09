import { FormEvent, useState } from 'react'
import { PaperPlaneRight } from 'phosphor-react'

interface Message {
  user: string
  message: string
}

interface InputAreaProps {
  sendMessage: ({ user, message }: Message) => void
  user: string
  typingMessage: (value: boolean, typeUser: string) => void
}

export const InputArea = ({
  sendMessage,
  user,
  typingMessage
}: InputAreaProps) => {
  const [message, setMessage] = useState<string>('')
  const [isEmpty, setIsEmpty] = useState<boolean>(true)

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault()
    sendMessage({ user, message })
    typingMessage(false, '')

    setMessage('') //clean textarea
    setIsEmpty(true) //disabled true
  }

  const typingText = (value: string) => {
    value.trim() !== '' ? setIsEmpty(false) : setIsEmpty(true)
    typingMessage(true, user)
    setMessage(value)
  }
  const handlerBlur = (value: string) => {
    if (value.trim() === '') {
      typingMessage(false, '')
    } else {
      typingMessage(true, user)
    }
  }

  return (
    <form
      onSubmit={handlerSubmit}
      className="bg-zinc-200 flex justify-between gap-1 px-3 h-14 w-full fixed bottom-0"
    >
      <textarea
        value={message}
        onChange={(event) => typingText(event.target.value)}
        onBlur={(event) => handlerBlur(event.target.value)}
        placeholder="Mensagem"
        className="bg-transparent flex-1 text-xl px-2 pt-3 resize-none focus:outline-none focus:caret-green-700"
      />
      <button
        type="submit"
        disabled={isEmpty}
        className={`${
          !isEmpty ? `cursor-pointer` : `cursor-not-allowed`
        } my-auto bg-green-500 rounded-full w-11 h-11 flex justify-center items-center disabled:bg-zinc-300 disabled:text-red-700 transition-colors`}
      >
        <PaperPlaneRight size={32} className="" />
      </button>
    </form>
  )
}
