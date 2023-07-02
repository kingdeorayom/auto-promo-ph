import Layout from '@/layouts/Layout'
import { Box, Button, useMediaQuery, useTheme, Divider, Grid, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
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

    if (!cookies['auth_token']) {
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

    const { logout } = useLogout()

    const handleClick = () => {
        logout()
        router.replace('/admin')
    }

    const theme = useTheme();

    const stackDirectionBreakpoint = { xs: 'column', md: 'row' }
    const stackSpacingBreakpoint = { xs: 3, md: 4 }

    let orientation = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <>
            <Head>
                <title>Dashboard | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.wrapper}>

                    <Box mb={5} display='flex' alignItems='center' justifyContent='space-between'
                        sx={{
                            // backgroundColor: '#ffffff',
                            // padding: '15px 25px',
                            // borderRadius: '10px',
                            // boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)'
                        }}
                    >
                        <Box>
                            <Typography fontSize='2.1rem' variant="h2" fontWeight='700' mb={.5} color='#343434'>Dashboard</Typography>
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

                    <Box className={styles.box}>
                        <Typography fontSize='1.5rem' variant="h2" fontWeight='700' color='#1976D2'>Overview</Typography>
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
                                    <Typography fontWeight='700' color='#343434'>INQUIRIES</Typography>
                                </Stack>
                                <Typography color='secondary' fontWeight='400'>{`Total inquiries: ${inquiries.length}`}</Typography>
                            </Box>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <Typography fontWeight='700' color='#343434'>VEHICLES</Typography>
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
                                        <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1.5} color='#343434'>Manage your vehicles</Typography>
                                        <Box my={2} display={{ xs: 'block', sm: 'none' }} sx={{ textAlign: 'center' }}>
                                            <Image
                                                src={car_image}
                                                alt='Car'
                                                height={120}
                                            />
                                        </Box>
                                        <Typography color='#808080' fontSize='14px' mb={2} fontWeight='400'>View and manage your vehicle listings. Add a new vehicle, edit existing details or delete a record</Typography>
                                        <Link href='/admin/vehicles'>
                                            <Button
                                                variant="contained"
                                                endIcon={<ArrowForwardIcon />}
                                                disableElevation
                                            // sx={{ borderRadius: 10 }}
                                            // sx={{
                                            //     color: '#343434',
                                            //     backgroundColor: '#ffffff',
                                            //     ':hover': { backgroundColor: '#f5f5f5', boxShadow: '0 0 2px 0 rgba(34, 34, 34, 1)' },
                                            //     borderRadius: '20px',
                                            // }}

                                            >
                                                Manage Listings
                                            </Button>
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
                                        <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1.5} color='#343434'>Inquiries</Typography>
                                        <Box my={2} display={{ xs: 'block', sm: 'none' }} sx={{ textAlign: 'center' }}>
                                            <Image
                                                src={notifications_image}
                                                alt='Notification'
                                                height={120}
                                            />
                                        </Box>
                                        <Typography color='#808080' mb={2} fontSize='14px' fontWeight='400'>View and manage inquiries of clients or customers, their name, and contact information</Typography>
                                        <Link href='/admin/inquiries'>
                                            <Button disableElevation variant="contained" endIcon={<ArrowForwardIcon />}
                                            // sx={{ borderRadius: 10 }}
                                            >
                                                View Inquiries
                                            </Button>
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