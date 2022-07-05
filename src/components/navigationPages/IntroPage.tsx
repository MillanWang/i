import * as React from 'react';
import {
    createImageLinkCardProps,
    createLinkObject,
    ImageLinkCardProps
} from '../cards/ImageLinkCard';
import TwoColumnCardGrid from '../cards/TwoColumnCardGrid';

const introCard: ImageLinkCardProps = createImageLinkCardProps(
    "Hello!!!",
    [
        "Welcome to my personal website!",
    ],
    [
        "The development of this site was a fun lil challenge to introduce myself to React, Material UI, and Github pages",
        "Try resizing the page! Variable screen size is a fun design challenge. I based most of this site on Material UI cards to make content easier to divide and better on mobile"
    ],
    [
        createLinkObject("Source Code", "https://github.com/MillanWang/i"),
    ],
    '' //No image
)

const aboutMeCard: ImageLinkCardProps = createImageLinkCardProps(
    "About Me",
    [],
    [
        "My name is Millan Wang and I am a fifth year software engineering student at Carleton University, expecting to graduate April 2023",
        "I am very passionate about software development, with a special interest in full-stack application design, and working with multimedia technologies",
    ],
    [],
    '' //No image
)

const linksList: ImageLinkCardProps = createImageLinkCardProps(
    "Links",
    [],
    [],
    [
        createLinkObject("Resume", "https://docs.google.com/document/d/1fJpibJ1Cb_HbVXiF-PU8EkPah9ylEPLp_XWIe8xxkPY/edit?usp=sharing"),
        createLinkObject("Github", "https://github.com/MillanWang"),
        createLinkObject("LinkedIn", "https://www.linkedin.com/in/real-millan-wang/"),
    ],
    '' //No image
)

const technologies: ImageLinkCardProps = createImageLinkCardProps(
    "Technologies",
    [],
    [
        "Languages: Python, Java, C#/.NET, Type/JavaScript, HTML, CSS, PHP, Delphi, C, SQL, Scheme/Racket, Go, Verilog, VHDL, MATLAB",
        "Favourite Language: Python. It introduced me to programming and I like it's versatility in with lists and how concise it is. 2nd place is JavaScript cause WebDev is fun",
        "Tools: Git, Linux/Bash, VirtualBox, Visual Studio, VSCode, Eclipse, IntelliJ, React, Angular, Microsoft SQL Server, Kafka, Jasmine, Protractor, Postman, Jenkins, REST APIs, node.js, Kubernetes, SSH",
        "Favourite IDEs: VSCode for WebDev, Visual Studio for C#/.NET, IntelliJ for Java",
    ],
    [],
    ''//No image
);

const millyByTheMap: ImageLinkCardProps = createImageLinkCardProps(
    "",
    [
        "Big fan of maps! Both in Type/JavaScript & geography!"
    ],
    [],
    [],
    // portraitImage
    require("../../images/MillPortrait.jpg")
);

const leftColumnCards: ImageLinkCardProps[] = [
    introCard,
    millyByTheMap,
];

const rightColumnCards: ImageLinkCardProps[] = [
    aboutMeCard,
    linksList,
    technologies
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