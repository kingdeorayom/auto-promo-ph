import Layout from '@/layouts/Layout';
import { Box, Button, Divider, Grid, Stack, Typography, Tab, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import styles from '../../../styles/Details.module.css'
import mitsubishi from '../../../public/mitsubishi-g4.jpg'
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
import useNumberFormatter from '@/hooks/useNumberFormatter';

export async function getStaticPaths() {

    const response = await fetch('http://192.168.1.3:3001/vehicles')
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
        fallback: false,
    };
}

export async function getStaticProps(context) {

    const vehicle_slug = context.params.vehicleSlug

    const response = await fetch(`http://192.168.1.3:3001/vehicles/detail/${vehicle_slug}`);
    const vehicle = await response.json();

    return {
        props: {
            vehicle: vehicle,
        },
        revalidate: 10
    };
}

const VehicleDetails = ({ vehicle }) => {

    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const theme = useTheme();

    const stackDirectionBreakpoint = { xs: 'column', md: 'row' }
    const stackSpacingBreakpoint = { xs: 3, md: 4 }

    const baseURL = 'http://192.168.1.3:3001'

    return (
        <Layout>

            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} md={4} className={styles.gridWrapper}>
                    <Image
                        // loader={() => `${baseURL}${vehicle.image}`}
                        src={`${baseURL}${vehicle.image}`}
                        alt="Mitsubishi Mirage G4"
                        width={565}
                        height={50}
                        style={{
                            width: '565',
                            height: '100%',
                            maxWidth: '100%',
                            borderRadius: 5
                        }}
                        // className={styles.vehicleImage}
                        priority
                        unoptimized={true}

                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box mt={1}>
                        <Typography fontSize='2rem' variant="h2" fontWeight='600' mb={1}>{vehicle.name}</Typography>
                        <Typography fontSize='1rem' variant="subtitle1" color='secondary'>PHP {useNumberFormatter(vehicle.price)}</Typography>
                        <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>DP starts @ PHP 23,829.00</Typography>
                        <Link href='#inquire'>
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
                    <Typography fontSize='1.5rem' variant="h2" fontWeight='600' mb={2}>About this vehicle</Typography>
                    <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2} className={styles.description}>{vehicle.description}</Typography>

                    <Typography fontSize='1.5rem' variant="h2" fontWeight='600' mt={3} mb={2}>Vehicle Details</Typography>
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
                                    <Typography fontWeight='500'>VEHICLE MODEL</Typography>
                                </Stack>
                                <Typography color='secondary'>{vehicle.model}</Typography>
                            </Box>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <WidgetsIcon color='primary' />
                                    <Typography fontWeight='500'>VEHICLE TYPE</Typography>
                                </Stack>
                                <Typography color='secondary'>{vehicle.type}</Typography>
                            </Box>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <CalendarMonthIcon color='primary' />
                                    <Typography fontWeight='500'>PRODUCTION YEAR</Typography>
                                </Stack>
                                <Typography color='secondary'>
                                    {vehicle.year}
                                </Typography>
                            </Box>
                        </Stack>

                    </Box>

                </TabPanel>

                <TabPanel value='2' className={styles.tabPanel}>

                    <Typography fontSize='1.5rem' variant="h2" fontWeight='600' mb={1}>Specs & Features</Typography>
                    <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>Key specifications & features of the Mitsubishi Mirage. View engine specs, dimensions, safety and technology features in detail below.
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
                    {/* 
                    <Grid
                        container
                        rowSpacing={3}
                        mt={2}
                        mb={3}
                        sx={{ backgroundColor: '#fff', border: '1px solid #d3d3d3', borderRadius: 2, paddingX: '25px', paddingBottom: 3 }}
                    >
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <SettingsIcon color='primary' />
                                    <Typography fontWeight='500'>TRANSMISSION</Typography>
                                </Stack>
                                <Typography color='secondary'>Automatic</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <GasMeterIcon color='primary' />
                                    <Typography fontWeight='500'>FUEL TYPE</Typography>
                                </Stack>
                                <Typography color='secondary'>Gasoline</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <GasMeterIcon color='primary' />
                                    <Typography fontWeight='500'>KEY FEATURES</Typography>
                                </Stack>
                                <Typography color='secondary'>
                                    Anti-Lock Braking System, Child Safety Locks, Driver Airbag, Passenger Airbag, Rear Seat Belts
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid> */}

                </TabPanel>

                <TabPanel value='3' className={styles.tabPanel}>
                    <Typography fontSize='1.5rem' variant="h2" fontWeight='600' mb={1}>Mitsubishi Mirage G4 Price List</Typography>
                    <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis corrupti perferendis nobis dolore necessitatibus, quos totam excepturi sint eligendi id vel in! Modi praesentium voluptate repellendus similique illum aliquam laborum.</Typography>
                </TabPanel>

            </TabContext>

            <Suggestions />

        </Layout>
    )
}

export default VehicleDetails