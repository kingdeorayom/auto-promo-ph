import AppLoader from '@/components/Utility/AppLoader'
import { AuthContext } from '@/context/AuthContext'
import Layout from '@/layouts/Layout'
import { Alert, AlertTitle, Box, Button, CircularProgress, useMediaQuery, useTheme, Divider, Grid, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import styles from '../../styles/Dashboard.module.css'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image'
import notifications_image from '../../public/notifications.svg'
import car_image from '../../public/car.svg'
import dhang_casten from '../../public/dhang_casten.jpg'

const Dashboard = () => {

    const router = useRouter()
    const { user } = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(true)

    const theme = useTheme();

    const stackDirectionBreakpoint = { xs: 'column', md: 'row' }
    const stackSpacingBreakpoint = { xs: 3, md: 4 }

    let orientation = useMediaQuery(theme.breakpoints.down("md"))

    const redirectToPage = () => {
        if (!isLoading || user === null) {
            router.push('/admin')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        redirectToPage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading || user === null) {
        return <AppLoader />
    }

    return (
        <Layout>
            <Box className={styles.wrapper}>

                <Box mb={5} display='flex' alignItems='center' justifyContent='space-between'>
                    <Box>
                        <Typography fontSize='2.5rem' variant="h2" fontWeight='600' mb={1}>Dashboard</Typography>
                        <Typography fontSize='1rem' variant="h3" color='secondary'>Manage the content of your website and view customer or client inquiries</Typography>
                    </Box>
                    <Image
                        src={dhang_casten}
                        width={100}
                        height={100}
                        priority
                        alt='Dhang Casten'
                        className={styles.image}
                    />
                </Box>

                {/* <Alert severity="info">
                    <AlertTitle>info</AlertTitle>
                    This is a info alert — <strong>check it out!</strong>
                </Alert> */}

                <Box className={styles.box}>
                    <Typography fontSize='1.5rem' variant="h2" fontWeight='500' >Overview</Typography>
                    <Typography color='#808080' fontWeight='300' mb={3}>View and manage your vehicle listings. Add a new vehicle, edit existing details or delete a record.</Typography>

                    <Stack
                        direction={stackDirectionBreakpoint}
                        spacing={stackSpacingBreakpoint}
                        divider={
                            <Divider
                                orientation={orientation ? "horizontal" : "vertical"}
                                flexItem={true}
                            />
                        }
                    >
                        <Box>
                            <Stack direction='row' spacing={1} mb={1}>
                                {/* <SpaceDashboardIcon color='primary' /> */}
                                <Typography fontWeight='500'>INQUIRIES</Typography>
                            </Stack>
                            <Typography color='secondary' fontWeight='300'>Total inquiries: 3</Typography>
                        </Box>
                        <Box>
                            <Stack direction='row' spacing={1} mb={1}>
                                {/* <WidgetsIcon color='primary' /> */}
                                <Typography fontWeight='500'>LISTED VEHICLES</Typography>
                            </Stack>
                            <Typography color='secondary' fontWeight='300'>Total listed: 10</Typography>
                        </Box>
                    </Stack>

                </Box>

                <Grid
                    container
                    mt={1}
                    mb={4}
                    rowSpacing={3}
                    columnSpacing={2}
                >
                    <Grid item xs={12} sm={12} md={6}>
                        <Box className={styles.box}>
                            <Stack direction='row' display='flex' alignItems='center' justifyContent='center'>
                                <Box>
                                    <Typography fontSize='1.5rem' variant="h2" fontWeight='500' mb={1.5}>Manage your vehicles</Typography>
                                    <Box my={2} display={{ xs: 'block', sm: 'none' }} sx={{ textAlign: 'center' }}>
                                        <Image
                                            src={car_image}
                                            alt='Car'
                                            height={120}
                                        />
                                    </Box>
                                    <Typography color='#808080' mb={2} fontWeight='300'>View and manage your vehicle listings. Add a new vehicle, edit existing details or delete a record.</Typography>
                                    <Link href='/admin/vehicles'>
                                        <Button variant="contained" disableElevation endIcon={<ArrowForwardIcon />}>Manage Listing</Button>
                                    </Link>
                                </Box>
                                <Box display={{ xs: 'none', sm: 'block' }}>
                                    <Image
                                        src={car_image}
                                        alt='Car'
                                        height={120}
                                    />
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <Box className={styles.box}>
                            <Stack direction='row' display='flex' alignItems='center' justifyContent='center'>
                                <Box>

                                    <Typography fontSize='1.5rem' variant="h2" fontWeight='500' mb={1.5}>Inquiries</Typography>
                                    <Box my={2} display={{ xs: 'block', sm: 'none' }} sx={{ textAlign: 'center' }}>
                                        <Image
                                            src={notifications_image}
                                            alt='Notification'
                                            height={120}
                                        />
                                    </Box>
                                    <Typography color='#808080' mb={2} fontWeight='300'>View and manage inquiries of clients or customers, their name, and contact information.</Typography>
                                    <Link href='/admin/inquiries'>
                                        <Button variant="contained" disableElevation endIcon={<ArrowForwardIcon />}>View Inquiries</Button>
                                    </Link>
                                </Box>
                                <Box display={{ xs: 'none', sm: 'block' }}>
                                    <Image
                                        src={notifications_image}
                                        alt='Notification'
                                        height={120}
                                    />
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>

                </Grid>

            </Box>

        </Layout>
    )
}

export default Dashboard