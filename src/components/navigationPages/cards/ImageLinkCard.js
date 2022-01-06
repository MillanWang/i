import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

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
            height: "fit-content",
            bgcolor: "primary.main"
        }}
            raised
        >
            {getImage(props.imageLinkCardProps.img)}

            <CardContent sx={{ paddingBottom: 0 }}>
                <Divider sx={{ marginBottom: 1, borderBottomWidth: 3, borderColor: "text.disabled" }} />
                <Typography variant="h5" >
                    {props.imageLinkCardProps.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {props.imageLinkCardProps.timeframe}
                </Typography>
                <Divider sx={{ marginBottom: 1, borderBottomWidth: 3, borderColor: "text.disabled" }} />
                <div style={{ textAlign: props.bodyTextAlignment }}>
                    {props.imageLinkCardProps.descriptionStrings.map((s) => (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ marginBottom: 1.5 }}
                        >
                            {s}
                        </Typography>
                    ))}
                </div>
            </CardContent>

            {/* Links */}
            <CardActions style={{ justifyContent: 'center' }}>
                {props.imageLinkCardProps.links.map((linkObj) => (
                    <a href={linkObj.url} target="_blank" rel="noreferrer noopener">
                        <Button size="small" sx={{ color: "text.primary", bgcolor: "primary.light" }}>{linkObj.linkText}</Button>
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