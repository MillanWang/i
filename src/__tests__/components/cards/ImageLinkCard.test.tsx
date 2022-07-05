import React from 'react';
// import { act } from 'react-dom/test-utils';
// import * as ReactDOM from "react-dom";
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom'; // For .toHaveTextContent(string)
import ImageLinkCard from '../../../components/cards/ImageLinkCard'

const SAMPLE_TITLE = 'This is the Title';

describe("<ImageLinkCard />", () => {

    it('should render to snapshot with only props', () => {
        const { container } = render(<ImageLinkCard
            title=''
            subtitles={[]}
            descriptionStrings={[]}
            links={[]}
            img=''
        />
        );
        expect(container).toMatchSnapshot();
        expect(true).toBe(true);
    });

    it('should show the title', () => {
        const { container } = render(<ImageLinkCard
            title={SAMPLE_TITLE}
            subtitles={[]}
            descriptionStrings={[]}
            links={[]}
            img=''
        />
        );
        expect(container).toMatchSnapshot();

        //No duplicate titles
        const elements: HTMLElement[] = screen.queryAllByText(SAMPLE_TITLE);
        expect(elements.length).toBe(1);
        expect(elements[0]).toHaveTextContent(SAMPLE_TITLE);
    });
});