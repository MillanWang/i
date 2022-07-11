import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageLinkCard, {
    ImageLinkCardProps
} from './ImageLinkCard';

type CardGridProps = {
    cardArray: ImageLinkCardProps[]
}

//console.log(JSON.stringify()); TODO Get the raw json strings

const CardGrid = ({ cardArray }: CardGridProps) => {
    return (
        <Box sx={gridBoxTheme}>
            <Grid
                spacing={1}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="baseline"
            >
                {cardArray.map((currentCardProps: ImageLinkCardProps, i: number) => {
                    return (
                        <Grid item xs key={currentCardProps.title + "card_" + i++} id={currentCardProps.title + "card_" + i++}>
                            <ImageLinkCard
                                {...currentCardProps}
                                //Accordions help with keeping every card the same size when closed
                                useAccordionDescription
                                // In the grid, it feels wierd if the cards resize when the window does. Keep a constant width
                                width={400}
                                imageHeightLimit={200}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

/******************************
 * THEMES
 *****************************/

const gridBoxTheme = {
    flexGrow: 1,
    width: "90%",
}

export default CardGrid;