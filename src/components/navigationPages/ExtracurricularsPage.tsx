import * as React from 'react';
import { ImageLinkCardProps } from '../cards/ImageLinkCard';
import CardGrid from '../cards/CardGrid';

// Data
import ExtracurricularsData from '../../data/extracurricularsData.json';

// Images
import iMartialArts from "../../images/tornadoKick.gif";
import iSoundWaves from "../../images/soundWaves.gif";
import iZollySpin from "../../images/ZollySpin.gif";

const extracurriculars: ImageLinkCardProps[] = [
    {
        ...ExtracurricularsData.MartialArts, 
        img:iMartialArts
    },
    {
        ...ExtracurricularsData.Sounds, 
        img:iSoundWaves
    },
    {
        ...ExtracurricularsData.Video, 
        img:iZollySpin
    },
];

function ExtracurricularsPage() {
    return <CardGrid cardArray={extracurriculars} />
}

export default ExtracurricularsPage;