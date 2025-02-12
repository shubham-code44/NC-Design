import PropTypes from "prop-types";
import {Box} from "@mui/material";
import { motion } from 'framer-motion';

DirectionView.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node,
};


export default function DirectionView({children, sx, ...other}) {


    const pageVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        in: {
            opacity: 1,
            y: 0,
        },
        out: {
            opacity: 0,
            y: 50,
        },
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.8
    };


    return (
        <Box sx={{ ...sx}} {...other}>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                {children}
            </motion.div>
        </Box>
);
}