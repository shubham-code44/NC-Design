import React from 'react';
import {Grid,Box} from "@mui/material";
import MarqueeCard from "../component/MarqueeCard";
import RandomShapeFeed from "../component/RandomShapeFeed";


export default function About() {
    return (
        <Box  sx={{px: {lg: 12, sm: 3, xs: 3},py:6,background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"}}>
            <Grid container rowGap={3}>
                <Grid item xs={12}>
                    <Who/>
                </Grid>
                <Grid item xs={12}>
                    <RandomShapeFeed />
                </Grid>
            </Grid>
        </Box>
    )
};

function Who() {

    const arr={message1:" Thanks for dropping by, Neha Chhillar's profile. She crafts simple, effective designs that resonate with users and meet business goals. In high-pressure situations, her calm approach harmonizes with tight deadlines and complex team dynamics.",
        message2: "Outside of design, spending time with family fills her with joy and inspiration, which she carries into her work. This harmony of personal happiness and professional dedication nourishes her creativity. She loves to travel and learn about different cultures. It helps her bring new ideas and perspectives into her work.",
        message3: " Let’s use these inspirations to create designs that speak to everyone!"}

    return (
        <Grid container spacing={1} alignItems="start" justifyContent={{xs: 'center', md: 'space-between'}} sx={{height: 1}}>
            <Grid item xs={12} sx={{mt:6}}>
                <MarqueeCard data={arr} />
            </Grid>
        </Grid>
    );
}
