import * as React from 'react';
import {
    createImageLinkCardProps,
    ImageLinkCardProps
} from '../cards/ImageLinkCard';
import TwoColumnCardGrid from '../cards/TwoColumnCardGrid';

const spiriaSummer: ImageLinkCardProps = createImageLinkCardProps(
    "Spiria",
    [
        "May - Aug. 2022 (4 Months, In Progress)",
        "Software Developer, Full-Stack"]
    ,
    [
        "Developed frontend React components for the company library using Material UI with thorough test coverage",
        "Resolved backend API authentication bugs with PHP & asserted expected behavior through integration testing",
        "Developed MariaDB SQL migration scripts",
        "Technologies: React, TypeScript, PHP, jQuery, MariaDB, SQL"
    ],
    [],
    ''// No Image
);

const kinaxisFall: ImageLinkCardProps = createImageLinkCardProps(
    "Kinaxis",
    [
        "Sep. - Dec. 2021 (4 Months)",
        "Software Developer, Application Server, Platform"]
    ,
    [
        "Implemented user stories & resolved bugs to develop & maintain application platform features using Java GUIs & C#/.NET backend APIs",
        "Designed thorough integration & unit tests to validate functionality and increase code coverage during CI/CD",
        "Conducted migrations and refactored the server & test environments to assist in removing subscription based dependencies, saving up to $250/developer/month",
        "Technologies: Java GUIs, C#/.NET APIs, Visual Studio, Eclipse, Postman, Git, Jenkins"
    ],
    [],
    ''// No Image
);

const jsiSummer: ImageLinkCardProps = createImageLinkCardProps(
    "JSI",
    [
        "May - Aug. 2021 (4 Months)",
        "Software Developer, Backend"
    ],
    [
        "Implemented application user stories and resolved bugs across the full stack using Delphi, C#/.NET, & Kafka",
        "Upgraded C#/.NET backend API to accommodate the growing demands of the frontend",
        "Developed database procedures using MS SQL Server",
        "Wrote in-depth wiki guides detailing internal application design techniques, and working with Agile methodology",
        "Received highest performing co-op award and $300 bonus",
        "Technologies: Delphi, C#/.NET APIs, Kafka, Visual Studio, MS SQL Server, Postman, Git, Jenkins",
    ],
    [],
    ''// No Image
);

const jsiWinter: ImageLinkCardProps = createImageLinkCardProps(
    "JSI",
    [
        "Jan. - Apr. 2021 (4 Months)",
        "Software Developer, Frontend"
    ],
    [
        "Developed & delivered a web application feature using Type/JavaScript, HTML, & CSS in Angular, and enhanced backend API functionality using C#/.NET",
        "Developed thorough end-to-end & unit tests with complete code coverage using Protractor & Jasmine",
        "Received highest performing Co-op award and $300 bonus",
        "Technologies: Angular, C#/.NET, Visual Studio, VSCode, MS SQL Server, Postman, Git, Jenkins",
    ],
    [],
    ''// No Image
);

const carletonResearch2019: ImageLinkCardProps = createImageLinkCardProps(
    "Carleton University",
    [
        "Jun.-Aug. 2019 (3 Months)",
        "Undergraduate Research Assistant"
    ],
    [
        "Designed ad-hoc network simulations using Eclipse based OMNeT++ to test routing protocol hypotheses",
        "Matplotlib, NumPy, & Pandas libraries for graphical analysis of ad-hoc network simulation statistics",
        "Wrote in-depth supporting documentation detailing the implementation of the data visualization software, as well as a framework on designing simulations",
        "Technologies: Python, MatPlotLib, NumPy, Pandas, Linux Bash, Eclipse",
    ],
    [],
    ''// No Image
)

const carletonTA2022: ImageLinkCardProps = createImageLinkCardProps(
    "Carleton University",
    [
        "Jan. - Apr. 2022  (4 Months)",
        "Teaching Assistant"
    ],
    [
        "For SYSC 2100 (Algorithms & Data Structures) and ECOR 1041 (Computation & Programming)",
        "Code review & mark programming assignments to provide detailed feedback to students",
        "Lead software development support sessions to assist students in troubleshooting issues and implementing optimized design patterns",
    ],
    [],
    ''// No Image
)

const oneclass: ImageLinkCardProps = createImageLinkCardProps(
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
    ''// No Image
)

const carletonTA2020: ImageLinkCardProps = createImageLinkCardProps(
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
    ''// No Image
)

const carletonEMLC: ImageLinkCardProps = createImageLinkCardProps(
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
    ''// No Image
)

const softwareExperiences: ImageLinkCardProps[] = [
    spiriaSummer,
    kinaxisFall,
    jsiSummer,
    jsiWinter,
    carletonResearch2019,
];

const educationExperiences: ImageLinkCardProps[] = [
    carletonTA2022,
    oneclass,
    carletonTA2020,
    carletonEMLC,
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