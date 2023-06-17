import Layout from '@/layouts/Layout'
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import VehicleCard from '@/components/Vehicles/VehicleCard'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const SearchResults = () => {

    const router = useRouter()

    const [results, setResults] = useState([])

    const fetchSearchResults = async () => {
        const response = await fetch(`${API_URL}/search/${router.query.q}`);
        const vehicle = await response.json();
        setResults(vehicle)
    }

    useEffect(() => {
        fetchSearchResults()
    })

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h1" fontWeight='700' mb={1}>{`Showing search results for '${router.query.q}'`}</Typography>
            <Typography fontSize='1rem' variant="h3" lineHeight={1.5} color='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >
                {
                    results.map(vehicle => {
                        return (
                            <Grid key={vehicle._id} item xs={12} sm={6} lg={3}>
                                <Link href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`}>
                                    <VehicleCard
                                        image={`${API_URL}${vehicle.image}`}
                                        name={vehicle.name}
                                        price={vehicle.price}
                                        downpayment={vehicle.price}
                                    />
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Layout>
    )
}

export default SearchResults