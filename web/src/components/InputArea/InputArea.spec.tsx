import { render, screen, fireEvent } from '@testing-library/react'
import { InputArea } from '.'

const sendMessageSpy = jest.fn()
const typingMessageSpy = jest.fn()

const MockInputArea = () => {
  return (
    <InputArea
      sendMessage={sendMessageSpy}
      user={'someone'}
      typingMessage={typingMessageSpy}
    />
  )
}

describe('InputArea component', () => {
  it('should be able render a textarea and a button', () => {
    render(<MockInputArea />)

    const textArea = screen.getByRole('textbox') as HTMLTextAreaElement
    const buttonSendMessage = screen.getByRole('button') as HTMLButtonElement

    expect(textArea).toBeInTheDocument()
    expect(buttonSendMessage).toBeInTheDocument()
  })

  it('should be able type in textarea', () => {
    render(<MockInputArea />)

    const textArea = screen.getByRole('textbox') as HTMLTextAreaElement

    fireEvent.change(textArea, { target: { value: 'something' } })
    expect(textArea.value).toBe('something')
  })

  it('should be able type in textarea, click on button and call a function', () => {
    render(<MockInputArea />)

    const textArea = screen.getByRole('textbox') as HTMLTextAreaElement
    const buttonSendMessage = screen.getByRole('button') as HTMLButtonElement

    fireEvent.change(textArea, { target: { value: 'something' } })
    fireEvent.click(buttonSendMessage)

    expect(sendMessageSpy).toHaveBeenCalled()
  })

  it('must not be able to click the button with empty textarea', () => {
    render(<MockInputArea />)

    const buttonSendMessage = screen.getByRole('button') as HTMLButtonElement
    const textArea = screen.getByRole('textbox') as HTMLTextAreaElement

    expect(buttonSendMessage.disabled).toBe(true) //empty textarea

    fireEvent.change(textArea, { target: { value: ' ' } }) //empty textarea
    expect(buttonSendMessage.disabled).toBe(true)

    fireEvent.change(textArea, { target: { value: 'something' } })
    expect(buttonSendMessage.disabled).toBe(false)

    fireEvent.click(buttonSendMessage)
    expect(sendMessageSpy).toHaveBeenCalled()
  })
})
