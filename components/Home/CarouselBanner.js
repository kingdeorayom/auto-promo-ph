import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '@/styles/Banner.module.css'
import Link from 'next/link';
import { Box } from '@mui/material';
import Image from 'next/image';
import banner1 from '@/public/banner1.jpg'
import banner2 from '@/public/banner2.jpg'
import banner3 from '@/public/banner3.jpg'

const CarouselBanner = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            swipeable={true}
            infinite={true}
            draggable={false}
            responsive={responsive}
            className={styles.carouselBanner}
        >
            <Box className={styles.categoryImageBox}>
                <Image
                    src={banner1}
                    alt="Mitsubishi Mirage G4"
                    className={styles.backgroundImage}
                    priority
                />
            </Box>
            <Box className={styles.categoryImageBox}>
                <Image
                    src={banner2}
                    alt="Mitsubishi Mirage G4"
                    className={styles.backgroundImage}
                    priority
                />
            </Box>
            <Box className={styles.categoryImageBox}>
                <Image
                    src={banner3}
                    alt="Mitsubishi Mirage G4"
                    className={styles.backgroundImage}
                    priority
                />
            </Box>
        </Carousel>
    )
}

export default CarouselBanner