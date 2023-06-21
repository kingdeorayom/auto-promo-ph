import AppLoader from '@/components/Utility/AppLoader'
import { AuthContext } from '@/context/AuthContext'
import Layout from '@/layouts/Layout'
import { Box, Button, useMediaQuery, useTheme, Divider, Grid, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import styles from '@/styles/Dashboard.module.css'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image'
import notifications_image from '@/public/notifications.svg'
import car_image from '@/public/car.svg'
import dhang_casten from '@/public/dhang_casten.jpg'
import { useLogout } from '@/hooks/useLogout'
import Head from 'next/head'

import nookies from 'nookies'

export async function getServerSideProps(context) {

    const vehiclesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`);
    const vehicles = await vehiclesResponse.json();

    const inquiriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inquiries`);
    const inquiries = await inquiriesResponse.json();

    const cookies = nookies.get(context)

    if (!cookies['auth-token']) {
        return {
            redirect: {
                destination: '/admin',
                permanent: false,
            },
        }
    }

    return {
        props: {
            vehicles: vehicles,
            inquiries: inquiries
        },
    };
}


const Dashboard = ({ vehicles, inquiries }) => {

    const router = useRouter()
    const { user } = useContext(AuthContext)

    const { logout } = useLogout()

    const handleClick = () => {
        logout()
        router.replace('/admin')
    }

    const [isLoading, setIsLoading] = useState(true)

    const theme = useTheme();

    const stackDirectionBreakpoint = { xs: 'column', md: 'row' }
    const stackSpacingBreakpoint = { xs: 3, md: 4 }

    let orientation = useMediaQuery(theme.breakpoints.down("md"))

    // const redirectToPage = () => {
    //     if (!isLoading || user === null) {
    //         router.push('/admin')
    //     }
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 1000);
    //     redirectToPage()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    // if (isLoading || user === null) {
    //     return <AppLoader />
    // }

    return (
        <>
            <Head>
                <title>Dashboard | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.wrapper}>

                    <Box mb={5} display='flex' alignItems='center' justifyContent='space-between'>
                        <Box>
                            <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={1}>Dashboard</Typography>
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
                        <Typography fontSize='1.5rem' variant="h2" fontWeight='700' color='#1976D2' >Overview</Typography>
                        <Typography color='#808080' fontWeight='400' mb={3}>View and manage your vehicle listings. Add a new vehicle, edit existing details or delete a record</Typography>

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
                                    <Typography fontWeight='700'>INQUIRIES</Typography>
                                </Stack>
                                <Typography color='secondary' fontWeight='400'>{`Total inquiries: ${inquiries.length}`}</Typography>
                            </Box>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <Typography fontWeight='700'>VEHICLES</Typography>
                                </Stack>
                                <Typography color='secondary' fontWeight='400'>{`Total listed: ${vehicles.length} vehicles`}</Typography>
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
                        <Grid item xs={12} sm={12} md={6} className={styles.gridItem}>
                            <Box className={styles.box}>
                                <Stack direction='row' display='flex' alignItems='center' justifyContent='center'>
                                    <Box>
                                        <Typography fontSize='1.5rem' variant="h2" fontWeight='500' mb={1.5} color='#1976D2'>Manage your vehicles</Typography>
                                        <Box my={2} display={{ xs: 'block', sm: 'none' }} sx={{ textAlign: 'center' }}>
                                            <Image
                                                src={car_image}
                                                alt='Car'
                                                height={120}
                                            />
                                        </Box>
                                        <Typography color='#808080' mb={2} fontWeight='400'>View and manage your vehicle listings. Add a new vehicle, edit existing details or delete a record</Typography>
                                        <Link href='/admin/vehicles'>
                                            <Button variant="contained" disableElevation endIcon={<ArrowForwardIcon />}>Manage Listings</Button>
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

                        <Grid item xs={12} sm={12} md={6} className={styles.gridItem}>
                            <Box className={styles.box}>
                                <Stack direction='row' display='flex' alignItems='center' justifyContent='center'>
                                    <Box>

                                        <Typography fontSize='1.5rem' variant="h2" fontWeight='500' mb={1.5} color='#1976D2'>Inquiries</Typography>
                                        <Box my={2} display={{ xs: 'block', sm: 'none' }} sx={{ textAlign: 'center' }}>
                                            <Image
                                                src={notifications_image}
                                                alt='Notification'
                                                height={120}
                                            />
                                        </Box>
                                        <Typography color='#808080' mb={2} fontWeight='400'>View and manage inquiries of clients or customers, their name, and contact information</Typography>
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

                    <Box display='flex' alignItems='flex-end' justifyContent='flex-end'>
                        <Button onClick={handleClick} color='error'>Log out</Button>
                    </Box>

                </Box>

            </Layout>
        </>
    )
}

export default Dashboard