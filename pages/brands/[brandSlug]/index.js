import Layout from '@/layouts/Layout';
import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router'
import VehicleCard from '@/components/Vehicles/VehicleCard';
import Head from 'next/head';

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

    return {
        props: {
            vehicles: vehicles,
        },
        revalidate: 10
    };
}

const Brand = ({ vehicles }) => {

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
                <Typography fontSize='2rem' variant="h2" fontWeight='700'>{`Showing all vehicles of ${brandName}`}</Typography>
                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>There are currently {vehicles.length} vehicles in this brand</Typography>

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

            </Layout>
        </>
    )
}

export default Brand