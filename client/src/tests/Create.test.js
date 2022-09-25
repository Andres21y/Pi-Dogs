import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import Create from '../views/Create';


describe('component', () => {
    it('renders appropriately', () => {
       Create.render(<h1></h1>)
        expect(screen.getByText(/chat/i)).toBeInTheDocument()
    })



})