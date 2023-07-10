import { useState } from "react"
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/layouts/Layout';
import { Box, Button, Divider, Grid, Stack, Typography, Tab, useTheme, Alert, AlertTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Breadcrumbs } from '@mui/material';
import styles from '@/styles/Details.module.css'
import { TabContext, TabList, TabPanel } from "@mui/lab"
import Suggestion from '@/components/Vehicles/Suggestion';
import setCurrency from '@/utils/setCurrency';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';

export async function getStaticPaths() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`)
    const vehicles = await response.json()

    const paths = vehicles.map(vehicle => {
        return {
            params: {
                brandSlug: vehicle.brand_slug,
                vehicleSlug: vehicle.vehicle_slug
            }
        }
    })

    return {
        paths: paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps(context) {

    const vehicle_slug = context.params.vehicleSlug

    const vehicleResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/detail/${vehicle_slug}`);
    const vehicle = await vehicleResponse.json();

    let url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/variant/detail`);

    vehicle.variants.forEach(item => url.searchParams.append('vehicleSlug', item.vehicle_slug))

    const variantReponse = await fetch(url.href)
    const variants = await variantReponse.json();

    return {
        props: {
            vehicle: vehicle,
            variants: variants
        },
        revalidate: 10
    };
}

const VehicleDetails = ({ vehicle, variants }) => {

    const router = useRouter()

    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const theme = useTheme();

    const stackDirectionBreakpoint = { xs: 'column', md: 'row' }
    const stackSpacingBreakpoint = { xs: 3, md: 4 }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    const colorCarouselLarge = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        closeButton: true,
    });

    return (
        <>
            <Head>
                <title>{`${vehicle.name} | Auto Promo PH`}</title>
                <meta name="description" content={vehicle.description} />
            </Head>
            <Layout>

                <Box className={styles.wrapper}>

                    <Box mb={4}>
                        <Breadcrumbs separator=">" aria-label="breadcrumb">
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/"
                            >
                                Explore
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/vehicles"
                            >
                                All Vehicles
                            </Link>
                            <Typography color="primary" fontWeight='500'>{vehicle.name}</Typography>
                        </Breadcrumbs>
                    </Box>

                    <Grid container spacing={{ xs: 2, sm: 3, md: 5 }} mb={3}>
                        <Grid item xs={12} sm={7}>
                            <Box width={'100%'} height={300} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    style={{
                                        borderRadius: '5px',
                                        objectFit: 'contain'
                                    }}
                                    placeholder='blur'
                                    blurDataURL={vehicle.image}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={5} display={{ xs: 'block', sm: 'flex' }} alignItems='center'>
                            <Box>
                                <Typography fontSize='2.5rem' variant="h2" fontWeight='800' mb={1}>{vehicle.name}</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='success.main' fontWeight='500'>₱ {setCurrency(vehicle.unitPrice)}</Typography>
                                {/* <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>{`Promo: ₱ ${setCurrency(vehicle.unitPrice)}`}</Typography> */}
                                <Stack direction={'row'} spacing={2} mt={2} mb={.5} justifyContent='space-between'>
                                    <Stack direction='row' spacing={1}>
                                        <WidgetsOutlinedIcon sx={{ fontSize: '18px', color: '#5D5FC0' }} />
                                        <Typography fontWeight='500' fontSize='12px'>{vehicle.bodyType}</Typography>
                                    </Stack>

                                    <Stack direction='row' spacing={1}>
                                        <SettingsOutlinedIcon sx={{ fontSize: '18px', color: '#FF905E' }} />
                                        <Typography fontWeight='500' fontSize='12px'>{vehicle.transmission}</Typography>
                                    </Stack>

                                    <Stack direction='row' spacing={1}>
                                        <CalendarMonthOutlinedIcon sx={{ fontSize: '18px', color: 'darkgoldenrod' }} />
                                        <Typography fontWeight='500' fontSize='12px'>{vehicle.year}</Typography>
                                    </Stack>
                                </Stack>
                                <Link href={{ pathname: '/inquire', query: { q: vehicle.vehicle_slug } }}>
                                    <Button
                                        fullWidth
                                        startIcon={<LiveHelpOutlinedIcon />}
                                        variant="contained"
                                        disableElevation
                                        // color='success'
                                        sx={{
                                            mt: 5,
                                            backgroundColor: '#ff3366',
                                            borderRadius: 2,
                                            ':hover': {
                                                backgroundColor: '#ff3366',
                                                boxShadow: "0 8px 8px 0 rgba(255,51,102,0.2)"
                                            }
                                        }}
                                    >
                                        Inquire Today
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box display={{ xs: 'none', md: 'block' }}>

                        <Typography fontSize='14px' variant="subtitle1" color='#505050' mb={0}>This vehicle comes with {vehicle.colors.length} available colors
                        </Typography>

                        <Box className={styles.colorImages}>
                            <Carousel
                                swipeable={true}
                                // infinite={true}
                                draggable={false}
                                responsive={colorCarouselLarge}
                                className={styles.colorImagesCarousel}
                            >
                                {
                                    vehicle.colors.map((item, index) => {
                                        return (
                                            <Link data-fancybox="colors" href={item} key={index}>
                                                <Box className={styles.colorImageBox} width={{ xs: "100%", sm: '95%' }} height={{ xs: 225, sm: 220 }} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                                    <Image
                                                        src={item}
                                                        alt={vehicle.name}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                        className={styles.colorImage}
                                                        placeholder='blur'
                                                        blurDataURL={item}
                                                    />
                                                </Box>
                                            </Link>
                                        )
                                    })
                                }
                            </Carousel>
                        </Box>

                    </Box>

                    <TabContext value={value}>
                        <Box className={styles.tabWrapper}>
                            <TabList
                                onChange={handleChange}
                                variant="scrollable"
                            >
                                <Tab label='Overview' value='1' sx={{ fontWeight: '700', textTransform: "none", fontSize: '15px' }} />
                                <Tab label='Specifications' value='2' sx={{ fontWeight: '700', textTransform: "none", fontSize: '15px' }} />
                                <Tab label='Variants' value='3' sx={{ fontWeight: '700', textTransform: "none", fontSize: '15px' }} />
                                {
                                    vehicle.brand !== "Toyota" ?
                                        <Tab label='Price List' value='4' sx={{ fontWeight: '700', textTransform: "none", fontSize: '15px' }} /> :
                                        null
                                }
                            </TabList>
                        </Box>

                        <TabPanel value='1' sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={0} mb={2} color='#343434'>{`About ${vehicle.name}`}</Typography>

                            {/* <Alert severity="info" sx={{ mb: 2, fontSize: '1rem' }}>{vehicle.description}</Alert> */}

                            <Typography fontSize='1rem' variant="subtitle1" color='#343434' mb={2} className={styles.description}>{vehicle.description}</Typography>

                            {/* <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={3} mb={2} color='#343434'>Vehicle Details</Typography> */}

                            <Box mt={5} mb={3}>
                                <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={3} mb={2} color='#343434'>{`Take a look at the ${vehicle.name}'s Interior and Exterior Design`}</Typography>

                                <Box className={styles.extraImages}>
                                    <Carousel
                                        swipeable={true}
                                        // infinite={true}
                                        draggable={false}
                                        responsive={responsive}
                                        className={styles.extraImagesCarousel}
                                    >
                                        {
                                            vehicle.extraImages.map((item, index) => {
                                                return (
                                                    <Link data-fancybox="extraImages" href={item} key={index}>
                                                        <Box className={styles.extraImageBox} width={{ xs: "100%", sm: '95%' }} height={{ xs: 225, sm: 220 }} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                                            <Image
                                                                src={item}
                                                                alt={vehicle.name}
                                                                fill
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                                className={styles.extraImage}
                                                                placeholder='blur'
                                                                blurDataURL={item}
                                                            />
                                                        </Box>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </Box>

                            </Box>

                            <Box mt={4} display={{ xs: 'block', md: 'none' }}>

                                <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={1} color='#343434'>Available colors</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={0}>This vehicle comes with {vehicle.colors.length} available colors
                                </Typography>

                                <Box className={styles.colorImages}>
                                    <Carousel
                                        swipeable={true}
                                        // infinite={true}
                                        draggable={false}
                                        responsive={responsive}
                                        className={styles.colorImagesCarousel}
                                    >
                                        {
                                            vehicle.colors.map((item, index) => {
                                                return (
                                                    <Link data-fancybox="colors" href={item} key={index}>
                                                        <Box className={styles.colorImageBox} width={{ xs: "100%", sm: '95%' }} height={{ xs: 225, sm: 220 }} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                                            <Image
                                                                src={item}
                                                                alt={vehicle.name}
                                                                fill
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                                className={styles.colorImage}
                                                                placeholder='blur'
                                                                blurDataURL={item}
                                                            />
                                                        </Box>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </Box>

                            </Box>
                        </TabPanel>

                        <TabPanel value='2' sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={0} mb={1} color='#343434'>Specs & Features</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={4}>Major specifications & key features of the {vehicle.name}. View engine specs, dimensions, fuel information and safety and technology features below.
                            </Typography>

                            <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                                <Box bgcolor='#404040' px={2} py={1}>
                                    <Typography color='white' fontWeight='700' fontSize='1rem'>DIMENSIONS</Typography>
                                </Box>
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Overall Length</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>3480 mm</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Overall Width</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>3650 mm</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Overall Height</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>1645 mm</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Wheelbase</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>2250 mm</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Tread</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>3480 mm</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Minimum Turning Radius</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>3650 mm</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Minimum Ground Clearance</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>1645 mm</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Approach angle</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>2250 deg</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Ramp breakover angle</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>2250 deg</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Departure angle</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>2250 deg</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                                <Box bgcolor='#404040' px={2} py={1}>
                                    <Typography color='white' fontWeight='700' fontSize='1rem'>ENGINE</Typography>
                                </Box>
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Number of cylinders</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>4</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Number of valves</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>16</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Piston displacement</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>1462 cm3</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Maximum output</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>103/6,000 HP/rpm</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Maximum torque</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>130/4,000 N - m/rpm</Typography>
                                </Box>
                            </Box>


                            <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                                <Box bgcolor='#404040' px={2} py={1}>
                                    <Typography color='white' fontWeight='700' fontSize='1rem'>TRANSMISSION</Typography>
                                </Box>
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Type</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>5 MT</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Drive system</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>4x4 ALL GRIP PRO</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                                <Box bgcolor='#404040' px={2} py={1}>
                                    <Typography color='white' fontWeight='700' fontSize='1rem'>CHASSIS</Typography>
                                </Box>
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Steering</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>Recirculating ball</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Brakes</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>Solid disc (Front), Drum, leading and trailing (Rear)</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Suspension</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>3-link rigid axle with coil spring (Front and Rear)</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Tyres</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>195/80R15</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                                <Box bgcolor='#404040' px={2} py={1}>
                                    <Typography color='white' fontWeight='700' fontSize='1rem'>CAPACITY</Typography>
                                </Box>
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Seating capacity</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>4 persons</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Luggage capacity</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga cum perferendis iusto eligendi</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Fuel tank capacity</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>40 litres</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                                <Box bgcolor='#404040' px={2} py={1}>
                                    <Typography color='white' fontWeight='700' fontSize='1rem'>WEIGHTS</Typography>
                                </Box>
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Kerb weight (min./with full option)</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>1090 kg</Typography>
                                </Box>
                                <Divider />
                                <Box px={2} py={2} display='flex' justifyContent='space-between'>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Gross vehicle weight</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>1435 kg</Typography>
                                </Box>
                            </Box>
                        </TabPanel>

                        <TabPanel value='3' sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={0} mb={1} color='#343434'>{`${vehicle.name} Variants`}</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sunt a repellat nostrum consequatur dolore vitae optio. Suscipit consequuntur inventore dolores cum fuga dicta eius atque nam. Adipisci, sed impedit!</Typography>
                            <Suggestion brand_slug={vehicle.brand_slug} brand={vehicle.brand} />
                        </TabPanel>

                        <TabPanel value='4' sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={0} mb={1} color='#343434'>{vehicle.name} Price List</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={3}>View price list of {vehicle.name} and its variants, if any</Typography>

                            <Alert severity="warning" sx={{ mb: 3 }}>
                                <AlertTitle>Important!</AlertTitle>
                                The following price list is subject to change without prior notice.
                            </Alert>

                            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #d3d3d3', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead sx={{ backgroundColor: "#404040" }}>
                                        <TableRow>
                                            <TableCell align='center' sx={{ fontWeight: '700', color: '#fff' }}>Image</TableCell>
                                            <TableCell align='center' sx={{ fontWeight: '700', color: '#fff' }}>Name</TableCell>
                                            <TableCell align='center' sx={{ fontWeight: '700', color: '#fff' }}>Unit Price</TableCell>
                                            {/* <TableCell align='center'>Discount</TableCell> */}
                                            <TableCell align='center' sx={{ fontWeight: '700', color: '#fff' }}>Net Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            variants.map((item, index) => {
                                                return (
                                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align='center' component="th" scope="row">
                                                            <Image
                                                                src={item.image}
                                                                alt={vehicle.name}
                                                                width={200}
                                                                height={100}
                                                                style={{ objectFit: 'contain' }}
                                                            />
                                                        </TableCell>
                                                        <TableCell align='center'>
                                                            <Link className={styles.link} href={`/brands/${item.brand_slug}/${item.vehicle_slug}`} target='_blank'>
                                                                <Typography fontSize='14px' color='primary'>{item.name}</Typography>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell align='center'>₱ {setCurrency(item.unitPrice)}</TableCell>
                                                        {/* <TableCell align='center'>₱ {setCurrency(item.unitPrice)}</TableCell> */}
                                                        <TableCell align='center'>₱ {setCurrency(item.netPrice)}</TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>

                    </TabContext>

                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} display='flex' justifyContent='space-between' sx={{ backgroundColor: '#f5f8ff', paddingX: '10px', paddingY: '30px' }}>
                        <Typography fontWeight='700' fontSize='1.2rem' textAlign='center' display={{ xs: 'block', md: 'none' }}>{`Trade in your old car for a new ${vehicle.name}`}</Typography>
                        <Box display={{ xs: 'flex', md: 'none' }} justifyContent='center'>
                            <Image
                                src={vehicle.image}
                                alt={vehicle.name}
                                width={450}
                                height={250}
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                        <Box>
                            <Typography fontWeight='700' display={{ xs: 'none', md: 'block' }}>{`Trade in your old car for a new ${vehicle.name}`}</Typography>
                            <Typography fontWeight='400' fontSize='14px' mb={1}>Let me bid on your vehicle and all you have to do is wait</Typography>

                            <Stack direction='row' alignItems='center' mt={3} mb={2}>
                                <LocalOfferOutlinedIcon sx={{ color: 'royalblue', fontSize: '18px', marginRight: '10px' }} />
                                <Typography fontWeight='300' fontSize='14px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                            </Stack>
                            <Divider />
                            <Stack direction='row' alignItems='center' mt={2} mb={2}>
                                <LocalPhoneOutlinedIcon sx={{ color: '#fd8f52', fontSize: '18px', marginRight: '10px' }} />
                                <Typography fontWeight='300' fontSize='14px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                            </Stack>
                            <Divider />
                            <Stack direction='row' alignItems='center' mt={2} mb={2}>
                                <CheckCircleOutlinedIcon sx={{ color: 'green', fontSize: '18px', marginRight: '10px' }} />
                                <Typography fontWeight='300' fontSize='14px'>Complete the process quickly within days.</Typography>
                            </Stack>

                            <Link href='/contact'>
                                <Button variant='contained' color='success' disableElevation sx={{ mt: 2, textTransform: 'none' }}>Start your trade-in</Button>
                            </Link>
                        </Box>
                        <Box display={{ xs: 'none', md: 'block' }}>
                            <Image
                                src={vehicle.image}
                                alt={vehicle.name}
                                width={450}
                                height={250}
                                style={{ objectFit: 'contain', marginRight: '40px' }}
                            />
                        </Box>
                    </Stack>

                    <Suggestion brand_slug={vehicle.brand_slug} brand={vehicle.brand} />

                </Box>

            </Layout>
        </>
    )
}

export default VehicleDetails