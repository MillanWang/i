import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import img from "../../logo.svg";

const testproj1 = {
    title: "Project name",
    timeframe: "2021",
    media: "images or links",
    description: "what is this project, what it does, why is it cool",
    technologies: "computers, brains, thinkings",
    link: "https://www.google.ca"
}

const projects = [testproj1, testproj1, testproj1, testproj1]

function ProjectsPage() {
    return (
        <div style={{
            display: "flex",
            "justify-content": "center"
        }}>
            {projects.map((currProject) => (
                <ProjectCard project={currProject} />
            ))}
        </div>
    )
}

function ProjectCard(props) {
    return (
        <Card sx={{ maxWidth: 345, margin: 1 }} raised>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.project.timeframe}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.project.description}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {"Technologies: " + props.project.technologies}
                </Typography>
            </CardContent>

            <CardActions style={{ justifyContent: 'center' }}>
                {/* Link opens in new tab */}
                <a href={props.project.link} target="_blank" rel="noreferrer noopener">
                    <Button size="small">View in new tab</Button>
                </a>
            </CardActions>
        </Card>
    )
}

// 2.4 - Setup projects page
// 2.4.1 - Create project components 
//     -Title, Timeframe, Media, Explanation, Technologies, Link
// 2.4.2 - Populate project components with project info

export default ProjectsPage;