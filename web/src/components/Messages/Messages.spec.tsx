import { render, screen } from '@testing-library/react'
import { Messages } from '.'

describe('Messages component', () => {
  const user = 'someone' //mock user
  const message = {
    user: 'someone',
    message: 'hi'
  }
  const messages = [message]

  window.HTMLElement.prototype.scrollIntoView = () => {} //Mock

  it('should be able to render a text message', () => {
    render(<Messages messages={messages} user={user} />)

    const msg = screen.getByText('hi')
    expect(msg).toBeInTheDocument()
  })

  it('should be able to render the green background to user and right-aligned', () => {
    /*Mocks*/
    message.user = 'someone'
    message.message = 'hey'

    render(<Messages messages={messages} user={user} />)

    const msg = screen.getByText('hey')

    expect(msg).toHaveClass('bg-green-500', 'self-end')
    expect(msg).not.toHaveClass('bg-zinc-200', 'self-start')
  })

  it('should be able to render the white background to another user and left-aligned', () => {
    /*Mocks*/
    message.user = 'another'
    message.message = 'hey'

    render(<Messages messages={messages} user={user} />)

    const msg = screen.getByText('hey')

    expect(msg).toHaveClass('bg-zinc-200', 'self-start')
    expect(msg).not.toHaveClass('bg-green-500', 'self-end')
  })
})
