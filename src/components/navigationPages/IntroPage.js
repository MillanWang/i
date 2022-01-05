import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ImageLinkCard, { createImageLinkCardProps, createLink } from './cards/ImageLinkCard';
import PureTextCard, { createPureTextCard } from './cards/PureTextCard';

import portraitImage from "../../penguin.jpg"; //UPDATE WITH PORTRAIT



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
        "What am I? Describe meself bro",
    ],
)

const githubProfile = createImageLinkCardProps(
    "Github Profile",
    "",
    [
        "Check out my Github profile and repositories!"
    ],
    [
        createLink("Link", "https://github.com/MillanWang")
    ],
    null //No image for this particular ImageLinkCard
)

const images = [portraitImage];

const pureTextCards = [
    introCard,
    aboutMeCard
]

const imageLinkCards = [
    // introCard,
    githubProfile
];



function IntroPage() {
    return (

        <div style={{
            display: "flex",
            "justify-content": "center",
            paddingBottom: 34
        }}>
            {/* Left Column Stack */}
            < Stack spacing={2} width={"40%"} >
                {
                    images.map((currentImage) => (
                        <Paper width={"100%"} maxHeight={"20%"}>
                            <img src={currentImage} alt="Logo" style={{
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