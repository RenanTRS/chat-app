import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Header component', () => {
  it('should be able render "Another User"', () => {
    render(<Header user={'Another User'} />)
    const username = screen.getByText('Another User')
    expect(username).toBeInTheDocument()
  })
})
