import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export function createPureTextCard(title, subtitles, descriptions) {
    return { title, subtitles, descriptions }
};

export default function PureTextCard(props) {
    return (
        <Card raised
            sx={{
                maxWidth: props.maxWidth,
                margin: 1,
                height: "fit-content"
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

                <Divider sx={{ marginBottom: 2, borderBottomWidth: 3 }} ></Divider>

                {props.pureTextCardProps.descriptions.map((description) => (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {description}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    )
}
