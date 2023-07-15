import Layout from '@/layouts/Layout'
import { Alert, AlertTitle, Box, Breadcrumbs, Button, Divider, LinearProgress, Typography } from '@mui/material'
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

export async function getServerSideProps(context) {

    const vehicleId = context.query.vehicleId

    const vehiclesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`);
    const vehicles = await vehiclesResponse.json();

    const vehicleDetailsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/${vehicleId}`);
    const vehicleDetails = await vehicleDetailsResponse.json();

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

const EditVehicleImages = ({ vehicles, vehicleDetails }) => {

    const router = useRouter()

    const form = useForm({
        mode: 'onChange',
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors } = formState

    const [errorMessage, setErrorMessage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [isUploading, setIsUploading] = useState(false)

    const convertToBase64 = (image) => {
        const reader = new FileReader();
        try {
            reader.onloadend = () => {
                setImagePreview(reader.result.toString())
            }
            reader.readAsDataURL(image)
        } catch (error) {
            setImagePreview(null)
        }
    }

    const onSubmit = (data) => {

        if (data.image.length !== 0) {
            setErrorMessage(null)
        } else {
            return setErrorMessage('Image is required. Please attach an image and try submitting again.')
        }

        data['image'] = data.image[0]

        setIsUploading(true)

        axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/update/image/vehicle/${vehicleDetails._id}`, data, { headers: { "Content-Type": "multipart/form-data" } })
            .then((response) => {
                if (response.status === 200) {
                    setErrorMessage(null)
                    setIsUploading(false)
                    reset()
                    Swal.fire(
                        'Vehicle images updated successfully',
                        'Images you update may not immediately reflect on the page of vehicle, though this is very unlike to happen',
                        'success'
                    ).then(() => router.reload())
                }

            })
            .catch((error) => {
                setErrorMessage(error.response.data.message)
                setIsUploading(false)
            });
    }

    const handleImageChange = (e) => {
        convertToBase64(e.target.files[0])
    }

    return (
        <>
            <Head>
                <title>Edit vehicle images | Auto Promo PH</title>
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
                            <Typography color="primary" fontWeight='500'>Edit Vehicle Images</Typography>
                        </Breadcrumbs>
                    </Box>

                    <Box>
                        <Box>
                            <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1} color='#343434'>{`Edit images of ${vehicleDetails.name}`}</Typography>
                            <Typography fontSize='1rem' variant="h3" lineHeight='1.5' color='secondary' mb={3}>Images you update may not immediately reflect on the page of vehicle, though this is very unlike to happen</Typography>
                        </Box>

                        <Alert severity="warning" sx={{ mt: 3, mb: 5 }}>Review the images you will upload before clicking the save button below</Alert>

                    </Box>

                    <Box mb={3}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            encType='multipart/form-data'
                        >

                            <Box sx={{ backgroundColor: '#ffffff', paddingX: '30px', paddingY: '30px', borderRadius: '5px', border: '1px solid #d3d3d3', mb: '40px' }}>

                                <Typography fontSize='1.8rem' variant="h2" fontWeight='700' mb={3} color='#505050'>Vehicle Images</Typography>
                                <Divider />

                                <Typography mt={2} mb={1} fontWeight='700' color='#505050'>Main Image<sup><span className={styles.required}>*</span></sup></Typography>
                                <input
                                    type='file'
                                    accept="image/png, image/jpeg, image/jpg, image/jfif"
                                    {...register('image', {
                                        onChange: handleImageChange
                                    })}
                                    name='image'
                                    required
                                />

                                <Box sx={{ mt: 2, border: '1px solid #d3d3d3', width: '275px', height: '125px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                    {
                                        imagePreview !== null ?
                                            <Image
                                                src={imagePreview}
                                                alt='Preview image'
                                                width={250}
                                                height={100}
                                            /> :
                                            <Typography color='#808080' fontSize='12px' mx={2}>The image you will attach will be previewed here. To change, simply choose another file using the file picker above.</Typography>
                                    }
                                </Box>

                                <Typography fontSize='12px' color='#808080' mt={2}>This is only a preview and does not reflect the actual quality of the image that will be uploaded.</Typography>


                                <Typography mt={3} mb={1} fontWeight='700' color='#505050'>Interior and Exterior Images<sup><span className={styles.required}>*</span></sup></Typography>

                                <input
                                    type='file'
                                    multiple
                                    accept="image/png, image/jpeg, image/jpg, image/jfif"
                                    {...register('extraImages')}
                                    name='extraImages'
                                    required
                                />

                                <Typography mt={4} mb={1} fontWeight='700' color='#505050'>Available Colors<sup><span className={styles.required}>*</span></sup></Typography>

                                <input
                                    type='file'
                                    multiple
                                    accept="image/png, image/jpeg, image/jpg, image/jfif"
                                    {...register('colors')}
                                    name='colors'
                                    required
                                />

                            </Box>


                            <Alert severity="warning" sx={{ mt: 3, mb: 3 }}>Updating images means uploading them to the database and could take a while depending on the images you uploaded and the speed of your internet connection</Alert>

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
                                        <Typography mb={2}>Updating vehicle images. Please wait... This could take a while depending on the images you uploaded.</Typography>
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

export default EditVehicleImages