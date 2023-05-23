import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import mitsubishi from '../../public/mitsubishi-g4.webp'
import EastIcon from '@mui/icons-material/East';

const FeaturedVehicles = () => {

    const featured_vehicles = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

    return (
        <>
            <Typography fontSize='2rem' variant="h1" fontWeight='600' mb={1}>Featured Vehicles</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>Featured vehicles curated just for you</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >

                {featured_vehicles.map((item) => {
                    return (
                        <Grid key={item.id} item xs={12} sm={6} lg={3}>
                            <Link href='/'>
                                <Box>
                                    <Image
                                        src={mitsubishi}
                                        alt="Mitsubishi Mirage G4"
                                        className={styles.vehicleImage}
                                        priority
                                    />
                                    <Typography fontWeight='500' variant='h4' fontSize='1rem'>Mitsubishi Mirage G4</Typography>
                                    <Typography color='secondary'>PHP 768,000.00</Typography>
                                    <Typography color='secondary'>DP starts @ PHP 23,829.00</Typography>
                                    <Stack direction='row' spacing={1}>
                                        <Typography variant="button" fontWeight='500' color='primary.main'>
                                            VIEW MORE INFORMATION
                                        </Typography>
                                        <EastIcon color='primary' />
                                    </Stack>
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