import Layout from '@/layouts/Layout'
import { Alert, AlertTitle, Box, Breadcrumbs, Button, Chip, Divider, LinearProgress, Typography } from '@mui/material'
import styles from '@/styles/AddEditVehicle.module.css'
import Link from 'next/link'
import axios from 'axios';
import Swal from 'sweetalert2';
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'
import Head from 'next/head';
import nookies from 'nookies'
import AddIcon from '@mui/icons-material/Add';

export async function getServerSideProps(context) {

    const vehicleId = context.query.vehicleId

    const vehicleDetailsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/${vehicleId}`);
    const vehicleDetails = await vehicleDetailsResponse.json();

    // const vehiclesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`);
    const vehiclesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands/vehicle/${vehicleDetails.brand_slug}`);
    const vehicles = await vehiclesResponse.json();

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
            vehicleDetails: vehicleDetails
        },
    };
}

const EditVehicleVariants = ({ vehicles, vehicleDetails }) => {

    const router = useRouter()

    const form = useForm({
        mode: 'onChange',
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors } = formState

    const [errorMessage, setErrorMessage] = useState(null)
    const [variants, setVariants] = useState(vehicleDetails.variants)
    const [isUploading, setIsUploading] = useState(false)

    const addToVariants = (value) => {

        let data = {
            name: value.name,
            vehicle_slug: value.vehicle_slug,
        }

        let isVariantExisting = variants.some(variant => variant.vehicle_slug === data.vehicle_slug)

        if (isVariantExisting) {
            return alert('The variant you selected is already added. Please select another.')
        }

        setVariants(current => [...current, data])
    }

    const removeVariant = (index) => {
        setVariants(oldValues => oldValues.filter((_, i) => i !== index))
    }

    const onSubmit = (data) => {

        data['variants'] = variants

        setIsUploading(true)

        axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/update/variants/vehicle/variants/${vehicleDetails._id}`, data)
            .then((response) => {
                if (response.status === 200) {
                    setErrorMessage(null)
                    setIsUploading(false)
                    reset()
                    Swal.fire(
                        'Vehicle variants updated successfully',
                        'Update may not immediately reflect on the page of vehicle, though this is very unlikely to happen',
                        'success'
                    )
                }

            })
            .catch((error) => {
                setErrorMessage(error.response.data.message)
                setIsUploading(false)
            });
    }

    return (
        <>
            <Head>
                <title>Edit vehicle variants | Auto Promo PH</title>
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
                                className={styles.link}
                            >
                                Dashboard
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/admin/vehicles"
                                className={styles.link}
                            >
                                Manage your vehicles
                            </Link>
                            <Typography color="primary" fontWeight='500'>Edit Vehicle Variants</Typography>
                        </Breadcrumbs>
                    </Box>

                    <Box>
                        <Box>
                            <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1} color='#343434'>{`Edit variants of ${vehicleDetails.name}`}</Typography>
                            <Typography fontSize='1rem' variant="h3" lineHeight='1.5' color='secondary' mb={3}>Update may not immediately reflect on the page of vehicle, though this is very unlikely to happen</Typography>
                        </Box>

                        <Alert severity="warning" sx={{ mt: 3, mb: 5 }}>Review the variants you will upload before clicking the save button below</Alert>

                    </Box>

                    <Box mb={3}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            encType='multipart/form-data'
                        >

                            <Box sx={{ backgroundColor: '#ffffff', paddingX: '30px', paddingY: '30px', borderRadius: '5px', border: '1px solid #d3d3d3', mb: '40px' }}>

                                <Typography fontSize='1.8rem' variant="h2" fontWeight='700' mb={3} color='#505050'>Add a variant or edit variants of this vehicle</Typography>
                                {/* <Divider /> */}

                                {/* <Typography mt={2} mb={1} fontWeight='700' color='#505050'>Main Image<sup><span className={styles.required}>*</span></sup></Typography> */}
                                <Divider sx={{ my: 2 }} />

                                <Typography my={2} fontSize='14px' fontWeight='700'>Choose from the vehicles below to add as a variant:</Typography>
                                <Box>
                                    {vehicles.map(item => {
                                        return (
                                            <Chip
                                                key={item._id}
                                                label={item.name}
                                                icon={<AddIcon />}
                                                variant='filled'
                                                sx={{ mx: .5, my: .5, borderRadius: 1, backgroundColor: "#f5f5f5" }}
                                                onClick={() => addToVariants(item)}
                                            />
                                        )
                                    })}
                                </Box>
                                <Divider sx={{ my: 2 }} />

                                <Typography mt={3} mb={2} fontSize='14px' fontWeight='700'>Added variants:</Typography>
                                {
                                    variants.length === 0 ?
                                        <Typography mt={3} mb={3} fontSize='14px' color='#808080' textAlign='center'>No variants added</Typography> :
                                        variants.map((item, index) => {
                                            return (
                                                <Chip
                                                    key={index}
                                                    label={item.name}
                                                    variant='outlined'
                                                    color='info'
                                                    sx={{ mx: .5, my: .5, borderRadius: 1, }}
                                                    onDelete={() => removeVariant(index)}
                                                />
                                            )
                                        })
                                }
                                {/* <Typography my={2} fontSize='14px' fontWeight='700'>Choose from the vehicle below to add as a variant:</Typography>
                                <Box>
                                    {vehicles.map(item => {
                                        return (<Chip
                                            key={item._id}
                                            label={item.name}
                                            icon={<AddIcon />}
                                            variant='filled'
                                            sx={{ mx: .5, my: .5, borderRadius: 1, backgroundColor: "#f5f5f5" }}
                                            onClick={() => addToVariants(item)}
                                        />)
                                    })}
                                </Box> */}

                            </Box>


                            <Alert severity="warning" sx={{ mt: 3, mb: 3 }}>Updating could take a while depending on the speed of your internet connection</Alert>

                            {
                                errorMessage !== null ?
                                    <Alert severity="error" sx={{ my: 3 }}>
                                        <AlertTitle>Oops!</AlertTitle>
                                        {errorMessage}
                                    </Alert> : null
                            }

                            {
                                isUploading ?
                                    <Box sx={{ my: 3 }}>
                                        <Typography mb={2}>Updating variants. Please wait... This could take a while depending on the speed of your internet connection.</Typography>
                                        <LinearProgress />
                                    </Box> : null
                            }


                            <Box mt={3}>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    disableElevation
                                    size="large"
                                    sx={{ mt: 2.5 }}
                                    disabled={isUploading}
                                >
                                    Save Changes
                                </Button>
                            </Box>
                        </form>
                    </Box>

                </Box>

            </Layout>
        </>
    )
}

export default EditVehicleVariants