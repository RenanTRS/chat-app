import { Header } from '../components/Header'
import { InputArea } from '../components/InputArea'

export const Chat = () => {
  const sendMessage = (value: string) => {
    console.log(value)
  }
  return (
    <>
      <Header user={'Another User'} />
      <InputArea sendMessage={sendMessage} />
    </>
  )
}
