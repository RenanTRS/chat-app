import { Route, Routes } from 'react-router-dom'
import { Chat } from './pages/Chat'
import { Home } from './pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat/:user" element={<Chat />} />
    </Routes>
  )
}
