import * as React from 'react';
import {
    Button,
    Card, CardActions, CardContent, CardMedia,
    Divider,
    Link,
    Typography
} from '@mui/material';

export type LinkObject = {
    linkText: string,
    url: string
}

export function createLinkObject(linkText: string, url: string): LinkObject {
    return { linkText, url }
}

export type ImageLinkCardProps = {
    title: string,
    subtitles: string[],
    descriptionStrings: string[],
    links: LinkObject[],
    img: string,//Change this to card path and do the require here so that it is the card's responsibility to resolve the img link to img

    maxWidth?: number, //Eventually remove cause the widths will be fixed
};

export function createImageLinkCardProps(
    title: string,
    subtitles: string[],
    descriptionStrings: string[],
    links: LinkObject[],
    img: string): ImageLinkCardProps {
    return { title, subtitles, descriptionStrings, links, img };
};

const ImageLinkCard = (
    {
        title,
        subtitles,
        descriptionStrings,
        links,
        img,
        maxWidth//Eventually remove
    }: ImageLinkCardProps) => {
    return (
        <Card sx={outerCardTheme} raised>

            {/* Optional top image. Only shows if non empty is given */}
            <CardImage img={img} />

            {/* Text Content */}
            <CardContent sx={img ? hasImageCardContentTheme : noImageCardContentTheme}>

                <Typography variant="h5" id={'Card_' + title}>
                    {title}
                </Typography>

                {subtitles.map((subtitle: string, i: number) => (
                    <Typography key={'Card_' + title + '_subtitle' + i++} variant="body2" color="text.secondary">
                        {subtitle}
                    </Typography>
                ))}

                <Divider sx={headerBodyDividerTheme} />

                {descriptionStrings.map((description: string, i: number) => (
                    <Typography key={'Card_' + title + '_description' + i++} variant="body2" sx={descriptionStringTheme}>
                        {description}
                    </Typography>
                ))}

            </CardContent >
            {/* End Text Content */}

            {/* Links */}
            <CardActions sx={cardActionLinksTheme}>
                {links.map((linkObj: LinkObject, i: number) => (
                    <Link underline="always" href={linkObj.url} target="_blank" rel="noreferrer noopener" key={'Card_' + title + '_link' + i++}>
                        <Button size="small" sx={linkButtonTheme} >
                            {linkObj.linkText}
                        </Button>
                    </Link>
                ))}
            </CardActions>
        </Card >
    )
}

type CardImageProps = {
    img: string,
}

const CardImage = ({ img }: CardImageProps) => {
    if (img === '') {
        return <React.Fragment></React.Fragment>
    } else {
        return (
            <React.Fragment>
                <CardMedia image={img} component="img" alt="Image Error" height="200" />
                <Divider sx={imageDividerTheme} />
            </React.Fragment>
        )
    }
};

/**
 * THEMES
 */

const outerCardTheme = {
    width: 400,
    marginTop: 1,
    height: "fit-content",// Revisit when looking a constant row sizing in the cardGrid
    bgcolor: "primary.main"
};

const hasImageCardContentTheme = {
    paddingBottom: 0,
    paddingTop: 0,
};

const noImageCardContentTheme = {
    paddingBottom: 0,
    paddingTop: 2,
}

const headerBodyDividerTheme = {
    marginBottom: 1,
    borderBottomWidth: 3,
    borderColor: "text.disabled"
};

const imageDividerTheme = {
    width: "95%",
    marginTop: 2,
    marginBottom: 0,
    paddingBottom: 0,
    borderBottomWidth: 3,
    borderColor: "text.disabled"
};

const descriptionStringTheme = {
    marginBottom: 1.5,
    color: "text.secondary",
    "text-align": "left",
}

const cardActionLinksTheme = {
    justifyContent: 'center'
};

const linkButtonTheme = {
    color: "text.primary",
    bgcolor: "primary.light"
}

export default ImageLinkCard;