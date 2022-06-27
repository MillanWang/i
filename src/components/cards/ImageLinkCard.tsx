import * as React from 'react';
import {
    Accordion, AccordionDetails, AccordionSummary,
    Button,
    Card, CardActions, CardContent, CardMedia,
    Divider,
    Link,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    img: string,

    width?: number,
    useAccordionDescription?: boolean,
    imageHeightLimit?: number,
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
        // Required but can be empty. Force developer to think abouty this
        title,
        subtitles,
        descriptionStrings,
        links,
        img,
        // Optional
        width,
        useAccordionDescription,
        imageHeightLimit,
    }: ImageLinkCardProps) => {

    return (
        <Card sx={outerCardTheme(width)} raised>

            {/* Optional top image. Only shows if non empty is given */}
            <CardImage img={img} imageHeightLimit={imageHeightLimit} />

            {/* Text Content */}
            <CardContent sx={img ? hasImageCardContentTheme : noImageCardContentTheme}>

                <Typography children={title} variant="h5" id={'Card_' + title} />

                <SubtitlesArea title={title} subtitles={subtitles} />

                <Divider sx={headerBodyDividerTheme} />

                <DescriptionStringsArea
                    cardTitle={title}
                    accordionWrap={useAccordionDescription}
                    descriptionStrings={descriptionStrings}
                />

                {/* Add bottom divider if there are non-empty links and non-empty descriptions*/}
                {links.length > 0 && descriptionStrings.length > 0 &&
                    <Divider sx={bodyLinksDividerTheme} />
                }

            </CardContent >
            {/* End Text Content */}

            {/* Links */}
            <CardActions sx={cardActionLinksTheme}>
                {links.map((linkObj: LinkObject, i: number) => (
                    <Link href={linkObj.url} target="_blank" rel="noreferrer noopener" key={'Card_' + title + '_link' + i++}>
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
    imageHeightLimit?: number,
}

const CardImage = ({ img, imageHeightLimit }: CardImageProps) => {
    if (img === '') {
        return <React.Fragment></React.Fragment>
    } else {
        return (
            <React.Fragment>
                <CardMedia
                    image={img}
                    component="img"
                    alt="Image Error"
                    height={imageHeightLimit}
                />
                <Divider sx={imageDividerTheme} />
            </React.Fragment>
        )
    }
};

type SubtitlesAreaProps = {
    title: string,
    subtitles: string[],
}

const SubtitlesArea = ({ title, subtitles }: SubtitlesAreaProps) => {
    return (
        <React.Fragment>
            {subtitles.map((subtitle: string, i: number) => (
                <Typography key={'Card_' + title + '_subtitle' + i++} variant="body2" color="text.secondary">
                    {subtitle}
                </Typography>
            ))}
        </React.Fragment>
    )
};

//TODO : There should be a separation between the desc strings alone as a bunch of typographies and then them inside an accordion. Too much for one component

type DescriptionStringsAreaProps = {
    cardTitle: string,
    accordionWrap?: boolean,
    descriptionStrings: string[]
}

const DescriptionStringsArea = ({ cardTitle, accordionWrap, descriptionStrings }: DescriptionStringsAreaProps) => {
    const descriptionStringsElement: JSX.Element = (
        <React.Fragment>
            {descriptionStrings.map((description: string, i: number) => (
                <Typography key={'Card_' + cardTitle + '_description' + i++} variant="body2" sx={descriptionStringTheme} align="left">
                    {description}
                </Typography>
            ))}
        </React.Fragment>
    );


    // If no accordion wrap, return the Typographies directly
    if (accordionWrap === undefined || !accordionWrap) { return descriptionStringsElement; }

    // Only make a state hook if accordion is used cause state is not relevant otherwise
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [accordionText, setAccordionText] = React.useState("Show Details");

    const swapString = (event: React.SyntheticEvent, expanded: boolean) => {
        expanded ? setAccordionText("Hide Details") : setAccordionText("Show Details")
    };

    return (
        <Accordion sx={accordionTheme} onChange={swapString}>
            <AccordionSummary
                sx={accordionTitleTheme}
                expandIcon={<ExpandMoreIcon htmlColor='white' />}
                children={accordionText}
            />
            <AccordionDetails
                sx={accordionDetailsTheme}
                children={descriptionStringsElement}
            />
        </Accordion>
    );
}

/******************************
 * THEMES
 *****************************/

const outerCardTheme = (width?: number,) => {
    return {
        width: width ? width : "auto",
        minWidth: 400,
        marginTop: 1,
        height: "fit-content",
        bgcolor: "primary.main",
    }
};

const hasImageCardContentTheme = {
    paddingBottom: 0,
    paddingTop: 0,
};

const noImageCardContentTheme = {
    ...hasImageCardContentTheme,
    paddingTop: 2,
}

const headerBodyDividerTheme = {
    marginBottom: 1,
    borderBottomWidth: 3,
    borderColor: "text.disabled"
};

const bodyLinksDividerTheme = {
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
}

const cardActionLinksTheme = {
    justifyContent: 'center'
};

const linkButtonTheme = {
    color: "text.primary",
    bgcolor: "primary.light",

    '&:hover': {
        backgroundColor: 'primary.dark',
    },
}

const accordionTheme = {
    backgroundColor: "primary.light",
    marginBottom: 0.75,
};

const accordionTitleTheme = {
    '&:hover': {
        backgroundColor: 'primary.dark',
    },
}

const accordionDetailsTheme = {
    backgroundColor: "primary.main",
    border: 8,
    borderColor: "primary.dark",
    marginBottom: 1,
}

export default ImageLinkCard;