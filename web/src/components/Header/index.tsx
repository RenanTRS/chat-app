interface HeaderProps {
  user: string
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <header className="h-14 top-0 bg-zinc-800 border-b border-zinc-900 w-full flex items-center px-5 fixed">
      <strong className="text-zinc-200 text-xl">{user}</strong>
    </header>
  )
}
