import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header component', () => {
  it('should be able render "Another User"', () => {
    render(<Header typingUser={'Another User'} />)
    const username = screen.getByText('Chat-App')
    expect(username).toBeInTheDocument()
  })
})
