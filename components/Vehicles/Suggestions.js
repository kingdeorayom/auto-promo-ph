import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import VehicleCard from '@/components/Vehicles/VehicleCard'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const Suggestions = ({ brand_slug }) => {

    const [suggestions, setSuggestions] = useState([])

    const fetchSuggestions = async () => {
        const response = await fetch(`${API_URL}/vehicles/suggested/${brand_slug}`);
        const vehicles = await response.json();
        setSuggestions(vehicles)
    }

    useEffect(() => {
        fetchSuggestions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Typography fontSize='1.5rem' variant="h1" fontWeight='700' mt={5} mb={1}>You may also like</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >
                {
                    suggestions.map(vehicle => {
                        return (
                            <Grid key={vehicle._id} item xs={12} sm={6} lg={4}>
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

export default Suggestions