import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Grid, Typography } from '@mui/material'
import VehicleCard from '@/components/Vehicles/VehicleCard'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const FeaturedVehicles = () => {

    const [featuredVehicles, setFeaturedVehicles] = useState([])

    const fetchFeaturedVehicles = async () => {
        const response = await fetch(`${API_URL}/vehicles/featured`);
        const vehicles = await response.json();
        setFeaturedVehicles(vehicles)
    }

    useEffect(() => {
        fetchFeaturedVehicles()
    }, [])

    return (
        <>
            <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1}>Featured Vehicles</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>Featured vehicles curated just for you</Typography>
            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >
                {
                    featuredVehicles.map(vehicle => {
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
        </>
    )
}

export default FeaturedVehicles