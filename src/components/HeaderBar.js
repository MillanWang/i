import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Box } from '@mui/system';

import titleGif from "../images/MillNameGlow.gif";
import looking4WorkGif from "../images/Looking4Work.gif";

//TODO: Figure out why images popout of the toolbars when the window is resized
//TODO: Consolidate repetitive sx tags into css classes


function HeaderBar(props) {
    return (
        <React.Fragment>
            {/* Top title toolbar */}
            <Toolbar sx={{ borderBottom: 2, borderColor: 'text.disabled', bgcolor: "primary.dark", "justify-content": "center" }}>

                <Link to="/">
                    <Box
                        component="img"
                        sx={{
                            // height: 150,
                            // width: 950,
                            maxHeight: 150,//{ xs: 233, md: 167 },
                            maxWidth: 950,//{ xs: 350, md: 250 },
                        }}
                        alt="Millan Wang"
                        src={titleGif}
                    />
                </Link>
            </Toolbar>

            {/* Top navigation toolbar */}
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'center', borderBottom: 2, borderColor: 'text.disabled', bgcolor: "primary.dark" }}
            >
                <Looking4WorkImage />
                {props.sections.map((section) => (
                    <Link to={section.url}>
                        <Button sx={{ color: "primary.contrastText", bgcolor: "primary.main", margin: 0.5 }}>
                            {section.title}
                        </Button>
                    </Link>
                ))}
                <Looking4WorkImage />
            </Toolbar>
        </React.Fragment>
    );
}

function Looking4WorkImage() {
    return (
        <Box
            component="img"
            sx={{
                height: 50,
                width: 200,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
            }}
            alt="Looking for work: Summer 2022"
            src={looking4WorkGif}
        />
    )
}

export default HeaderBar;