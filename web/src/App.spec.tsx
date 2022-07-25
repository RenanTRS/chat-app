import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('should be able render Hello world', () => {
    render(<App />)

    const hello = screen.getByText('Hello World')
    expect(hello).toBeInTheDocument()
  })
})
