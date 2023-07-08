import Layout from '@/layouts/Layout'
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, } from '@mui/material'
import Head from 'next/head'
import styles from '@/styles/Promos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import setCurrency from '@/utils/setCurrency'
import AllVehicles from '@/components/Home/AllVehicles'

export async function getStaticProps() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`);
    const brands = await response.json();

    return {
        props: {
            brands: brands,
        }
    };
}

const Promos = ({ brands }) => {

    return (
        <>
            <Head>
                <title>Promos | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box sx={{
                    width: '100%',
                    backgroundColor: '#1f308a',
                    // paddingLeft: '15px',
                    // paddingRight: '15px',
                    textAlign: 'center',
                }}>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '768px',
                            margin: 'auto',
                            paddingLeft: '5px',
                            paddingRight: '5px',
                            my: '40px'
                        }}
                    >
                        <Box mx={2}>
                            <Typography
                                fontSize='2rem'
                                variant="h1"

                                mt={2.5}
                                mb={1}
                                lineHeight={1}
                                fontWeight='800'
                                color='#ffffff'
                            >
                                Promos
                            </Typography>
                            <Typography
                                fontSize='1rem'
                                variant="h3"
                                fontWeight='400'
                                lineHeight={1.5}
                                mt={3}
                                mb={1}
                                color='#dadada'

                            >
                                View promos offered by Auto Promo PH
                            </Typography>
                        </Box>

                        {/* <Typography fontSize='2rem' variant="h1" fontWeight='700' mb={1} mt={2} color='#343434'>{brand.name}</Typography> */}
                        {/* <Typography fontSize='1rem' variant="h3" lineHeight={1.5} mb={1} color='secondary'>{brand.description}</Typography> */}
                    </Box>
                    <Box className='overlayBackground'></Box>

                </Box>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1280px',
                        margin: 'auto',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        my: '40px'
                    }}
                >

                    <Box>
                        <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={1} color='#343434'>Promos based on brands</Typography>
                        <Typography fontSize='14px' variant="h3" fontWeight='400' color='#505050'>Choose a brand to view its corresponding promos</Typography>
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
                                            href={`promos/${brand.slug}`}
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

export default Promos