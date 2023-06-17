import Layout from '@/layouts/Layout'
import { Box, Breadcrumbs, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import styles from '@/styles/Management.module.css'
import Link from 'next/link'
// import FeaturedVehicles from '@/components/Home/FeaturedVehicles'
// import Image from 'next/image'
import setCurrency from '@/utils/setCurrency'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import mitsubishi from '../../../public/mitsubishi-g4.jpg'
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image'

export async function getStaticProps() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`);
    const vehicles = await response.json();


    return {
        props: {
            vehicles: vehicles,
        },
        revalidate: 10
    };
}
const VehicleManagement = ({ vehicles }) => {

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

                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Box>
                        <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={1}>All vehicles</Typography>
                        <Typography fontSize='1rem' variant="h3" lineHeight='1.5' color='secondary' mb={2}>View and manage your vehicle listings. Add a new vehicle, edit existing details or delete a record</Typography>
                    </Box>
                    <Box display={{ xs: 'none', lg: 'block' }}>
                        <Link href='/admin/vehicles/add'>
                            <Button variant="contained" disableElevation color='primary' startIcon={<AddIcon />}>Add a vehicle</Button>
                        </Link>
                    </Box>
                </Box>

                <Box display={{ xs: 'block', lg: 'none' }}>
                    <Link href='/admin/vehicles/add'>
                        <Button variant="contained" disableElevation color='primary' startIcon={<AddIcon />}>Add a vehicle</Button>
                    </Link>
                </Box>

                <Divider sx={{ mt: 3, mb: 5 }} />

                {
                    vehicles.reverse().map(vehicle => {
                        return (
                            <Grid key={vehicle._id} item xs={12} sm={12} lg={12}>
                                {/* <Box className={styles.box}>
                                    <Box sx={{ display: 'flex', flex: 1, marginRight: 10 }}>
                                        <Box>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_API_URL}${vehicle.image}`}
                                                alt={vehicle.name}
                                                width={200}
                                                height={100}
                                                style={{ objectFit: 'contain', marginRight: '30px' }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography fontSize='1.1rem' variant="h2" fontWeight='700' mb={1} color='primary'>{vehicle.name}</Typography>
                                            <Typography mb={1} color='#808080' fontWeight='400'>PHP {setCurrency(vehicle.price)}</Typography>
                                            <Typography color='#808080' mb={2} fontSize='14px' fontWeight='300' className={styles.truncate}>{vehicle.description}</Typography>
                                        </Box>
                                    </Box>
                                    <Box display={{ xs: 'none', md: 'block' }}>
                                        <Link href={`/admin/vehicles/edit`} >
                                            <Button size='small' variant="outlined" disableElevation color='primary' endIcon={<ArrowForwardIcon />}>Edit Details</Button>
                                        </Link>
                                    </Box>
                                </Box> */}

                                <Stack direction={{ xs: 'column', md: 'row' }}>
                                    <Stack direction={{ xs: 'column', md: 'row' }} className={styles.box}>
                                        <Box display={{ xs: 'block', md: 'none' }}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_API_URL}${vehicle.image}`}
                                                alt={vehicle.name}
                                                width={200}
                                                height={100}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </Box>
                                        <Box display={{ xs: 'none', md: 'block' }}>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_API_URL}${vehicle.image}`}
                                                alt={vehicle.name}
                                                width={200}
                                                height={100}
                                                style={{ objectFit: 'contain', marginRight: '20px' }}
                                            />
                                        </Box>
                                        <Box sx={{ flex: 1, mt: 2 }}>
                                            <Typography fontSize='1.1rem' variant="h2" fontWeight='700' mb={1} color='primary'>{vehicle.name}</Typography>
                                            <Typography mb={1} color='#808080' fontWeight='400'>PHP {setCurrency(vehicle.price)}</Typography>
                                            <Typography color='#808080' mb={2} fontSize='14px' fontWeight='300' className={styles.truncate}>{vehicle.description}</Typography>
                                            <Link href={`/admin/vehicles/edit`} >
                                                <Button size='small' variant="outlined" disableElevation color='primary' endIcon={<ArrowForwardIcon />}>Edit Details</Button>
                                            </Link>
                                        </Box>
                                    </Stack>
                                </Stack>

                            </Grid>
                        )
                    })
                }

            </Box>
        </Layout>
    )
}

export default VehicleManagement