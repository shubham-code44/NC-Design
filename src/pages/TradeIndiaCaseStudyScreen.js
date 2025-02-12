import React from "react";
import {Box, Grid, Link, Stack, Typography, Card, CardHeader} from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import caseImage2 from "../images/caseStudy3/caseImage2.png"
import caseImage3 from "../images/caseStudy3/caseImage3.png"
import caseImage4 from "../images/caseStudy3/caseImage4.png"
import caseImage5 from "../images/caseStudy3/caseImage5.png"
import caseImage7 from "../images/caseStudy3/caseImage7.png"
import caseImage8 from "../images/caseStudy3/caseImage8.png"
import {PATH_DASHBOARD} from "../routes/paths";
import caseImage11 from "../images/caseStudy1/caseImage11.png";
import {styled} from "@mui/material/styles";
import homeCard2 from "../images/home/homeCard2.png";
import {useNavigate} from "react-router-dom";
import DirectionView from "../component/DirectionView";


const StyledGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))"
}));

const StyledCardGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '30px',
    gridTemplateColumns: "repeat(auto-fit, minmax(310px,1fr))"
}));


export default function TradeIndiaCaseStudyScreen() {
    const navigate = useNavigate()
    const SET = [
        {title: "The Vibe", description: "Vibrant, friendly"},
        {title: "Mindset", description: "Credibility, Building Trust"},
        {title: "Focus", description: "Accessibility + Business Understanding (Language selection feature)"},
        {title: "Aesthetics", description: "Multi Color Theme (Primary, Secondary, Tertiary)"}]

    const connect = "Having an Idea? Let's Catch up"

    const STATEMENT = [
        {
            title: "Font Hierarchy :",
            description: "The page lacks a clear font hierarchy, which is essential for guiding the users' attention through different sections effectively. "
        },
        {
            title: "Theme Color Consistency : ",
            description: "There is no consistency in theme colors; multiple shades of primary red are used, which can be visually jarring and detract from a unified brand identity."
        },
        {
            title: "Content Overload :",
            description: "The page contains excessive content that revolves around the main theme, distracting users and hindering focus on key information."
        },
        {
            title: "Content Density and Attention Grabbing : ",
            description: " Given that research suggests users spend only about 3 seconds per page, the content journey should be concise, making quick and eye-catching impressions to ensure users grasp the essential information quickly."
        },
        {
            title: "Jargon and Clarity : ",
            description: "The Voice of Change section uses language that is not relatable to laypersons; it is confusing and difficult to understand, which could alienate users unfamiliar with industry-specific jargon."
        },
        {
            title: "Footer Consistency : ",
            description: " The footer section needs to be consistent with the overall website design. This consistency helps improve user navigation and plays a crucial role in SEO ranking."
        },
        {
            title: "Display of Company Statistics : ",
            description: "From a sales perspective, users are interested in the company’s position in the market. Displaying statistics such as the number of buyers, sellers, and products prominently can provide sufficient proof to build trust."
        },
    ]

    const STATEMENT2 = [
        {
            title: "Keep the Design Similar : ",
            description: "The whole website, including the bottom part (footer), should look the same. This helps users move around the site easily and is good for search engine ranking."
        },
        {
            title: "Improve Infographics : ",
            description: "Users like nice-looking pictures and graphics. We should use clearer and sharper images to make sure they catch the eye and look modern."
        },
        {
            title: "Less Content, More Impact : ",
            description: "There's too much text. We should cut it down and only keep what's really important. This way, users can quickly get the info they need without getting overwhelmed."
        },
        {
            title: "Uniform Style : ",
            description: "Right now, there are too many different styles of fonts and reds. Sticking to one font and one shade of red will make everything look smoother and more professional."
        },
    ]

    const STATEMENT3 = [
        {title: "Both utilize About Us sections for engagement, highlighting key statistics and their vision."},
        {title: "They focus on concise, impactful content for quick value proposition communication."},
        {title: "High-quality visuals and consistent branding improve trust and recognition."},
        {title: "Structured website layouts ensure easy navigation and accessibility, accommodating global users"},
        {title: "Alibaba is noted for its worldwide presence with multilingual and localized services, while IndiaMART showcases its extensive network within India."},
        {title: " Each employs brand storytelling, detailing their origins, growth, and values to connect with their audience."},
    ]

    const CARD_CONTENT = [
        {
            id: 1,
            title1: "Understanding / Research / Product Design / Web & App",
            title2: "Building UX in HR & People Management",
            title3: "@TexlaCulture / SaaS Product",
            title4: "Goal is to Precisely build solutions not just HR management",
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
    ]


    return (
        <Box sx={{mt: 10, px: {lg: 12, sm: 3, xs: 2}, backgroundColor: "primary.softer"}}>
            <Grid container gap={8} sx={{justifyContent: {md: "", xs: "center"}, alignItems: {md: "", xs: "center"}}}>
                <Grid item xs={12} sx={{borderRadius: 4, p: 4, mt: 6, backgroundColor: "error.lighter"}}>
                    <DirectionView>
                        <Stack spacing={2} direction={{md: "row", xs: "column"}} justifyContent="space-between"
                               alignItems="start">
                            <Box/>
                            <Box component="img" src={caseImage8} alt="Responsive"
                                 sx={{width: {sm: '16%', xs: "100%"}, height: 'auto'}}/>
                            <Box component="img" src={caseImage7} alt="Responsive"
                                 sx={{width: {sm: '19%', xs: "100%"}, height: 'auto'}}/>
                        </Stack>
                        <Stack spacing={2} justifyContent={{md: "center", xs: "start"}}
                               alignItems={{md: "center", xs: "start"}} sx={{mt: 5}}>
                            <Typography variant="h5"
                                        sx={{fontSize: {md: "16px", xs: "12px"}, fontWeight: 700, color: "#212B36"}}>
                                Project: Redesign Trade India’s About us page
                            </Typography>
                            <Typography variant="h5"
                                        sx={{fontSize: {md: "16px", xs: "12px"}, fontWeight: 700, color: "#212B36"}}>
                                Role: Brand Research / UI / UX
                            </Typography>
                            <Typography variant="h5"
                                        sx={{fontSize: {md: "16px", xs: "12px"}, fontWeight: 700, color: "#212B36"}}>
                                Spent Hours: 6h
                            </Typography>
                        </Stack>
                    </DirectionView>
                </Grid>

                <Stack direction="row" justifyContent="center" alignItems="center" sx={{mx: {md: 15, xs: 0}}}>
                    <DirectionView>
                        <Typography variant="subtitle2" sx={{
                            textAlign: "center",
                            fontWeight: 600,
                            color: "secondary.main",
                            fontSize: {md: "16px", xs: "14px"}
                        }}>
                            After analyzing Trade India’s website and the overall vibe and voice of the brand, I
                            realized the nature of the business needs more content, having multiple type of users
                            (manufacturers, Suppliers, Buyers), multiple product categories that need user’s trust to
                            initiate transactions.
                        </Typography>
                    </DirectionView>
                </Stack>

                <Grid item xs={12} sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "#EFF6E8",
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <DirectionView>
                        <StyledGrid>
                            {SET?.map((item, index) => (
                                <Stack direction="column" spacing={1}>
                                    <Typography variant="h5" sx={{
                                        color: "primary.darker",
                                        fontWeight: 500
                                    }}>{item?.title}</Typography>
                                    <Typography variant="body2" sx={{
                                        mb: 3,
                                        fontWeight: 600,
                                        color: "secondary.main",
                                        fontSize: {md: "14px", xs: "12px"}
                                    }}>
                                        {item?.description}
                                    </Typography>
                                </Stack>
                            ))}
                        </StyledGrid>
                    </DirectionView>
                </Grid>


                <Grid item xs={12}>
                    <StyledCardGrid>
                        <Card sx={{
                            borderRadius: 2,
                            border: '1px solid',
                            borderColor: 'grey.300',
                            '.hover': {boxShadow: ' 0 6px 10px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.22)'}}}>
                            <CardHeader
                                sx={{pb: 2, backgroundColor: "primary.soft"}}
                                title={<Typography variant="h5" sx={{fontWeight: 600, color: "primary.darker"}}>Problem
                                    Statement</Typography>}/>
                            <Stack spacing={2} justifyContent="start" alignItems="start">
                                <Stack spacing={2} sx={{p: 2}}>
                                    {STATEMENT?.map((item) => (
                                        <Typography variant="body1" sx={{
                                            fontWeight: 600,
                                            color: "#637381",
                                            fontSize: "13px"
                                        }}> {item?.title} <Typography component="span" variant="body2" sx={{
                                            ml: 0.5, fontSize: "13px", fontWeight: 600, color: "#212B36"
                                        }}>{item?.description}</Typography></Typography>))}
                                </Stack>
                            </Stack>
                        </Card>

                        <Card sx={{
                            borderRadius: 2,
                            border: '1px solid',
                            borderColor: 'grey.300',
                            '.hover': {boxShadow: ' 0 6px 10px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.22)'}}}>
                            <CardHeader sx={{pb: 2, backgroundColor: "primary.soft"}}
                                        title={<Typography variant="h5" sx={{fontWeight: 600, color: "primary.darker"}}>Key
                                            Insights</Typography>}/>
                            <Stack spacing={2} justifyContent="start" alignItems="start">
                                <Stack spacing={2} sx={{p: 2}}>
                                    {STATEMENT2?.map((item) => (
                                        <Typography variant="body1" sx={{
                                            fontWeight: 600,
                                            color: "#454F5B",
                                            fontSize: "13px"
                                        }}> {item?.title} <Typography component="span" variant="body2" sx={{
                                            ml: 0.5, fontSize: "13px", fontWeight: 600, color: "#212B36"
                                        }}>{item?.description}</Typography></Typography>
                                    ))}
                                </Stack>
                            </Stack>
                        </Card>

                        <Card sx={{
                            borderRadius: 2,
                            border: '1px solid',
                            borderColor: 'grey.300',
                            '.hover': {boxShadow: ' 0 6px 10px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.22)'}}}>
                            <CardHeader sx={{pb: 2, backgroundColor: "primary.soft"}}
                                        title={
                                            <Stack>
                                                <Typography variant="h5"
                                                            sx={{fontWeight: 600, color: "primary.darker"}}>Competitors
                                                    Analysis </Typography>
                                                <Typography variant="h6">I studied two major competitors - Alibaba
                                                    (globally spreaded) IndiaMart (Indian Market) </Typography>
                                            </Stack>}/>
                            <Stack spacing={2} justifyContent="start" alignItems="start">
                                <Stack spacing={2} sx={{p: 2}}>
                                    {STATEMENT3?.map((item) => (
                                        <Typography variant="body1" sx={{
                                            fontWeight: 600,
                                            color: "#212B36",
                                            fontSize: "13px"
                                        }}> • {item?.title} </Typography>
                                    ))}
                                </Stack>
                            </Stack>
                        </Card>
                    </StyledCardGrid>
                </Grid>

                <Grid item xs={12}>
                    <StyledCardGrid>
                        <DirectionView>
                            <Box component="img" src={caseImage2} alt="Responsive"
                                 sx={{width: '100%', height: '100%'}}/>
                        </DirectionView>
                        <DirectionView>
                            <Typography variant="h5"
                                        sx={{fontWeight: 600, color: "#212B36", mb: 2, fontFamily: "Poppins"}}>Ideology
                                sketches</Typography>
                            <Box component="img" src={caseImage3} alt="Responsive"
                                 sx={{width: '100%', height: '100%'}}/>
                        </DirectionView>
                    </StyledCardGrid>
                </Grid>

                <Grid item xs={12} mt={5}>
                    <DirectionView>
                        <CardHeader title={<Typography variant="h4">High Fidelity Design</Typography>}
                                    sx={{pb: 2, backgroundColor: "lightGrey"}}/>
                        <Box component="img" src={caseImage4} alt="Responsive" sx={{width: '100%', height: '70%'}}/>
                    </DirectionView>
                    <DirectionView>
                        <Box component="img" src={caseImage5} alt="Responsive" sx={{width: '100%', height: '70%'}}/>
                    </DirectionView>
                </Grid>

                <Grid item xs={12}>
                    <StyledCardGrid>
                        {CARD_CONTENT?.map((data) => (
                            <Card onClick={() => navigate(data?.case)} spacing={3} sx={{
                                p: 3, borderRadius: 2, border: '1px solid', borderColor: 'grey.300',
                                '.hover': {boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'},
                                cursor: "pointer", backgroundColor: data?.bgcolor}}>
                                <Stack spacing={2}>
                                    <Typography sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        color: "#919EAB"
                                    }}>{data?.title1}</Typography>
                                    <Box>
                                        <Typography variant="h4" sx={{
                                            color: data?.textcolor,
                                            fontWeight: 700,
                                        }}>{data?.title2}</Typography>
                                        <Typography sx={{
                                            mt: 0.5,
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            color: "#454F5B"
                                        }}>{data?.title3}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: "#212B36"
                                        }}>{data?.title4}</Typography>
                                        {data?.id === 3 && <Typography variant="subtitle2" sx={{
                                            fontSize: "16px", fontWeight: 500, color: "#212B36"
                                        }}>related tasks.</Typography>}
                                        {data?.id === 1 && <Typography variant="subtitle2" sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: "#212B36"
                                        }}>Software.</Typography>}
                                    </Box>
                                    <Stack direction="row" justifyContent="end" alignItems="center" gap={1}
                                           sx={{mt: 4}}>
                                        <Typography variant="subtitle1" sx={{
                                            '&:hover': {
                                                textDecorationLine: "underline",
                                                textDecorationThickness: "4px",
                                                textDecorationColor: "#FFA500"
                                            }, fontSize: "16px", fontWeight: 500, color: "#212B36"
                                        }}>Case Study </Typography>
                                        <TrendingFlatIcon/>
                                    </Stack>
                                </Stack>
                            </Card>
                        ))}
                    </StyledCardGrid>
                </Grid>
                <Grid xs={12} sx={{mb: 2}}>
                    <Link href='mailto:nehachhillar07@gmail.com' style={{textDecoration: "none"}}>
                        <Stack direction={{md: "row", xs: "column"}} justifyContent="space-around" alignItems="center"
                               spacing={4} sx={{py: 2, backgroundColor: "#FFFEE0"}}>
                            <Box component="img" src={caseImage11} alt="Responsive"
                                 sx={{width: {md: '10%', xs: "40%"}, height: {md: '10%', xs: "40%"}}}/>
                            <Stack direction="row" justifyContent="end" alignItems="center" gap={1}>
                                <Typography variant="h2" sx={{
                                    '&:hover': {
                                        textDecorationLine: "underline",
                                        textDecorationThickness: "4px",
                                        textDecorationColor: "#FFA500"
                                    },
                                    textAlign: "center",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    color: "#212B36"
                                }}>{connect}</Typography>
                                <TrendingFlatIcon/>
                            </Stack>
                        </Stack>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}