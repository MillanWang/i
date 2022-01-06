import * as React from 'react';
import ImageLinkCard from './cards/ImageLinkCard';
import { createImageLinkCardProps, createLink } from './cards/ImageLinkCard';

import img from "../../images/CarletonLogo.jpg";

/*
Lettered Tabs
MSP Circboard
3110 Risk Game

*/
const letteredTabs = createImageLinkCardProps(
    "Lettered Tabs Web App",
    "2019 Personal Project",
    [
        "Designed & developed a web application that converts fret numbers in guitar tabs into their corresponding notes in any tuning to help musicians enhance their music theory knowledge through learning songs",
        "Developed the conversion algorithms using Python, and the webapp using HTML, CSS, & JavaScript to create an simple user experience"
    ],
    [
        createLink("Video Demo", "https://youtu.be/hG0Y2D5sdWU"),
        createLink("Tool", "https://lettered-tabs.herokuapp.com/"),
        createLink("Source Code", "https://gitlab.com/MillanWang/lettered-tabs"),
    ],
    img//NEED UPDATE
);

const mspPerformance = createImageLinkCardProps(
    "Circuitboard Buzzer Instrument",
    "2020 Personal Project",
    [
        "Developed & deployed embedded code to circuitboard to map musical notes to joystick positions to create an instrument for performances",
        "This performance was then used as an example to demonstrate the hardware's capabilities to future classes "
    ],
    [
        createLink("Video Demo", "https://youtu.be/FasY_z7dEuU"),
    ],
    img//NEED UPDATE
);

const riskGame = createImageLinkCardProps(
    "RISK GUI Board Game",
    "2020 Academic Group Project",
    [
        "Designed and implemented MVC design pattern to build a GUI, ensuring code maintainability for the continuous integration of new features",
        "Developed and tested behavior for AI players to provide users with automated opponents",
        "Developed processes for saving/loading using Java de/serialization libraries",
        "Led and organized team meetings to assign tasks and to parallelize workflow resulting in an A+ on the project"
    ],
    [
        createLink("Source Code", "https://github.com/MillanWang/3110Project"),
    ],
    img//NEED UPDATE
);


const projects = [letteredTabs, mspPerformance, riskGame]

function ProjectsPage() {
    return (
        <div style={{
            display: "flex",
            "justify-content": "center"
        }}>
            {projects.map((currProject) => (
                <ImageLinkCard imageLinkCardProps={currProject} maxWidth={400} bodyTextAlignment="left" />

            ))}
        </div>
    )
}

export default ProjectsPage;