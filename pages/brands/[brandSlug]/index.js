import Layout from '@/layouts/Layout';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router'
import VehicleCard from '@/components/Vehicles/VehicleCard';
import Head from 'next/head';
import Image from 'next/image';

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

    const brandResponse = await fetch(`${API_URL}/brands/get/slug/${brandSlug}`);
    const brand = await brandResponse.json();

    return {
        props: {
            vehicles: vehicles,
            brand: brand
        },
        revalidate: 10
    };
}

const Brand = ({ vehicles, brand }) => {

    const router = useRouter()

    const temporaryBrandName = router.query.brandSlug
    var brandName = temporaryBrandName.charAt(0).toUpperCase() + temporaryBrandName.slice(1)

    if (brandName === "Mg") {
        brandName = "MG"
    }

    return (
        <>
            <Head>
                <title>{brandName} | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>

                <Box sx={{
                    width: '100%',
                    backgroundColor: '#ffffff',
                    paddingLeft: '15px',
                    paddingRight: '15px',
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
                        <Typography fontSize='2rem' variant="h1" fontWeight='700' mb={1} mt={2} color='#343434'>{brand.name}</Typography>
                        <Typography fontSize='1rem' variant="h3" lineHeight={1.5} mb={1} color='secondary'>{brand.description}</Typography>
                    </Box>

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
                    <Typography fontSize='1.5rem' variant="h2" fontWeight='700'>All vehicles</Typography>
                    <Typography fontSize='1rem' variant="subtitle1" color='secondary'>All available vehicles of {brand.name}</Typography>

                    <Grid
                        container
                        mt={2}
                        mb={4}
                        rowSpacing={3}
                        columnSpacing={2}
                    >

                        {vehicles.map((vehicle) => {
                            return (
                                <Grid key={vehicle._id} item xs={12} sm={6} lg={3}>
                                    <Link href={`${vehicle.brand_slug}/${vehicle.vehicle_slug}`}>
                                        <VehicleCard
                                            image={`${API_URL}${vehicle.image}`}
                                            name={vehicle.name}
                                            price={vehicle.price}
                                            downpayment={vehicle.price}
                                        />
                                    </Link>
                                </Grid>
                            )
                        })}

                    </Grid>
                </Box>

            </Layout>
        </>
    )
}

export default Brand