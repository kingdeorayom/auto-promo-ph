import Layout from '@/layouts/Layout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router'

export async function getStaticPaths() {

    const response = await fetch('http://localhost:3001/vehicles')
    const vehicles = await response.json()

    const paths = vehicles.map(vehicle => {
        return {
            params: {
                brandSlug: vehicle.brand_slug,
                vehicleSlug: vehicle.vehicle_slug
            }
        }
    })

    return {
        paths: paths,
        // paths: [
        //     { params: { brandSlug: 'toyota', vehicleSlug: 'toyota-innova' } },
        //     { params: { brandSlug: 'toyota', vehicleSlug: 'toyota-corolla' } },
        //     { params: { brandSlug: 'mitsubishi', vehicleSlug: 'mitsubishi-mirage-g4' } },
        //     { params: { brandSlug: 'suzuki', vehicleSlug: 'suzuki-swift' } },
        //     { params: { brandSlug: 'geely', vehicleSlug: 'geely-coolray' } },
        // ],
        fallback: false,
    };
}

export async function getStaticProps() {

    // const response = await fetch('api here');
    // const vehicle = await response.json();

    // gonna fetch vehicle details here, made empty for now

    return {
        props: {
            vehicle: [],
        }
    };
}

const VehicleDetails = () => {

    const router = useRouter()

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h2" fontWeight='600'>Showing vehicle details of {`${router.query.vehicleSlug}`}</Typography>
            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Choose vehicle from the most popular brands</Typography>

        </Layout>
    )
}

export default VehicleDetails