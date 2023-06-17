import Link from 'next/link'
import { Box, Grid, Typography } from '@mui/material'

const BudgetSearch = () => {

    const boxStyle = {
        border: '1px solid #d3d3d3',
        borderRadius: 2,
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        '&:hover': {
            backgroundColor: '#fff',
            border: '1px solid #1976d2',
        }
    }

    return (
        <>
            <Typography fontSize='2rem' variant="h2" fontWeight='500' mb={1}>Browse cars by budget</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary' lineHeight={1.5}>Tight on budget? Use our Budget Search below</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 1,000,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 1,500,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 2,000,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 2,500,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='400' color='black'>Under PHP 3,000,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

            </Grid>

        </>
    )
}

export default BudgetSearch