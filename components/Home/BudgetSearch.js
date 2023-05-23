import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'

const BudgetSearch = () => {
    return (
        <>
            <Typography fontSize='2rem' variant="h2" fontWeight='600' mb={1}>Browse cars by budget</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>Tight on budget? We have lorem ipsum dolor sit amet for that</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 5, padding: 5, textAlign: 'center' }}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 5, padding: 5, textAlign: 'center' }}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 5, padding: 5, textAlign: 'center' }}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 5, padding: 5, textAlign: 'center' }}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 5, padding: 5, textAlign: 'center' }}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 5, padding: 5, textAlign: 'center' }}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

            </Grid>

        </>
    )
}

export default BudgetSearch