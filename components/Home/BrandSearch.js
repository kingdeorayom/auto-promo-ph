import Link from 'next/link'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

import styles from '@/styles/Brands.module.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const BrandSearch = ({ brands }) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    console.log(brands)

    return (
        <>
            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={3} mb={1} color='#343434'  >Browse cars by brand</Typography>
            <Typography fontSize='14px' variant="h3" fontWeight='400' color='#505050'  >Choose vehicle from the most popular brands</Typography>

            <Carousel
                swipeable={true}
                infinite={true}
                draggable={false}
                responsive={responsive}
                className={styles.brandSearchCarousel}
            >
                {
                    brands.map(brand => {
                        return (
                            <Link
                                key={brand._id}
                                href={`brands/${brand.slug}`}
                            >
                                <Box
                                    sx={{
                                        // backgroundColor: '#f5f8ff',
                                        border: '1px solid #d3d3d3',
                                        borderRadius: 2,
                                        paddingTop: 2.5,
                                        paddingBottom: 2,
                                        textAlign: 'center',
                                        mx: 1,
                                        '&:hover': {
                                            transform: 'translate(0, -7px)',
                                            transition: 'all 0.1s linear'
                                        }
                                    }}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}${brand.logo}`}
                                        width={90}
                                        height={50}
                                        unoptimized={true}
                                        alt=''
                                    />
                                    <Box mx={2}>
                                        <Typography
                                            fontSize='14px'
                                            variant="h3"
                                            fontWeight='600'

                                            mb={1}
                                            mt={1}
                                            color='#505050'
                                        >
                                            {brand.name}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Link>
                        )
                    })
                }
            </Carousel>
        </>
    )
}

export default BrandSearch