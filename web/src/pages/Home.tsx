import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logoHomeImg from '../assets/logo-Home.svg'

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
      <div className="flex items-center justify-center w-full">
        <img src={logoHomeImg} alt="Logo" className="" />
        <strong className="text-white text-5xl">Chat-App</strong>
      </div>

      <form
        onSubmit={handlerSubmitLogin}
        className="flex gap-3 items-center justify-center w-auto md:w-[25rem]"
      >
        <div className="w-full md:w-[25rem] flex flex-col gap-4 text-white">
          <input
            type="text"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            placeholder="User"
            className="border border-green-500 bg-transparent rounded-full px-4 py-2 h-12 md:text-xl"
            required
          />

          <button
            type="submit"
            className="bg-green-500 rounded-full p-3 disabled:opacity-50 font-bold h-12"
            disabled={user.length === 0 || user.trim() === ''}
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  )
}
