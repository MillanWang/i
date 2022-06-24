import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageLinkCard, { createImageLinkCardProps, createLinkObject, ImageLinkCardProps } from './ImageLinkCard';


//Images
import letteredTabsGif from "../../images/LetteredTabs.gif";
import mspBoardGif from "../../images/MSPBoard.gif";
import riskGameImg from "../../images/risk.jpg";
import elevatorGif from "../../images/Elevator.gif";
import tornadoKick from "../../images/tornadoKick.gif";
import soundWaves from "../../images/soundWaves.gif";
import zollySpin from "../../images/ZollySpin.gif";


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
        "Technologies: React, TypeScript, PHP, MariaDB, SQL"
    ],
    [],
    require("../../images/ZollySpin.gif")//''// No Image

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
        "Jan. - Apr. 2022  (4 Months, Current)",
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
const martialArts: ImageLinkCardProps = createImageLinkCardProps(
    "Martial Arts",
    ["2005-Present"],
    [
        "World Champion from international competitions in Orlando FL, and London UK",
        "(500 pushups + 150 pullups)/day to maintain conditioning",
        "Black belt in Karate",
        "Weekly training with occasional coaching of friends",
        "Can be very effective as physical security during emergency situations",
    ],
    [
        createLinkObject("2014 Worlds", "https://www.toronto.com/community-story/4881165-csma-academy-athletes-capture-33-medals/"),
        createLinkObject("2012 Worlds", "https://www.toronto.com/community-story/3961498-stittsville-youth-heading-to-2012-world-karate-championships-west-end-teen-qualifies-for-world-kickboxing-and-karate-championship-in-orlando-fla-/")
    ],
    tornadoKick
);

const audioProduction: ImageLinkCardProps = createImageLinkCardProps(
    "Guitar & Audio Production",
    ["2009-Present"],
    [
        "Self taught in FL Studio for composing, sample recording, sound synthesis, FX chaining, and parameter automation",
        "5 Years of guitar teaching before self teaching"
    ],
    [
        createLinkObject("Soundcloud", "https://soundcloud.com/user-507249210/sets/mills-beat-tape/s-Twm49p7Rfzb?si=7d0f0edb57a24f709e1c1bf9d79145a2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"),
        createLinkObject("1 min Guitar solo", "https://youtu.be/oVREEHV2s54")
    ],
    soundWaves
);

const videoProduction: ImageLinkCardProps = createImageLinkCardProps(
    "Video Production",
    ["2009-Present"],
    [
        "Self taught in DaVinci Resolve for compositing & grading",
        "Experienced with DSLRs, gimbals, lighting, & streaming"
    ],
    [createLinkObject("100km Bike ride video", "https://youtu.be/Z-KnKM-gzQA")],
    zollySpin
);

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
    letteredTabsGif
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
    mspBoardGif
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
    riskGameImg
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
    elevatorGif
);

const allCardsEverForTesting: ImageLinkCardProps[] = [letteredTabs, mspPerformance, riskGame, elevatorSim, martialArts, audioProduction, videoProduction, spiriaSummer, kinaxisFall, jsiSummer, jsiWinter, carletonResearch2019, carletonTA2022, oneclass, carletonTA2020, carletonEMLC];









type CardGridProps = {
    // Need to make this non-optional once done
    cardArray?: ImageLinkCardProps[]
}

const CardGrid = ({ cardArray }: CardGridProps) => {
    return (
        <Box sx={{ flexGrow: 1, width: "80%" }}>
            <Grid
                spacing={1}
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
            >

                {/* Eventually switch this to cardProps after done */}
                {allCardsEverForTesting.map((currentCardProps: ImageLinkCardProps, i: number) => {
                    return (
                        <Grid item xs key={currentCardProps.title + "card_" + i++}>
                            <ImageLinkCard {...currentCardProps} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
};






export default CardGrid;