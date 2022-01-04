import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import portraitImage from "../../penguin.jpg"; //UPDATE WITH PORTRAIT

const images = [portraitImage];

const textBlocks = [
    textBlock("I am a title", "I am the text body, much longer with lots to say about words"),
    textBlock("I am another title", "Penguin buddy is a placeholder for a recent portrait. Penguins are very professional. I would trust them with my business"),
];

function textBlock(localTitle, textBody) {
    return { localTitle, textBody }
}

function IntroPage() {
    return (

        <div style={{
            display: "flex",
            "justify-content": "center"
        }}>
            {/* Images Stack Column */}
            < Stack spacing={1} width={"40%"} >
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

            {/* TextBlocks Stack Column */}
            < Stack spacing={1} width={"40%"} >
                {
                    textBlocks.map((textBlock) => (
                        <Paper>
                            <Typography variant="h4">{textBlock.localTitle}</Typography>
                            <Typography>{textBlock.textBody}</Typography>
                        </Paper>
                    ))
                }
            </Stack >
        </div >

    )
}

export default IntroPage;