import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Box } from '@mui/system';
import HtmlTooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

//images
import titleGif from "../images/MillNameGlow.gif";
import looking4WorkGif from "../images/Looking4Work.gif";
import contactEmail from "../images/ContactEmail.gif";


//TODO: Figure out why Navigation toolbar images popout of the toolbars when the window is resized.
//TODO: Consolidate repetitive sx tags into css classes

function HeaderBar(props) {
    return (
        <React.Fragment>
            {/* Title toolbar */}
            <Toolbar sx={{ borderBottom: 2, borderColor: 'text.disabled', bgcolor: "primary.dark", "justify-content": "center" }}>

                <Link to="/">
                    <Box
                        component="img"
                        sx={{
                            maxHeight: 150,
                            maxWidth: 950,
                            flex: 1,
                            width: "100%",
                            height: "100%",
                            resizeMode: 'contain'
                        }}
                        alt="Millan Wang"
                        src={titleGif}
                    />
                </Link>
            </Toolbar>

            {/* Navigation toolbar */}
            <Toolbar
                component="nav"
                variant="dense"
                sx={{
                    justifyContent: 'center',
                    borderBottom: 2,
                    borderColor: 'text.disabled',
                    bgcolor: "primary.dark",
                    flex: 1,
                    resizeMode: 'contain'
                }}>

                <NavBarImage
                    image={contactEmail}
                    alt="Contact: real.millan.wang@gmail.com"
                    tooltip={<ContactTooltip />} />


                {props.sections.map((section) => (
                    <Link to={section.url}>
                        <Button sx={{ color: "primary.contrastText", bgcolor: "primary.main", margin: 0.5, resizeMode: 'contain' }}>
                            {section.title}
                        </Button>
                    </Link>
                ))}

                <NavBarImage
                    image={looking4WorkGif}
                    alt="Looking for work: Summer 2022"
                    tooltip={<Looking4WorkTooltip />} />

            </Toolbar>
        </React.Fragment>
    );
}

function NavBarImage(props) {
    return (
        <HtmlTooltip title={props.tooltip}>
            <Box
                component="img"
                sx={{
                    height: 50,
                    width: 250,
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                }}
                alt={props.alt}
                src={props.image}
            />
        </HtmlTooltip>
    )
}

function ContactTooltip() {
    return (
        <Box>
            <Typography variant="h5">
                Contact:
            </Typography>
            <Typography>
                Email: real.millan.wang@gmail.com
            </Typography>
            <Typography>
                Phone: (613) 600-8604
            </Typography>
        </Box>
    )
}

function Looking4WorkTooltip() {
    return (
        <Box >
            <Typography variant="h5">
                Availability:
            </Typography>
            <Typography>
                May 2nd - August 26th 2022
            </Typography>
            <Typography>
                (17 Weeks || 4 Months)
            </Typography>
        </Box>
    )
}

export default HeaderBar;