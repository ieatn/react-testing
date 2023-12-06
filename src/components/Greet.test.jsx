import { render, screen } from '@testing-library/react'
import Greet from './Greet'

describe('Greet', () => {
    test('greet renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('hello')
        expect(textElement).toBeInTheDocument()
    })
    
    test('greet renders with name', () => {
        render(<Greet name="dennis" />)
        const textElement = screen.getByText('hello dennis')
        expect(textElement).toBeInTheDocument()
    })
})