import * as React from 'react';
import {
    Grid,
    Stack,
    Typography
} from '@mui/material';

import ImageLinkCard, {
    ImageLinkCardProps
} from '../cards/ImageLinkCard';

const COLUMN_WIDTH: number = 500;

export type TwoColumnCardGridProps = {
    leftColumnStackHeader: string,
    leftColumnCardProps: ImageLinkCardProps[],
    rightColumnStackHeader: string,
    rightColumnCardProps: ImageLinkCardProps[],
}

function TwoColumnCardGrid({ leftColumnStackHeader, leftColumnCardProps, rightColumnStackHeader, rightColumnCardProps }: TwoColumnCardGridProps) {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={3}>

            {/* Left Column*/}
            <Grid item xs="auto">
                <CardStack stackHeader={leftColumnStackHeader} cardPropsArray={leftColumnCardProps} />
            </Grid>

            {/* Right Column */}
            <Grid item xs="auto">
                <CardStack stackHeader={rightColumnStackHeader} cardPropsArray={rightColumnCardProps} />
            </Grid>

        </Grid>
    );
}

type CardStackProps = {
    stackHeader: string,
    cardPropsArray: ImageLinkCardProps[]
}

function CardStack({ stackHeader, cardPropsArray }: CardStackProps) {
    return (
        <Stack spacing={2} width={COLUMN_WIDTH}>
            <StackHeader title={stackHeader} />

            {cardPropsArray.map((cardProps: ImageLinkCardProps, i: number) => (
                <ImageLinkCard {...cardProps} width={500} key={stackHeader + "_CardStack_" + cardProps.title + i++} />
            ))}
        </Stack>
    );
};

type StackHeaderProps = {
    title: string,
};

function StackHeader({ title }: StackHeaderProps) {
    return (
        <Typography variant="h5" sx={t_stackHeader}>
            {title}
        </Typography>
    )
};

/******************************
 * THEMES
 *****************************/

const t_stackHeader = {
    color: "text.primary",
    textDecoration: "underline"
};

export default TwoColumnCardGrid;