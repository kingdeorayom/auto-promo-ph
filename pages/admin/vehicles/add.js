import Layout from '@/layouts/Layout'
import { Alert, AlertTitle, Box, Breadcrumbs, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, InputAdornment, LinearProgress, MenuItem, TextField, Typography } from '@mui/material'
import styles from '@/styles/AddEditVehicle.module.css'
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
import Head from 'next/head';
import nookies from 'nookies'

import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';

export async function getServerSideProps(context) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`);
    const vehicles = await response.json();

    const cookies = nookies.get(context)

    if (!cookies['auth-token']) {
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

const AddVehicle = ({ vehicles }) => {

    const router = useRouter()

    const form = useForm({
        mode: 'onChange',
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors } = formState

    const [errorMessage, setErrorMessage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [variants, setVariants] = useState([])
    const [isUploading, setIsUploading] = useState(false)

    const convertToBase64 = (image) => {
        const reader = new FileReader();
        try {
            reader.onloadend = () => {
                setImagePreview(reader.result.toString())
            }
            reader.readAsDataURL(image)
        } catch (error) {
            console.log("Cancelled")
            setImagePreview(null)
        }
    }

    const addToVariants = (value) => {
        let data = {
            name: value.name,
            vehicle_slug: value.vehicle_slug,
        }
        console.log(data)
        setVariants(current => [...current, data])
    }

    const removeVariant = (index) => {
        setVariants(oldValues => oldValues.filter((_, i) => i !== index))
    }

    const onSubmit = (data) => {

        if (data.image.length !== 0) {
            setErrorMessage(null)
        } else {
            return setErrorMessage('Image is required. Please attach an image and try submitting again.')
        }

        if (data.colors === '') {
            return setErrorMessage('At least one available color is required.')
        }

        let availableColors = data.colors.split(/[ ,]+/)

        data['vehicle_slug'] = data.name.replace(/\W+/g, '-').toLowerCase();
        data['brand_slug'] = data.brand.charAt(0).toLowerCase() + data.brand.slice(1).toLowerCase()
        data['image'] = data.image[0]
        data['colors'] = availableColors
        data['variants'] = variants

        // console.log(data)

        setIsUploading(true)

        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`, data, { headers: { "Content-Type": "multipart/form-data" } })
            .then((response) => {
                // reset()
                // setErrorMessage(null)
                // Swal.fire(
                //     'Vehicle added successfully.',
                //     'Lorem ipsum',
                //     'success'
                // ).then(() => router.reload())

                if (response.status === 201) {
                    setErrorMessage(null)
                    setIsUploading(false)
                    reset()
                    Swal.fire(
                        'Vehicle added successfully',
                        'Lorem ipsum',
                        'success'
                    ).then(() => router.reload())
                }

            })
            .catch((error) => {
                console.log(error.response.data.message);
                setErrorMessage(error.response.data.message)
                setIsUploading(false)
            });
    }

    const handleImageChange = (e) => {
        convertToBase64(e.target.files[0])
    }

    const [isSlugDialogOpen, setIsSlugDialogOpen] = useState(false);
    const handleSlugDialogOpen = () => setIsSlugDialogOpen(true)
    const handleSlugDialogClose = () => setIsSlugDialogOpen(false)

    const [isVariantDialogOpen, setIsVariantDialogOpen] = useState(false);
    const handleVariantDialogOpen = () => setIsVariantDialogOpen(true)
    const handleVariantDialogClose = () => setIsVariantDialogOpen(false)

    return (
        <>
            <Head>
                <title>Add a new vehicle | Auto Promo PH</title>
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

                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            padding: '25px 25px',
                            marginBottom: '20px',
                            borderRadius: '10px',
                            boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)'
                        }}>
                        <Box>
                            <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1} color='#343434'>Add a new vehicle</Typography>
                            <Typography fontSize='1rem' variant="h3" lineHeight='1.5' color='secondary' mb={3}>Vehicles you add may not immediately appear on the list of vehicles</Typography>
                        </Box>

                        <Alert severity="warning" sx={{ mt: 3, mb: 2 }}>Review the data you will input before clicking the save button below. In case of error in details, you may edit through <strong>Vehicle Management</strong> section under <strong>Dashboard</strong>.</Alert>
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            padding: '10px 20px',
                            mb: '30px',
                            borderRadius: '10px',
                            boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)'
                        }}
                    >
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
                                            startAdornment: <InputAdornment position='start'><FontDownloadOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 10, marginTop: 1.5, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                        {...register('name')}
                                        helperText={errors.name?.message}
                                    />
                                    <Box onClick={handleSlugDialogOpen} sx={{ cursor: 'pointer' }}>
                                        <Typography mt={1} fontSize='13px' color='primary' fontWeight='400'>Learn more about vehicle name and vehicle slug</Typography>
                                    </Box>
                                </Box>

                                <Box my={2}>
                                    <Typography fontWeight='500'>Price*</Typography>
                                    <Typography mb={1} fontSize='13px' fontWeight='400'>No need to add any special character such as commas, dots or currency symbol. It will be automatically added later. Just add the price as is. For example: 768000.</Typography>
                                    <TextField
                                        type='number'
                                        fullWidth
                                        placeholder='e.g, 768000'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><LocalOfferOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 10, marginTop: 1.5, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                        {...register('price')}
                                        helperText={errors.price?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='500'>Description*</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='Provide a description of the vehicle'
                                        {...register('description')}
                                        helperText={errors.description?.message}
                                        multiline
                                        rows={5}
                                        InputProps={{
                                            sx: { borderRadius: 3, marginTop: 1.5, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={2} fontWeight='500'>Brand*</Typography>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Select Brand"
                                        defaultValue=''
                                        inputProps={register('brand')}
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><DashboardOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 10, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                    >
                                        <MenuItem value='Geely'>Geely</MenuItem>
                                        <MenuItem value='Honda'>Honda</MenuItem>
                                        <MenuItem value='Isuzu'>Isuzu</MenuItem>
                                        <MenuItem value='MG'>MG</MenuItem>
                                        <MenuItem value='Mitsubishi'>Mitsubishi</MenuItem>
                                        <MenuItem value='Suzuki'>Suzuki</MenuItem>
                                        <MenuItem value='Toyota'>Toyota</MenuItem>
                                    </TextField>
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='500'>Model*</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., Mirage G4'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><CategoryOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 10, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                        {...register('model')}
                                        helperText={errors.model?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={2} fontWeight='500'>Body Type*</Typography>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Select Body Type"
                                        defaultValue=''
                                        inputProps={register('type')}
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><AirportShuttleOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 10, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                    >
                                        <MenuItem value='Sedan'>Sedan</MenuItem>
                                        <MenuItem value='SUV'>SUV</MenuItem>
                                        <MenuItem value='Hatchback'>Hatchback</MenuItem>
                                        <MenuItem value='Van'>Van</MenuItem>
                                        <MenuItem value='Utility'>Utility</MenuItem>
                                    </TextField>
                                </Box>

                                <Box my={2}>
                                    <Typography mb={2} fontWeight='500'>Transmission*</Typography>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Select Transmission"
                                        defaultValue=''
                                        inputProps={register('transmission')}
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><SettingsOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 10, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                    >
                                        {/* <MenuItem value='Automatic'>Automatic</MenuItem>
                                <MenuItem value='Manual'>Manual</MenuItem> */}
                                        <MenuItem value='Automatic, CVT'>Automatic, CVT</MenuItem>
                                        <MenuItem value='Automatic, TCT'>Automatic, TCT</MenuItem>
                                        <MenuItem value='Automatic, SAT'>Automatic, SAT</MenuItem>
                                        <MenuItem value='Automatic, DCT'>Automatic, DCT</MenuItem>
                                        <MenuItem value='Semi-Automatic'>Semi-Automatic</MenuItem>
                                        <MenuItem value='Manual'>Manual</MenuItem>
                                    </TextField>
                                </Box>

                                <Box my={2}>
                                    <Typography mb={2} fontWeight='500'>Fuel Type*</Typography>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Select Fuel Type"
                                        defaultValue=''
                                        inputProps={register('fuelType')}
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><LocalGasStationOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 10, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                    >
                                        <MenuItem value='Diesel'>Diesel</MenuItem>
                                        <MenuItem value='Gasoline'>Gasoline</MenuItem>
                                    </TextField>
                                </Box>

                                <Box my={2}>
                                    <Typography mb={2} fontWeight='500'>Year*</Typography>
                                    <TextField
                                        type='tel'
                                        fullWidth
                                        placeholder='e.g, 2023'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><CalendarMonthOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 10, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                        inputProps={{ maxLength: 4 }}
                                        {...register('year')}
                                        helperText={errors.year?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='500'>Key Features*</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder="Provide this vehicle's key features"
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><FeaturedPlayListOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 10, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                        {...register('keyFeatures')}
                                        helperText={errors.keyFeatures?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='500'>Variants</Typography>
                                    <Typography mb={1} fontSize='14px' fontWeight='400'>Added variants:</Typography>
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

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='500'>Available Colors*</Typography>
                                    <Typography mb={1} fontSize='13px' fontWeight='400'>Enter available colors for this vehicle, separated by a comma. Note that an entry is determined after each comma.</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder="e.g., Red, Green, Blue"
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><PaletteOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 10, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                                        }}
                                        {...register('colors')}
                                        helperText={errors.colors?.message}
                                    />
                                </Box>

                                <Typography mt={2} mb={1} fontWeight='500'>Vehicle Image*</Typography>
                                <input
                                    type='file'
                                    // accept="image/*"
                                    accept="image/png, image/jpeg, image/jpg"
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
                                            <Typography color='#808080' fontSize='12px' mx={2}>The image you will attach will be previewed here. To change, simple choose another file using the file picker above.</Typography>
                                    }
                                </Box>
                                <Typography fontSize='12px' color='#808080' mt={2}>This is only a preview and does not reflect the actual quality of the image you will upload.</Typography>

                                {errorMessage !== null ?
                                    <Alert severity="error" sx={{ my: 3 }}>
                                        <AlertTitle>Oops!</AlertTitle>
                                        {errorMessage}
                                    </Alert> : null
                                }

                                {
                                    isUploading ?
                                        <Box sx={{ my: 3 }}>
                                            <Typography mb={2}>Uploading vehicle ...</Typography>
                                            <LinearProgress />
                                        </Box> : null
                                }

                                <Button
                                    type='submit'
                                    variant="contained"
                                    // disableElevation
                                    size="large"
                                    sx={{ mt: 2.5 }}
                                    disabled={isUploading}
                                >
                                    Save
                                </Button>
                            </form>
                        </Box>
                    </Box>
                    <Dialog
                        open={isSlugDialogOpen}
                        onClose={handleSlugDialogClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" color='primary' fontSize='1.6rem'>
                            What are URL slugs and why is it important?
                        </DialogTitle>
                        <DialogContent>
                            <Typography mb={1} fontSize='.9rem' lineHeight={1.6}>In web, a URL slug refers to the end part of a URL after the backslash {'("/")'} that identifies a specific page or post. Each slug on your web page needs to be unique, and they provide readers and search engines alike with information about the contents of a web page or post. Having posts with same slug could result in unprecedented errors.</Typography>

                            <Typography fontSize='.9rem' lineHeight={1.6}>In this website, each currently listed vehicle corresponds to a unique slug that belongs only to that record. For example, the <strong>Mitsubishi Mirage G4</strong> has a <span className={styles.slug}>URL slug</span> of:</Typography>

                            <Box sx={{ border: '1px solid #d3d3d3', borderRadius: '5px', paddingX: '10px', paddingY: '7px', my: '20px' }}>
                                <Typography fontSize='.9rem'>https://autopromo.ph/brands/mitsubishi/<span className={styles.slug}>mitsubishi-mirage-g4</span></Typography>
                            </Box>

                            <Typography mb={1} fontSize='.9rem' lineHeight={1.6}>To make it short, the URL slug for the vehicle {"you're"} going to add <strong>must be unique.</strong></Typography>

                            <Typography mb={1} fontSize='.9rem' lineHeight={1.6}><strong>The system will automatically generate a slug as you submit the form</strong>, and will prevent you from adding a record if a duplicate slug is found before the system actually adds it to the database.</Typography>

                            <Typography mb={1} fontSize='.9rem' lineHeight={1.6}>It is also important to note that if a record <strong>was deleted</strong>, then the corresponding URL slug that it used will be <strong>available for use again</strong> for a new record.</Typography>

                            <Typography mb={1} fontSize='.9rem' lineHeight={1.6}>Below is the list of vehicle slugs used by the system and are <strong>not available</strong> for new records:</Typography>

                            <Box sx={{ border: '1px solid #d3d3d3', borderRadius: '5px', paddingX: '10px', paddingY: '10px', my: '20px' }}>
                                {vehicles.map(vehicle => {
                                    return (<Typography key={vehicle._id} fontSize='.9rem'>{vehicle.vehicle_slug}</Typography>)
                                })}
                            </Box>


                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleSlugDialogClose}>OK</Button>
                        </DialogActions>
                    </Dialog>

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
                            <Typography mb={1} fontSize='14px' fontWeight='400'>Added variants:</Typography>
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
                            <Typography my={2} fontSize='14px' fontWeight='400'>Choose from the vehicle below to add as a variant:</Typography>
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
        </>
    )
}

export default AddVehicle