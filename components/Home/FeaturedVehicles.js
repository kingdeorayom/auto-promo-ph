import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import VehicleCard from '@/components/Vehicles/VehicleCard'
import { useFeaturedVehicles } from '@/hooks/useFeaturedVehicles'
import { ListingContext } from '@/context/ListingContext'
import styles from '@/styles/Vehicles.module.css'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const FeaturedVehicles = ({ isHome, hasSeeAll }) => {

    const { getFeaturedVehicles, isFeaturedVehiclesLoading } = useFeaturedVehicles()
    const { featuredVehicles } = useContext(ListingContext)

    useEffect(() => {
        getFeaturedVehicles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Box>
                    <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1} color='#343434'>Featured Vehicles</Typography>
                    <Typography fontSize='1rem' variant="h3" color='secondary'>Featured vehicles curated just for you</Typography>
                </Box>
                {
                    hasSeeAll ?
                        <Link href='/vehicles/featured'>
                            <Box>
                                <Typography color='#1976d2' fontSize='14px' fontWeight='500' className={styles.seeAll}>See all</Typography>
                            </Box>
                        </Link> : null
                }
            </Box>

            {
                isFeaturedVehiclesLoading ?
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3, mb: 4 }}>
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
                            isHome ?
                                featuredVehicles.slice(0, 4).map(vehicle => {
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
                                }) :
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