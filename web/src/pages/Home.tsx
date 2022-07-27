import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const [user, setUser] = useState<string>('')
  const navigate = useNavigate()

  const handlerSubmitLogin = (event: FormEvent) => {
    event.preventDefault()
    if (user.trim() === '') {
      return
    }

    navigate(`/chat/${user}`)
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-5 p-2">
      <strong className="text-white text-5xl">Chat-App</strong>
      <form
        onSubmit={handlerSubmitLogin}
        className="flex flex-col gap-3 w-full items-center"
      >
        <div className="text-xl text-white flex gap-3 items-center">
          <input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            placeholder="Usuário"
            className="border border-green-500 bg-transparent rounded-full px-4 py-2 flex-1 w-full"
          />
        </div>
        <button type="submit" className="bg-green-500 rounded-full p-3 w-1/2">
          Entrar
        </button>
      </form>
    </div>
  )
}
