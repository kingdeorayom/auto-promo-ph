import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useEffect, useContext } from 'react'
import VehicleCard from '@/components/Vehicles/VehicleCard'
import { ListingContext } from '@/context/ListingContext'
import { useVehiclesSuggestions } from '@/hooks/useVehiclesSuggestions'
import styles from '@/styles/Vehicles.module.css'


const API_URL = process.env.NEXT_PUBLIC_API_URL

const Suggestion = ({ brand_slug, brand }) => {

    const { getVehiclesSuggestions, isVehiclesSuggestionsLoading } = useVehiclesSuggestions()
    const { vehiclesSuggestions } = useContext(ListingContext)

    useEffect(() => {
        getVehiclesSuggestions(brand_slug)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={1} color='#343434'>{`Other ${brand} cars you may also like`}</Typography>
            <Typography fontSize='14px' variant="h3" fontWeight='400' color='#505050'  >Suggested vehicles based on the currently viewed vehicle</Typography>
            {
                isVehiclesSuggestionsLoading ?
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
                            vehiclesSuggestions.map(vehicle => {
                                return (
                                    <Grid key={vehicle._id} item xs={12} sm={6} lg={4}>
                                        <Link href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`}>
                                            <VehicleCard
                                                image={`${API_URL}${vehicle.image}`}
                                                name={vehicle.name}
                                                price={vehicle.price}
                                                promo={vehicle.price}
                                                fuelType={vehicle.fuelType}
                                                transmission={vehicle.transmission}
                                                type={vehicle.type}
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

export default Suggestion