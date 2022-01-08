import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ImageLinkCard, { createImageLinkCardProps, createLink } from './cards/ImageLinkCard';

//Images
import portraitImage from "../../images/MillPortrait.jpg";

//TODO: Consolidate repetitive sx tags into css classes

const introCard = createImageLinkCardProps(
    "Hello!!!",
    [
        "Welcome to my personal website!",
    ],
    [
        "This site was developed using React, Material UI, and Github pages",
    ],
    [
        createLink("Source Code", "https://github.com/MillanWang/i"),
    ],
    null //No image
)

const aboutMeCard = createImageLinkCardProps(
    "About Me",
    [],
    [
        "My name is Millan Wang and I am a fourth year software engineering student at Carleton University, expecting to graduate April 2023",
        "I am very passionate about software development, with a special interest in full-stack application design, and working with multimedia technologies",
    ],
    [],
    null //No image
)

const linksList = createImageLinkCardProps(
    "Links",
    [],
    [],
    [
        createLink("Resume", "https://docs.google.com/document/d/1fJpibJ1Cb_HbVXiF-PU8EkPah9ylEPLp_XWIe8xxkPY/edit?usp=sharing"),
        createLink("Github", "https://github.com/MillanWang"),
        createLink("LinkedIn", "https://www.linkedin.com/in/real-millan-wang/"),
    ],
    null //No image
)

const technologies = createImageLinkCardProps(
    "Technologies",
    [],
    [
        "Languages: Python, Java, C#/.NET, Type/JavaScript, HTML, CSS, Delphi, C, SQL, Scheme/Racket, Go, Verilog, VHDL, MATLAB",
        "Favourite Language: Python. It introduced me to programming and I like it's versatility in with lists and how concise it is. 2nd place is JavaScript cause webdev is fun",
        "Tools: Git, Linux/Bash, VirtualBox, Visual Studio, Eclipse, IntelliJ, Angular, Microsoft SQL Server, Postman, Jenkins, REST APIs, node.js, Kubernetes, PuTTY, WinSCP",
        "Favourite IDEs: VSCode for WebDev, Visual Studio for C#/.NET, IntelliJ for Java",
    ],
    [],
    null
);

const images = [portraitImage];

const imageLinkCards = [
    introCard,
    aboutMeCard,
    linksList,
    technologies
];

function IntroPage() {
    return (

        <div
            style={{
                display: "flex",
                "justify-content": "center",
                paddingBottom: 34
            }}>

            {/* Left Column Stack */}
            < Stack spacing={2} width={"40%"} >
                {images.map((currentImage) => (
                    <Paper width={"100%"} maxHeight={"20%"}>
                        <img
                            src={currentImage}
                            alt="Logo"
                            style={{
                                flex: 1,
                                width: "100%",
                                height: "100%",
                                resizeMode: 'contain'
                            }} />
                    </Paper>
                ))}
            </Stack >


            {/* Middle column spacer */}
            <div style={{ width: "1%" }} />


            {/* Right Column Stack */}
            < Stack spacing={2} width={"40%"} >
                {imageLinkCards.map((card) => (
                    <ImageLinkCard imageLinkCardProps={card} />
                ))}
            </Stack >
        </div >

    )
}

export default IntroPage;