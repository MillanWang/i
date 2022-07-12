import * as React from 'react';
import { ImageLinkCardProps } from '../cards/ImageLinkCard';
import TwoColumnCardGrid from '../cards/TwoColumnCardGrid';

// Data
import IntroPageData from '../../data/introPageData.json';

// Images
import MillPortrait from "../../images/MillPortrait.jpg"; 

const leftColumnCards: ImageLinkCardProps[] = [
    IntroPageData.HelloCard,
    {
        ...IntroPageData.MillWithMap,
        img: MillPortrait
    },
];

const rightColumnCards: ImageLinkCardProps[] = [
    IntroPageData.AboutMe,
    IntroPageData.LinksCard,
    IntroPageData.Technologies,
];

function IntroPage() {
    return (
        <TwoColumnCardGrid
            leftColumnStackHeader=""
            leftColumnCardProps={leftColumnCards}
            rightColumnStackHeader=""
            rightColumnCardProps={rightColumnCards}
        />
    )
};

export default IntroPage;