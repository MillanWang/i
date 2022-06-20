import * as React from 'react';
import ImageLinkCard from '../cards/ImageLinkCard';
import { createImageLinkCardProps, createLinkObject, ImageLinkCardProps } from '../cards/ImageLinkCard';

import tornadoKick from "../../images/tornadoKick.gif";
import soundWaves from "../../images/soundWaves.gif";
import zollySpin from "../../images/ZollySpin.gif";


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

const extracurriculars: ImageLinkCardProps[] = [martialArts, audioProduction, videoProduction,];

function ExtracurricularsPage() {
    return (
        <div
            style={{
                display: "flex",
                // "justify-content": "center",
                backgroundColor: "primary.dark",
                margin: 0
            }}>
            {extracurriculars.map((ec: ImageLinkCardProps) => (
                <ImageLinkCard
                    title={ec.title}
                    subtitles={ec.subtitles}
                    descriptionStrings={ec.descriptionStrings}
                    links={ec.links}
                    img={ec.img}
                    maxWidth={400}
                // sideMargin={true}
                />
            ))}
        </div >
    )
}

export default ExtracurricularsPage;