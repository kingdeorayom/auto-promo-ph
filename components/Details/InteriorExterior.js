import { Box, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '@/styles/Details.module.css'
import Link from 'next/link';
import Image from 'next/image';

const InteriorExterior = ({ vehicle }) => {

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
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return (
        <Box mt={5} mb={3}>
            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={3} mb={2} color='#343434'>{`Take a look at the ${vehicle.name}'s Interior and Exterior Design`}</Typography>

            <Box className={styles.extraImages}>
                <Carousel
                    swipeable={true}
                    // infinite={true}
                    draggable={false}
                    responsive={responsive}
                    className={styles.extraImagesCarousel}
                >
                    {
                        vehicle.extraImages.map((item, index) => {
                            return (
                                <Link data-fancybox="extraImages" href={item} key={index}>
                                    <Box className={styles.extraImageBox} width={{ xs: "100%", sm: '95%' }} height={{ xs: 225, sm: 220 }} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                        <Image
                                            src={item}
                                            alt={vehicle.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            className={styles.extraImage}
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

export default InteriorExterior