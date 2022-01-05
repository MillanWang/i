import * as React from 'react';
import ImageLinkCard from './cards/ImageLinkCard';
import { createImageLinkCardProps, createLink } from './cards/ImageLinkCard';

import img from "../../logo.svg";
import sine from "../../images/sine.gif";


const martialArts = createImageLinkCardProps(
    "Martial Arts",
    "2005-Present",
    [
        "World Champion from international competitions in Orlando FL, and London UK",
        "Black belt in Karate",
        "Weekly training with occasional coaching of friends",
        "(500 pushups + 150 pullups)/day to maintain conditioning",
        "Can be very effective as physical security during emergency situations"
    ],
    [
        createLink("2014 Worlds", "https://www.toronto.com/community-story/4881165-csma-academy-athletes-capture-33-medals/"),
        createLink("2012 Worlds", "https://www.toronto.com/community-story/3961498-stittsville-youth-heading-to-2012-world-karate-championships-west-end-teen-qualifies-for-world-kickboxing-and-karate-championship-in-orlando-fla-/")
    ],
    sine//NEED UPDATE
);

const audioProduction = createImageLinkCardProps(
    "Guitar & Audio Production",
    "2009-Present",
    [
        "Self taught in FL Studio, recording, & sound synthesis",
        "5 Years of guitar teaching before self teaching"
    ],
    [createLink("1 min Guitar solo", "https://youtu.be/oVREEHV2s54")],
    sine//NEED UPDATE
);

const videoProduction = createImageLinkCardProps(
    "Video Production",
    "2009-Present",
    [
        "Self taught in DaVinci Resolve for compositing & grading",
        "Experienced with DSLRs, gimbals, lighting, & streaming"
    ],
    [createLink("100km Bike ride video", "https://youtu.be/Z-KnKM-gzQA")],
    img //NEED UPDATE
);

const extracurriculars = [martialArts, audioProduction, videoProduction,];

function ExtracurricularsPage() {
    return (
        <div style={{
            display: "flex",
            "justify-content": "center"
        }}>
            {extracurriculars.map((ec) => (
                <ImageLinkCard imageLinkCardProps={ec} maxWidth={400} />
            ))}
        </div>
    )
}

export default ExtracurricularsPage;