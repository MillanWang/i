import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ImageLinkCard, { createImageLinkCardProps, createLink } from './cards/ImageLinkCard';
import PureTextCard, { createPureTextCard } from './cards/PureTextCard';

import portraitImage from "../../images/MillPortrait.jpg";

//TODO: Consolidate repetitive sx tags into css classes

const introCard = createPureTextCard(
    "Hello!!!",
    ["Welcome to my personal website!",],
    [
        "This site was developed using React, Material UI, and Github pages",
    ],
)

const aboutMeCard = createPureTextCard(
    "About Me",
    [],
    [
        "My name is Millan Wang and I am a fourth year software engineering student at Carleton University, expecting to graduate April 2023.",
        "I am very passionate about software development, with a special interest in full-stack application design, and working with multimedia technologies",
    ],
)

const githubProfile = createImageLinkCardProps(
    "Links",
    "",
    [],
    [
        createLink("Resume", "https://docs.google.com/document/d/1fJpibJ1Cb_HbVXiF-PU8EkPah9ylEPLp_XWIe8xxkPY/edit?usp=sharing"),
        createLink("Github", "https://github.com/MillanWang"),
        createLink("LinkedIn", "https://www.linkedin.com/in/real-millan-wang/"),
    ],
    null //No image for this particular ImageLinkCard
)

const images = [portraitImage];

const pureTextCards = [
    introCard,
    aboutMeCard
]

const imageLinkCards = [
    githubProfile
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
                {
                    images.map((currentImage) => (
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
                    ))
                }
            </Stack >


            {/* Middle column spacer */}
            <div style={{ width: "1%" }} />


            {/* Right Column Stack */}
            < Stack spacing={2} width={"40%"} >
                {
                    pureTextCards.map((card) => (
                        <PureTextCard pureTextCardProps={card} />
                    ))
                }
                {
                    imageLinkCards.map((card) => (
                        <ImageLinkCard imageLinkCardProps={card} />
                    ))
                }



            </Stack >
        </div >

    )
}

export default IntroPage;