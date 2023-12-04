import { render, screen } from '@testing-library/react'
import Greet from './Greet'

test('greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('hello')
    expect(textElement).toBeInTheDocument()
})