import React from "react"
import {Box, Card, Grid, Stack, Typography} from "@mui/material";
import AvatarHome from "../images/home/AvatarHome.gif"
import homeCard1 from "../images/home/homeCard1.png"
import homeCard2 from "../images/home/homeCard2.png"
import homeCard3 from "../images/home/homeCard3.png"
import {PATH_DASHBOARD} from "../routes/paths";
import {useNavigate} from "react-router-dom";
import {styled} from "@mui/material/styles";
import DirectionView from "../component/DirectionView";

const StyledGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '66px',
    paddingBottom:"20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(310px,1fr))",
}));

export default function Home() {

    const CARD_CONTENT = [
        {
            id: 1,
            photo: homeCard1,
            title1: "Understanding / Research / Product Design / Web & App",
            title2: "Building UX in HR & People Management",
            title3: "@TexlaCulture / SaaS Product",
            title4: "Goal is to Precisely build solutions not just HR management software",
            case: PATH_DASHBOARD.caseStudy1,
            textcolor: "#365B23",
            bgcolor: "#EFF6E8"
        },
        {
            id: 2,
            photo: homeCard2,
            title1: "Research / Web Design / Branding",
            title2: "Website Design",
            title3: "@TexlaCulture / SaaS Product",
            title4: "Making a website go live in just one week was an exceptional challenge.",
            case: PATH_DASHBOARD.caseStudy2,
            textcolor: "#1939B7",
            bgcolor: "#EFF3FF"
        },
        {
            id: 3,
            photo: homeCard3,
            title1: "Understanding / User Interface ",
            title2: "About Us Page Redesign to gain user’s trust & confidence",
            title3: "@Trade India / B2B Experience",
            title4: "Simplified employee engagement and easy access of employment related tasks.",
            case: PATH_DASHBOARD.caseStudy3,
            textcolor: "#E11B22",
            bgcolor: "#FDEFEF"
        },
    ]
    return (
        <Box sx={{p: 2, mt: 5, backgroundColor: "primary.softer", px: {lg: 12, sm: 3, xs: 2}}}>
            <Stack justifyContent="center" alignItems="center">
                <DirectionView>
                    <img src={AvatarHome} alt="homeAvatar" height={350} width={350}/>
                </DirectionView>
                <DirectionView>
                    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{mt: -5}}>
                        <Typography variant='h2' color="primary.darker" sx={{fontSize: {md: "35px", xs: "25px"},}}>Neha Chhillar</Typography>
                        <Typography variant='h5' color="primary.dark" sx={{fontSize: {md: "20px", xs: "16px"},}}>UI/UX DESIGNER</Typography>
                        <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},}}>Crafting designs
                            where <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},}} component="span"> utility </Typography>meets <Typography
                                variant="subtitle1" component="span" sx={{color: "primary.darker", textAlign: "center", fontSize: {md: "16px", xs: "14px"}, fontWeight: 500}}>aesthetic</Typography>, balancing user experience
                            with business requirements.</Typography>
                    </Stack>
                </DirectionView>
            </Stack>
            <Box>
                <DirectionView>
                    <StyledGrid>
                        {CARD_CONTENT?.map((item, index) => (
                            <HomeCard data={item} index={index}/>
                        ))}
                    </StyledGrid>
                </DirectionView>
            </Box>
        </Box>
    )
}


function HomeCard({data, index}) {
    const navigate = useNavigate()

    return (

        <Card onClick={() => navigate(data?.case)} sx={{
            borderRadius: 4, mt: 4, border: '1px solid',
            borderColor: 'grey.300',
            boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            '&:hover': {
                boxShadow: ' 0 6px 10px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.22)',
                background: 'linear-gradient(to bottom, #8697C4, #ffffff)'},
            transition: 'background 0.3s ease',
            cursor: "pointer", backgroundColor: data?.bgcolor
        }}>
            <Grid container>
                <Grid item xs={12}>
                    <Box component="img" src={data?.photo} alt="Responsive" sx={{width: "100%", height: '100%', backgroundColor: "#FFFFFF"}} />
                </Grid>
                <Grid item xs={12}>
                        <Stack spacing={{md: 4, xs: 2}} sx={{px: 4, py: 2}}>
                            <Typography variant="subtitle1" sx={{}}>{data?.title1}</Typography>
                            <Box>
                                <Typography variant="h6" sx={{color: data?.textcolor, fontSize: {md: "19px", xs: "17px"}}}>{data?.title2}</Typography>
                                <Typography variant="h6" sx={{fontSize: "14px", color: "#454F5B"}}>{data?.title3}</Typography>
                            </Box>
                            <Typography variant="h6" sx={{fontSize: "18px", color: "#212B36"}}>{data?.title4}</Typography>
                        </Stack>
                </Grid>
            </Grid>
        </Card>
    )
}