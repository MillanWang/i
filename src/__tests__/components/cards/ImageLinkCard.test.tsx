import React from 'react';
// import { act } from 'react-dom/test-utils';
// import * as ReactDOM from "react-dom";
import { render, screen } from '@testing-library/react';
import ImageLinkCard from '../../../components/cards/ImageLinkCard'

describe("<ImageLinkCard />", () => {

    it('should render', () => {
        render(<ImageLinkCard
            title='title'
            subtitles={['1', '2']}
            descriptionStrings={['3', '4']}
            links={[]}
            img=''
        />
        );
        expect(true).toBe(true);
    });
});