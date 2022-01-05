import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function createImageLinkCardProps(title, timeframe, descriptionStrings, links, img) {
    return { title, timeframe, descriptionStrings, links, img };
}

export function createLink(linkText, url) {
    return { linkText, url }
}

export default function ImageLinkCard(props) {
    return (
        <Card sx={{
            maxWidth: props.maxWidth,
            margin: 1,
            height: "fit-content"
        }}
            raised
        >
            {getImage(props.imageLinkCardProps.img)}

            <CardContent sx={{ paddingBottom: 0 }}>
                <Typography variant="h5" sx={{ borderTop: 1 }}>
                    {props.imageLinkCardProps.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ borderBottom: 1 }}>
                    {props.imageLinkCardProps.timeframe}
                </Typography>


                {props.imageLinkCardProps.descriptionStrings.map((s) => (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {s}
                    </Typography>
                ))}

            </CardContent>

            {/* Links */}
            <CardActions style={{ justifyContent: 'center' }}>
                {props.imageLinkCardProps.links.map((linkObj) => (
                    <a href={linkObj.url} target="_blank" rel="noreferrer noopener">
                        <Button size="small">{linkObj.linkText}</Button>
                    </a>
                ))}
            </CardActions>
        </Card>
    )
}

function getImage(img) {
    if (img === null) {
        return <React.Fragment></React.Fragment>
    } else {
        return (
            <CardMedia
                component="img"
                alt="Image Error"
                height="140"
                image={img}
            />)
    }
}