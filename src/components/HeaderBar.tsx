import * as React from 'react';
import {
    Box,
    Button,
    Link,
    Toolbar,
    Typography
} from '@mui/material';
import HtmlTooltip from '@mui/material/Tooltip';

//images
import titleGif from "../images/MillNameGlow.gif";
import looking4WorkGif from "../images/Looking4Work.gif";
import contactEmail from "../images/ContactEmail.gif";

const contactNavGif = createNavGifTooltipProps(
    "Contact:",
    [
        "Email: real.millan.wang@gmail.com",
        "Phone: (613) 600-8604"
    ]
)

const looking4WorkNavGif = createNavGifTooltipProps(
    "Availability:",
    [
        "Full-time : 2023",
        "Canadian Citizen & Willing to Relocate!"
    ]
)

//TODO: Figure out why Navigation toolbar images popout of the toolbars when the window is resized.

export type TitleUrlPair = {
    title: string,
    url: string
}

export function createTitleUrlPair(title: string, url: string): TitleUrlPair {
    return { title, url }
}

type HeaderBarProps = {
    sections: TitleUrlPair[],
}

const HeaderBar = ({ sections }: HeaderBarProps) => {
    return (
        <React.Fragment>
            {/* Title toolbar */}
            <Toolbar sx={titleToolbarTheme}>
                <Link href="#/">
                    <Box component="img" src={titleGif} alt="Millan Wang" sx={titleImageTheme} />
                </Link>
            </Toolbar>

            {/* Navigation toolbar */}
            {/* 
TODO: For smaller screens, this isn't gonna work out.
Should implement a drop down menu or sidebar type thing to navigate on mobile.
Also should reconsider the use of contact&looking4work gifs in mobile. Screen real estate will be limited

Maybe a grid for the buttons?
*/}
            <Toolbar component="nav" variant="dense" sx={navToolbarTheme}>
                <NavBarImage
                    image={contactEmail}
                    alt="Contact: real.millan.wang@gmail.com"
                    tooltip={<NavGifTooltip {...contactNavGif} />}
                />

                {/* Navigation buttons */}
                {sections.map((section) => (
                    <Link href={"#" + section.url} key={"NavLinkButton_" + section.title} >
                        <Button sx={navButtonTheme}>
                            {section.title}
                        </Button>
                    </Link>
                ))}

                <NavBarImage
                    image={looking4WorkGif}
                    alt="Looking for work: Full Time 2023"
                    tooltip={<NavGifTooltip {...looking4WorkNavGif} />}
                />
            </Toolbar>
        </React.Fragment>
    );
}

type NavGifTooltipProps = {
    header: string,
    descriptions: string[]
}

function createNavGifTooltipProps(header: string, descriptions: string[]): NavGifTooltipProps {
    return { header, descriptions }
}

const NavGifTooltip = ({ header, descriptions }: NavGifTooltipProps) => {
    return (
        <Box>
            <Typography variant="h5">
                {header}
            </Typography>

            {descriptions.map((text: string, i: number) => (
                <Typography key={"NavGifToolTipDescription_" + header + i++}>
                    {text}
                </Typography>
            ))}
        </Box>
    )
}

type NavBarImageProps = {
    tooltip: JSX.Element,
    image: string,
    alt: string,
};

const NavBarImage = ({ tooltip, image, alt }: NavBarImageProps) => {
    return (
        <HtmlTooltip title={tooltip}>
            <Box
                component="img"
                src={image}
                alt={alt}
                sx={navBarImageTheme}
            />
        </HtmlTooltip>
    )
}

/******************************
 * THEMES
 *****************************/

const titleToolbarTheme = {
    borderBottom: 2,
    borderColor: 'text.disabled',
    bgcolor: "primary.dark",
    justifyContent: "center"
}

const titleImageTheme = {
    maxHeight: 150,
    maxWidth: 950,
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'contain'
}

const navToolbarTheme = {
    justifyContent: 'center',
    borderBottom: 2,
    borderColor: 'text.disabled',
    bgcolor: "primary.dark",
    flex: 1,
    resizeMode: 'contain'
}

const navButtonTheme = {
    color: "primary.contrastText",
    bgcolor: "primary.main",
    margin: 0.5,
    resizeMode: 'contain',
    '&:hover': {
        backgroundColor: 'primary.light',
    },
}

const navBarImageTheme = {
    height: 50,
    width: 250,
}

export default HeaderBar;