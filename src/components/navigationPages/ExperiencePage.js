import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ImageLinkCard, { createImageLinkCardProps } from './cards/ImageLinkCard';

const kinaxisFall = createImageLinkCardProps(
    "Kinaxis",
    [
        "Sep. - Dec. 2021 (4 Months)",
        "Software Developer, Application Server, Platform"]
    ,
    [
        "Implemented user stories & resolved bugs to develop & maintain application platform features using Java GUIs & C#/.NET backend APIs",
        "Designed thorough integration & unit tests to validate functionality and increase code coverage during CI/CD",
        "Conducted migrations and thorough refactoring of test environments to optimize the use of design patterns,accelerating future development and scope expansion",
        "Technologies: Java GUIs, C#/.NET APIs, Visual Studio, Eclipse, Postman, Git, Jenkins"
    ],
    [],
    null

);

const jsiSummer = createImageLinkCardProps(
    "JSI",
    [
        "May - Aug. 2021 (4 Months)",
        "Software Developer, Backend"
    ],
    [
        "Implemented application user stories and resolved bugs across the full stack using Delphi & C#/.NET",
        "Upgraded C#/.NET backend API to accommodate the growing demands of the frontend",
        "Developed database procedures using MS SQL Server",
        "Wrote in-depth wiki guides detailing application design techniques, and working with Agile methodology",
        "Received highest performing co-op award and $300 bonus",
        "Technologies: Delphi, C#/.NET APIs, Visual Studio, MS SQL Server, Postman, Git, Jenkins",
    ],
    [],
    null

);

const jsiWinter = createImageLinkCardProps(
    "JSI",
    [
        "Jan. - Apr. 2021 (4 Months)",
        "Software Developer, Frontend"
    ],
    [
        "Developed & delivered a web application feature using Type/JavaScript, HTML, & CSS in Angular, and enhanced backend API functionality using C#/.NET",
        "Developed thorough end-to-end & unit tests with complete code coverage using Protractor & Jasmine",
        "Received highest performing Co-op award and $300 bonus",
        "Technologies: Angular, C#/.NET, Visual Studio, MS SQL Server, Postman, Git, Jenkins",
    ],
    [],
    null

);

const carletonResearch2019 = createImageLinkCardProps(
    "Carleton University",
    [
        "Jun.-Aug. 2019 (3 Months)",
        "Undergraduate Research Assistant"
    ],
    [
        "Designed ad-hoc network simulations using OMNeT++ to test routing protocol hypotheses",
        "Matplotlib, NumPy, & Pandas libraries for graphical analysis of ad-hoc network simulation statistics",
        "Wrote in-depth supporting documentation detailing the implementation of the data visualization software, as well as a framework on designing simulations",
        "Technologies: Python, MatPlotLib, NumPy, Pandas, Linux Bash, Eclipse",
    ],
    [],
    null
)

const carletonTA2022 = createImageLinkCardProps(
    "Carleton University",
    [
        "Jan. - Apr. 2022  (4 Months, Current)",
        "Teaching Assistant"
    ],
    [
        "For SYSC 2100 (Algorithms & Data Structures) and ECOR 1041 (Computation & Programming)",
        "Code review & mark programming assignments to provide detailed feedback to students",
        "Lead software development support sessions to assist students in troubleshooting issues and implementing optimized design patterns",
    ],
    [],
    null
)

const oneclass = createImageLinkCardProps(
    "OneClass",
    [
        "Sep. 2020 - Jan. 2021 (5 Months)",
        "Educational Video Producer"
    ],
    [
        "Produced 50+ hours of educational videos detailing solutions to calculus, mechanics, electrostatics, and circuit questions",
        "Videos produced using OBS & DaVinci Resolve",
    ],
    [],
    null
)

const carletonTA2020 = createImageLinkCardProps(
    "Carleton University",
    [
        "Sep. - Dec. 2020 (4 Months)",
        "Teaching Assistant"
    ],
    [
        "For ECOR 1041 (Computation & Programming)",
        "Code reviewed & marked programming assignments to provide detailed feedback to students",
        "Led software development support sessions to assist students in troubleshooting issues and implementing optimized design patterns",
        "Nominated for teaching awards by 5 students"
    ],
    [],
    null
)

const carletonEMLC = createImageLinkCardProps(
    "Carleton University",
    [
        "Sep. - Dec. 2020 (4 Months)",
        "EMLC Engineering Scholar"
    ],
    [
        "Provide tutoring across 10 different first year courses including programming, calculus, mechanics, electricity, and chemistry",
        "Maintained the highest tutor ranking out of 20"
    ],
    [],
    null
)

const softwareExperiences = [kinaxisFall, jsiSummer, jsiWinter, carletonResearch2019];
const communicationsExperiences = [carletonTA2022, oneclass, carletonTA2020, carletonEMLC];

function ExperiencePage() {
    return (
        <div
            style={{
                display: "flex",
                "justify-content": "center",
                "padding-bottom": 40
            }}>

            <Stack spacing={2}>
                <StackHeader title="Software Engineering Experience" />

                {softwareExperiences.map((ex) => (
                    <ImageLinkCard imageLinkCardProps={ex} maxWidth={500} bodyTextAlignment="left" />
                ))}
            </Stack>

            {/* Middle column spacer */}
            <div style={{ width: "1%" }} />

            <Stack spacing={2}>
                <StackHeader title="Education Experience" />

                {communicationsExperiences.map((ex) => (
                    <ImageLinkCard imageLinkCardProps={ex} maxWidth={500} bodyTextAlignment="left" />
                ))}
            </Stack>
        </div>
    )
}

function StackHeader(props) {
    return (
        <Typography
            variant="h5"
            sx={{
                color: "text.primary",
                "text-decoration": "underline"
            }}>
            {props.title}
        </Typography>)
}

export default ExperiencePage;