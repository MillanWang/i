import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import './ImageLinkCard.css';

export function createImageLinkCardProps(
    title: string,
    subtitles: string[],
    descriptionStrings: string[],
    links: LinkObject[],
    img: string) {
    //Do some sanitization here
    return { title, subtitles, descriptionStrings, links, img };
};

export type ImageLinkCardProps = {
    title: string,
    subtitles: string[],
    descriptionStrings: string[],
    links: LinkObject[],
    img: string,

    maxWidth?: number,
};

type LinkObject = {
    linkText: string,
    url: string
}

export function createLinkObject(linkText: string, url: string): LinkObject {
    return { linkText, url }
}

const ImageLinkCard = (
    {
        title,
        subtitles,
        descriptionStrings,
        links,
        img,
        maxWidth
    }: ImageLinkCardProps) => {
    return (
        <Card
            sx={
                {
                    maxWidth: maxWidth,
                    marginTop: 1,
                    // margin: props.sideMargin ? 1 : 0,
                    height: "fit-content",
                    bgcolor: "primary.main"
                }}
            raised
        >
            {getImage(img)}


            <CardContent
                sx={{
                    paddingBottom: 0,
                    paddingTop: img ? 0 : 2, // 2 without image, 0 with image
                }}>
                <Typography variant="h5" >{title}</Typography>

                {subtitles?.map((subtitle: string) => (
                    <Typography variant="body2" color="text.secondary" >
                        {subtitle}
                    </Typography>
                ))}

                <Divider sx={{ marginBottom: 1, borderBottomWidth: 3, borderColor: "text.disabled" }} />

                <div style={{ textAlign: "left" }}>
                    {descriptionStrings.map((s: string) => (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ marginBottom: 1.5 }}
                        >
                            {s}
                        </Typography>
                    ))}
                </div>
            </CardContent >

            {/* Links */}
            <CardActions style={{ justifyContent: 'center' }}>
                {
                    links?.map((linkObj) => (
                        <a href={linkObj.url} target="_blank" rel="noreferrer noopener" >
                            <Button size="small" sx={{ color: "text.primary", bgcolor: "primary.light" }} > {linkObj.linkText} </Button>
                        </a>
                    ))}
            </CardActions>
        </Card >
    )
}

const getImage = (img: string) => {
    if (img === '') {
        return <React.Fragment></React.Fragment>
    } else {
        return (
            <React.Fragment>
                <CardMedia
                    component="img"
                    alt="Image Error"
                    height="200"
                    image={img} />
                <Divider
                    sx={
                        {
                            width: "95%",
                            marginTop: 2,
                            marginBottom: 0,
                            paddingBottom: 0,
                            borderBottomWidth: 3,
                            borderColor: "text.disabled"
                        }
                    } />
            </React.Fragment>
        )
    }
};


export default ImageLinkCard;