import React from 'react';
// import { act } from 'react-dom/test-utils';
// import * as ReactDOM from "react-dom";
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom'; // For .toHaveTextContent(string)
import CardGrid from '../../../components/cards/CardGrid';



describe("<CardGrid />", () => {

    it('should render to snapshot with only props', () => {
        const { container } = render(<CardGrid />);
        expect(container).toBeDefined()
    });
});