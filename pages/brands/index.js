import Layout from '@/layouts/Layout'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import geely from '../../public/geely.png'

export async function getStaticProps() {

    const response = await fetch('http://localhost:3001/brands');
    const brands = await response.json();

    return {
        props: {
            brands: brands,
        }
    };
}

const Brands = ({ brands }) => {

    // console.log(brands)

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h2" fontWeight='600'>All Brands</Typography>
            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Choose vehicle from the most popular brands</Typography>

            {
                brands.map(brand => {
                    return (
                        <Link
                            key={brand._id}
                            href={`brands/${brand.slug}`}
                        >
                            <Typography my={2}>{brand.name}</Typography>
                        </Link>
                    )
                })
            }

        </Layout>
    )
}

export default Brands