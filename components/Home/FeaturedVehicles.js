import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import VehicleCard from '@/components/Vehicles/VehicleCard'
import { useFeaturedVehicles } from '@/hooks/useFeaturedVehicles'
import { ListingContext } from '@/context/ListingContext'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const FeaturedVehicles = () => {

    const { getFeaturedVehicles, isFeaturedVehiclesLoading } = useFeaturedVehicles()
    const { featuredVehicles } = useContext(ListingContext)

    useEffect(() => {
        getFeaturedVehicles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1}>Featured Vehicles</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>Featured vehicles curated just for you</Typography>

            {
                isFeaturedVehiclesLoading ?
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, mb: 4 }}>
                        <CircularProgress />
                    </Box> :
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
            }

        </>
    )
}

export default FeaturedVehicles