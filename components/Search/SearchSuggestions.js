import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Grid, Stack, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import setCurrency from '@/utils/setCurrency'
import styles from '@/styles/Vehicles.module.css'

const SearchSuggestions = () => {

    const [suggestions, setSuggestions] = useState([])

    const fetchSuggestions = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/featured`);
        const vehicles = await response.json();
        setSuggestions(vehicles)
    }

    useEffect(() => {
        fetchSuggestions()
    }, [])

    return (
        <>
            <Typography fontSize='1.5rem' variant="h1" fontWeight='500' mb={1}>You may also like</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >

                {suggestions.map(vehicle => {
                    return (
                        <Grid key={vehicle._id} item xs={12} sm={6} lg={3}>
                            <Link href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`}>
                                <Box className={styles.imageBox}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}${vehicle.image}`}
                                        alt={vehicle.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className={styles.vehicleImage}
                                        placeholder='blur'
                                        blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}${vehicle.image}`}
                                    />
                                </Box>
                                <Typography fontWeight='500' variant='h4' fontSize='1rem' mt={1.5}>{vehicle.name}</Typography>
                                <Typography color='secondary'>PHP {setCurrency(vehicle.price)}</Typography>
                                <Typography color='secondary'>DP starts @ PHP 23,829.00</Typography>
                                <Stack direction='row' spacing={1}>
                                    <Typography variant="button" fontWeight='500' color='primary.main'>
                                        VIEW MORE INFORMATION
                                    </Typography>
                                    <EastIcon color='primary' />
                                </Stack>
                            </Link>
                        </Grid>
                    )
                })}

            </Grid>
        </>
    )
}

export default SearchSuggestions