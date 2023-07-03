import Layout from '@/layouts/Layout';
import { Box, Button, Divider, Grid, Stack, Typography, Tab, useMediaQuery, useTheme, Alert, AlertTitle, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Breadcrumbs } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/Details.module.css'
import GasMeterIcon from '@mui/icons-material/GasMeter';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import Link from 'next/link';
import Suggestion from '@/components/Vehicles/Suggestion';
import setCurrency from '@/utils/setCurrency';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import ModeStandbyOutlinedIcon from '@mui/icons-material/ModeStandbyOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import carnobg from '@/public/carnobg.png'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

    console.log(vehicle)

    const router = useRouter()

    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const theme = useTheme();

    const stackDirectionBreakpoint = { xs: 'column', md: 'row' }
    const stackSpacingBreakpoint = { xs: 3, md: 4 }

    const responsive = {
        // superLargeDesktop: {
        //     breakpoint: { max: 4000, min: 3000 },
        //     items: 5
        // },
        // desktop: {
        //     breakpoint: { max: 3000, min: 1024 },
        //     items: 4
        // },
        // tablet: {
        //     breakpoint: { max: 1024, min: 768 },
        //     items: 2
        // },
        // mobile: {
        //     breakpoint: { max: 768, min: 0 },
        //     items: 1
        // }

        lg: {
            breakpoint: { max: 1535, min: 1200 },
            items: 4
        },
        md: {
            breakpoint: { max: 1199, min: 900 },
            items: 4
        },
        sm: {
            breakpoint: { max: 899, min: 600 },
            items: 2
        },
        xs: {
            breakpoint: { max: 599, min: 0 },
            items: 1
        },
    };


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

                    {/* <Box mb={3} className={styles.back} onClick={() => router.back()}>
                        <ArrowBackIcon color='primary' />
                        <Typography color='primary' ml={1}>Back</Typography>
                    </Box> */}

                    <Grid container spacing={{ xs: 2, sm: 3, md: 5 }} mb={3}>
                        <Grid item xs={12} sm={7}>
                            <Box width={'100%'} height={300} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${vehicle.image}`}
                                    // src={carnobg}
                                    alt={vehicle.name}
                                    // width={565}
                                    // height={300}
                                    fill
                                    // fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    style={{
                                        // width: '565',
                                        // height: '300',
                                        // maxHeight: '100%',
                                        // maxWidth: '100%',
                                        borderRadius: '5px',
                                        objectFit: 'contain'
                                    }}
                                    placeholder='blur'
                                    blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}${vehicle.image}`}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={5} display={{ xs: 'block', sm: 'flex' }} alignItems='center'>
                            <Box>
                                <Typography fontSize='2rem' variant="h2" fontWeight='800' mb={1}>{vehicle.name}</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='success.main' fontWeight='500'>₱ {setCurrency(vehicle.price)}</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>{`Promo: ₱ ${setCurrency(vehicle.price)}`}</Typography>
                                <Link href={{ pathname: '/inquire', query: { q: vehicle.vehicle_slug } }}>
                                    <Button
                                        fullWidth
                                        startIcon={<LiveHelpOutlinedIcon />}
                                        variant="contained"
                                        disableElevation
                                        // color='info'
                                        sx={{
                                            mt: 2,
                                            backgroundColor: '#ff3366',
                                            borderRadius: 2,
                                            ':hover': {
                                                backgroundColor: '#ff3366',
                                                boxShadow: "0 8px 8px 0 rgba(255,51,102,0.2)"
                                            }
                                        }}
                                    >
                                        Inquire Now
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <TabContext value={value}>
                        <Box className={styles.tabWrapper}>
                            <TabList
                                onChange={handleChange}
                                variant="scrollable"
                            >
                                <Tab label='Overview' value='1' sx={{ fontWeight: '700', textTransform: "none", fontSize: '15px' }} />
                                <Tab label='Specifications' value='2' sx={{ fontWeight: '700', textTransform: "none", fontSize: '15px' }} />
                                <Tab label='Price List' value='3' sx={{ fontWeight: '700', textTransform: "none", fontSize: '15px' }} />
                            </TabList>
                        </Box>

                        <TabPanel value='1' sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={2} color='#343434'>About this vehicle</Typography>

                            {/* <Alert severity="info" sx={{ mb: 2, fontSize: '1rem' }}>{vehicle.description}</Alert> */}

                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2} className={styles.description}>{vehicle.description}</Typography>

                            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={3} mb={2} color='#343434'>Vehicle Details</Typography>

                            <Box className={styles.stackWrapper}>

                                <Stack
                                    direction={stackDirectionBreakpoint}
                                    spacing={stackSpacingBreakpoint}
                                    divider={
                                        <Divider
                                            orientation={useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"}
                                            flexItem={true}
                                        />
                                    }
                                >
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <SpaceDashboardOutlinedIcon sx={{ color: 'crimson' }} />
                                            <Typography fontWeight='700'>Model</Typography>
                                        </Stack>
                                        <Typography color='secondary'>{vehicle.model}</Typography>
                                    </Box>
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <WidgetsOutlinedIcon sx={{ color: '#5D5FC0' }} />
                                            <Typography fontWeight='700'>Body Type</Typography>
                                        </Stack>
                                        <Typography color='secondary'>{vehicle.type}</Typography>
                                    </Box>
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <CalendarMonthOutlinedIcon sx={{ color: 'darkgoldenrod' }} />
                                            <Typography fontWeight='700'>Year</Typography>
                                        </Stack>
                                        <Typography color='secondary'>
                                            {vehicle.year}
                                        </Typography>
                                    </Box>
                                </Stack>

                            </Box>

                            <Box mt={5} mb={3}>
                                <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={3} mb={2} color='#343434'>{`${vehicle.name}'s Interior and Exterior`}</Typography>

                                <Box className={styles.extraImages}>
                                    <Carousel
                                        swipeable={true}
                                        infinite={true}
                                        draggable={false}
                                        responsive={responsive}
                                    >
                                        {
                                            vehicle.extraImages.map((item, index) => {
                                                return (
                                                    <Box key={index} width={{ xs: "100%", sm: '95%' }} height={{ xs: 225, sm: 220 }} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_API_URL}${item}`}
                                                            alt={vehicle.name}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                            className={styles.extraImage}
                                                            placeholder='blur'
                                                            blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}${item}`}
                                                        />
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </Box>

                                {/* <Box className={styles.gallery}>
                                    {
                                        vehicle.extraImages.map((item, index) => {
                                            return (
                                                <Box key={index} width={'100%'} height={100} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_API_URL}${item}`}
                                                        alt={vehicle.name}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                        className={styles.gallery__image}
                                                        placeholder='blur'
                                                        blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}${item}`}
                                                    />
                                                </Box>
                                            )
                                        })
                                    }
                                </Box> */}

                            </Box>

                        </TabPanel>

                        <TabPanel value='2' sx={{ paddingLeft: 0, paddingRight: 0 }}>

                            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={1} color='#343434'>Specs & Features</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>Key specifications & features of the {vehicle.name}. View engine specs, safety and technology features below.
                            </Typography>

                            <Box className={styles.stackWrapper}>

                                <Stack
                                    direction={stackDirectionBreakpoint}
                                    spacing={stackSpacingBreakpoint}
                                    divider={
                                        <Divider
                                            orientation={useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"}
                                            flexItem={true}
                                        />
                                    }
                                >
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <SettingsOutlinedIcon sx={{ color: '#FF905E' }} />
                                            <Typography fontWeight='700'>Transmission</Typography>
                                        </Stack>
                                        <Typography color='secondary'>{vehicle.transmission}</Typography>
                                    </Box>
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <LocalGasStationOutlinedIcon sx={{ color: '#47AE58' }} />
                                            <Typography fontWeight='700'>Fuel Type</Typography>
                                        </Stack>
                                        <Typography color='secondary'>{vehicle.fuelType}</Typography>
                                    </Box>
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <ModeStandbyOutlinedIcon sx={{ color: 'red' }} />
                                            <Typography fontWeight='700'>Power</Typography>
                                        </Stack>
                                        <Typography color='secondary'>{`${vehicle.power} hp`}</Typography>
                                    </Box>
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <PrecisionManufacturingOutlinedIcon sx={{ color: 'brown' }} />
                                            <Typography fontWeight='700'>Engine Displacement</Typography>
                                        </Stack>
                                        <Typography color='secondary'>{`${vehicle.engineDisplacement} cc`}</Typography>
                                    </Box>
                                </Stack>

                            </Box>

                            <Box className={styles.stackWrapper}>

                                <Stack
                                    direction={stackDirectionBreakpoint}
                                    spacing={stackSpacingBreakpoint}
                                // divider={
                                //     <Divider
                                //         orientation={useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"}
                                //         flexItem={true}
                                //     />
                                // }
                                >
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <CategoryOutlinedIcon color='primary' />
                                            <Typography fontWeight='700'>Key Features</Typography>
                                        </Stack>
                                        <Typography color='secondary'>
                                            {vehicle.keyFeatures}
                                        </Typography>
                                    </Box>
                                </Stack>

                            </Box>

                            <Box mt={4}>

                                <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={1} color='#343434'>Available colors</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>This vehicle comes with {vehicle.colors.length} available colors
                                </Typography>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '768px', maxWidth: '100%' }}>
                                    {
                                        vehicle.colors.map((item, index) => <Chip key={index} label={item} variant="outlined" sx={{ mx: '3px', my: '5px', backgroundColor: '#ffffff', border: '1px solid #d3d3d3', fontWeight: '600' }} />)
                                    }
                                </Box>

                                {/* <Box className={styles.gallery}>
                                    {
                                        vehicle.extraImages.map((item, index) => {
                                            return (
                                                <Box key={index} width={'100%'} height={100} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_API_URL}${item}`}
                                                        alt={vehicle.name}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                        className={styles.gallery__image}
                                                        placeholder='blur'
                                                        blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}${item}`}
                                                    />
                                                </Box>
                                            )
                                        })
                                    }
                                </Box> */}

                            </Box>

                        </TabPanel>

                        <TabPanel value='3' sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={1} color='#343434'>{vehicle.name} Price List</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={3}>View price list of {vehicle.name} and its variants, if any</Typography>

                            <Alert severity="warning" sx={{ mb: 3 }}>
                                <AlertTitle>Important!</AlertTitle>
                                The following price list is subject to change without prior notice.
                            </Alert>

                            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #d3d3d3', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center' sx={{ fontWeight: '700' }}>Image</TableCell>
                                            <TableCell align='center' sx={{ fontWeight: '700' }}>Name</TableCell>
                                            <TableCell align='center' sx={{ fontWeight: '700' }}>Unit Price</TableCell>
                                            {/* <TableCell align='center'>Discount</TableCell> */}
                                            <TableCell align='center' sx={{ fontWeight: '700' }}>Net Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            variants.map((item, index) => {
                                                return (
                                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align='center' component="th" scope="row">
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_API_URL}${item.image}`}
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
                                                        <TableCell align='center'>₱ {setCurrency(item.price)}</TableCell>
                                                        {/* <TableCell align='center'>₱ {setCurrency(item.price)}</TableCell> */}
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

                    <Suggestion brand_slug={vehicle.brand_slug} brand={vehicle.brand} />

                </Box>

            </Layout>
        </>
    )
}

export default VehicleDetails