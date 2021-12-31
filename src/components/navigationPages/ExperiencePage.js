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

const jsiWinter = {
    company: "JSI",
    position: "Software Dev",
    timeframe: "2021",
    descriptions: [
        "Note1 with a nice description",
        "Note2 with a different description"
    ],
    technologies: "Angular, C#/.NET"
};

const experiences = [jsiWinter, jsiWinter];

function ExperiencePage() {
    return (
        <React.Fragment>
            {experiences.map((experience) => (
                ExperienceCard(experience)
            ))}
        </React.Fragment>
    )
}

function ExperienceCard(experience) {
    return (
        <div>
            <Card sx={{ maxWidth: 400 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {experience.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {experience.position}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {experience.timeframe}
                    </Typography>

                    {experience.descriptions.map((description) => (
                        <Typography variant="body2" color="text.secondary">
                            {"-  " + description}
                        </Typography>
                    ))}


                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemText primary="Use this mapping instead of typographies" />
                        </ListItem>
                    </List>

                    <Typography variant="body2" color="text.secondary">
                        Technologies: {experience.technologies}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

// {props.sections.map((section) => (
//     <Link to={section.url}>
//         <Button >
//             {section.title}
//         </Button>
//     </Link>
// ))}

// 2.3 - Setup work experience page
// 2.3.1 - Create Workplace>Workterm>[Experiences, Technologies used] components
// 2.3.2 - Populate work experience components with work experience info

export default ExperiencePage;