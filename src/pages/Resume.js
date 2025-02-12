import React from "react"
import {Box, Button, Card, Grid, IconButton, Link, Stack, Tab, Tabs, Typography} from "@mui/material";
import nehaAvatar from "../images/nehaImages/nehaAvatar.png"
import PdfPreviewViewer from "../Components/pdfPreview/PdfPreviewViewer";
import ncResume from "../images/resume/ncResume.pdf"
import {Icon} from "@iconify/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {styled} from "@mui/material/styles";
import DirectionView from "../component/DirectionView";


const StyledGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '20px',
    mt: 5,
    gridTemplateColumns: "repeat(auto-fit, minmax(310px,1fr))"
}));


export default function Resume(){

    const [value, setValue] = React.useState(0);

    const handleChange = (event,newValue) => {
        setValue(newValue);
    };


    return(
        <Grid container spacing={2} sx={{pt:15,px: {lg: 12, sm: 3, xs: 3}}}>

            <Grid item xs={12} lg={2.5}>
                <DirectionView>
                <Card sx={{p:4}}>
                    <Stack spacing={3} >
                        <Stack sx={{p:1,borderRadius:1.5,backgroundColor:"lightGrey",justifyContent:"center",alignItems:"center"}}>
                           <img src={nehaAvatar} alt="nehaAvatar" width="70%"  height="60%" style={{}} />
                        </Stack>
                        <Stack spacing={1} sx={{justifyContent:"center",alignItems:"center"}}>
                        <Typography variant="h3" sx={{color:"primary.darker",fontSize:{lg:"28px",xs:"18px"}}}>Neha Chhillar</Typography>
                        <Typography variant="h4" sx={{color:"primary.dark",fontSize:{lg:"20px",xs:"16px"}}}>UI/UX DESIGNER</Typography>
                        </Stack>
                        <Stack direction="row" spacing={2} sx={{paddingTop:5}}>
                            <Icon icon="basil:phone-solid" width="30" height="30" style={{color: "#3D52A0"}}  />
                            <Typography variant="h4" sx={{color:"primary.dark",fontSize:{lg:"18px",xs:"14px"}}}>+91 - 8287233848</Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Icon icon="mingcute:mail-fill" width="30" height="30" style={{color: "#3D52A0"}} />
                            <Typography variant="h4" sx={{color:"primary.dark",fontSize:{lg:"18px",xs:"14px"}}} whiteSpace="nowrap" overflow="hidden"  textOverflow="ellipsis">
                                nehachhillar07@gmail.com</Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Icon icon="mdi:location" width="30" height="30" style={{color: "#3D52A0"}} />
                            <Typography variant="h4" sx={{color:"primary.dark",fontSize:{lg:"18px",xs:"14px"}}}>Gurugram , Harayana</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{mt:10,justifyContent:"center",alignItems:"center"}}>
                        <Link target="_blank" href='mailto:nehachhillar07@gmail.com'>
                            <IconButton>
                                <Icon icon="mingcute:mail-fill" width="30" height="30" style={{color: "#3D52A0"}} />
                            </IconButton>
                        </Link>
                        <Link target="_blank" href="https://www.instagram.com/neha_chhillar07?igsh=MWV6ZHB3NG9oZ2RpZw==" underline="none">
                            <IconButton >
                                <Icon icon="mdi:instagram" width="30" height="30"   style={{color: "#3D52A0"}} />
                            </IconButton>
                        </Link>
                        <Link  target="_blank" href="https://www.linkedin.com/in/neha-chhillar-a0ab9a225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" underline="none">
                            <IconButton>
                                <Icon icon="mdi:linkedin" width="30" height="30"  style={{color: "#3D52A0"}}  />
                            </IconButton>
                        </Link>
                    </Stack>
                </Card>
                </DirectionView>
            </Grid>
            <Grid item xs={12} lg={9.5}>
                <DirectionView>
                <Card sx={{minHeight:"710px",mb:6}}>
                    <Stack direction="row" spacing={2} sx={{justifyContent:"end",alignItems:"end"}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{p:1,px:5,borderRadius:1.5,backgroundColor:"primary.soft",justifyContent:"end",alignItems:"end"}}>
                            {["Experience","Education","Certification","Skill",'Download PDF']?.map((item)=>(
                                <Tab label={
                                    <Typography variant="h4" sx={{color:"primary.darker",fontSize:{lg:"16px",xs:"14px"}}}>{item}</Typography>}  />
                                ))}
                        </Tabs>
                    </Stack>
                    <Box sx={{px:3}}>
                        {value===0 && <Experience />}
                        {value===1 && <Education />}
                        {value===2 && <Certification />}
                        {value===3 && <Skill />}
                        {value===4 && <DownloadPdf />}
                    </Box>
                </Card>
                </DirectionView>
            </Grid>
        </Grid>
    )
}


function DownloadPdf(){


    return(
        <Stack justifyContent="center" alignItems="center" spacing={2} sx={{mt:12}}>
            <Card sx={{p:5}}>
                <Button size="large" startIcon={<Icon icon="mdi:file-pdf-box" width="34" height="34" />} component="a" target="_blank" href={ncResume} >
                    Download PDF
                </Button>
            </Card>
        </Stack>
    )
}

function Certification(){


    return(
        <Box sx={{mt:4}}>
            <StyledGrid>
                <Card sx={{p:2}}>
                    <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}}>
                        • Google Certification Program <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                        from </Typography> Google Coursera <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                        consist of 7 Certifications. </Typography> </Typography>
                </Card>

                <Card sx={{p:2}}>
                    <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}}>
                        • UI UX Certification Course <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                        Kaarwan Design School.
                    </Typography>  </Typography>
                </Card>

                <Card sx={{p:2}}>
                    <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}}>
                        • Graphic Design Certification Course <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                        Kaarwan Design School
                    </Typography>  </Typography>
                </Card>

            </StyledGrid>
        </Box>
    )
}



function Education(){


    return(
        <Box sx={{mt:4}}>
            <StyledGrid>
                <Card sx={{p:2}}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h3" sx={{color:"primary.darker",fontSize:{lg:"18px",xs:"16px"}}}> University of Delhi </Typography>
                        <Typography  variant="body2" sx={{color:"black",fontWeight:500,fontSize: {md: "14px", xs: "14px"}}}>2020-2023  </Typography>
                    </Stack>
                    <Typography  variant="body2" sx={{color:"black",fontWeight:500,fontSize: {md: "14px", xs: "12px"},mt:0.5}}> B.A. (Hons) English ( 6.9 GPA )  </Typography>
                </Card>
                <Card sx={{p:2}}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h3" sx={{color:"primary.darker",fontSize:{lg:"18px",xs:"16px"}}}> J.J Sr Sec School </Typography>
                        <Typography  variant="body2" sx={{color:"black",fontWeight:500,fontSize: {md: "14px", xs: "14px"}}}>2019-2020</Typography>
                    </Stack>
                    <Typography  variant="body2" sx={{color:"black",fontWeight:500,fontSize: {md: "14px", xs: "12px"},mt:0.5}}> Higher Secondary  ( 92% )  </Typography>
                </Card>
                <Card sx={{p:2}}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h3" sx={{color:"primary.darker",fontSize:{lg:"18px",xs:"16px"}}}> J.J Sr Sec School </Typography>
                        <Typography  variant="body2" sx={{color:"black",fontWeight:500,fontSize: {md: "14px", xs: "14px"}}}>2017-2018</Typography>
                    </Stack>
                    <Typography  variant="body2" sx={{color:"black",fontWeight:500,fontSize: {md: "14px", xs: "12px"},mt:0.5}}> Senior Secondary  ( 88% )  </Typography>
                </Card>
            </StyledGrid>
        </Box>
    )
}







function Experience(){


    const [value, setValue] = React.useState(0);

    const handleChange = (event,newValue) => {
        setValue(newValue);
    };

    const arr1=[{title1:"",title2:""}]


    return(
        <Box>
        <Stack direction="row" justifyContent="start" alignItems="start" spacing={2} sx={{mt:2}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                {["03/2023 - Present","10/2022 - 01/2023"]?.map((item)=>(
                    <Tab label={<Typography variant="h4" sx={{color:"primary.darker",fontSize:{lg:"14px",xs:"14px"}}}>{item}</Typography>}  />
                ))}
            </Tabs>
        </Stack>
            {value===1 && <Stack spacing={1} sx={{mt:3}}>
                <Box>
                <Typography variant="h4" sx={{color:"primary.dark",fontSize:{lg:"18px",xs:"16px"}}}>UX Design Intern at Vehiclecare | Service-Based</Typography>
                <Typography variant="body1" sx={{mt:1,color:"primary.dark",fontSize:{lg:"13px",xs:"12px"}}}>Transaction & Lead Management</Typography>
                </Box>
                <Box sx={{py:2}}>
                <StyledGrid>
                   <Card sx={{p:2}}>
                       <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}}>
                           • Resolved internal B2B challenges <Typography variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}} component="span">
                               by designing a Billing App tailored to company needs. </Typography></Typography>
                   </Card>

                    <Card sx={{p:2}}>
                        <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}}>
                            • Achieved <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                            a substantial 20% increase in business sales </Typography>rates through effective implementation</Typography>
                    </Card>
                    <Card sx={{p:2}}>
                        <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"}}}>
                            • The custom Billing App streamlined processes,  <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                            boosted efficiency, and positively impacted the company's bottom line.</Typography></Typography>
                    </Card>
                </StyledGrid>
                </Box>
            </Stack>}
            {value===0 && <Stack spacing={1} sx={{mt:3}}>
                <Box>
                    <Typography variant="h4" sx={{color:"primary.dark",fontSize:{lg:"18px",xs:"16px"}}}>Product Designer at TexlaCulture | SaaS Product</Typography>
                    <Typography variant="body1" sx={{mt:1,color:"primary.dark",fontSize:{lg:"13px",xs:"12px"}}}>HR Management & People Engagement Experience</Typography>
                </Box>
                <Box sx={{py:2}}>
                    <StyledGrid>
                        <Card sx={{p:2}}>
                            <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}}>
                                •  Led the creation of comprehensive <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                design systems for both web and app </Typography>applications, managing design requirements and <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                driving New Product Developments (NPDs) within standard development pipelines </Typography> to ensure a
                                seamless and user-centric experience. </Typography>
                        </Card>

                        <Card sx={{p:2}}>
                            <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}}>
                                • Spearheaded the creation and implementation of a <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                comprehensive design system </Typography> significantly enhancing user interface (UI) consistency and
                                engineering efficiency across web and mobile applications. Achieved a
                                notable <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                improvement in design consistency from 22% to 64%. </Typography></Typography>
                        </Card>
                        <Card sx={{p:2}}>
                            <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}}>
                                • Directed the design and development <Typography variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}} component="span">
                                of innovative user experiences (UX) for specific products such as PMS, LMS, and CORE HR,  </Typography> collaborating
                                closely with HR experts <Typography variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}} component="span">
                                to solve complex problems and ensure solutions
                                align with user needs and business objectives.  </Typography> </Typography>
                        </Card>


                        <Card sx={{p:2}}>
                            <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"}}}>
                                •  Conducted extensive  <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                user testing with over 320 participants,</Typography> utilizing
                                iterative design processes based on feedback to identify and execute key
                                improvements. This user-centered approach led to a redesigned workflow
                                that elevated <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                user satisfaction to 75%.</Typography></Typography>
                        </Card>

                        <Card sx={{p:2}}>
                            <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}}>
                                • Drove the development and successful deployment <Typography variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}} component="span">
                                of a new app design system, markedly increasing user engagement and operational efficiency.  </Typography>  </Typography>
                        </Card>

                        <Card sx={{p:2}}>
                            <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}}>
                                • Engaged in strategic dialogues with stakeholders <Typography variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}} component="span">
                                regarding ongoing and
                                future development projects, shaping the product vision and strategy by
                                advocating for user needs, business requirements, and technical feasibility. </Typography>  </Typography>
                        </Card>

                        <Card sx={{p:2}}>
                            <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}}>
                                • Played a <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                pivotal role in onboarding over 7000 global </Typography> users and securing <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                partnerships with 15+ notable clients </Typography> such as Chayos, BLS International,
                                and Biryani by Kilo. Delivered unique features within a user-friendly product
                                architecture that ensures easy navigation and completion of actions within
                                five steps.</Typography>
                        </Card>

                        <Card sx={{p:2}}>
                            <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}}>
                                • Pioneered the <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                inclusion of customization capabilities in product design architecture </Typography> , allowing for seamless integration of client-specific
                                requirements. </Typography>
                        </Card>
                    </StyledGrid>

                    <Stack sx={{mt:6,mb:2}}>
                    <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}}> Key Achievements </Typography>
                    </Stack>
                    <Box sx={{mb:4}}>
                    <StyledGrid>
                        <Card sx={{p:2}}>
                            <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}}>
                                • Enhanced <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                product consistency and usability </Typography> , leading to a significant
                                increase in user engagement and satisfactions. </Typography>
                        </Card>
                        <Card sx={{p:2}}>
                            <Typography  variant="subtitle1" sx={{color:"black",fontWeight:500,fontSize: {md: "16px", xs: "14px"},}}>
                                • Established the company as a <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}} component="span">
                                leading choice for major clients
                            </Typography> , reinforcing its position in the competitive SaaS HRMS Development market. </Typography>
                        </Card>
                    </StyledGrid>
                    </Box>
                </Box>
            </Stack>}
        </Box>
    )
}






function Skill(){


    const [value, setValue] = React.useState(0);

    const handleChange = (event,newValue) => {
        setValue(newValue);
    };

    const arr1=[{title1:"",title2:""}]


    return(
        <Box>
            <Stack direction="row" spacing={2} sx={{mt:2}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {["Technical","Methodology",'Personel']?.map((item)=>(
                        <Tab label={<Typography variant="h4" sx={{color:"primary.darker",fontSize:{lg:"14px",xs:"14px"}}}>{item}</Typography>}  />
                    ))}
                </Tabs>
            </Stack>
            {value===0 && <Stack spacing={1} sx={{mt:3}}>
                <Box sx={{py:2}}>
                    <StyledGrid>
                        {['Figma','Notion','Jira','Sketch','Framer','Webflow']?.map((item)=>(
                                <Card sx={{p:3}}>
                                    <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}}>
                                        {item}
                                    </Typography>
                                </Card>
                            ))}

                    </StyledGrid>
                </Box>
            </Stack>}
            {value===1 && <Stack spacing={1} sx={{mt:3}}>
                <Box sx={{py:2}}>
                    <StyledGrid>
                        {['Design System','UX Design','UI Aesthetics','Prototyping','Wireframing','Responsive Design','Journey Mapping',
                        'Interaction Design','Accessibility Standards','Product Strategy','Design Leadership','Information Architecture',
                        'Utility','Usability Testing','A/B Testing','Brand Implementation','Design Thinking','Mockups']?.map((item)=>(
                            <Card sx={{p:3}}>
                                <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}}>
                                    {item}
                                </Typography>
                            </Card>
                        ))}
                    </StyledGrid>
                </Box>
            </Stack>}

            {value===2 && <Stack spacing={1} sx={{mt:3}}>
                <Box sx={{py:2}}>
                    <StyledGrid>
                        {['Critical Thinking','Time Management','Team Collaboration','Problem-Solving','Decision-Making','Empathy','Leadership Qualities',
                            'Growth Mindset']?.map((item)=>(
                            <Card sx={{p:3}}>
                                <Typography variant="subtitle1" sx={{fontSize: {md: "16px", xs: "14px"},color:"primary.dark"}}>
                                    {item}
                                </Typography>
                            </Card>
                        ))}
                    </StyledGrid>
                </Box>
            </Stack>}
        </Box>
    )
}