import {Box, Card, IconButton, Link, Stack} from "@mui/material";
import React, {useState} from "react";
import {Icon} from "@iconify/react";


export default function SocialCard(){
    const [show,setShow]=useState(true);

    const showDrawer=()=>{setShow(!show);};

    return(
        <>
        <Card sx={{p:1,mt:20}}>
            <Stack direction="column" spacing={1}>
                {show && <Link target="_blank" href="https://www.instagram.com/neha_chhillar07?igsh=MWV6ZHB3NG9oZ2RpZw==" underline="none">
                    <IconButton >
                        <Icon icon="mdi:instagram" width="30" height="30"   style={{color: "#3D52A0"}} />
                    </IconButton>
                </Link>}
                {show && <Link  target="_blank" href="https://www.linkedin.com/in/neha-chhillar-a0ab9a225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" underline="none">
                    <IconButton>
                        <Icon icon="mdi:linkedin" width="30" height="30"  style={{color: "#3D52A0"}}  />
                    </IconButton>
                </Link>}
                {show && <Link target="_blank" href='mailto:nehachhillar07@gmail.com'>
                    <IconButton>
                        <Icon icon="mingcute:mail-fill" width="30" height="30" style={{color: "#3D52A0"}} />
                    </IconButton>
                </Link>}
                {show ? ( <IconButton onClick={()=> showDrawer()}>
                        <Icon icon="material-symbols-light:play-arrow-rounded" width="30" height="30"  style={{color: "#3D52A0"}} />
                    </IconButton>
                    ) :(
                    <IconButton onClick={()=> showDrawer()}>
                        <Icon icon="material-symbols-light:arrow-back-2-rounded" width="30" height="30"   style={{color: "#3D52A0"}} />
                    </IconButton>
                    )}
            </Stack>
        </Card>
        </>
    )
}