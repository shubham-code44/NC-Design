import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from "../Components/navbar";
import Footer from "../pages/footer/Footer"
import {Box, Card, IconButton} from "@mui/material";
import {Icon} from "@iconify/react";
import SocialCard from "../pages/SocialCard";
import Scrollbar from "../Components/scrollbar";

const MainLayout = () => {

    return (
        <div>
            <Navbar/>
            <Box sx={{p:0.5,right:1,top:0,zIndex:998,position:"fixed"}}>
                <SocialCard />
            </Box>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
