import React, {useState} from 'react';
import {Icon} from "@iconify/react"
import {
    AppBar,
    Typography,
    Container,
    Box,
    AccordionSummary,
   Accordion, Grid, Stack, IconButton, Link
} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {PATH_DASHBOARD} from "../../routes/paths";
import MenuIcon from '@mui/icons-material/Menu';
import wall4 from "../../images/background/wall4.jpg";
import {styled} from "@mui/material/styles";


const StyledRightGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '25px',
    justifyContent:"center",
    alignItems:"start",
    gridTemplateColumns: "repeat(auto-fit, 230px)",
}));

const StyledLeftGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '25px',
    justifyContent:"center",
    alignItems:"center",
    gridTemplateColumns: "repeat(auto-fit, 160px)",
}));


const Navbar = () => {
    const navigate = useNavigate()
    const [expanded, setExpanded] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const pages = [
        {title: 'Portfolio', path: PATH_DASHBOARD.profile},
        {title: 'Resume', path: PATH_DASHBOARD.about},
        {title: "Project", path: PATH_DASHBOARD.about},
        {title: "About", path: PATH_DASHBOARD.about},
        {title: "Contact", path: PATH_DASHBOARD.about},
    ];

    const MENU = [
        {title: "Home", path: PATH_DASHBOARD.home,icon:"material-symbols:home-rounded",link:'',color:"#365B23"},
        {title: "About", path: PATH_DASHBOARD.about,icon:"flat-color-icons:about",link:'',color:"#1939B7"},
        {title: "Get In Touch", path: "",link:"mailto:nehachhillar07@gmail.com",icon:"vaadin:touch",color:"green"},
        {title: "Resume", path:PATH_DASHBOARD.resume,icon:"mdi:resume",link:'',color:"#E11B22"},

    ]

    const PROJECT = [
        {title: "Building UX in HR & People Management", path: PATH_DASHBOARD.caseStudy1,icon:"ix:user-management-filled",color:"#365B23"},
        {title: "Website Design at Texlaculture", path: PATH_DASHBOARD.caseStudy2,icon:"gg:website",color:"#1939B7"},
        {title: "Trade India's website redesign to gain user's trust", path: PATH_DASHBOARD.caseStudy3,icon:"zondicons:travel",color:"#E11B22"},
    ]


    return (
        <>
        <AppBar position="fixed" color="inherit" sx={{
            backgroundImage: `url(${wall4})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            p: 1,
            backdropFilter: 'blur(1px)',
            boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}>
            <Container style={{padding: '0px', maxWidth: "100%"}}>
                <Accordion expanded={expanded} sx={{
                    backgroundColor: "transparent",
                    backgroundImage: "none",
                    boxShadow: "0",
                    border: 'none', // Border to enhance glass effect
                }}>
                    <AccordionSummary
                        onClick={() => {
                            setOpenModal(!openModal)
                            expanded?setExpanded(false):setExpanded(true)
                        }
                        }
                        expandIcon={expanded ? <IconButton  iconStyle={{width: 60, height: 60}} onClick={() => setExpanded(false)}><MenuIcon /></IconButton> :
                            <IconButton onClick={() => setExpanded(true)}><MenuIcon/></IconButton>}
                        aria-controls="panel1-content"
                        id="panel1-header">
                        <Typography sx={{fontSize:{md:"24px",xs:"18px"},fontWeight:500,fontFamily:"Futura"}} >Neha Chhillar ----</Typography>
                    </AccordionSummary>
                </Accordion>
            </Container>
        </AppBar>
            {openModal && (
                <>
                <Box
                    onClick={() => {
                    setOpenModal(!openModal)
                    expanded?setExpanded(false):setExpanded(true)
                }}
                    sx={{
                      width:"100%",
                      height:{lg:"auto",md:"350px",xs:"550px"},
                      position:"fixed",
                      left:6,
                      right:6,
                      borderRadius:2,
                      top:25,backgroundColor:"primary.darker",
                      p:12, opacity: 0.2,mt:10,

                      zIndex:1000
                  }}
                />
                <Grid  onClick={() => {
                    setOpenModal(!openModal)
                    expanded?setExpanded(false):setExpanded(true)
                }} container spacing={2} sx={{position:"fixed",top:130,zIndex:1000}}>
                     <Grid item xs={12} md={6}>
                         <StyledLeftGrid>
                             {MENU?.map((item) => (
                                 <Box>
                                     {item?.link ? (
                                    <Link target="_blank" href='mailto:nehachhillar07@gmail.com'>
                                        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{
                                            p:2,
                                            borderRadius: 2,backgroundColor:"white", border: '1px solid',
                                            borderColor: 'grey.300',
                                            '&:hover': {
                                                boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                            },
                                            cursor: "pointer"}}>
                                            <Icon icon={item?.icon} width="24" height="24" />
                                            <Typography variant="h5"  sx={{
                                                fontWeight: 500,
                                            }}>{item?.title}</Typography>
                                        </Stack>
                                    </Link>
                                ) : (
                                 <Stack direction="row" onClick={() => {
                                     setOpenModal(!openModal)
                                     expanded?setExpanded(false):setExpanded(true)
                                     navigate(item?.path)
                                 }} spacing={1} justifyContent="center" alignItems="center" sx={{
                                         p:2,
                                         borderRadius: 2,backgroundColor:"white", border: '1px solid',
                                         borderColor: 'grey.300',
                                         '&:hover': {
                                             boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                         },
                                         cursor: "pointer"}}>
                                     <Icon icon={item?.icon} width="20" height="20" color={item?.color} />
                                     <Typography variant="h5" sx={{
                                         fontWeight: 600,
                                         color:item?.color
                                     }}>{item?.title}</Typography>
                                 </Stack>

                             )}
                                 </Box>
                             ))}
                         </StyledLeftGrid>
                     </Grid>
                     <Grid item xs={12} md={6} >

                         <StyledRightGrid>
                             {PROJECT?.map((item) => (
                                 <Stack direction="row" spacing={1} onClick={() => {
                                     setOpenModal(!openModal)
                                     expanded?setExpanded(false):setExpanded(true)
                                     navigate(item?.path)
                                 }} justifyContent="center" alignItems="start" sx={{
                                     p:2,
                                     borderRadius: 2,backgroundColor:"white", border: '1px solid',
                                     borderColor: 'grey.300',
                                     '&:hover': {
                                         boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                     },
                                     cursor: "pointer"}}>
                                     <Icon icon={item?.icon} width="40" height="40" color={item?.color} />
                                     <Typography variant="h5"  sx={{
                                         fontWeight: 500,
                                         color:item?.color
                                     }}>{item?.title}</Typography>
                                 </Stack>
                             ))}
                         </StyledRightGrid>
                     </Grid>
                </Grid>
                </>
            )}
        </>
    );
};

export default Navbar;
