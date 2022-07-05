import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderBar, { createTitleUrlPair } from '../../components/HeaderBar'


//GET THESE INTO A COMMON FILE
const introductionNavSection = createTitleUrlPair("Introduction", "/");
const workExperienceNavSection = createTitleUrlPair("Experience", "/experience");
const projectsNavSection = createTitleUrlPair("Projects", "/projects");
const educationNavSection = createTitleUrlPair("Education", "/education");
const extracurricularsNavSection = createTitleUrlPair("Extracurriculars", "/extracurriculars");

const navigationSections = [
    introductionNavSection,
    workExperienceNavSection,
    projectsNavSection,
    educationNavSection,
    extracurricularsNavSection
];


it('renders', () => {
    // render(<HeaderBar sections={navigationSections} />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(true).toBe(true);
});
