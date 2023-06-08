import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Vehicles.module.css'
import mitsubishi from '../../public/mitsubishi-g4.jpg'
import EastIcon from '@mui/icons-material/East';
import { useEffect } from 'react'
import { useState } from 'react'
import setCurrency from '@/utils/setCurrency'

const FeaturedVehicles = () => {

    const [featuredVehicles, setFeaturedVehicles] = useState([])

    const fetchFeaturedVehicles = async () => {
        const response = await fetch(`http://192.168.1.3:3001/vehicles/featured`);
        const vehicles = await response.json();
        setFeaturedVehicles(vehicles)
    }

    useEffect(() => {
        fetchFeaturedVehicles()
    }, [])

    const baseURL = 'http://192.168.1.3:3001'

    return (
        <>
            <Typography fontSize='2rem' variant="h2" fontWeight='600' mb={1}>Featured Vehicles</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>Featured vehicles curated just for you</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >

                {featuredVehicles.map(vehicle => {
                    return (
                        <Grid key={vehicle._id} item xs={12} sm={6} lg={3}>
                            <Link href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`}>
                                <Box className={styles.imageBox}>
                                    <Image
                                        src={`${baseURL}${vehicle.image}`}
                                        alt={vehicle.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className={styles.vehicleImage}
                                        placeholder='blur'
                                        blurDataURL={`${baseURL}${vehicle.image}`}
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

export default FeaturedVehicles