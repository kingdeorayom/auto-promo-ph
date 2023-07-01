import Link from 'next/link'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import sedan from '@/public/sedan.jpg'
import suv from '@/public/suv.jpg'
import hatchback from '@/public/hatchback.jpg'
import van from '@/public/van.jpg'
import styles from '@/styles/Home.module.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const BodyTypeSearch = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={5} mb={1} color='#343434'  >Browse cars by body type</Typography>
            <Typography fontSize='14px' variant="h3" fontWeight='400' color='#505050'  >Whether you&#39;re looking for a sedan for personal use or an SUV for that long-awaited family trip, you can find it all here</Typography>

            <Carousel
                swipeable={true}
                infinite={true}
                draggable={false}
                responsive={responsive}
                className={styles.bodyTypeCarousel}
            >
                <Link href='/results?q=sedan'>
                    <Box className={styles.categoryImageBox}>
                        <Image
                            src={sedan}
                            alt="Mitsubishi Mirage G4"
                            className={styles.backgroundImage}
                            priority
                        />
                        <Typography fontSize='1.4rem' fontWeight='500' color='white' className={styles.categoryLabel}>Sedan</Typography>
                    </Box>
                </Link>
                <Link href='/results?q=suv'>
                    <Box className={styles.categoryImageBox}>
                        <Image
                            src={suv}
                            alt="Mitsubishi Mirage G4"
                            className={styles.backgroundImage}
                            priority
                        />
                        <Typography fontSize='1.4rem' fontWeight='500' color='white' className={styles.categoryLabel}>SUV</Typography>
                    </Box>
                </Link>
                <Link href='/results?q=hatchback'>
                    <Box className={styles.categoryImageBox}>
                        <Image
                            src={hatchback}
                            alt="Mitsubishi Mirage G4"
                            className={styles.backgroundImage}
                            priority
                        />
                        <Typography fontSize='1.4rem' fontWeight='500' color='white' className={styles.categoryLabel}>Hatchback</Typography>
                    </Box>
                </Link>
                <Link href='/results?q=van'>
                    <Box className={styles.categoryImageBox}>
                        <Image
                            src={van}
                            alt="Mitsubishi Mirage G4"
                            className={styles.backgroundImage}
                            priority
                        />
                        <Typography fontSize='1.4rem' fontWeight='500' color='white' className={styles.categoryLabel}>Van</Typography>
                    </Box>
                </Link>
            </Carousel>
        </>
    )
}

export default BodyTypeSearch