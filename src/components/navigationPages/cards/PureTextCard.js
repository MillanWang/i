import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export function createPureTextCard(title, subtitles, descriptions) {
    return { title, subtitles, descriptions }
};


// TODO: Consolidate this into a usecase of ImageLinkCard so that only one card is needed to address all needs!!!!!



export default function PureTextCard(props) {
    return (
        <Card
            raised
            sx={{
                maxWidth: props.maxWidth,
                margin: 1,
                height: "fit-content",
                bgcolor: "primary.main"
            }}
        >
            <CardContent>
                <Typography variant="h5">
                    {props.pureTextCardProps.title}
                </Typography>

                {props.pureTextCardProps.subtitles.map((subtitle) => (
                    <Typography variant="body2" color="text.secondary" >
                        {subtitle}
                    </Typography>
                ))}

                <Divider sx={{ marginBottom: 1, borderBottomWidth: 3, borderColor: "text.disabled" }} />
                <div style={{ textAlign: props.bodyTextAlignment }}>
                    {props.pureTextCardProps.descriptions.map((description) => (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ marginBottom: 1.5 }}
                        >
                            {description}
                        </Typography>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
