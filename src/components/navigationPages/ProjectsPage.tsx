import * as React from 'react';
import {
    createImageLinkCardProps,
    createLinkObject,
    ImageLinkCardProps
} from '../cards/ImageLinkCard';

import CardGrid from '../cards/CardGrid';


const letteredTabs: ImageLinkCardProps = createImageLinkCardProps(
    "Lettered Tabs Web App",
    ["2019 Personal Project"],
    [
        "Designed & developed a web application that converts fret numbers in guitar tabs into their corresponding notes in any tuning to help musicians enhance their music theory knowledge through learning songs",
        "Developed the conversion algorithms using Python, and the webapp using HTML, CSS, & JavaScript to create a simple user experience"
    ],
    [
        createLinkObject("Video Demo", "https://youtu.be/hG0Y2D5sdWU"),
        createLinkObject("Tool", "https://lettered-tabs.herokuapp.com/"),
        createLinkObject("Source Code", "https://gitlab.com/MillanWang/lettered-tabs"),
    ],
    // letteredTabsGif
    require("../../images/LetteredTabs.gif")
);

const mspPerformance: ImageLinkCardProps = createImageLinkCardProps(
    "Circuitboard Buzzer Instrument",
    ["2020 Personal Project"],
    [
        "Developed & deployed embedded C code to circuitboard to map musical notes to joystick positions to create a musical instrument for performances",
        "This performance was then used as an example to demonstrate the hardware's capabilities to future classes "
    ],
    [
        createLinkObject("Video Demo", "https://youtu.be/FasY_z7dEuU"),
    ],
    // mspBoardGif
    require("../../images/MSPBoard.gif")
);

const riskGame: ImageLinkCardProps = createImageLinkCardProps(
    "RISK GUI Board Game",
    ["2020 Academic Group Project"],
    [
        "Designed and implemented MVC design pattern to build a GUI, ensuring code maintainability for the continuous integration of new features",
        "Developed and tested behavior for AI players to provide users with automated opponents",
        "Developed processes for saving/loading using Java de/serialization libraries",
        "Led and organized team meetings to assign tasks and to parallelize workflow resulting in an A+ on the project"
    ],
    [
        createLinkObject("Source Code", "https://github.com/MillanWang/3110Project"),
    ],
    // riskGameImg
    require("../../images/risk.jpg")
);

const elevatorSim: ImageLinkCardProps = createImageLinkCardProps(
    "Elevator System Simulator",
    ["2022 Academic Group Project"],
    [
        "Designed and implemented an elevator system simulation using multithreaded design patterns",
        "Developed elevator scheduling algorithms with feature flag controls to quantify performance differences between algorithms",
        "Developed UDP communication systems to facilitate communications between the different subsystems to distribute computation remotely over VPN",
        "Conducted integration testing & debugging in multithreaded contexts to ensure all subsystems interacted as expected",
        "Led and organized team meetings to assign tasks and to parallelize workflow resulting in a 97% on the project"
    ],
    [
        createLinkObject("Source Code", "https://github.com/MillanWang/3303ElevatorProject"),
    ],
    // elevatorGif
    require("../../images/Elevator.gif")
);

const projects: ImageLinkCardProps[] = [
    elevatorSim,
    letteredTabs,
    mspPerformance,
    riskGame,
];

function ProjectsPage() {
    return <CardGrid cardArray={projects} />
}

export default ProjectsPage;