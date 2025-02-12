import React from "react";
import {Box, Card, CardHeader, Grid, Link, Stack, Typography} from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import caseImage1 from "../images/caseStudy1/caseImage1.png"
import caseImage2 from "../images/caseStudy1/caseImage2.png"
import caseImage3 from "../images/caseStudy1/caseImage3.png"
import caseImage4 from "../images/caseStudy1/caseImage4.png"
import caseImage5 from "../images/caseStudy1/caseImage5.png"
import caseImage6 from "../images/caseStudy1/caseImage6.png"
import caseImage7 from "../images/caseStudy1/caseImage7.png"
import caseImage8 from "../images/caseStudy1/caseImage8.png"
import caseImage9 from "../images/caseStudy1/caseImage9.png"
import caseImage10 from "../images/caseStudy1/caseImage10.png"
import caseImage11 from "../images/caseStudy1/caseImage11.png"
import caseImage12 from "../images/caseStudy1/caseImage12.png"
import {PATH_DASHBOARD} from "../routes/paths";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import DirectionView from "../component/DirectionView";


const StyledCardGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '30px',
    gridTemplateColumns: "repeat(auto-fit, minmax(310px,1fr))"
}));

export default function WebDesignCaseStudyScreen() {
    const navigate = useNavigate()

    const CHALLENGES = [
        {title: "Sector", description: "Retail, Technology, Health & Pharma, Manufacturing"},
        {
            title: "Challenge",
            description: "To redesign TexlaCulture website that connects with small to large enterprises. Focus on organizations ready for HR efficiency but not aware of suitable solutions. Enhance online visibility to reach lay users searching for HRMS with optimized content and intuitive UI."
        },
        {title: "My Role", description: "Market Research / UX / UI / Brand Visbility"},
        {
            title: "Project TimeLine",
            description: "7 Days ( Before handoff to development ) 15 Days ( Live on Google ) "
        },
    ]

    const SPRINT = [
        {
            title: "Primary Goal",
            description: "To redesign website in a way, Users connect and understand well about our offerings that stands out in simplifying HR tasks, employee fostering engagement, data-driven decision making afterall that lead them to take sales enquiry "
        },
        {
            title: "Secondary Goal",
            description: "To create SEO friendly content that helps in generating sales in its in initial phase."
        },
        {
            title: "Culture",
            description: "Depict that TexlaCulure understands cultural HR and Organization values and helps individual to create their own cultures."
        },
        {
            title: "Target Audience",
            description: "HR professionals, business owners, and employees across various sectors looking for a seamless, efficient HRMS solution. "
        },
        {title: "Voice & Vibe", description: "Empowering, Reassuring complemented by intuitive ui and simplistic UX."},
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
            id: 3,
            title1: "Understanding / User Interface ",
            title2: "About Us Page Redesign to gain user’s trust & confidence.",
            title3: "@Trade India / B2B Experience",
            title4: "Simplified employee engagement and easy access of employment",
            case: "",
            textcolor: "#E11B22",
            bgcolor: "#FDEFEF"
        },
    ]

    const connect = "Having an Idea? Let's Catch up"

    return (
        <Box sx={{pt: 15, px: {lg: 12, sm: 3, xs: 3}, backgroundColor: "primary.softer"}}>
            <Stack spacing={1} justifyContent="center" alignItems="center" sx={{mt: 5}}>
                <Typography sx={{fontSize: "16px", fontWeight: 500, color: "#637381", fontStyle: "italic"}}>Digital
                    Platform For A SaaS Product</Typography>
                <Link href="https://texlaculture.ai/" underline="none">
                    <Stack direction="row" alignItems="center" gap={1} sx={{mt: 4}}>
                        <Typography sx={{
                            '&:hover': {
                                textDecorationLine: "underline",
                                textDecorationThickness: "4px",
                                textDecorationColor: "#FFA500"
                            }, fontSize: "18px", fontWeight: 500, color: "#212B36"
                        }}>Texlaculture&apos;s Website </Typography>
                        <TrendingFlatIcon/>
                    </Stack>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="center">
                    <Typography variant="h5" sx={{
                        color: "#1939B7",
                        fontWeight: 700,
                        fontSize: {md: "18px", xs: "15px"},
                        textAlign: "center"
                    }}>A challenging project to make TexlaCulture website live in a week.</Typography>
                </Stack>

                <Grid container gap={3}>
                    <Grid xs={12} sx={{mt: 2, px: {lg: 15, xs: 0}}}>
                        <DirectionView>
                            <Box component="img" src={caseImage12} alt="Responsive"
                                 sx={{width: '100%', height: 'auto'}}/>
                        </DirectionView>
                    </Grid>
                    {CHALLENGES?.map((item) => (
                        <>
                            <Grid item xs={12} lg={2} alignItems="start" justifyContent="start">
                                <DirectionView>
                                    <Typography variant="subtitle2" sx={{
                                        fontWeight: 600,
                                        fontSize: {md: "18px", xs: "15px"},
                                        color: "secondary.main"
                                    }}>{item?.title}</Typography>
                                </DirectionView>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <DirectionView>
                                    <Typography variant="subtitle2"
                                                sx={{color: "#212B36", fontSize: {md: "16px", xs: "13px"}}}>
                                        {item?.description}
                                    </Typography>
                                </DirectionView>
                            </Grid>
                        </>
                    ))}
                    <Grid xs={12} sx={{mt: 12, backgroundColor: "secondary.light"}}>
                        <DirectionView>
                            <Stack sx={{justifyContent: "center", alignItems: "center", p: 2}}>
                                <Typography variant="h3" sx={{fontWeight: 700, color: "white"}}>Sprint 1</Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 5}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Research
                                and Strategy</Typography>
                            <Typography variant="subtitle2"
                                        sx={{color: "#454F5B", mt: 1, fontSize: {md: "16px", xs: "13px"}}}>The first
                                sprint focused on laying a strong foundation for our redesign strategy through
                                exhaustive market research, clear definition of website goals, brand identity analysis,
                                and understanding TexlaCulture's unique culture and target audience.</Typography>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 4, p: 3, backgroundColor: "#D6E4FF"}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{fontSize: {md: "18px", xs: "15px"}}}>Insights:</Typography>
                            <Typography variant="subtitle2"
                                        sx={{color: "#454F5B", mt: 1, fontSize: {md: "16px", xs: "13px"}}}>During this
                                phase, I dived deep into the HR management software market to understand the competitive
                                landscape. I identified a significant opportunity gap in competitors website i.e.
                                uniqueness and individual vibe and culture that could be seen in their products. I took
                                it forward and started setting a goal towards process.</Typography>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 4}}>
                        <DirectionView>
                            <StyledCardGrid>

                                {SPRINT?.map((item) => (
                                    <Card sx={{
                                        borderRadius: 2, border: '1px solid', borderColor: 'grey.300',
                                        '.hover': {boxShadow: ' 0 6px 10px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.22)'},
                                    }}>
                                        <CardHeader
                                            sx={{pb: 2, backgroundColor: "primary.soft"}}
                                            title={
                                                <Stack>
                                                    <Typography variant="h5"
                                                                sx={{color: "primary.darker"}}>{item?.title}</Typography>
                                                </Stack>}/>
                                        <Stack spacing={2} justifyContent="start" alignItems="start" sx={{p: 2}}>
                                            <Typography variant="body2" sx={{
                                                mt: 0.3,
                                                fontSize: {md: "15px", xs: "13px"}
                                            }}>{item?.description}</Typography>
                                        </Stack>
                                    </Card>
                                ))}
                            </StyledCardGrid>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12}>
                        <DirectionView>
                            <Typography variant="h6" sx={{color: "secondary.main", fontStyle: "italic"}}>I consulted HR
                                veterans on how I could win users’ trust and spark curiosity that would lead them to
                                make a sales inquiry.</Typography>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 8}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Benchmarking
                                & Moodboard </Typography>
                            <Typography variant="subtitle2"
                                        sx={{mt: 1, color: "#454F5B", fontSize: {md: "16px", xs: "13px"}}}>Planning a
                                path for a design that's not just about aesthetics but functionality and
                                simplicity.</Typography>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 3}}>
                        <DirectionView>
                            <Box
                                component="img"
                                src={caseImage1}
                                alt="Responsive"
                                sx={{width: '100%', height: 'auto'}}/>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 5}}>
                        <DirectionView>
                            <Stack justifyContent="flex-end" alignItems="end">
                                <Typography variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>It was decided to go with one color hierarchy, due to the simplified and
                                    consistent </Typography>
                                <Typography component="span" variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}> design that leads user to understand and navigate through the content.</Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 4, p: 3, backgroundColor: "#D6E4FF"}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{fontSize: {md: "18px", xs: "15px"}}}>Learnings</Typography>
                            <Typography variant="body1"
                                        sx={{color: "#454F5B", mt: 1, fontSize: {md: "16px", xs: "13px"}}}>
                                During this phase, I dived deep into the HR management software market to understand the
                                competitive landscape. I identified a significant opportunity gap in competitors website
                                i.e. uniqueness and individual vibe and culture that could be seen in their products. I
                                took it forward and started setting a goal towards process.
                            </Typography>
                        </DirectionView>
                    </Grid>
                </Grid>
                <Grid container gap={3} alignItems="start" justifyContent="center">
                    <Grid xs={12} sx={{mt: 12, backgroundColor: "secondary.light"}}>
                        <DirectionView>
                            <Stack sx={{justifyContent: "center", alignItems: "center", p: 2}}>
                                <Typography variant="h3" sx={{fontWeight: 700, color: "white"}}>Sprint 2</Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 5}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Sketching
                                and Designing</Typography>
                            <Typography variant="subtitle2"
                                        sx={{color: "#454F5B", mt: 1, fontSize: {md: "16px", xs: "13px"}}}>After
                                completing the research and strategy phase, we moved on to ideation and sketching. This
                                stage involved brainstorming sessions to generate creative ideas and sketching out
                                initial concepts for the website design. The goal was to create a visually appealing and
                                user-friendly interface that aligns with TexlaCulture's branding and
                                objectives.</Typography>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 4, p: 3, backgroundColor: "#D6E4FF"}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{fontSize: {md: "18px", xs: "15px"}}}>Insights:</Typography>
                            <Typography variant="subtitle2"
                                        sx={{color: "#454F5B", mt: 1, fontSize: {md: "16px", xs: "13px"}}}>Delivering a
                                high-quality project on time was made possible through effective collaboration,
                                leveraging design systems, using agile methodology, strategic planning, clear
                                communication, and adaptability.</Typography>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 5}}>
                        <DirectionView>
                            <Box
                                component="img"
                                src={caseImage2}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 5}}>
                        <DirectionView>
                            <Stack justifyContent="flex-end" alignItems="end">
                                <Typography variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>It was decided to go with one color hierarchy, due to the simplified and
                                    consistent </Typography>
                                <Typography component="span" variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}> design that leads user to understand and navigate through the content.</Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>
                </Grid>
                <Grid container gap={3} alignItems="start" justifyContent="center">
                    <Grid xs={12} sx={{mt: 12, backgroundColor: "secondary.light"}}>
                        <DirectionView>
                            <Stack sx={{justifyContent: "center", alignItems: "center", p: 2}}>
                                <Typography variant="h3" sx={{fontWeight: 700, color: "white"}}>Sprint 2</Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 5}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Final
                                Delivery and Development</Typography>
                            <Typography variant="subtitle2"
                                        sx={{color: "#454F5B", mt: 1, fontSize: {md: "16px", xs: "13px"}}}>With the
                                designs finalized, the next step was to prepare them for development. This involved
                                creating detailed design specifications and assets to ensure a smooth handover to the
                                development team. We prioritized clarity and precision in our documentation to minimize
                                any potential misunderstandings during the development phase.</Typography>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 5}}>
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
                    <Grid xs={12} sx={{mt: 3}}>
                        <DirectionView>
                            <Stack justifyContent="flex-end" alignItems="end">
                                <Typography variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>Designed the hero section to instantly convey that users can <Typography
                                    component="span" variant="subtitle1" sx={{
                                    fontWeight: 700,
                                    color: "#000000",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>manage the entire employment </Typography> </Typography>
                                <Typography variant="subtitle1" sx={{
                                    fontWeight: 700,
                                    color: "#000000",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}> journey with the product, <Typography component="span" variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>showcasing interconnected products that keep </Typography> <Typography
                                    component="span" variant="subtitle1" sx={{
                                    fontWeight: 700,
                                    color: "#000000",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>employees</Typography></Typography>
                                <Typography variant="subtitle1" sx={{
                                    fontWeight: 700,
                                    fontSize: {md: "16px", xs: "13px"}
                                }}> engaged, <Typography component="span" variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>with clear visuals and brief descriptions to quickly </Typography> <Typography
                                    component="span" variant="subtitle1" sx={{
                                    fontWeight: 700,
                                    color: "#000000",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}> highlight the product's benefit.</Typography></Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 7}}>
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
                    <Grid xs={12} sx={{mt: 3}}>
                        <DirectionView>
                            <Stack justifyContent="flex-end" alignItems="end">
                                <Typography variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>Emphasizes our unique features and <Typography component="span" variant="subtitle1"
                                                                                  sx={{
                                                                                      fontWeight: 700,
                                                                                      color: "#000000",
                                                                                      fontFamily: "Poppins",
                                                                                      fontSize: {md: "16px", xs: "13px"}
                                                                                  }}>customization capabilities as a
                                    startup, </Typography> <Typography component="span" variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}> using balanced </Typography> </Typography>
                                <Typography variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}> descriptions to showcase how our solutions stand out and can be tailored
                                    to <Typography component="span" variant="subtitle1" sx={{
                                        fontWeight: 700,
                                        color: "#000000",
                                        fontFamily: "Poppins",
                                        fontSize: {md: "16px", xs: "13px"}
                                    }}>specific industry & needs.</Typography> </Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 7}}>
                        <DirectionView>
                            <Box
                                component="img"
                                src={caseImage5}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 3}}>
                        <DirectionView>
                            <Stack justifyContent="flex-end" alignItems="end">
                                <Typography variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>Builds <Typography component="span" variant="subtitle1" sx={{
                                    fontWeight: 700,
                                    color: "#000000",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>trust through compelling facts and customer reviews, </Typography> <Typography
                                    component="span" variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}> ending with</Typography> <Typography component="span" variant="subtitle1" sx={{
                                    fontWeight: 700,
                                    color: "#000000",
                                    fontFamily: "Poppins",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}>FAQs </Typography> to ensure </Typography>
                                <Typography variant="body1" sx={{
                                    fontWeight: 700,
                                    color: "#212B3C",
                                    fontSize: {md: "16px", xs: "13px"}
                                }}> users have a thorough understanding of our offerings and feel confident in their
                                    decision. </Typography>
                            </Stack>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 7}}>
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
                    <Grid xs={12} sx={{mt: 5}}>
                        <DirectionView>
                            <Typography variant="h6" sx={{color: "#000", fontSize: {md: "25px", xs: "19px"}}}>Website
                                Landing Page Redesign</Typography>
                            <Typography variant="subtitle2" sx={{mt: 1, fontSize: {md: "16px", xs: "13px"}}}>Below
                                presented is the cleanest 2.O version of the website. This version is under development
                                and will be available once it is feasible and seo friendly tried and
                                tested.</Typography>
                        </DirectionView>
                    </Grid>
                    <Grid xs={12} sx={{mt: 7}}>
                        <DirectionView>
                            <Box
                                component="img"
                                src={caseImage7}
                                alt="Responsive"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </DirectionView>
                    </Grid>
                    <Grid xs={12}>
                        <DirectionView>
                            <Box
                                component="img"
                                src={caseImage8}
                                alt="Responsive"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </DirectionView>
                    </Grid>
                    <Grid xs={12}>
                        <DirectionView>
                            <Box
                                component="img"
                                src={caseImage9}
                                alt="Responsive"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </DirectionView>
                    </Grid>
                    <Grid xs={12}>
                        <DirectionView>
                            <Box
                                component="img"
                                src={caseImage10}
                                alt="Responsive"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </DirectionView>
                    </Grid>

                    <Grid item xs={12} sx={{my: 4}}>
                        <StyledCardGrid>
                            {CARD_CONTENT?.map((data) => (
                                <Card onClick={() => navigate(data?.case)} spacing={3}
                                      sx={{
                                          p: 3, borderRadius: 2, border: '1px solid', borderColor: 'grey.300',
                                          '.hover': {boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'},
                                          cursor: "pointer", backgroundColor: data?.bgcolor
                                      }}>
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
                    <Grid xs={12} sx={{my: 4}}>
                        <Link href='mailto:nehachhillar07@gmail.com' style={{textDecoration: "none"}}>
                            <Stack direction={{md: "row", xs: "column"}} justifyContent="space-around"
                                   alignItems="center"
                                   spacing={4} sx={{py: 2, backgroundColor: "#FFFEE0"}}>
                                <Box component="img" src={caseImage11} alt="Responsive"
                                     sx={{
                                         width: {md: '10%', xs: "40%"}, // Makes the image responsive
                                         height: {md: '10%', xs: "40%"}, // Maintains aspect ratio
                                     }}
                                />
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

            </Stack>

        </Box>
    )
}