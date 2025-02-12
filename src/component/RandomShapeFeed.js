import React, {useState} from 'react';
import {Grid, Card, Box, Typography, CardContent, Modal, Dialog} from '@mui/material';
import AboutImage1 from "../images/about/aboutImage1.png"
import nehaImage1 from "../images/nehaImages/nehaImage1.jpg"
import nehaImage2 from "../images/nehaImages/nehaImage2.jpg"
import nehaImage3 from "../images/nehaImages/nehaImage3.jpg"
import nehaImage4 from "../images/nehaImages/nehaImage4.jpg"
import nehaImage5 from "../images/nehaImages/nehaImage5.jpg"
import nehaImage6 from "../images/nehaImages/nehaImage6.jpg"
import nehaImage7 from "../images/nehaImages/nehaImage7.jpg"
import nehaImage8 from "../images/nehaImages/nehaImage8.jpg"
import nehaImage9 from "../images/nehaImages/nehaImage9.jpg"
import nehaImage10 from "../images/nehaImages/nehaImage10.jpg"
import nehaImage11 from "../images/nehaImages/nehaImage11.jpg"
import nehaImage13 from "../images/nehaImages/nehaImage13.jpg"
import nehaImage14 from "../images/nehaImages/nehaImage14.jpg"
import ReactPlayer from "react-player";
import nehaVideo1 from "../images/nehaImages/nehaVideo1.mp4"
import nehaVideo2 from "../images/nehaImages/nehaVideo2.mp4"
import nehaVideo3 from "../images/nehaImages/nehaVideo3.mp4"
import DirectionView from "./DirectionView";
import PropTypes from "prop-types";
import Scrollbar from "../Components/scrollbar";



const RandomShapeFeed = () => {
 const [openModal,setOpenModal]=useState(false);
 const [selectedImage,setSelectedImage]=useState("");

    const row1=[
        {h:"300px",l:3,photo:nehaImage1},
        {h:"300px",l:2.5,photo:nehaImage2},
        {h:"180px",l:3.5,photo:nehaImage14,subRow:[{h:"100px",l:3.5,text:"Neha Chhillar"}]},
        {h:"300px",l:3,photo:nehaImage7},
    ]

    const row2=[
        {h:"520px",l:4,photo:nehaImage10,subRow:[{h:"220px",l:2.5,photo:nehaImage8}]},
        {h:"300px",l:3.5,photo:nehaImage5,subRow:[{h:"440px",l:3.5,photo:nehaImage6}]},
        {h:"210px",l:4.5,vid:nehaVideo1,subRow:[{h:"530px",l:4.5,photo:nehaImage4}]}
    ]

    const row3=[
        {h:"160px",l:3,vid:nehaVideo2},
        {h:"330px",l:2.5,photo:nehaImage13},
        {h:"480px",l:3.5,vid:nehaVideo3},
    ]

    const handleOpen=(val)=>{
        setOpenModal(true)
        setSelectedImage(val)
    }

    return (
        <Grid container spacing={2} >
            <Grid item xs={12} sm={10} md={10} >
                <Grid container spacing={3} sx={{ padding: 2 }}>

            {row1?.map((item, index) => (
                <Grid item xs={12} sm={item?.l} md={item?.l} key={index}>
                    <DirectionView>
                        <Card onClick={()=> handleOpen(item?.photo)}  sx={{cursor:"pointer",height: item?.h,
                            overflow: 'hidden',}}>
                            <Box
                                component="img" src={item?.photo} alt="Responsive"
                                sx={{
                                    backgroundColor: '#eee',
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '8px',
                                }}
                           />
                        </Card>
                    </DirectionView>

                    {item?.subRow?.length>0 && item?.subRow?.map((subItem)=>(
                        <DirectionView>
                        <Card sx={{  height: subItem?.h,
                            overflow: 'hidden',
                            marginTop: 3}}>
                            <Box
                                sx={{
                                    backgroundColor: '#eee',
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '8px',
                                }}
                           >
                            <Typography variant="subtitle2" sx={{color:"primary.darker",fontSize:{md:"35px",xs:"25px"}}}>{subItem?.text}</Typography>
                            </Box>
                        </Card>
                        </DirectionView>
                    ))}

                </Grid>
            ))}

            {row2?.map((item, index) => (
                <Grid item xs={12} sm={item?.l} md={item?.l} key={index}>
                <DirectionView>
                    <Card onClick={()=> item?.photo && handleOpen(item?.photo)} sx={{cursor:item?.photo && "pointer",height: item?.h,
                        overflow: 'hidden'}}>
                        {item?.photo && <Box
                            component="img" src={item?.photo} alt="Responsive"
                            sx={{
                                backgroundColor: '#eee',
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '8px',
                            }}
                        /> }
                        {item?.vid && <ReactPlayer url={item?.vid} playing={true} loop={true}
                                                   playbackRate={1.0} controls width={{md: '60%', xs: "100%"}} height={{md: '100%', xs: "100%"}}
                                                   style={{cursor:"pointer",borderRadius: '8px', border: "3px solid #919EAB"}} />}
                    </Card>
                </DirectionView>
                    {item?.subRow?.length>0 && item?.subRow?.map((subItem)=>(
                        <DirectionView>
                        <Card onClick={()=> subItem?.photo && handleOpen(subItem?.photo)} sx={{cursor:subItem?.photo && "pointer", height: subItem?.h,
                            overflow: 'hidden',
                            marginTop: 3}}>
                            <Box
                                component="img" src={subItem?.photo} alt="Responsive"
                                sx={{
                                    backgroundColor: '#eee',
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '8px',
                                }}
                           />
                        </Card>
                        </DirectionView>
                    ))}
                </Grid>
            ))}
                </Grid>
            </Grid>
            <Grid item xs={12} sm={2} md={2} sx={{mt:2}}>
                <Grid container >
                {row3?.map((item, index) => (
                    <Grid item xs={12} sm={12} md={12} key={index}>
                    <DirectionView>
                        <Card onClick={()=> item?.photo && handleOpen(item?.photo)} sx={{cursor:item?.photo && "pointer", height: item?.h,
                            overflow: 'hidden',mb:3}}>
                            {item?.photo && <Box
                                component="img" src={item?.photo} alt="Responsive"
                                sx={{
                                    backgroundColor: '#eee',
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '8px',
                                }}
                            />}

                            {item?.vid && <ReactPlayer url={item?.vid} playing={true} loop={true}
                                                       playbackRate={1.0} controls width={{md: '60%', xs: "100%"}} height={{md: '500%', xs: "100%"}}
                                                       style={{cursor:"pointer",borderRadius: '8px', border: "3px solid #919EAB"}} />}
                        </Card>
                    </DirectionView>
                        </Grid>
                ))}
                </Grid>
            </Grid>
            {openModal && <ImageModal data={selectedImage}  open={openModal} handleClose={()=> setOpenModal(false)} />}
        </Grid>
    );
};

ImageModal.propTypes = {
    open: PropTypes.bool,
    data: PropTypes.any,
    handleClose: PropTypes.func,
};


function ImageModal({open,data, handleClose}){

    return(
        <Dialog maxWidth="md" open={open} onClose={handleClose}>
            <Scrollbar maxHeight="md">
            <Box
                component="img" src={data} alt="Responsive"
                sx={{
                    backgroundColor: '#eee',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '8px',
                }}
            />
            </Scrollbar>
        </Dialog>
    )
}

export default RandomShapeFeed;
