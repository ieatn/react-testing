import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from '@testing-library/user-event'

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />);
        // h1 count
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();
        // name must be the text inside btn
        const incrementButton = screen.getByRole('button', {
            name: 'click',
        });
        expect(incrementButton).toBeInTheDocument();
    });

    test('renders a count of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    test('render count 1 after clicking btn', async () => {
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {name: 'click'})
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    test('render count 2 after clicking btn 2x', async () => {
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {name: 'click'})
        await user.click(incrementButton)
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')
    })
});
