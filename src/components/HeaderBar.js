import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const pageTitle = 'Millan Wang';

function HeaderBar(props) {
    return (
        <React.Fragment>
            {/* Top title toolbar */}
            <Toolbar sx={{ borderBottom: 2, borderColor: 'text.disabled', bgcolor: "primary.dark" }}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1, color: "primary.contrastText" }}
                >
                    {pageTitle}
                </Typography>
            </Toolbar>

            {/* Top navigation toolbar */}
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'center', borderBottom: 2, borderColor: 'text.disabled', bgcolor: "primary.dark" }}
            >
                {props.sections.map((section) => (
                    <Link to={section.url}>
                        <Button sx={{ color: "primary.contrastText", bgcolor: "primary.main", margin: 0.5 }}>
                            {section.title}
                        </Button>
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

export default HeaderBar;