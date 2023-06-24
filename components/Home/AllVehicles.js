import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import VehicleCard from '@/components/Vehicles/VehicleCard'
import { useAllVehicles } from '@/hooks/useAllVehicles'
import { ListingContext } from '@/context/ListingContext'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const AllVehicles = ({ isHome }) => {

    const { getAllVehicles, isAllVehiclesLoading } = useAllVehicles()
    const { allVehicles } = useContext(ListingContext)

    useEffect(() => {
        getAllVehicles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1} color='#343434'>All Vehicles</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>All vehicles available under Auto Promo PH</Typography>

            {
                isAllVehiclesLoading ?
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
                            isHome ? allVehicles.slice(0, 4).reverse().map(vehicle => {
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
                            }) : allVehicles.reverse().map(vehicle => {
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

export default AllVehicles