import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './Home'

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

describe('Home component', () => {
  it('should be able to render a input', () => {
    render(<MockHome />)

    const inputElement = screen.getByRole('textbox') as HTMLInputElement

    expect(inputElement).toBeInTheDocument()
  })

  it('should be able to type in the input', () => {
    render(<MockHome />)

    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'someone' } })

    expect(inputElement.value).toBe('someone')
  })

  it('should be able to render a button "Entrar"', () => {
    render(<MockHome />)

    const buttonElement = screen.getByText('Entrar') as HTMLButtonElement

    expect(buttonElement).toBeInTheDocument()
  })

  it('should be able disabled when the input is empty', () => {
    render(<MockHome />)

    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    const buttonElement = screen.getByText('Entrar') as HTMLButtonElement
    expect(buttonElement).toBeDisabled()

    fireEvent.change(inputElement, { target: { value: 'someone' } })
    expect(buttonElement).not.toBeDisabled()
  })
})
