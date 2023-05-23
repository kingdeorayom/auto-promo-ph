import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

import sedan from '../../public/sedan.jpg'
import suv from '../../public/suv.jpg'
import hatchback from '../../public/hatchback.jpg'
import van from '../../public/van.jpg'

import styles from '../../styles/Home.module.css'

const BodyTypeSearch = () => {

    return (
        <>
            <Typography fontSize='2rem' variant="h2" fontWeight='600' mb={1}>Browse cars by body type</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>Whether you&#39;re looking for a sedan for personal use or an SUV for that long-awaited family trip, you can find it all here</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >

                <Grid item xs={12} sm={6} lg={3}>
                    <Link href='/'>
                        <Box className={styles.imageBox}>
                            <Image
                                src={sedan}
                                alt="Mitsubishi Mirage G4"
                                className={styles.vehicleImage}
                                priority
                            />
                            <Typography fontSize='1.2rem' fontWeight='400' color='white' className={styles.categoryLabel}>Sedan</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Link href='/'>
                        <Box className={styles.imageBox}>
                            <Image
                                src={suv}
                                alt="Mitsubishi Mirage G4"
                                className={styles.vehicleImage}
                                priority
                            />
                            <Typography fontSize='1.2rem' fontWeight='400' color='white' className={styles.categoryLabel}>SUV</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Link href='/'>
                        <Box className={styles.imageBox}>
                            <Image
                                src={hatchback}
                                alt="Mitsubishi Mirage G4"
                                className={styles.vehicleImage}
                                priority
                            />
                            <Typography fontSize='1.2rem' fontWeight='400' color='white' className={styles.categoryLabel}>Hatchback</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Link href='/'>
                        <Box className={styles.imageBox}>
                            <Image
                                src={van}
                                alt="Mitsubishi Mirage G4"
                                className={styles.vehicleImage}
                                priority
                            />
                            <Typography fontSize='1.2rem' fontWeight='400' color='white' className={styles.categoryLabel}>Van</Typography>
                        </Box>
                    </Link>
                </Grid>

            </Grid>
        </>
    )
}

export default BodyTypeSearch