import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Vehicles.module.css'
import mitsubishi from '../../public/mitsubishi-g4.jpg'
import EastIcon from '@mui/icons-material/East';

const Suggestions = () => {

    return (
        <>
            <Typography fontSize='1.5rem' variant="h1" fontWeight='600' mt={5} mb={1}>You may also like</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >

                {Array(4).fill("").map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} lg={3}>
                            <Link href='/brands/toyota/toyota-corolla'>
                                <Box className={styles.imageBox}>
                                    <Image
                                        src={mitsubishi}
                                        alt="Mitsubishi Mirage G4"
                                        className={styles.vehicleImage}
                                        priority
                                    />
                                </Box>
                                <Typography fontWeight='500' variant='h4' fontSize='1rem' mt={1.5}>Mitsubishi Mirage G4</Typography>
                                <Typography color='secondary'>PHP 768,000.00</Typography>
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

export default Suggestions