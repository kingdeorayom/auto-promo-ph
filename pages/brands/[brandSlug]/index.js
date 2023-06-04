import Layout from '@/layouts/Layout';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router'
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';
import mitsubishi from '../../../public/mitsubishi-g4.webp'
import styles from '../../../styles/Vehicles.module.css'

export async function getStaticPaths() {

    const response = await fetch('http://localhost:3001/brands');
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

    const response = await fetch(`http://localhost:3001/brands/vehicle/${brandSlug}`);
    const vehicles = await response.json();

    return {
        props: {
            vehicles: vehicles,
        }
    };
}

const Brand = ({ vehicles }) => {

    const router = useRouter()
    console.log(vehicles)

    return (

        <Layout>
            <Typography fontSize='2rem' variant="h2" fontWeight='600'>Showing all vehicles of {router.query.brandSlug}</Typography>
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
                                <Box className={styles.imageBox}>
                                    <Image
                                        src={mitsubishi}
                                        alt="Mitsubishi Mirage G4"
                                        className={styles.vehicleImage}
                                        priority
                                    />
                                </Box>
                                <Typography fontWeight='500' variant='h4' fontSize='1rem' mt={1.5}>{vehicle.name}</Typography>
                                <Typography color='secondary'>PHP {vehicle.price}</Typography>
                                <Typography color='secondary'>DP starts @ PHP 23,829.00</Typography>
                                <Stack direction='row' spacing={1}>
                                    <Typography variant="button" fontWeight='500' color='primary.main'>
                                        VIEW MORE INFORMATION
                                    </Typography>
                                    <EastIcon color='primary' />
                                </Stack>
                            </Link>
                        </Grid>
                    )
                })}

            </Grid>

        </Layout>
    )
}

export default Brand