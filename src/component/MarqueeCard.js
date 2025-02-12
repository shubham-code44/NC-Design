import {Typography, Stack, Box} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

MarqueeCard.propTypes = {
    data: PropTypes.object,
};

export default function MarqueeCard({data}) {

    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" px={2} py={2} border="1px solid" sx={{borderColor: "action.selected", borderRadius: 2}}>
            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements,react/no-unknown-property */}
            <marquee behavior="scroll" direction="left" >
                <Stack width="100%" direction="row" gap={5}>
                    <Stack width="100%" direction="row" justifyContent="space-between" spacing={4}>
                        <Stack width="100%">
                            <Typography variant="subtitle2" sx={{color: "primary.dark",fontSize: {md: "18px", xs: "14px"}}} >
                                {data?.message1}  {data?.message2} {data?.message3}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </marquee>
        </Box>
    )

}

