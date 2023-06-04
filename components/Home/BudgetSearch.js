import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'

const BudgetSearch = () => {

    const boxStyle = {
        // backgroundColor: '#f5f5f5',
        // borderRadius: 5,
        // padding: 5,
        // textAlign: 'center',
        // boxShadow: '1px 1px 1px #d3d3d3',
        // '&:hover': {
        //     boxShadow: '1px 2px 1px #d3d3d3',
        // }

        border: '1px solid #d3d3d3',
        borderRadius: 2,
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        // paddingX: 3,
        // paddingY: 2.5,
        // display: 'flex',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        // height: 250,
        // overflow: 'hidden'
        '&:hover': {
            backgroundColor: '#fff',
            border: '1px solid #1976d2',
            // boxShadow: '1px 1px 1px #808080'
            // color: 'primary.main'
        }
    }

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
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='300' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='300' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='300' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='300' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='300' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Link href='/'>
                        <Box sx={boxStyle}>
                            <Typography fontSize='1.2rem' fontWeight='300' color='black'>Under PHP 750,000.00</Typography>
                        </Box>
                    </Link>
                </Grid>

            </Grid>

        </>
    )
}

export default BudgetSearch