import Layout from '@/layouts/Layout';
import { Box, Button, Divider, Grid, Stack, Typography, Tab, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router'
import styles from '../../../styles/Vehicles.module.css'
import mitsubishi from '../../../public/mitsubishi-g4.webp'
import GasMeterIcon from '@mui/icons-material/GasMeter';
import EastIcon from '@mui/icons-material/East';
import SettingsIcon from '@mui/icons-material/Settings';
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import Link from 'next/link';
import FeaturedVehicles from '@/components/Home/FeaturedVehicles';
import Suggestions from '@/components/Vehicles/Suggestions';

export async function getStaticPaths() {

    const response = await fetch('http://localhost:3001/vehicles')
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

export async function getStaticProps() {

    // const response = await fetch('api here');
    // const vehicle = await response.json();

    // gonna fetch vehicle details here, made empty for now

    return {
        props: {
            vehicle: [],
        }
    };
}

const VehicleDetails = () => {

    const router = useRouter()

    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const theme = useTheme();

    return (
        <Layout>

            <Grid container spacing={3} mb={3}>
                <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        src={mitsubishi}
                        alt='car'
                        style={{
                            width: '565',
                            height: '100%',
                            maxWidth: '100%',
                            borderRadius: 5
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box mt={1}>
                        <Typography fontSize='2rem' variant="h2" fontWeight='600' mb={1}>Mitsubishi Mirage G4</Typography>
                        <Typography fontSize='1rem' variant="subtitle1" color='secondary'>PHP 768,000.00</Typography>
                        <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>DP starts @ PHP 23,829.00</Typography>
                        <Link href='#inquire'>
                            <Button variant="contained" disableElevation>Inquire Now</Button>
                        </Link>
                        {/* <Box sx={{ border: '1px solid #d3d3d3', borderRadius: 2, mt: 3, p: 3 }}>
                            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi sit odit voluptatum libero aliquam autem expedita eius distinctio fuga odio mollitia adipisci, iusto doloremque exercitationem officiis pariatur corporis eligendi.</Typography>
                        </Box> */}
                    </Box>
                </Grid>
            </Grid>

            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleChange}
                        variant="scrollable"
                    >
                        <Tab label='Overview' value='1' />
                        <Tab label='Specifications' value='2' />
                        <Tab label='Price List' value='3' />
                    </TabList>
                </Box>

                <TabPanel value='1' sx={{ px: 0 }}>
                    <Typography fontSize='1.5rem' variant="h2" fontWeight='600' mb={2}>About this vehicle</Typography>
                    <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2} sx={{ backgroundColor: '#FAFAFA', padding: '25px', borderRadius: 2 }}>This subcompact sedan is comfortable, fuel efficient and offers an impressive performance. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus accusamus maxime, deserunt, ea voluptate dolorum iure aperiam qui eaque soluta. Ab molestiae nesciunt possimus eius commodi. Doloremque, rem eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae assumenda ullam dolore aliquam! Est, similique. Saepe porro consequuntur amet ratione vitae eos quia eligendi ipsa. Quas officiis autem quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, doloribus reprehenderit. Laboriosam adipisci aut voluptate. Provident temporibus exercitationem nam odio excepturi expedita a animi ipsam officia quos. Blanditiis, nesciunt quam?</Typography>

                    <Typography fontSize='1.5rem' variant="h2" fontWeight='600' mt={3} mb={2}>Vehicle Details</Typography>
                    <Box sx={{ backgroundColor: '#fff', border: '1px solid #d3d3d3', borderRadius: 2, padding: '25px', marginTop: 3 }}>

                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            spacing={{ xs: 3, md: 4 }}
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
                                    <Typography fontWeight='500'>VEHICLE MODEL</Typography>
                                </Stack>
                                <Typography color='secondary'>Mirage G4</Typography>
                            </Box>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <GasMeterIcon color='primary' />
                                    <Typography fontWeight='500'>VEHICLE TYPE</Typography>
                                </Stack>
                                <Typography color='secondary'>Sedan</Typography>
                            </Box>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <GasMeterIcon color='primary' />
                                    <Typography fontWeight='500'>PRODUCTION YEAR</Typography>
                                </Stack>
                                <Typography color='secondary'>
                                    2023
                                </Typography>
                            </Box>
                        </Stack>

                    </Box>

                </TabPanel>

                <TabPanel value='2' sx={{ px: 0 }}>

                    <Typography fontSize='1.5rem' variant="h2" fontWeight='600' mb={1}>Specs & Features</Typography>
                    <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>Key specifications & features of the Mitsubishi Mirage. View engine specs, dimensions, safety and technology features in detail below.
                    </Typography>

                    <Box sx={{ backgroundColor: '#fff', border: '1px solid #d3d3d3', borderRadius: 2, padding: '25px', marginTop: 3 }}>

                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            spacing={{ xs: 3, md: 4 }}
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
                                <Typography color='secondary'>Automatic</Typography>
                            </Box>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <GasMeterIcon color='primary' />
                                    <Typography fontWeight='500'>FUEL TYPE</Typography>
                                </Stack>
                                <Typography color='secondary'>Gasoline</Typography>
                            </Box>
                            <Box>
                                <Stack direction='row' spacing={1} mb={1}>
                                    <GasMeterIcon color='primary' />
                                    <Typography fontWeight='500'>KEY FEATURES</Typography>
                                </Stack>
                                <Typography color='secondary'>
                                    Anti-Lock Braking System, Child Safety Locks, Driver Airbag, Passenger Airbag, Rear Seat Belts
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

                <TabPanel value='3' sx={{ px: 0 }}>
                    <Typography fontSize='1.5rem' variant="h2" fontWeight='600' mb={1}>Mitsubishi Mirage G4 Price List</Typography>
                    <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis corrupti perferendis nobis dolore necessitatibus, quos totam excepturi sint eligendi id vel in! Modi praesentium voluptate repellendus similique illum aliquam laborum.</Typography>
                </TabPanel>

            </TabContext>

            <Suggestions />

        </Layout>
    )
}

export default VehicleDetails