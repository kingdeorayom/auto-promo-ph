import Layout from '@/layouts/Layout'
import { Alert, AlertTitle, Autocomplete, Box, Breadcrumbs, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import styles from '../../../styles/AddEditVehicle.module.css'
import Link from 'next/link'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from 'axios';
import Swal from 'sweetalert2';
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'
import AddIcon from '@mui/icons-material/Add';

export async function getStaticProps() {

    const response = await fetch(`https://auto-promo-ph-api.onrender.com/vehicles`);
    const vehicles = await response.json();

    return {
        props: {
            vehicles: vehicles,
        },
        revalidate: 10
    };
}

const AddVehicle = ({ vehicles }) => {

    const router = useRouter()

    const form = useForm({
        mode: 'onChange',
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors } = formState

    const [variants, setVariants] = useState([])

    const onSubmit = (data) => {
        data['variants'] = variants
        console.log(data)
    }

    const addToVariants = (value) => {

        let data =
        {
            name: value.name,
            price: value.price,
            discount: value.price,
            cash_promo: value.price,
            brand_slug: value.brand_slug,
            vehicle_slug: value.vehicle_slug,
            image: value.image
        }
        console.log(data)

        setVariants(current => [...current, data])
    }

    const removeVariant = (index) => {
        setVariants(oldValues => oldValues.filter((_, i) => i !== index))
    }

    const [isVariantDialogOpen, setIsVariantDialogOpen] = useState(false);

    const handleVariantDialogOpen = () => setIsVariantDialogOpen(true)

    const handleVariantDialogClose = () => setIsVariantDialogOpen(false)

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
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/admin/vehicles"
                        >
                            Manage your vehicles
                        </Link>
                        <Typography color="primary">Add a vehicle</Typography>
                    </Breadcrumbs>
                </Box>

                <Box>
                    <Typography fontSize='2.5rem' variant="h2" fontWeight='600' mb={1}>Add a new vehicle</Typography>
                    <Typography fontSize='1rem' variant="h3" lineHeight='1.5' color='secondary' mb={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
                </Box>

                {/* <Divider /> */}

                <Alert severity="warning" sx={{ my: 3 }}>Review the data you will input before clicking the save button below. In case of error in details, you may edit through <strong>Vehicle Management</strong> section under <strong>Dashboard</strong>.</Alert>

                <Box mb={3}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        encType='multipart/form-data'
                    >
                        <Box my={2}>
                            <Typography mb={1} fontWeight='500'>Name*</Typography>
                            <TextField
                                type='text'
                                fullWidth
                                placeholder='e.g., Mitsubishi Mirage G4'
                                InputProps={{
                                    startAdornment: <InputAdornment position='start'><PersonOutlineIcon sx={{ marginRight: .5 }} /></InputAdornment>
                                }}
                                {...register('name')}
                                helperText={errors.name?.message}
                            />
                        </Box>

                        <Box my={2}>
                            <Typography mb={1} fontWeight='500'>Variants</Typography>
                            <Typography mb={1} fontSize='14px' fontWeight='300'>Added variants:</Typography>
                            {
                                variants.map((item, index) => {
                                    return (
                                        <Chip
                                            key={index}
                                            label={item.name}
                                            variant='contained'
                                            color='primary'
                                            sx={{ mx: .5, my: .5 }}
                                            onDelete={() => removeVariant(index)}
                                        />
                                    )
                                })
                            }
                        </Box>

                        <Box>
                            <Button variant='outlined' size='small' onClick={handleVariantDialogOpen}>Add a variant</Button>
                        </Box>

                        <Button
                            type='submit'
                            variant="contained"
                            disableElevation
                            size="large"
                            sx={{ mt: 2.5 }}
                        >
                            Save
                        </Button>
                    </form>
                </Box>

                <Dialog
                    open={isVariantDialogOpen}
                    onClose={handleVariantDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" color='primary' fontSize='1.6rem'>
                        Add a variant for this vehicle
                    </DialogTitle>
                    <DialogContent>
                        <Typography mb={1} fontSize='14px' fontWeight='300'>Added variants:</Typography>
                        {
                            variants.map((item, index) => {
                                return (
                                    <Chip
                                        key={index}
                                        label={item.name}
                                        // variant='outlined'
                                        color='primary'
                                        sx={{ mx: .5, my: .5 }}
                                        onDelete={() => removeVariant(index)}
                                    />
                                )
                            })
                        }
                        <Divider sx={{ my: 2 }} />
                        <Typography my={2} fontSize='14px' fontWeight='300'>Choose from the vehicle below to add as a variant:</Typography>
                        <Box sx={{ border: '1px solid #d3d3d3', borderRadius: '5px', paddingX: '10px', paddingY: '10px', my: '20px' }}>
                            {vehicles.map(item => {
                                return (<Chip
                                    key={item._id}
                                    label={item.name}
                                    icon={<AddIcon />}
                                    variant='outlined'
                                    sx={{ mx: .5, my: .5 }}
                                    onClick={() => addToVariants(item)}
                                />)
                            })}
                        </Box>


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleVariantDialogClose}>OK</Button>
                    </DialogActions>
                </Dialog>

            </Box>

        </Layout>
    )
}

export default AddVehicle