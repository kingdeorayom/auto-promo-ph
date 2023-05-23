import Layout from '@/layouts/Layout';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router'

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

            {
                vehicles.map(vehicle => {
                    return (
                        <Link
                            key={vehicle._id}
                            href={`${vehicle.brand_slug}/${vehicle.vehicle_slug}`}
                        >
                            <Typography my={2}>{vehicle.name}</Typography>
                        </Link>
                    )
                })
            }

        </Layout>

        // <div>
        //     <p>Showing all vehicles of {router.query.brandSlug}</p>
        //     <div className='brands'>
        //         {
        //             vehicles.map(vehicle => {
        //                 console.log(vehicle)
        //                 return (
        //                     <Link
        //                         key={vehicle._id}
        //                         className='brand'
        //                     >
        //                         {vehicle.name}
        //                     </Link>
        //                 )
        //             })
        //         }
        //     </div>
        // </div>
    )
}

export default Brand