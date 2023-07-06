import Layout from '@/layouts/Layout'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from '@/styles/Brands.module.css'
import Head from 'next/head';
import AllVehicles from '@/components/Home/AllVehicles';

export async function getStaticProps() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`);
    const brands = await response.json();

    return {
        props: {
            brands: brands,
        }
    };
}

const Brands = ({ brands }) => {

    return (
        <>
            <Head>
                <title>Brands | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.wrapper}>
                    <Box>
                        <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={1} color='#343434'>All Brands</Typography>
                        <Typography fontSize='14px' variant="h3" fontWeight='400' color='#505050'>Choose vehicle from the most popular brands</Typography>
                    </Box>

                    <Grid
                        container
                        mt={2}
                        mb={4}
                        rowSpacing={3}
                        columnSpacing={2}
                    >

                        {
                            brands.map(brand => {
                                return (
                                    <Grid key={brand._id} item xs={4} sm={4} md={3} lg={2}>
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
                                    </Grid>
                                )
                            })
                        }

                    </Grid>

                    <AllVehicles />

                </Box>

            </Layout>
        </>
    )
}

export default Brands