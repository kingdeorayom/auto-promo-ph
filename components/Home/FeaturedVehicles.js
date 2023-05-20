import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import mitsubishi from '../../public/vehicles/mitsubishi-g4.webp'

const FeaturedVehicles = () => {

    const arr = ['', '', '', '']

    return (
        <>
            <Typography fontSize='2rem' variant="h1" fontWeight='600'>Featured Vehicles</Typography>
            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Featured vehicles curated just for you</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={3}
            >

                {arr.map((index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} lg={3}>
                            <Link href='/'>
                                <Box>
                                    <Image
                                        src={mitsubishi}
                                        alt="Mitsubishi Mirage G4"
                                        className={styles.vehicleImage}
                                    />
                                    <Typography fontWeight='500' variant='h4' fontSize='1rem'>Mitsubishi Mirage G4</Typography>
                                    <Typography color='secondary'>PHP 768,000.00</Typography>
                                    <Typography color='secondary'>DP starts @ PHP 23,829.00</Typography>
                                    <Typography variant="button" fontWeight='500' color='primary.main'>
                                        VIEW MORE INFORMATION
                                    </Typography>
                                </Box>
                            </Link>
                        </Grid>
                    )
                })}

            </Grid >
        </>
    )
}

export default FeaturedVehicles