import React from "react";
import {Box, Card, Grid, Link, Stack, Typography} from "@mui/material";
import caseImage1 from "../images/caseStudy2/caseImage1.png";
import caseImage2 from "../images/caseStudy2/caseImage2.png";
import caseImage3 from "../images/caseStudy2/caseImage3.png";
import caseImage4 from "../images/caseStudy2/caseImage4.png";
import caseImage5 from "../images/caseStudy2/caseImage5.png";
import caseImage6 from "../images/caseStudy2/caseImage6.png";
import caseImage7 from "../images/caseStudy2/caseImage7.png";
import caseImage8 from "../images/caseStudy2/caseImage8.png";
import caseImage9 from "../images/caseStudy2/caseImage9.png";
import caseImage10 from "../images/caseStudy2/caseImage10.png";
import caseImage11 from "../images/caseStudy2/caseImage11.png";
import caseImage12 from "../images/caseStudy2/caseImage12.png";
import caseImage13 from "../images/caseStudy2/caseImage13.png";
import caseImage14 from "../images/caseStudy2/caseImage14.png";
import caseImage15 from "../images/caseStudy2/caseImage15.png";
import caseImage16 from "../images/caseStudy2/caseImage16.png";
import caseImage17 from "../images/caseStudy2/caseImage17.png";
import caseImage18 from "../images/caseStudy2/caseImage18.png";
import caseImage19 from "../images/caseStudy2/caseImage19.png";
import caseImage20 from "../images/caseStudy2/caseImage20.png";
import {styled} from "@mui/material/styles";
import ReactPlayer from "react-player";
import Web from "../images/video/web.mov"
import mobile from "../images/video/mobile.mp4"
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import {PATH_DASHBOARD} from "../routes/paths";
import homeCard2 from "../images/home/homeCard2.png";
import {useNavigate} from "react-router-dom";
import DirectionView from "../component/DirectionView";


const StyledGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '20px',
    mt: 5,
    gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))"
}));

const StyledCardGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '30px',
    gridTemplateColumns: "repeat(auto-fit, minmax(310px,1fr))"
}));


export default function PeopleManagementCaseStudyScreen() {
    const navigate = useNavigate()
    const STATEMENT1 = [
        {title: "Type", description: "SaaS, Web & App Product"},
        {title: "Sector", description: "HR Technology"},
        {title: "Responsibility", description: "Brand / Design System / Product"},
        {title: "TimeLine", description: "18 Months"},
    ]
    const STATEMENT2 = ["Research", "Problem", "Approach", "Architecture", "LoFi Wireframes",
        "User Testing"]

    const STATEMENT3 = [
        {title: "Serviceable Obtainable Marget", topic: "1.1 Million Companies", count: "241.1 Million"},
        {title: "Serviceable Available Marget", topic: "1.6 Million Companies", count: "344.45 Million"},
        {title: "Total Available Marget", topic: "300 Million Companies", count: "24.25 Billion"},
    ]

    const STATEMENT4 = [
        {
            title: "Learnability",
            topic: "Users found it easy to accomplish the basic functionality of the product. Users with experience using complex tools had a strong positive view of the product."
        },
        {title: "Efficiency", topic: "20% of users had difficulty memorizing the product flow."},
        {title: "Memorability", topic: "Users were able to perform actions after understanding the product."},
        {
            title: "Errors",
            topic: "After gaining understanding, 8% of users still made errors while performing certain actions."
        },
        {
            title: "Satisfaction",
            topic: "Users were satisfied with how quickly tasks could be completed, experiencing no frustration."
        },
    ]

    const STATEMENT5 = [
        {
            title: "Challenge",
            topic1: "A key challenge in this project was prioritizing product development while ensuring designs remained aligned with user experience. ",
            topic2: " Managing multiple modules and user flows simultaneously added complexity.",
            topic3: "Additionally, overseeing the development process to ensure adherence to the discussed flow and features was demanding."
        },
        {
            title: "Take away",
            topic1: "I learned the importance of thoroughly engaging with users during testing to gather valuable insights.",
            topic2: "Conducting user testing before development is crucial, as it significantly reduces the need for extensive iterations post-development.",
            topic3: "This approach ensures a more efficient and user-centered development process."
        }
    ]

    const CARD_CONTENT = [
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
            title1: "Understanding / User Interface ",
            title2: "About Us Page Redesign to gain user’s trust & confidence.",
            title3: "@Trade India / B2B Experience",
            title4: "Simplified employee engagement and easy access of employment",
            case: PATH_DASHBOARD.caseStudy3,
            textcolor: "#E11B22",
            bgcolor: "#FDEFEF"
        },
    ]

    const connect = "Having an Idea? Let's Catch up"

    return (
            <Box sx={{px: {lg: 12, sm: 3, xs: 2}, pt: 6, mt: 7, backgroundColor: "primary.softer"}}>
                <Grid container gap={3} alignItems="center" justifyContent="center">
                    <Grid xs={12} sx={{
                        borderRadius: 4,
                        border: "1px solid #D3EEB3",
                        backgroundColor: "rgba(234, 246, 216, 0.60)",
                        mt: 5,
                        py: 5,
                        px: {lg: 25, xs: 3}}}>
                        <DirectionView>
                            <Stack justifyContent="center" alignItems="center" sx={{p: 2}}>
                                <Box component="img" src={caseImage1} alt="Responsive"
                                     sx={{width: "100%", height: 'auto'}}/>
                            </Stack>

                            <StyledGrid>
                                {STATEMENT1?.map((item) => (
                                    <Stack spacing={0.5} alignItems={{md: "center", xs: "start"}}
                                           justifyConntent={{md: "center", xs: "start"}}>
                                        <Typography variant="body1" sx={{
                                            color: "#454F5B",
                                            fontSize: {md: "14px", xs: "16px"}
                                        }}>{item?.title}</Typography>
                                        <Typography variant="subtitle2" sx={{
                                            color: "#1B4111",
                                            fontSize: {md: "14px", xs: "16px"}
                                        }}>{item?.description}</Typography>
                                    </Stack>
                                ))}
                            </StyledGrid>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12} sx={{
                        borderRadius: 3,
                        border: "1px solid #D3EEB3",
                        backgroundColor: "rgba(234, 246, 216, 0.60)",
                        mt: 5,
                        py: 5,
                        px: {lg: 10, xs: 3}}}>
                        <DirectionView>
                            <StyledGrid>
                                {STATEMENT2?.map((item, index) => (
                                    <Typography variant="subtitle2" sx={{
                                        borderRadius: 1,
                                        p: 1,
                                        backgroundColor: "#EAF6D8",
                                        border: "0.5px solid #D3EEB3",
                                        textAlign: "center",
                                        fontSize: {md: "18px", xs: "14px"}
                                    }}>{index + 1}. {item}</Typography>
                                ))}
                            </StyledGrid>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12} sx={{mt:3}}>
                        <DirectionView>
                            <Stack spacing={2} justifyContent="start" alignItems="start">
                                <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Building Solutions, Not just HR Management Software</Typography>
                                <Box>
                                    <Typography variant="h6" sx={{color: "#454F5B", fontSize: {md: "16px", xs: "14px"}}}>Brief</Typography>
                                    <Typography variant="subtitle2" sx={{color: "#212B36",fontSize: {md: "16px", xs: "14px"}}}>
                                        TexlaCulture transformed the HR tech landscape with a complete DIY tool
                                        featuring easy policy configuration and a simpler design. Utilising the latest
                                        technology, the product enhances HR and employee engagement through personalised
                                        branding and themes. Within the first year, this customised, fully-fledged
                                        solution successfully acquired 12 customers and over 8,000 users globally.
                                    </Typography>
                                </Box>
                            </Stack>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt:4}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{color:"primary.darker", fontSize: {md: "20px", xs: "17px"}}}>Problem Statement</Typography>
                            <Stack spacing={2} sx={{mt:2}}>
                                <Typography variant="subtitle2" sx={{ color: "#212B36", fontSize: {md: "16px", xs: "14px"}}}> • Common
                                    issues include <Typography component="span" variant="subtitle2" sx={{backgroundColor: "#FFFEE0",fontSize: {md: "16px", xs: "14px"}, color: "#212B36"
                                    }}> Complex navigation </Typography> and <Typography component="span" variant="subtitle2" sx={{
                                        backgroundColor: "#FFFEE0", fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}> technical jargon unrelated to HR tasks. </Typography> </Typography>
                                <Typography variant="subtitle2" sx={{ fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}> • Frequent
                                    frustration due to the need to go <Typography component="span" variant="subtitle2" sx={{
                                        backgroundColor: "#FFFEE0", fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}> back and forth to complete single actions. </Typography> </Typography>
                                <Typography variant="subtitle2" sx={{fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}> • <Typography component="span" variant="subtitle2" sx={{
                                    backgroundColor: "#FFFEE0",
                                    fontSize: {md: "16px", xs: "14px"},
                                    color: "#212B36"
                                }}> Lack of customizable policy </Typography> options lead to dissatisfaction
                                    and <Typography component="span" variant="subtitle2" sx={{
                                        backgroundColor: "#FFFEE0",
                                        fontSize: {md: "16px", xs: "14px"},
                                        color: "#212B36"}}> forced compromises.</Typography> </Typography>
                                <Typography variant="subtitle2"
                                            sx={{ fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}> • Existing
                                    products <Typography component="span" variant="subtitle2" sx={{
                                        backgroundColor: "#FFFEE0",
                                        fontSize: {md: "16px", xs: "14px"},
                                        color: "#212B36"}}> fail to meet HR professionals needs </Typography> for a <Typography
                                        component="span" variant="subtitle2" sx={{
                                        backgroundColor: "#FFFEE0",
                                        fontSize: {md: "16px", xs: "14px"},
                                        color: "#212B36"}}> user-friendly, human-centric design. </Typography> </Typography>
                                <Typography variant="subtitle2" sx={{ fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}> • HR
                                    Veterans fails to get a product that simplifies workflows and
                                    effectively <Typography component="span" variant="subtitle2" sx={{
                                        backgroundColor: "#FFFEE0",
                                        fontSize: {md: "16px", xs: "14px"},
                                        color: "#212B36"}}> engages employees. </Typography> </Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt:4}}>
                        <Box
                            component="img"
                            src={caseImage2}
                            alt="Responsive"
                            sx={{
                                width: '100%', // Makes the image responsive
                                height: 'auto', // Maintains aspect ratio
                            }}
                        />
                    </Grid>
                        <Grid xs={12} md={10} sx={{
                            borderRadius: 4, border: "1px solid #D3EEB3",
                            backgroundColor: "rgba(234, 246, 216, 0.60)",
                            mt: 5, py: 3, px: {lg: 3, xs: 3}}}>
                            <DirectionView>
                                <Stack spacing={2} justifyContent="start" alignItems="start">
                                    <Box>
                                        <Typography variant="h6" sx={{color: "#454F5B",fontSize: {md: "16px", xs: "14px"}}}>Product Approach</Typography>
                                        <Typography variant="subtitle1" sx={{mt:0.5,fontWeight:500, color: "#637381",fontSize: {md: "16px", xs: "14px"}}}>After
                                            detailed qualitative research with HR veterans, we identified several key
                                            areas to address:</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{color: "#454F5B",fontSize: {md: "16px", xs: "14px"}}}>DIY Tool</Typography>
                                        <Typography variant="subtitle1" sx={{mt:0.5,fontWeight:500,color: "#637381",fontSize: {md: "16px", xs: "14px"}}}> • Allows HRs to configure policies with ease.</Typography>
                                        <Typography variant="subtitle1" sx={{ color: "#637381",fontWeight:500,fontSize: {md: "16px", xs: "14px"}}}> • Minimizes frustration and enhances user experience.</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ color: "#454F5B",fontSize: {md: "16px", xs: "14px"}}}>Easy Navigation</Typography>
                                        <Typography variant="subtitle1" sx={{mt:0.5,fontWeight:500, color: "#637381",fontSize: {md: "16px", xs: "14px"}}}> • Simpler and more intuitive design to streamline navigation.</Typography>
                                        <Typography variant="subtitle1" sx={{ color: "#637381",fontWeight:500,fontSize: {md: "16px", xs: "14px"}}}> • Reduces dependency on the product team and avoids delays in day-to-day activities.</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ color: "#454F5B",fontSize: {md: "16px", xs: "14px"}}}>Latest Technology</Typography>
                                        <Typography variant="subtitle1" sx={{fontWeight:500,mt:0.5,color: "#637381",fontSize: {md: "16px", xs: "14px"}}}> • Keeps the product up-to-date and reliable for any kind of customization possible.</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{color: "#454F5B",fontSize: {md: "16px", xs: "14px"}}}>Personalization</Typography>
                                        <Typography variant="subtitle1" sx={{fontWeight:500,mt:0.5,color: "#637381",fontSize: {md: "16px", xs: "14px"}}}> • Personalize their experience with their own branding and theme</Typography>
                                        <Typography variant="subtitle1" sx={{fontWeight:500, color: "#637381",fontSize: {md: "16px", xs: "14px"}}}> • Deeper connection with the product and increases usability</Typography>
                                    </Box>
                                </Stack>
                            </DirectionView>
                    </Grid>

                    <Grid xs={12} md={10} sx={{borderRadius: 4, mt: 3, }}>
                        <DirectionView>
                            <Typography variant="h5" sx={{fontWeight: 700,fontSize: {md: "18px", xs: "16px"}, color: "#454F5B"}}>Target Marget</Typography>
                            <StyledGrid>
                                {STATEMENT3?.map((item) => (
                                    <Box sx={{mt: 3}}>
                                        <Typography variant="body1" sx={{color: "#454F5B",mb:1,fontSize: {md: "14px", xs: "12px"}}}>{item?.title}</Typography>
                                        <Box sx={{
                                            textAlign: "center", p: 1, borderRadius: 2, border: "1px solid #D3EEB3",
                                            backgroundColor: "rgba(234, 246, 216, 0.60)"}}>
                                            <Typography variant="h6" sx={{color: "#454F5B"}}>{item?.topic}</Typography>
                                            <Typography variant="h5" sx={{fontSize: {md: "24px", xs: "20px"}, color: "#454F5B"}}>{item?.count}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </StyledGrid>
                            <Box sx={{textAlign: "center", mt: 2, p: 2, borderRadius: 2, border: "1px solid #D3EEB3", backgroundColor: "rgba(234, 246, 216, 0.60)"}}>
                                <Typography variant="h5" sx={{fontSize: {md: "24px", xs: "20px"}, color: "#454F5B"}}>
                                    1.1 Million Companies Startups, SME’s, Large Enterprise
                                </Typography>
                            </Box>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12}  sx={{borderRadius: 4, mt: 5}}>
                        <DirectionView>
                            <Box
                                component="img"
                                src={caseImage3}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                        </DirectionView>
                    </Grid>


                    <Grid xs={12}  sx={{borderRadius: 4, mt: 5}}>
                        <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Navigation System</Typography>
                        <Typography variant="h5" sx={{fontSize: {md: "20px", xs: "16px"}, mt: 2, color: "#454F5B"}}>Ideation / Approachable design Strategy</Typography>
                        <Grid container gap={2} alignItems="start" justifyContent="start" sx={{mt: 4}}>

                            <Grid xs={12} md={6} >
                                <DirectionView>
                                    <Box
                                        component="img"
                                        src={caseImage4}
                                        alt="Responsive"
                                        sx={{
                                            width: '100%', // Makes the image responsive
                                            height: 'auto', // Maintains aspect ratio
                                        }}
                                    />
                                </DirectionView>
                            </Grid>
                            <Grid xs={12} md={4} sx={{px: 2}}>
                                <DirectionView>
                                    <Typography variant="body1" sx={{color: "#919EAB",fontSize: {md: "16px", xs: "14px"}}}>Iteration 1</Typography>
                                    <Typography variant="body1" sx={{color: "#454F5B",mt:2,fontSize: {md: "16px", xs: "14px"}}}>Navigation
                                        bar has 4 major sections My Space, Team Space, HR Space, Admin. Each section
                                        has 10+ modules that can further expand with submodules.</Typography>
                                    <Typography variant="subtitle2" sx={{mt: 2,fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}> • Personalize their experience with their own branding and
                                        theme</Typography>
                                    <Typography variant="subtitle2" sx={{fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}> •
                                        Deeper connection with the product and increases usability</Typography>
                                </DirectionView>
                            </Grid>
                        </Grid>
                        <Grid container gap={2} alignItems="start" justifyContent="start" sx={{mt: 8}}>
                            <Grid xs={12} md={4} sx={{px: 2}}>
                                <DirectionView>
                                    <Typography variant="body1" sx={{color: "#919EAB",fontSize: {md: "16px", xs: "14px"}}}>Iteration 2</Typography>
                                    <Typography variant="body1" sx={{color: "#454F5B",mt:2,fontSize: {md: "16px", xs: "14px"}}}>Navigation
                                        bar has 4 major sections My Space, Team Space, HR Space, Admin. Each section
                                        has 10+ modules that can further expand with submodules.</Typography>
                                    <Typography variant="subtitle2" sx={{mt: 2,fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}>  • Personalize their experience with their own branding and
                                        theme</Typography>
                                    <Typography variant="subtitle2" sx={{fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}> •
                                        Deeper connection with the product and increases usability</Typography>
                                </DirectionView>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <DirectionView>
                                    <Box component="img" src={caseImage5} alt="Responsive" sx={{width: '100%', height: 'auto'}}/>
                                </DirectionView>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid xs={12} sx={{borderRadius: 4, mt: 3, py: 3, px: {lg: 3, xs: 3}}}>
                        <DirectionView>
                            <Stack justifyContent="center" alignItems="center">
                                <ReactPlayer
                                    url={Web}
                                    playing={true}
                                    loop={true}
                                    playbackRate={1.0}
                                    controls
                                    width={{md: '70%', xs: "100%"}}
                                    height={{md: '70%', xs: "100%"}}
                                    style={{borderRadius: '8px'}}
                                />

                            </Stack>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12} md={10} sx={{
                        borderRadius: 4, border: "1px solid #D3EEB3", backgroundColor: "rgba(234, 246, 216, 0.60)",
                        mt: 5, py: 3, px: {lg: 3, xs: 3}}}>
                        <DirectionView>
                            <Stack spacing={1} justifyContent="start" alignItems="start">
                                    <Typography variant="h6" sx={{fontSize: {md: "18px", xs: "16px"},color: "#454F5B"}}>UX
                                        Approach Implemented</Typography>
                                    <Typography variant="body1" sx={{mt:2,fontSize: {md: "16px", xs: "14px"}, color: "#637381"}}> •
                                        Side Panel with Icon labeling created more space for real content of product
                                        that amtters to users most.</Typography>
                                    <Typography variant="body1" sx={{fontSize: {md: "16px", xs: "14px"},color: "#637381"}}> • To
                                        maximize screen width, Navigation can be hide.</Typography>
                                    <Typography variant="body1" sx={{fontSize: {md: "16px", xs: "14px"}, color: "#637381"}}> •
                                        Tool tip make it easy for users to remeber what the icon denote
                                        to.</Typography>
                                    <Typography variant="body1" sx={{fontSize: {md: "16px", xs: "14px"},color: "#637381"}}> •
                                        Menu Option has segregated modes with search option.</Typography>
                                    <Typography variant="body1" sx={{fontSize: {md: "16px", xs: "14px"}, color: "#637381"}}> •
                                        Pin App allows users to select favourite and important app, that can be accessed anytime.</Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>



                    <Grid xs={12}  sx={{mt: 5}}>
                        <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Personalized Theme</Typography>
                        <Typography variant="h5" sx={{fontSize: {md: "20px", xs: "16px"}, mt: 2, color: "#454F5B"}}>Ideation / Approachable design Strategy</Typography>
                        <Grid container gap={2} alignItems="start" justifyContent="start" sx={{mt: 4}}>
                            <Grid xs={12} md={6}>
                                <DirectionView>
                                    <Box
                                        component="img"
                                        src={caseImage6}
                                        alt="Responsive"
                                        sx={{
                                            width: '100%', // Makes the image responsive
                                            height: 'auto', // Maintains aspect ratio
                                        }}
                                    />
                                </DirectionView>
                            </Grid>
                            <Grid xs={12} md={4} sx={{px: 2}}>
                                <DirectionView>
                                    <Box>
                                        <Typography variant="body1" sx={{color: "#919EAB",fontSize: {md: "16px", xs: "14px"}}}>Iteration 1</Typography>
                                        <Typography variant="body1" sx={{color: "#454F5B",mt:1,fontSize: {md: "16px", xs: "14px"}}}>Keep
                                            color theme open for users to select as per the choice.</Typography>
                                        <Typography variant="subtitle2" sx={{mt: 1,fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}> During user testing, it was highlighted that HR professionals preferred
                                            a non-customizable interface, fixed to the brand's colors and design, to
                                            maintain consistency.</Typography>
                                    </Box>
                                    <Box sx={{mt: 5}}>
                                        <Typography variant="body1" sx={{color: "#919EAB",fontSize: {md: "16px", xs: "14px"}}}>Finalized Flow</Typography>
                                        <Typography variant="body1" sx={{color: "#454F5B",mt:1,fontSize: {md: "16px", xs: "14px"}}}>Create
                                            universal palette and shades of it as primary palette.</Typography>
                                        <Typography variant="subtitle2" sx={{mt: 1,fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}>Accordingly, Per client’s need color will be change from admin setting
                                            and all user’s will be engaged as per set brand’s palette.</Typography>

                                    </Box>
                                </DirectionView>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid xs={12} md={10} sx={{borderRadius: 4, mt: 5, py: 3, px: {lg: 3, xs: 3}}}>
                        <DirectionView>
                            <StyledGrid>
                                <Box component="img" src={caseImage7} alt="Responsive" sx={{width: '100%', height: 'auto'}}/>
                                <Box component="img" src={caseImage8} alt="Responsive" sx={{width: '100%', height: 'auto'}} />
                                <Box component="img" src={caseImage9} alt="Responsive" sx={{width: '100%', height: 'auto'}} />
                            </StyledGrid>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12} md={10} sx={{
                        borderRadius: 4,
                        border: "1px solid #D3EEB3",
                        backgroundColor: "rgba(234, 246, 216, 0.60)",
                        mt: 5,
                        py: 3,
                        px: {lg: 3, xs: 3}}}>
                        <DirectionView>
                            <Stack spacing={1} justifyContent="start" alignItems="start">
                                <Typography variant="h6" sx={{fontSize: {md: "18px", xs: "16px"},color: "#454F5B"}}>UX Approach Implemented</Typography>
                                <Typography variant="body1" sx={{mt:2,fontSize: {md: "16px", xs: "14px"}, color: "#637381"}}> •
                                        Setting panel operation creates a themed space for user.</Typography>
                                <Typography variant="body1" sx={{mt:0.5,fontSize: {md: "16px", xs: "14px"}, color: "#637381"}}> •
                                        Whether user want to use focus mode, or multi page mode.</Typography>
                                <Typography variant="body1" sx={{mt:0.5,fontSize: {md: "16px", xs: "14px"}, color: "#637381"}}>•
                                        Dark & Light theme for personalized choices.</Typography>
                                <Typography variant="body1" sx={{mt:0.5,fontSize: {md: "16px", xs: "14px"}, color: "#637381"}}> •
                                        System color theme set from admin setting that ensures an engagement between
                                        employees towards brands and give a feel of affinity.</Typography>
                                <Typography variant="body1" sx={{mt:0.5,fontSize: {md: "16px", xs: "14px"}, color: "#637381"}}> • It
                                        enables usability and user screen time increase.</Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12}  sx={{mt: 5}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Ideation | Product Strategies.</Typography>
                            <Box
                                component="img"
                                src={caseImage10}
                                alt="Responsive"
                                sx={{width: '100%', height: 'auto', mt:4}} />
                        </DirectionView>
                    </Grid>

                    <Grid xs={12} md={6} sx={{ mt: 2, py: 3, px: {lg: 3, xs: 3}}}>
                        <DirectionView>
                            <Stack spacing={3}>
                                <Typography variant="subtitle2" sx={{
                                    textAlign: "center",
                                    color: "#454F5B",fontSize: {md: "16px", xs: "14px"}
                                }}> For ideation, strategizing, and product discussions, I prefer using pen and
                                    paper, a whiteboard, or sketching over any digital tools. This approach allows
                                    for a free flow of creativity, enabling countless possible ideas to
                                    emerge.</Typography>
                                <Typography variant="subtitle2" sx={{
                                    textAlign: "center",
                                    color: "#637381",fontSize: {md: "16px", xs: "14px"}
                                }}> For both web and app development, I used this method for each module and
                                    submodule to understand, create solutions, finalize the flow, and determine
                                    possible features for MVP 1</Typography>

                            </Stack>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12}>
                        <Box component="img" src={caseImage11} alt="Responsive" sx={{width: '100%', height: 'auto',}}/>
                        <Box component="img" src={caseImage12} alt="Responsive" sx={{mt: -1, width: '100%', height: 'auto',}}/>
                    </Grid>

                    <Grid xs={12}  sx={{mt: 5}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Design System</Typography>
                            <Typography variant="body1" sx={{mt:2,fontSize: {md: "16px", xs: "14px"}, color: "#637381"}}>To establish
                                a unified design system ensuring consistent user interface (UI) elements across both
                                web and mobile applications, thereby enhancing overall product cohesion and user
                                experience.</Typography>
                            <Box sx={{mt: 3}}>
                                <Typography variant="subtitle2" sx={{mt:2,fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}>I
                                    Developed a comprehensive design system that included a library of reusable
                                    components, standardized color palettes, typography, and layout
                                    grids. </Typography>
                                <Typography variant="subtitle2" sx={{mt:0.5,fontSize: {md: "16px", xs: "14px"},color: "#212B36"}}> Handed over the design system components to the development team. </Typography>
                            </Box>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12} md={10} sx={{mt: 4}}>
                        <DirectionView>
                            <Box component="img" src={caseImage13} alt="Responsive" sx={{mt: -1, width: '100%', height: 'auto'}}/>
                        </DirectionView>
                    </Grid>


                    <Grid xs={12} sx={{mt: 5}}>
                        <DirectionView>
                            <Stack spacing={3}>
                                <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Hi-Fi Designs</Typography>
                                <Typography variant="body1" sx={{mt:2,fontSize: {md: "20px", xs: "18px"}, color: "#637381"}}>Login Screen</Typography>
                                <Box component="img" src={caseImage14} alt="Responsive" sx={{mt: -1, width: '100%', height: 'auto'}} />
                            </Stack>
                        </DirectionView>
                    </Grid>


                    <Grid xs={12}  sx={{mt: 5}}>
                        <DirectionView>
                            <Stack spacing={3}>
                                <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Home Page</Typography>
                                <Box component="img" src={caseImage15} alt="Responsive" sx={{mt: 3, width: '100%', height: 'auto'}} />
                            </Stack>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12}  sx={{mt: 5}}>
                        <DirectionView>
                            <Stack spacing={3}>
                                <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Time Office</Typography>
                                <Box component="img" src={caseImage16} alt="Responsive" sx={{mt: 3, width: '100%', height: 'auto'}} />
                            </Stack>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12}  sx={{mt: 5}}>
                        <DirectionView>
                            <Stack spacing={3}>
                                <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Performance</Typography>
                                <Box component="img" src={caseImage17} alt="Responsive" sx={{mt: 3, width: '100%', height: 'auto'}}/>
                            </Stack>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12}>
                        <DirectionView>
                            <Stack spacing={3}>
                                <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Learnings</Typography>
                                <Box component="img" src={caseImage18} alt="Responsive" sx={{mt: 5, width: '100%', height: 'auto'}} />
                            </Stack>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12}  sx={{mt: 5}}>
                        <DirectionView>
                            <Stack spacing={3} justifyContent="center" alignItems="center">
                                <Typography variant="h6" sx={{fontSize: {md: "22px", xs: "15px"}, mb: 2, color: "#000"}}>Here are the high-fidelity designs for an overview of each module. You can access
                                    the full product using the credentials below:</Typography>
                                <Box sx={{
                                    p: 2, borderRadius: 4, border: "1px solid #D3EEB3",
                                    backgroundColor: "rgba(234, 246, 216, 0.60)"}}>
                                    <Typography variant="subtitle2" sx={{color:"primary.darker",fontSize: {md: "18px", xs: "15px"}}}>url: https://dev.texlaculture.ai/</Typography>
                                    <Typography variant="subtitle2" sx={{fontSize: {md: "18px", xs: "15px"},color: "#000"}}>User Name: 24</Typography>
                                    <Typography variant="subtitle2" sx={{fontSize: {md: "18px", xs: "15px"}, color: "#000"}}>Password: 1234</Typography>
                                </Box>
                                <Typography variant="h5" sx={{fontSize: {md: "22px", xs: "15px"}, mb: 2, color: "#161C24"}}>Feel free to explore the live product :)</Typography>

                            </Stack>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12}  sx={{mt: 5}}>
                        <DirectionView>
                            <Typography variant="subtitle2" sx={{fontSize: {md: "16px", xs: "14px"}, color: "#000"}}>After
                                creating high-fidelity designs, we prototyped each module for initial testing across
                                multiple departments.</Typography>
                            <Typography variant="subtitle2"
                                        sx={{mt: 4,fontSize: {md: "16px", xs: "14px"}, color: "#000"}}>After
                                creating high-fidelity designs, we prototyped each module for initial testing across
                                multiple departments. This testing aimed to understand how quickly users could
                                perform actions, identify if they needed assistance with any tasks, and uncover any
                                concerns that arose during internal testing.
                                After creating high-fidelity designs, we prototyped each module for initial testing
                                across multiple departments .</Typography>
                        </DirectionView>
                    </Grid>

                    <Grid xs={12}  sx={{mt: 5}}>
                        <Stack spacing={3} direction={{md: "row", xs: "column"}} sx={{px: {lg: 0, xs: 3}}} alignItems="center" justifyContent="center">
                            <Box component="img" src={caseImage20} alt="Responsive" sx={{width: {md: "65%", xs: "100%"}, height:{md: "70%", xs: "100%"}}}/>
                            <ReactPlayer url={mobile} playing={true} loop={true}
                                playbackRate={1.0} controls width={{md: '60%', xs: "100%"}} height={{md: '100%', xs: "100%"}}
                                style={{borderRadius: '8px', border: "3px solid #919EAB"}} />
                        </Stack>
                    </Grid>

                    <Grid xs={12} sx={{mt: 5}}>
                        <DirectionView>
                            <Stack spacing={2} justifyContent="start" alignItems="start">
                                <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Usability Testing</Typography>
                                <Typography variant="body1" sx={{mt:2,fontSize: {md: "16px", xs: "14px"}, color: "#637381"}}>I
                                    consider usability testing as a key part of the design process which can defined
                                    by 5 components: learnability, efficiency, memorability, error, and
                                    satisfaction. In a nutshell, usability is an essential factor that plays a vital
                                    role in success of a product.</Typography>
                                <Typography variant="body1" sx={{mt:2,fontSize: {md: "16px", xs: "14px"}, color: "#212B36"}}>Usability
                                    testing performed with out first 3 customers that were live implemented with all
                                    the modules, free of cost.</Typography>
                                <StyledGrid>
                                    {STATEMENT4?.map((item) => (
                                        <Box sx={{
                                            p: 2,
                                            mt:3,
                                            borderRadius: 2,
                                            border: "1px solid #D3EEB3",
                                            backgroundColor: "rgba(234, 246, 216, 0.60)",
                                        }}>
                                            <Typography variant="h6" sx={{color: "#000", fontSize: {md: "16px", xs: "14px"}}}>{item?.title}</Typography>
                                            <Typography variant="subtitle2" sx={{mt:1,
                                                fontSize: {md: "14px", xs: "12px"},
                                                color: "#637381"
                                            }}>{item?.topic}</Typography>
                                        </Box>
                                    ))}
                                </StyledGrid>
                            </Stack>
                        </DirectionView>
                    </Grid>


                    <Grid xs={12} >
                        <DirectionView>
                            <StyledGrid>
                                {STATEMENT5?.map((item) => (
                                    <Box sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        border: "1px solid #D3EEB3",
                                        backgroundColor: "rgba(234, 246, 216, 0.60)",
                                    }}>
                                        <Typography variant="h6" sx={{color: "#000", fontSize: {md: "16px", xs: "14px"}}}>{item?.title}</Typography>
                                        <Typography variant="subtitle2" sx={{mt:1,
                                            fontSize: {md: "14px", xs: "12px"},
                                            color: "#637381"
                                        }}> • {item?.topic1}</Typography>
                                        <Typography variant="subtitle2" sx={{mt:1,
                                            fontSize: {md: "14px", xs: "12px"},
                                            color: "#637381"
                                        }}> • {item?.topic2}</Typography>
                                        <Typography variant="subtitle2" sx={{mt:1,
                                            fontSize: {md: "14px", xs: "12px"},
                                            color: "#637381"
                                        }}> • {item?.topic3}</Typography>
                                    </Box>
                                ))}
                            </StyledGrid>
                        </DirectionView>
                    </Grid>

                    <Grid item xs={12} sx={{mt:5}}>
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

                    <Grid xs={12} sx={{mb: 4,mt:5}}>
                        <Link href='mailto:nehachhillar07@gmail.com' style={{textDecoration: "none"}}>
                            <Stack direction={{md: "row", xs: "column"}} justifyContent="space-around" alignItems="center"
                                   spacing={4} sx={{py: 2, backgroundColor: "#FFFEE0"}}>
                                <Box component="img" src={caseImage19} alt="Responsive"
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