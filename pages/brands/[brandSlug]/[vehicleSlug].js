import Layout from '@/layouts/Layout';
import { Box, Button, Divider, Grid, Stack, Typography, Tab, useMediaQuery, useTheme, Alert, AlertTitle, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/Details.module.css'
import GasMeterIcon from '@mui/icons-material/GasMeter';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import Link from 'next/link';
import Suggestions from '@/components/Vehicles/Suggestions';
import setCurrency from '@/utils/setCurrency';
import Head from 'next/head';

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

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/detail/${vehicle_slug}`);
    const vehicle = await response.json();

    return {
        props: {
            vehicle: vehicle,
        },
        revalidate: 10
    };
}

const VehicleDetails = ({ vehicle }) => {

    console.log(vehicle)

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

                <Grid container spacing={3} mb={3}>
                    <Grid item xs={12} md={4} className={styles.gridWrapper}>
                        {/* <Box width={565} height={300} position='relative' display='block' sx={{ aspectRatio: 1 }}> */}
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}${vehicle.image}`}
                            alt={vehicle.name}
                            width={565}
                            height={300}
                            // fill
                            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            style={{
                                width: '565',
                                height: '300',
                                maxHeight: '100%',
                                maxWidth: '100%',
                                borderRadius: 5,
                            }}
                            placeholder='blur'
                            blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}${vehicle.image}`}
                        />
                        {/* </Box> */}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box mt={1}>
                            <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1}>{vehicle.name}</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='success.main' fontWeight='500'>₱ {setCurrency(vehicle.price)}</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>DP starts @ ₱ 23,829.00</Typography>
                            <Link href={{ pathname: '/inquire', query: { q: vehicle.vehicle_slug } }}>
                                <Button variant="contained" disableElevation>Inquire Now</Button>
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
                            <Tab label='Overview' value='1' />
                            <Tab label='Specifications' value='2' />
                            <Tab label='Price List' value='3' />
                        </TabList>
                    </Box>

                    <TabPanel value='1' className={styles.tabPanel}>
                        <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={2}>About this vehicle</Typography>

                        {/* <Alert severity="info" sx={{ mb: 2, fontSize: '1rem' }}>{vehicle.description}</Alert> */}

                        <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2} className={styles.description}>{vehicle.description}</Typography>

                        <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mt={3} mb={2}>Vehicle Details</Typography>

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

                    <TabPanel value='2' className={styles.tabPanel}>

                        <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1}>Specs & Features</Typography>
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

                            <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1}>Available colors</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>This vehicle comes in {vehicle.colors.length} available colors
                            </Typography>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '768px', maxWidth: '100%' }}>
                                {
                                    vehicle.colors.map((item, index) => <Chip key={index} label={item} variant="outlined" sx={{ mx: '3px', my: '5px' }} />)
                                }
                            </Box>
                        </Box>

                    </TabPanel>

                    <TabPanel value='3' className={styles.tabPanel}>
                        <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1}>{vehicle.name} Price List</Typography>
                        <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis corrupti perferendis nobis dolore necessitatibus, quos totam excepturi sint eligendi id vel in! Modi praesentium voluptate repellendus similique illum aliquam laborum.</Typography>

                        <Alert severity="info" sx={{ mb: 3 }}>
                            <AlertTitle>Lorem Ipsum</AlertTitle>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, corporis quos ipsum porro unde doloremque numquam enim quasi alias tempore dolores illo at consectetur repellendus libero vero atque quisquam iusto.
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
                                        vehicle.variants.map((item, index) => {
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
                                                    <TableCell align='center'>₱ {setCurrency(item.discount)}</TableCell>
                                                    <TableCell align='center'>₱ {setCurrency(item.cash_promo)}</TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </TabPanel>

                </TabContext>

                <Suggestions brand_slug={vehicle.brand_slug} />

            </Layout>
        </>
    )
}

export default VehicleDetails