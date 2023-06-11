import Layout from '@/layouts/Layout'
import { Box, Breadcrumbs, Button, Divider, Grid, Stack, Typography, Fab } from '@mui/material'
import React from 'react'
import styles from '../../../styles/Management.module.css'
import Link from 'next/link'
import FeaturedVehicles from '@/components/Home/FeaturedVehicles'
import Image from 'next/image'
import setCurrency from '@/utils/setCurrency'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import mitsubishi from '../../../public/mitsubishi-g4.jpg'

export async function getStaticProps() {

    const response = await fetch(`http://192.168.1.3:3001/vehicles`);
    const vehicles = await response.json();


    return {
        props: {
            vehicles: vehicles,
        },
        revalidate: 10
    };
}
const VehicleManagement = ({ vehicles }) => {

    const baseURL = 'http://192.168.1.3:3001'

    return (
        <Layout>
            <Box className={styles.wrapper}>
                <Box mb={4}>
                    <Breadcrumbs separator=">" aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/admin/dashboard"
                        >
                            Dashboard
                        </Link>
                        <Typography color="primary">Manage your vehicles</Typography>
                    </Breadcrumbs>
                </Box>

                <Box>
                    <Typography fontSize='2.5rem' variant="h2" fontWeight='600' mb={1}>All vehicles</Typography>
                    <Typography fontSize='1rem' variant="h3" lineHeight='1.5' color='secondary'>View and manage your vehicle listings. Add a new vehicle, edit existing details or delete a record</Typography>
                </Box>

                <Grid
                    container
                    mt={2}
                    mb={4}
                    rowSpacing={3}
                    columnSpacing={2}
                >
                    {
                        vehicles.map(vehicle => {
                            return (
                                <Grid key={vehicle._id} item xs={12} sm={6} lg={6}>
                                    <Box className={styles.box}>
                                        <Box>
                                            {/* <Image
                                                src={`${baseURL}${vehicle.image}`}
                                                width={250}
                                                height={150}
                                                alt='Hey'
                                                style={{ width: '100%', objectFit: 'contain', marginBottom: '15px' }}
                                            /> */}
                                            <Box>
                                                <Typography fontSize='1.1rem' variant="h2" fontWeight='500' mb={1} color='#343434'>{vehicle.name}</Typography>
                                                <Typography mb={1} color='#808080' fontWeight='400'>PHP {setCurrency(vehicle.price)}</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography color='#808080' mb={2} fontWeight='300' className={styles.truncate}>{vehicle.description}</Typography>
                                        </Box>
                                        <Divider sx={{ mb: 2 }} />
                                        <Link href={`/admin/vehicles/edit`} >
                                            <Button variant="text" disableElevation color='primary' endIcon={<ArrowForwardIcon />}>Edit Details</Button>
                                        </Link>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Layout>
    )
}

export default VehicleManagement