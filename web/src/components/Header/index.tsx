import { useParams } from 'react-router-dom'

interface HeaderProps {
  typingUser: string
}

export const Header = ({ typingUser }: HeaderProps) => {
  const { user } = useParams()

  return (
    <header className="top-0 bg-zinc-800 border-b border-zinc-900 w-full flex flex-col items-start px-5 py-2 fixed text-zinc-200">
      <strong className="text-xl">Chat-App</strong>
      <span className="italic text-xs">
        {user !== typingUser && typingUser.trim() !== ''
          ? `${typingUser} está digitando...`
          : ''}
      </span>
    </header>
  )
}
