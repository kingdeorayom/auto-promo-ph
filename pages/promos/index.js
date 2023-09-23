import Layout from '@/layouts/Layout'
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, } from '@mui/material'
import Head from 'next/head'
import styles from '@/styles/Promos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import setCurrency from '@/utils/setCurrency'
import AllVehicles from '@/components/Home/AllVehicles'
import corporate from '@/public/corporate.png'
import facebook_icon from '@/public/facebook_icon.svg'
import viber_icon from '@/public/viber_icon.svg'
import gmail_icon from '@/public/gmail_icon.svg'

export async function getStaticProps() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`);
    const brands = await response.json();

    return {
        props: {
            brands: brands,
        },
        revalidate: 1
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

                <Box className={styles.welcome}>
                    <Box
                        sx={{
                            mb: 0, paddingLeft: '15px', paddingRight: '15px',
                            background: "linear-gradient(rgba(31,48,138,9), rgba(31,48,138,.2)), url(https://static1.eyellowpages.ph/assets/yp_home_bg-8b8da4e918d8629254f2955c51da2e5c43be81ce031d3b417800e4991ff3d2e7.png) transparent no-repeat",
                        }}
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Box textAlign='center'>
                            <Box mx={2} mb={4}>
                                <Typography
                                    fontSize='2rem'
                                    variant="h1"

                                    mt={2.5}
                                    mb={1}
                                    lineHeight={1}
                                    fontWeight='800'
                                    color='#ffffff'
                                >
                                    Exciting promos just for you
                                </Typography>
                                <Typography
                                    fontSize='1rem'
                                    variant="h3"
                                    fontWeight='500'
                                    lineHeight={1.5}
                                    mt={3}
                                    mb={1}
                                    color='#ffffff'
                                >
                                    View promos offered by Auto Promo PH
                                </Typography>
                            </Box>

                        </Box>
                        <Box display={{ xs: 'none', sm: 'block' }}>
                            <Image
                                src={corporate}
                                alt='Dhang Casten'
                                height={400}
                                style={{ aspectRatio: 1 }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* <Box sx={{
                    width: '100%',
                    backgroundColor: '#1f308a',
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

                    </Box>
                    <Box className='overlayBackground'></Box>

                </Box> */}

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