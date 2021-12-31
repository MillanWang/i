import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const testproj1 = {
    title: "Project name",
    timeframe: "2021",
    media: "images or links",
    description: "what is this project, what it does, why is it cool",
    technologies: "computers, brains, thinkings",
    link: "https://www.google.ca"
}

const projects = [testproj1]

function ProjectsPage() {
    return (
        <React.Fragment>
            {projects.map((project) => (
                projectCard(project)
            ))}
        </React.Fragment>
    )
}

function projectCard(project) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/logo192.png"
            />
            {/* HOW TO IMAGES WORK MY DUDE!? */}

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.timeframe}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {"Technologies: " + project.technologies}
                </Typography>
                {/* 
Does a list even make sense here???
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText primary="Photos" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Work" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Vacation" />
                    </ListItem>
                </List> */}
            </CardContent>

            <CardActions style={{ justifyContent: 'center' }}>
                {/* Link opens in new tab */}
                <a href={project.link} target="_blank" rel="noreferrer noopener">
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