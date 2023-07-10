import Layout from '@/layouts/Layout'
import { Box, Breadcrumbs, Button, Divider, Grid, IconButton, Stack, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@mui/material'
import styles from '@/styles/Management.module.css'
import Link from 'next/link'
// import FeaturedVehicles from '@/components/Home/FeaturedVehicles'
// import Image from 'next/image'
import setCurrency from '@/utils/setCurrency'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import mitsubishi from '../../../public/mitsubishi-g4.jpg'
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image'
import Head from 'next/head'
import nookies from 'nookies'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`);
    const vehicles = await response.json();

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
        },
    };
}

const VehicleManagement = ({ vehicles }) => {

    const router = useRouter()

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [selectedVehicleId, setSelectedVehicleId] = useState(null);
    const [selectedVehicleName, setSelectedVehicleName] = useState(null);

    const handleDeleteDialogOpen = () => setIsDeleteDialogOpen(true)

    const handleDeleteDialogClose = () => setIsDeleteDialogOpen(false)

    const handleDeleteVehicle = (id, vehicleName) => {

        setIsDeleteDialogOpen(false);
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/${id}`)
            .then((response) => {
                Swal.fire(
                    `Successfully deleted ${vehicleName}`,
                    'Lorem ipsum',
                    'success'
                ).then(() => router.reload())
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <Head>
                <title>Manage your vehicles | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
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
                            <Typography color="primary" fontWeight='500'>Manage your vehicles</Typography>
                        </Breadcrumbs>
                    </Box>

                    <Box sx={{
                        // backgroundColor: '#ffffff',
                        // padding: '20px 20px',
                        // borderRadius: '10px',
                        // boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)',
                        mb: 5
                    }}>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Box>
                                <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1} color='#343434'>All vehicles</Typography>
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
                    </Box>

                    {/* <Divider sx={{ mt: 3, mb: 5 }} /> */}

                    {
                        vehicles.reverse().map(vehicle => {
                            return (
                                <Grid key={vehicle._id} item xs={12} sm={12} lg={12}>
                                    <Stack direction={{ xs: 'column', md: 'row' }}>
                                        <Stack direction={{ xs: 'column', md: 'row' }} className={styles.box}>
                                            <Box display={{ xs: 'block', md: 'none' }}>
                                                <Image
                                                    src={vehicle.image}
                                                    alt={vehicle.name}
                                                    width={200}
                                                    height={100}
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </Box>
                                            <Box display={{ xs: 'none', md: 'block' }}>
                                                <Image
                                                    src={vehicle.image}
                                                    alt={vehicle.name}
                                                    width={200}
                                                    height={100}
                                                    style={{ objectFit: 'contain', marginRight: '20px' }}
                                                />
                                            </Box>
                                            <Box sx={{ flex: 1, mt: 2 }}>
                                                <Link
                                                    className={styles.link}
                                                    href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`}
                                                >
                                                    <Typography fontSize='1.1rem' variant="h2" fontWeight='700' mb={1} color='primary'>{vehicle.name}</Typography>
                                                </Link>
                                                <Typography mb={1} color='#808080' fontWeight='400'>PHP {setCurrency(vehicle.unitPrice)}</Typography>
                                                <Typography color='#808080' mb={2} fontSize='14px' fontWeight='400' className={styles.truncate}>{vehicle.description}</Typography>
                                                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                                                    {/* <Link
                                                        href={{
                                                            pathname: "/admin/vehicles/edit",
                                                            query: {
                                                                vehicleId: vehicle._id
                                                            }
                                                        }}
                                                    > */}
                                                    {/* <Button disabled size='small' variant="outlined" disableElevation color='primary' endIcon={<ArrowForwardIcon />}>Edit Details</Button> */}
                                                    {/* </Link> */}
                                                    <Typography fontSize='12px' color='error'>Editing will be available soon. For urgent need of editing details, contact the web administrator immediately.</Typography>
                                                    <IconButton
                                                        // onClick={() => handleDeleteVehicle(vehicle._id)}
                                                        onClick={() => {
                                                            handleDeleteDialogOpen()
                                                            setSelectedVehicleId(vehicle._id)
                                                            setSelectedVehicleName(vehicle.name)
                                                        }}
                                                    >
                                                        <DeleteOutlineIcon color='error' />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </Stack>

                                </Grid>
                            )
                        })
                    }

                    <Dialog
                        open={isDeleteDialogOpen}
                        onClose={handleDeleteDialogClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" color='error'>
                            {`Are you sure you want to delete ${selectedVehicleName}?`}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                This action is irreversible. Please be careful.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDeleteDialogClose} color='primary'>Cancel</Button>
                            <Button onClick={() => handleDeleteVehicle(selectedVehicleId, selectedVehicleName)} autoFocus color='error'>
                                Yes, I am sure
                            </Button>
                        </DialogActions>
                    </Dialog>

                </Box>
            </Layout>
        </>
    )
}

export default VehicleManagement