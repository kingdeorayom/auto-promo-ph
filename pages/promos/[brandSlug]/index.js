import Layout from '@/layouts/Layout';
import { Alert, AlertTitle, Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router'
import VehicleCard from '@/components/Vehicles/VehicleCard';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Brands.module.css';
import setCurrency from '@/utils/setCurrency';

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getStaticPaths() {

    const response = await fetch(`${API_URL}/brands`);
    const brands = await response.json();

    const paths = brands.map(brand => {
        return { params: { brandSlug: brand.slug.toString() } }
    })

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {

    const brandSlug = context.params.brandSlug

    const response = await fetch(`${API_URL}/brands/vehicle/${brandSlug}`);
    const vehicles = await response.json();

    let brand

    try {
        const brandResponse = await fetch(`${API_URL}/brands/get/slug/${brandSlug}`);
        // const brandResponse = await fetch(`${API_URL}/brands/get/slug/toyota`);
        brand = await brandResponse.json();
    } catch (error) {
        console.log(error)
    }

    console.log(brand)

    return {
        props: {
            vehicles: vehicles,
            brand: brand
        },
        revalidate: 10
    };
}

const Promo = ({ vehicles, brand }) => {

    console.log(vehicles)

    const router = useRouter()

    const temporaryBrandName = router.query.brandSlug
    var brandName = temporaryBrandName.charAt(0).toUpperCase() + temporaryBrandName.slice(1)

    if (brandName === "Mg") {
        brandName = "MG"
    }

    return (
        <>
            <Head>
                <title>{`${brandName} | Auto Promo PH`}</title>
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
                            my: '40px'
                        }}
                    >
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}${brand.logo}`}
                            width={90}
                            height={50}
                            unoptimized={true}
                            alt=''
                        />

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
                                {`${brand.name} Promos`}
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
                                {brand.description}
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
                        margin: '40px auto',
                        paddingLeft: '15px',
                        paddingRight: '15px'
                    }}
                >

                    <Box>
                        <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={1} color='#343434'>All vehicles</Typography>
                        <Typography fontSize='14px' variant="h3" fontWeight='400' color='#505050'  >{`All available promos of ${brandName}`}</Typography>
                    </Box>

                    <Alert severity="warning" sx={{ mt: 4, mb: 4 }}>
                        <AlertTitle>Important!</AlertTitle>
                        The following promos below is subject to change without prior notice.
                    </Alert>

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
                                    vehicles.map((item, index) => {
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

export default Promo