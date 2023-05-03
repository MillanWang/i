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
// import looking4WorkGif from "../images/Looking4Work.gif";
import contactEmail from "../images/ContactEmail.gif";

const contactNavGif = createNavGifTooltipProps(
    "Contact:",
    [
        "Email: real.millan.wang@gmail.com",
        "Phone: (613) 600-8604"
    ]
);

// const looking4WorkNavGif = createNavGifTooltipProps(
//     "Availability:",
//     [
//         "Full-time : 2023",
//         "Canadian Citizen & Willing to Relocate!"
//     ]
// );

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
            {/* // Not currently looking for work
            <NavBarImage
                sx={navBarButtonRowImageTheme}
                image={contactEmail}
                alt="Contact: real.millan.wang@gmail.com"
                tooltip={<NavGifTooltip {...contactNavGif} />}
            /> */}

            {sections.map((section) => (
                <Link href={"#" + section.url}  >
                    <Button children={section.title} sx={navButtonButtonRowTheme} />
                </Link>
            ))}

            {/* // Not currently looking for work
            <NavBarImage
                sx={navBarButtonRowImageTheme}
                image={looking4WorkGif}
                alt="Looking for work: Full Time 2023"
                tooltip={<NavGifTooltip {...looking4WorkNavGif} />}
            /> */}
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
                    {/* // Not currently looking for work
                    <NavBarImage
                        sx={navBarImageTheme}
                        image={looking4WorkGif}
                        alt="Looking for work: Full Time 2023"
                        tooltip={<NavGifTooltip {...looking4WorkNavGif} />}
                        />
                    */}
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





//TODO : Use screen size to trigger the reg buttons vs Menu Drawer




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

const navBarButtonRowImageTheme = {
    ...navBarImageTheme,
    display: { xs: 'none', xl: 'block' }, // Only show on big. Disappear before the button row
}



export default HeaderBar;