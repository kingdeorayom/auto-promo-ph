import React from 'react'
import styles from '@/styles/Ratings.module.css'
import { Box, Stack, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rating from '@mui/material/Rating';

const Ratings = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return (
        <Box className={styles.wrapper}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography
                    fontSize='2.3rem'
                    variant="h1"
                    mt={1}
                    mb={2.5}
                    lineHeight={1}
                    fontWeight='800'
                    color='#1f308a'

                >
                    Transact with an expert trusted in the local community
                </Typography>
                <Typography fontSize='1.1rem' variant="h3" fontWeight='500' lineHeight={1.5} mb={2} color='#505050'  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit
                </Typography>
            </Box>
            <Carousel
                swipeable={true}
                infinite={true}
                draggable={false}
                responsive={responsive}
                className={styles.ratingsCarousel}
            >
                <Box mx={1}>
                    <Rating name="read-only" value={5} readOnly sx={{ mb: 2 }} />
                    <Typography fontWeight='700' mb={2}>Very easy to transact with</Typography>
                    <Typography>Very easy to transact with. Super Agent! Unit was exactly as advertised. Very professional and reliable!</Typography>
                </Box>
                <Box mx={1}>
                    <Rating name="read-only" value={4} readOnly sx={{ mb: 2 }} />
                    <Typography fontWeight='700' mb={2}>Highly recommended car seller</Typography>
                    <Typography>Highly Recommended Car Dealer! Trustworthy and very easy to deal with! Excellent service! No complains here this is our second time to buy a unit with</Typography>
                </Box>
                <Box mx={1}>
                    <Rating name="read-only" value={5} readOnly sx={{ mb: 2 }} />
                    <Typography fontWeight='700' mb={2}>Very easy to transact with</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam et eligendi expedita aspernatur saepe delectus ratione! Omnis iusto facere officia sit optio adipisci aliquid labore minus, asperiores laborum cumque.</Typography>
                </Box>
                <Box mx={1}>
                    <Rating name="read-only" value={5} readOnly sx={{ mb: 2 }} />
                    <Typography fontWeight='700' mb={2}>Very easy to transact with</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam et eligendi expedita aspernatur saepe delectus ratione! Omnis iusto facere officia sit optio adipisci aliquid labore minus, asperiores laborum cumque.</Typography>
                </Box>
                <Box mx={1}>
                    <Rating name="read-only" value={4} readOnly sx={{ mb: 2 }} />
                    <Typography fontWeight='700' mb={2}>Very easy to transact with</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam et eligendi expedita aspernatur saepe delectus ratione! Omnis iusto facere officia sit optio adipisci aliquid labore minus, asperiores laborum cumque.</Typography>
                </Box>
            </Carousel>
            {/* <Stack direction={{ xs: 'column' }} display='flex' justifyContent='space-around' alignItems='center' mt={5}>
                <Box sx={{ width: 250, height: 250, backgroundColor: "red", mx: 1 }} />
                <Box sx={{ width: 250, height: 250, backgroundColor: "red", mx: 1 }} />
                <Box sx={{ width: 250, height: 250, backgroundColor: "red", mx: 1 }} />
            </Stack> */}
        </Box>
    )
}

export default Ratings