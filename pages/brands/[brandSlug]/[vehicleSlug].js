import Layout from '@/layouts/Layout';
import { Box, Button, Divider, Grid, Stack, Typography, Tab, useMediaQuery, useTheme, Alert, AlertTitle, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/Details.module.css'
import GasMeterIcon from '@mui/icons-material/GasMeter';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import Link from 'next/link';
import Suggestion from '@/components/Vehicles/Suggestion';
import setCurrency from '@/utils/setCurrency';
import Head from 'next/head';
import { useRouter } from 'next/router';

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

    return (
        <>
            <Head>
                <title>{`${vehicle.name} | Auto Promo PH`}</title>
                <meta name="description" content={vehicle.description} />
            </Head>
            <Layout>

                <Box className={styles.wrapper}>

                    {/* <Box mb={3} className={styles.back} onClick={() => router.back()}>
                        <ArrowBackIcon color='primary' />
                        <Typography color='primary' ml={1}>Back</Typography>
                    </Box> */}

                    <Grid container spacing={3} mb={3}>
                        <Grid item xs={12} lg={6} className={styles.gridWrapper}>
                            <Box width={'100%'} height={300} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${vehicle.image}`}
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
                        <Grid item xs={12} lg={6}>
                            <Box ml={2}>
                                <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1}>{vehicle.name}</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='success.main' fontWeight='500'>₱ {setCurrency(vehicle.price)}</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>{`DP starts @ ₱ ${setCurrency(vehicle.price)}`}</Typography>
                                <Link href={{ pathname: '/inquire', query: { q: vehicle.vehicle_slug } }}>
                                    <Button variant="contained">Inquire Now</Button>
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
                                <Tab label='Overview' value='1' sx={{ fontWeight: '700' }} />
                                <Tab label='Specifications' value='2' sx={{ fontWeight: '700' }} />
                                <Tab label='Price List' value='3' sx={{ fontWeight: '700' }} />
                            </TabList>
                        </Box>

                        <TabPanel value='1' sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={2} color='#343434'>About this vehicle</Typography>

                            {/* <Alert severity="info" sx={{ mb: 2, fontSize: '1rem' }}>{vehicle.description}</Alert> */}

                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2} className={styles.description}>{vehicle.description}</Typography>

                            <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mt={3} mb={2} color='#343434'>Vehicle Details</Typography>

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
                                            <SpaceDashboardIcon color='primary' />
                                            <Typography fontWeight='500'>MODEL</Typography>
                                        </Stack>
                                        <Typography color='secondary'>{vehicle.model}</Typography>
                                    </Box>
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <WidgetsIcon color='primary' />
                                            <Typography fontWeight='500'>BODY TYPE</Typography>
                                        </Stack>
                                        <Typography color='secondary'>{vehicle.type}</Typography>
                                    </Box>
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <CalendarMonthIcon color='primary' />
                                            <Typography fontWeight='500'>YEAR</Typography>
                                        </Stack>
                                        <Typography color='secondary'>
                                            {vehicle.year}
                                        </Typography>
                                    </Box>
                                </Stack>

                            </Box>

                        </TabPanel>

                        <TabPanel value='2' sx={{ paddingLeft: 0, paddingRight: 0 }}>

                            <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1} color='#343434'>Specs & Features</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>Key specifications & features of the {vehicle.name}. View engine specs, dimensions, safety and technology features in detail below.
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
                                            <SettingsIcon color='primary' />
                                            <Typography fontWeight='500'>TRANSMISSION</Typography>
                                        </Stack>
                                        <Typography color='secondary'>{vehicle.transmission}</Typography>
                                    </Box>
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <GasMeterIcon color='primary' />
                                            <Typography fontWeight='500'>FUEL TYPE</Typography>
                                        </Stack>
                                        <Typography color='secondary'>{vehicle.fuelType}</Typography>
                                    </Box>
                                    <Box>
                                        <Stack direction='row' spacing={1} mb={1}>
                                            <CategoryIcon color='primary' />
                                            <Typography fontWeight='500'>KEY FEATURES</Typography>
                                        </Stack>
                                        <Typography color='secondary'>
                                            {vehicle.keyFeatures}
                                        </Typography>
                                    </Box>
                                </Stack>

                            </Box>

                            <Box mt={3}>

                                <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1} color='#343434'>Available colors</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>This vehicle comes with {vehicle.colors.length} available colors
                                </Typography>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '768px', maxWidth: '100%' }}>
                                    {
                                        vehicle.colors.map((item, index) => <Chip key={index} label={item} variant="outlined" sx={{ mx: '3px', my: '5px', backgroundColor: '#ffffff', border: '0 solid black', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }} />)
                                    }
                                </Box>
                            </Box>

                        </TabPanel>

                        <TabPanel value='3' sx={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1} color='#343434'>{vehicle.name} Price List</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={3}>View price list of {vehicle.name} and its variants, if any</Typography>

                            <Alert severity="warning" sx={{ mb: 3 }}>
                                <AlertTitle>Important!</AlertTitle>
                                The following price list is subject to change without prior notice.
                            </Alert>

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'>Image</TableCell>
                                            <TableCell align='center'>Name</TableCell>
                                            <TableCell align='center'>Unit Price</TableCell>
                                            <TableCell align='center'>Discount</TableCell>
                                            <TableCell align='center'>Cash Promo</TableCell>
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
                                                        <TableCell align='center'>₱ {setCurrency(item.price)}</TableCell>
                                                        <TableCell align='center'>₱ {setCurrency(item.price)}</TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </TabPanel>

                    </TabContext>

                    <Suggestion brand_slug={vehicle.brand_slug} />

                </Box>

            </Layout>
        </>
    )
}

export default VehicleDetails