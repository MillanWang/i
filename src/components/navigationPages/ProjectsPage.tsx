import * as React from 'react';
import { ImageLinkCardProps } from '../cards/ImageLinkCard';
import CardGrid from '../cards/CardGrid';

// Data
import ProjectsData from '../../data/projectsData.json';

// Images
import iLetteredTabs from '../../images/LetteredTabs.gif';
import iMSP_Board from '../../images/MSPBoard.gif';
import iRisk from '../../images/risk.jpg';
import iElevator from '../../images/Elevator.gif';
import iSimulation from '../../images/simulation.gif';
import iLiMIDI from '../../images/LiMIDI.gif';
import iEngineeringProject from '../../images/CyberSecurity.jpg';


const projects: ImageLinkCardProps[] = [
    {
        ...ProjectsData.EngineeringProject,
        img: iEngineeringProject
    },
    {
        ...ProjectsData.Limidi_App,
        img: iLiMIDI
    },
    {
        ...ProjectsData.Elevator,
        img: iElevator
    },
    {
        ...ProjectsData.LetteredTabs,
        img: iLetteredTabs
    },
    {
        ...ProjectsData.MSP_Buzzer,
        img: iMSP_Board
    },
    {
        ...ProjectsData.Simulation,
        img: iSimulation
    },
    {
        ...ProjectsData.Risk,
        img: iRisk
    },
];

function ProjectsPage() {
    return <CardGrid cardArray={projects} />
}

export default ProjectsPage;