import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from "../../logo.svg";

const martialArts = createExtracurricular(
    "Martial Arts",
    "2005-Present",
    [
        "World Champion from international competitions in Orlando FL, and London UK",
        "Black belt in Karate",
        "Weekly training with occasional coaching of friends",
        "Can be very effective as physical security during emergency situations"
    ],
    [
        createLink("2014 Worlds", "https://www.toronto.com/community-story/4881165-csma-academy-athletes-capture-33-medals/"),
        createLink("2012 Worlds", "https://www.toronto.com/community-story/3961498-stittsville-youth-heading-to-2012-world-karate-championships-west-end-teen-qualifies-for-world-kickboxing-and-karate-championship-in-orlando-fla-/")
    ],
    img//NEED UPDATE
);

const audioProduction = createExtracurricular(
    "Guitar & Audio Production",
    "2009-Present",
    [
        "Self taught in FL Studio, recording, & sound synthesis",
        "5 Years of guitar teaching before self teaching"
    ],
    [createLink("1min Guitar solo", "https://youtu.be/oVREEHV2s54")],
    img//NEED UPDATE
);

const videoProduction = createExtracurricular(
    "Video Production",
    "2009-Present",
    [
        "Self taught in DaVinci Resolve for compositing & grading",
        "Experienced with DSLRs, gimbals, lighting, & streaming"
    ],
    [createLink("100km Bike ride video", "https://youtu.be/Z-KnKM-gzQA")],
    img //NEED UPDATE
);





function createExtracurricular(title, timeframe, descriptionStrings, links, img) {
    return { title, timeframe, descriptionStrings, links, img };
}

function createLink(linkText, url) {
    return { linkText, url }
}

const extracurriculars = [martialArts, audioProduction, videoProduction,];

function ExtracurricularsPage() {
    return (
        <div style={{
            display: "flex",
            "justify-content": "center"
        }}>
            {extracurriculars.map((ec) => (
                <ExtracurricularCard extracurricular={ec} />
            ))}
        </div>
    )
}

function ExtracurricularCard(props) {
    return (
        <Card sx={{ maxWidth: 400, margin: 1, height: "fit-content" }} raised>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={props.extracurricular.img}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.extracurricular.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.extracurricular.timeframe}
                </Typography>


                {props.extracurricular.descriptionStrings.map((s) => (
                    <Typography variant="body2" color="text.secondary">
                        {s}
                    </Typography>

                ))}



            </CardContent>

            {/* Links */}
            <CardActions style={{ justifyContent: 'center' }}>
                {props.extracurricular.links.map((linkObj) => (
                    <a href={linkObj.url} target="_blank" rel="noreferrer noopener">
                        <Button size="small">{linkObj.linkText}</Button>
                    </a>
                ))}
            </CardActions>
        </Card>
    )
}

export default ExtracurricularsPage;