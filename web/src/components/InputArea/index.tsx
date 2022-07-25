import { FormEvent, useState } from 'react'
import { PaperPlaneRight } from 'phosphor-react'

interface InputAreaProps {
  sendMessage: (value: string) => void
}

export const InputArea = ({ sendMessage }: InputAreaProps) => {
  const [bodyTextMessage, setBodyTextMessage] = useState<string>('')
  const [isEmpty, setIsEmpty] = useState<boolean>(true)

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault()
    sendMessage(bodyTextMessage)
    setBodyTextMessage('') //clean textarea
    setIsEmpty(true) //disabled true
  }

  const typingText = (value: string) => {
    value.trim() !== '' ? setIsEmpty(false) : setIsEmpty(true)
    setBodyTextMessage(value)
  }

  return (
    <form
      onSubmit={handlerSubmit}
      className="bg-zinc-200 flex justify-between gap-1 px-3 absolute bottom-0 h-14 w-full"
    >
      <textarea
        value={bodyTextMessage}
        onChange={(event) => typingText(event.target.value)}
        placeholder="Mensagem"
        className="bg-transparent flex-1 text-xl px-2 pt-3 resize-y focus:outline-none focus:caret-green-700"
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
