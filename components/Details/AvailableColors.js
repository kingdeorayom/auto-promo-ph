import { Box, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '@/styles/Details.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const AvailableColors = ({ vehicle, isDesktop }) => {

    const colorCarouselLarge = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    const colorCarouselSmall = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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

    Fancybox.bind("[data-fancybox]", {
        closeButton: true,
    });

    return (
        isDesktop ?
            <Box display={{ xs: 'none', md: 'block' }}>

                <Typography fontSize='14px' variant="subtitle1" color='#505050' mb={0}>This vehicle comes with {vehicle.colors.length} available colors
                </Typography>

                <Box className={styles.colorImages}>
                    <Carousel
                        swipeable={true}
                        // infinite={true}
                        draggable={false}
                        responsive={colorCarouselLarge}
                        className={styles.colorImagesCarousel}
                    >
                        {
                            vehicle.colors.map((item, index) => {
                                return (
                                    <Link data-fancybox="colors" href={item} key={index}>
                                        <Box className={styles.colorImageBox} width={{ xs: "100%", sm: '95%' }} height={{ xs: 225, sm: 220 }} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                            <Image
                                                src={item}
                                                alt={vehicle.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                className={styles.colorImage}
                                                placeholder='blur'
                                                blurDataURL={item}
                                            />
                                        </Box>
                                    </Link>
                                )
                            })
                        }
                    </Carousel>
                </Box>

            </Box> :
            <Box mt={4} display={{ xs: 'block', md: 'none' }}>
                <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={1} color='#343434'>Available colors</Typography>
                <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={0}>This vehicle comes with {vehicle.colors.length} available colors
                </Typography>

                <Box className={styles.colorImages}>
                    <Carousel
                        swipeable={true}
                        // infinite={true}
                        draggable={false}
                        responsive={colorCarouselSmall}
                        className={styles.colorImagesCarousel}
                    >
                        {
                            vehicle.colors.map((item, index) => {
                                return (
                                    <Link data-fancybox="colors" href={item} key={index}>
                                        <Box className={styles.colorImageBox} width={{ xs: "100%", sm: '95%' }} height={{ xs: 225, sm: 220 }} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                            <Image
                                                src={item}
                                                alt={vehicle.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                className={styles.colorImage}
                                                placeholder='blur'
                                                blurDataURL={item}
                                            />
                                        </Box>
                                    </Link>
                                )
                            })
                        }
                    </Carousel>
                </Box>
            </Box>
    )
}

export default AvailableColors