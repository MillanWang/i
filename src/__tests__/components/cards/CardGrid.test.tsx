import React from 'react';
// import { act } from 'react-dom/test-utils';
// import * as ReactDOM from "react-dom";
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom'; // For .toHaveTextContent(string)
import CardGrid from '../../../components/cards/CardGrid';

//TODO Get all of the ImageCardProps objects into external files so that they are easier to retrieve from anywhere

describe("<CardGrid />", () => {
    it('should render', () => {
        const { container } = render(
            <CardGrid
                cardArray={[]}
            />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });
});