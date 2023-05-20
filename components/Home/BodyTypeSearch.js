import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'

const BodyTypeSearch = () => {
    return (
        <>
            <Typography fontSize='2rem' variant="h2" fontWeight='600'>Browse cars by body type</Typography>
            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Whether you&#39;re looking for a sedan for personal use or an SUV for that long-awaited family trip, you can find it all here</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={3}
            >

                <Grid item xs={12} sm={6} lg={3}>
                    <Link href='/'>
                        <Box sx={{ border: '1px solid #d3d3d3', borderRadius: 2, backgroundColor: '#f5f5f5', textAlign: 'center' }} py={10}>
                            <Typography fontSize='1.2rem' fontWeight='400'>Sedan</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Link href='/'>
                        <Box sx={{ border: '1px solid #d3d3d3', borderRadius: 2, backgroundColor: '#f5f5f5', textAlign: 'center' }} py={10}>
                            <Typography fontSize='1.2rem' fontWeight='400'>SUV</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Link href='/'>
                        <Box sx={{ border: '1px solid #d3d3d3', borderRadius: 2, backgroundColor: '#f5f5f5', textAlign: 'center' }} py={10}>
                            <Typography fontSize='1.2rem' fontWeight='400'>Hatchback</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <Link href='/'>
                        <Box sx={{ border: '1px solid #d3d3d3', borderRadius: 2, backgroundColor: '#f5f5f5', textAlign: 'center' }} py={10}>
                            <Typography fontSize='1.2rem' fontWeight='400'>Van</Typography>
                        </Box>
                    </Link>
                </Grid>

            </Grid>
        </>
    )
}

export default BodyTypeSearch