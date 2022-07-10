import React from 'react';
// import { act } from 'react-dom/test-utils';
// import * as ReactDOM from "react-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For .toHaveTextContent(string)
import ImageLinkCard, { LinkObject } from '../../../components/cards/ImageLinkCard'

const SAMPLE_TITLE = 'This is the Title';
const SAMPLE_SUBTITLES = [
    "Subtitles go here",
    "Sub sub sub",
    "Nice and close to the title"
];
const SAMPLE_DESCRIPTION_STRINGS = [
    "Descriptions go here",
    "Descriptive!",
    "Sometimes I am inside an accordion"
];
const SAMPLE_LINK_PROPS = [
    {
        linkText: "Good link",
        url: "https://www.google.com"
    },
    {
        linkText: "Nice link",
        url: "https://github.com/MillanWang/i"
    }
];


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
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();

        //No duplicate titles
        const elements: HTMLElement[] = screen.queryAllByText(SAMPLE_TITLE);
        expect(elements.length).toBe(1);
        expect(elements[0]).toHaveTextContent(SAMPLE_TITLE);
    });

    it('should show the subtitles', () => {
        const { container } = render(<ImageLinkCard
            title={SAMPLE_TITLE}
            subtitles={SAMPLE_SUBTITLES}
            descriptionStrings={[]}
            links={[]}
            img=''
        />
        );
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();

        // Ensure that every single subtitle shows up in the card
        SAMPLE_SUBTITLES.forEach((subtitle) => {
            expect(screen.queryByText(subtitle)).toHaveTextContent(subtitle);
        });
    });

    it('should show the description strings', () => {
        const { container } = render(<ImageLinkCard
            title={SAMPLE_TITLE}
            subtitles={SAMPLE_SUBTITLES}
            descriptionStrings={SAMPLE_DESCRIPTION_STRINGS}
            links={[]}
            img=''
        />
        );
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();

        // Ensure that every single description string shows up in the card
        SAMPLE_DESCRIPTION_STRINGS.forEach((desc) => {
            expect(screen.queryByText(desc)).toHaveTextContent(desc);
        });
        // No accordion - ensure that it does not have an accordion parent
        expect(screen.queryByTestId(`Card_${SAMPLE_TITLE}_accordion`)).toBeNull();
    });

    it('should show the link buttons', () => {
        const { container } = render(<ImageLinkCard
            title={SAMPLE_TITLE}
            subtitles={SAMPLE_SUBTITLES}
            descriptionStrings={SAMPLE_DESCRIPTION_STRINGS}
            links={SAMPLE_LINK_PROPS}
            img=''
        />
        );
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();

        // Ensure that the links exist as buttons and that they href to the corresponding links
        SAMPLE_LINK_PROPS.forEach((linkObj: LinkObject, i: number) => {
            expect(screen.queryByText(linkObj.linkText)).toHaveTextContent(linkObj.linkText);
            expect(screen.queryByText(linkObj.linkText)?.nodeName).toBe('BUTTON');
            expect(screen.queryByTestId(`Card_${SAMPLE_TITLE}_link_${i++}`)).toHaveAttribute('href', linkObj.url);
        });
    });


    it('should show the descriptions in an accordion', () => {
        const { container } = render(<ImageLinkCard
            title={SAMPLE_TITLE}
            subtitles={SAMPLE_SUBTITLES}
            descriptionStrings={SAMPLE_DESCRIPTION_STRINGS}
            links={SAMPLE_LINK_PROPS}
            img=''
            useAccordionDescription
        />
        );
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();

        // Ensure that every single description string shows up in the card
        SAMPLE_DESCRIPTION_STRINGS.forEach((desc) => {
            expect(screen.queryByText(desc)).toHaveTextContent(desc);
        });

        // Ensure that the accordion exists
        expect(screen.getByTestId(`Card_${SAMPLE_TITLE}_accordion`)).toBeDefined();
    });
});