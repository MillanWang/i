import React from 'react';
// import { act } from 'react-dom/test-utils';
// import * as ReactDOM from "react-dom";
import { render, screen, within } from '@testing-library/react';
// import '@testing-library/jest-dom'; // For .toHaveTextContent(string)
import CardGrid from '../../../components/cards/CardGrid';
import ProjectsData from '../../../data/projectsData.json';
import ExtracurricularsData from '../../../data/extracurricularsData.json';


describe("<CardGrid />", () => {
    it('should render', () => {
        const { container } = render(
            <CardGrid
                cardArray={[]}
            />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();
    });

    it('should not lose any cards', () => {
        const props = [
            ProjectsData.EngineeringProject,
            ProjectsData.ReactNative,
            ProjectsData.Elevator,
            ProjectsData.LetteredTabs,
            ProjectsData.MSP_Buzzer,
            ProjectsData.Simulation,
            ProjectsData.Risk,
            ExtracurricularsData.MartialArts,
            ExtracurricularsData.Sounds,
            ExtracurricularsData.Video,
        ];
        const { container } = render(
            <CardGrid
                cardArray={props}
            />);
        expect(container).toBeDefined();
        expect(container).toMatchSnapshot();

        const cards = screen.queryAllByRole("Card");
        expect(cards.length).toBe(props.length);
    });
});