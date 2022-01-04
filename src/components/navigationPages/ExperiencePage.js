import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const jsiWinter = createExperience(
    "JSI",
    "Software Dev",
    "2021",
    [
        "Note1 with a nice description",
        "Note2 with a different description"
    ],
    "Angular, C#/.NET"
);



function createExperience(company, position, timeframe, descriptions, technologies) {
    return { company, position, timeframe, descriptions, technologies }
};

const softwareExperiences = [jsiWinter, jsiWinter];
const communicationsExperiences = [jsiWinter, jsiWinter, jsiWinter, jsiWinter];

function ExperiencePage() {
    return (
        <div style={{
            display: "flex",
            "justify-content": "center"
        }}>
            <Stack spacing={2}>
                {/* Move this title out to a higher level */}
                <Typography variant="h6">Software Engineering Experience</Typography>

                {softwareExperiences.map((ex) => (
                    <ExperienceCard experience={ex} />
                ))}
            </Stack>

            {/* Middle column spacer */}
            <div style={{ width: "2%" }} />

            <Stack spacing={2}>
                {/* Move this title out to a higher level */}
                <Typography variant="h6">Communications Experience</Typography>

                {communicationsExperiences.map((ex) => (
                    <ExperienceCard experience={ex} />
                ))}
            </Stack>
        </div>
    )
}

function ExperienceCard(props) {
    return (
        <Card sx={{ width: 500 }} raised >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.experience.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.experience.position}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {props.experience.timeframe}
                </Typography>

                {props.experience.descriptions.map((description) => (
                    <Typography variant="body2" color="text.secondary">
                        {"-  " + description}
                    </Typography>
                ))}

                <Typography variant="body2" color="text.secondary">
                    Technologies: {props.experience.technologies}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ExperiencePage;