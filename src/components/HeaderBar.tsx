import * as React from 'react';
import {
    Box,
    Button,
    Link,
    Drawer,
    Toolbar,
    Typography
} from '@mui/material';
import HtmlTooltip from '@mui/material/Tooltip';

//images
import titleGif from "../images/MillNameGlow.gif";
import contactEmail from "../images/ContactEmail.gif";

const contactNavGif = createNavGifTooltipProps(
    "Contact:",
    [
        "Email: real.millan.wang@gmail.com",
        "Phone: (613) 600-8604"
    ]
);



export type TitleUrlPair = {
    title: string,
    url: string
}

export function createTitleUrlPair(title: string, url: string): TitleUrlPair {
    //TODO To be deprecated in favour of just using JSON files directly for file access
    return { title, url }
}

type HeaderBarProps = {
    sections: TitleUrlPair[],
}

const HeaderBar = ({ sections }: HeaderBarProps) => {
    return (
        <React.Fragment>

            <TitleHeaderSection />

            {/* Navigation toolbar */}
            <Toolbar component="nav" variant="dense" sx={navToolbarTheme} >

                {/* Bigger screens that can show all without horizontal scroll */}
                <MenuButtonsRow sections={sections} />

                {/* Smaller Screens */}
                <MenuDrawer sections={sections} />

            </Toolbar>{/* End of Navigation toolbar */}
        </React.Fragment>
    );
}

function TitleHeaderSection() {
    return (
        <Toolbar sx={titleToolbarTheme}>
            <Link href="#/">
                <Box component="img" src={titleGif} alt="Millan Wang" sx={titleImageTheme} />
            </Link>
        </Toolbar>
    );
}



function MenuButtonsRow({ sections }: HeaderBarProps) {
    return (
        <React.Fragment>
            {sections.map((section) => (
                <Link href={"#" + section.url}  >
                    <Button children={section.title} sx={navButtonButtonRowTheme} />
                </Link>
            ))}
        </React.Fragment>
    );
}


function MenuDrawer({ sections }: HeaderBarProps) {
    const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
    return (
        <React.Fragment>
            <Button sx={menuButtonTheme} onClick={() => { setDrawerIsOpen(true) }}>
                MENU
                {/* TODO : Add buger icon here */}
            </Button>
            <Drawer
                id="MenuDrawer"
                anchor='top'
                open={drawerIsOpen}
                onClose={() => { setDrawerIsOpen(false) }}
            >
                <Box sx={menuDrawerTheme}>
                    <NavBarImage
                        sx={navBarImageTheme}
                        image={contactEmail}
                        alt="Contact: real.millan.wang@gmail.com"
                        tooltip={<NavGifTooltip {...contactNavGif} />}
                    />
                    {sections.map((section) => (
                        <Link href={"#" + section.url} onClick={() => { setDrawerIsOpen(false) }}>
                            <Button sx={navButtonTheme}>
                                {section.title}
                            </Button>
                        </Link>
                    ))}
                </Box>
            </Drawer>
        </React.Fragment>

    );
}


type NavGifTooltipProps = {
    header: string,
    descriptions: string[]
}

function createNavGifTooltipProps(header: string, descriptions: string[]): NavGifTooltipProps {
    //TODO To be deprecated in favour of just using JSON files directly for file access
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

            {/* TODO : Add something to pop a modal dialog that has a form to API to an email sender to me. Bigger goal that might take some bigger time */}
        </Box>
    )
}

type NavBarImageProps = {
    tooltip: JSX.Element,
    image: string,
    alt: string,
    sx: Object,
};

const NavBarImage = ({ tooltip, image, alt, sx }: NavBarImageProps) => {
    return (
        <HtmlTooltip title={tooltip}>
            <Box
                component="img"
                src={image}
                alt={alt}
                sx={sx}
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
    justifyContent: "center",
}

const titleImageTheme = {
    maxHeight: 150,
    maxWidth: 950,
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
}

const navToolbarTheme = {
    justifyContent: 'center',
    borderBottom: 2,
    borderColor: 'text.disabled',
    bgcolor: "primary.dark",
    flex: 1,
    resizeMode: 'contain',
}

const navButtonTheme = {
    color: "primary.contrastText",
    bgcolor: "primary.main",
    margin: 0.4,
    width: 170,
    resizeMode: 'contain',
    '&:hover': {
        backgroundColor: 'primary.light',
    },
}

const navButtonButtonRowTheme = {
    ...navButtonTheme,
    display: { xs: "none", md: "block" }
}

const menuButtonTheme = {
    ...navButtonTheme,
    display: { xs: 'block', md: 'none' }, //Hide on big screen. Only show on small
};

const menuDrawerTheme = {
    backgroundColor: "primary.dark",
    display: "grid",
    justifyItems: "center",

}

const navBarImageTheme = {
    height: 50,
}



export default HeaderBar;