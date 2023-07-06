import Layout from '@/layouts/Layout'
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from '@mui/material'
import Head from 'next/head'
import styles from '@/styles/Promos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import setCurrency from '@/utils/setCurrency'

export async function getStaticProps(context) {

    const vehicle_slug = 'mitsubishi-l300'

    const vehicleResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/detail/${vehicle_slug}`);
    const vehicle = await vehicleResponse.json();

    let url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/variant/detail`);

    vehicle.variants.forEach(item => url.searchParams.append('vehicleSlug', item.vehicle_slug))

    console.log(url.href)

    const variantReponse = await fetch(url.href)
    const variants = await variantReponse.json();

    return {
        props: {
            variants: variants
        },
        revalidate: 10
    };
}

const Promos = ({ variants }) => {

    console.log(variants)

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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum vel porro quidem. Fugiat asperiores quod ipsam rerum eaque cupiditate illo quidem.
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
                    <Typography mb={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quasi commodi, saepe officiis vitae veritatis eveniet temporibus voluptate alias ipsum provident consequatur cumque autem laudantium ex laboriosam quibusdam beatae ad?</Typography>

                    <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #d3d3d3', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{}}>
                                <TableRow>
                                    <TableCell align='center' sx={{ fontWeight: '700' }}>Image</TableCell>
                                    <TableCell align='center' sx={{ fontWeight: '700' }}>Name</TableCell>
                                    <TableCell align='center' sx={{ fontWeight: '700' }}>Downpayment</TableCell>
                                    {/* <TableCell align='center'>Discount</TableCell> */}
                                    <TableCell align='center' sx={{ fontWeight: '700' }}>5 years amortization</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    variants.map((item, index) => {
                                        return (
                                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell align='center' component="th" scope="row">
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_API_URL}${item.image}`}
                                                        alt={item.name}
                                                        width={200}
                                                        height={100}
                                                        style={{ objectFit: 'contain' }}
                                                    />
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <Link className={styles.link} href={`/brands/${item.brand_slug}/${item.vehicle_slug}`} target='_blank'>
                                                        <Typography fontSize='14px' color='primary'>{item.name}</Typography>
                                                    </Link>
                                                </TableCell>
                                                <TableCell align='center'>₱ {setCurrency(item.downpayment)}</TableCell>
                                                <TableCell align='center'>₱ {setCurrency(item.amortization)}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

            </Layout>
        </>
    )
}

export default Promos