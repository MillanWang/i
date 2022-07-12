import * as React from 'react';
import { ImageLinkCardProps } from '../cards/ImageLinkCard';
import TwoColumnCardGrid from '../cards/TwoColumnCardGrid';

// Data
import ExperienceData from '../../data/experienceData.json';

const softwareExperiences: ImageLinkCardProps[] = [
    ExperienceData.Spiria,
    ExperienceData.Kinaxis,
    ExperienceData.JSI_Backend,
    ExperienceData.JSI_Frontend,
    ExperienceData.CarletonResearch,
];

const educationExperiences: ImageLinkCardProps[] = [
    ExperienceData.CarletonTA2022,
    ExperienceData.OneClass,
    ExperienceData.CarletonTA2020,
    ExperienceData.CarletonEMLC,
];

function ExperiencePage() {
    return (
        <TwoColumnCardGrid
            leftColumnStackHeader="Software Engineering Experience"
            leftColumnCardProps={softwareExperiences}
            rightColumnStackHeader="Education Experience"
            rightColumnCardProps={educationExperiences}
        />
    );
};

export default ExperiencePage;