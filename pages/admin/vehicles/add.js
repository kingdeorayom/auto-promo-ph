import Layout from '@/layouts/Layout'
import { Alert, AlertTitle, Box, Breadcrumbs, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
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

const AddVehicle = ({ vehicles }) => {

    const router = useRouter()

    const form = useForm({
        mode: 'onChange',
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors } = formState

    const [errorMessage, setErrorMessage] = useState(null)

    const [imagePreview, setImagePreview] = useState(null)

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

    const onSubmit = (data) => {

        if (data.image.length !== 0) {
            setErrorMessage(null)
        } else {
            return setErrorMessage('Image is required. Please attach an image and try submitting again.')
        }

        data['vehicle_slug'] = data.name.replace(/\W+/g, '-').toLowerCase();
        data['brand_slug'] = data.brand.charAt(0).toLowerCase() + data.brand.slice(1).toLowerCase()
        data['image'] = data.image[0]
        data['colors'] = ['blue', 'red', 'green']

        console.log(data)

        axios.post('http://192.168.1.3:3001/vehicles', data, { headers: { "Content-Type": "multipart/form-data" } })
            .then((response) => {
                // reset()
                setErrorMessage(null)
                Swal.fire(
                    'Vehicle added successfully.',
                    'Lorem ipsum',
                    'success'
                ).then(() => router.reload())
            })
            .catch((error) => {
                console.log(error.response.data.message);
                setErrorMessage(error.response.data.message)
            });
    }

    const handleImageChange = (e) => {
        convertToBase64(e.target.files[0])
    }

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogOpen = () => setIsDialogOpen(true)

    const handleDialogClose = () => setIsDialogOpen(false)

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
                            <Box onClick={handleDialogOpen} sx={{ cursor: 'pointer' }}>
                                <Typography mt={1} fontSize='13px' color='primary' fontWeight='300'>Learn more about vehicle name and vehicle slug</Typography>
                            </Box>
                        </Box>

                        <Box my={2}>
                            <Typography fontWeight='500'>Price*</Typography>
                            <Typography mb={1} fontSize='13px' fontWeight='300'>No need to add any special character such as commas, dots or currency symbol. It will be automatically added later. Just add the price as is. For example: 768000.</Typography>
                            <TextField
                                type='number'
                                fullWidth
                                placeholder='e.g, 768000'
                                InputProps={{
                                    startAdornment: <InputAdornment position='start'><PersonOutlineIcon sx={{ marginRight: .5 }} /></InputAdornment>
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
                                    startAdornment: <InputAdornment position='start'><PersonOutlineIcon sx={{ marginRight: .5 }} /></InputAdornment>
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
                                    startAdornment: <InputAdornment position='start'><PersonOutlineIcon sx={{ marginRight: .5 }} /></InputAdornment>
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
                                    startAdornment: <InputAdornment position='start'><PersonOutlineIcon sx={{ marginRight: .5 }} /></InputAdornment>
                                }}
                                {...register('keyFeatures')}
                                helperText={errors.keyFeatures?.message}
                            />
                        </Box>

                        {/* <Box my={2}>
                            <Typography mb={1} fontWeight='500'>Available Colors*</Typography>
                            <TextField
                                type='text'
                                fullWidth
                                placeholder="Provide this vehicle's available colors"
                                InputProps={{
                                    startAdornment: <InputAdornment position='start'><PersonOutlineIcon sx={{ marginRight: .5 }} /></InputAdornment>
                                }}
                                {...register('colors')}
                                helperText={errors.colors?.message}
                            />
                        </Box> */}

                        <Typography mb={1} fontWeight='500'>Vehicle Image*</Typography>
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
                    open={isDialogOpen}
                    onClose={handleDialogClose}
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
                        <Button onClick={handleDialogClose}>OK</Button>
                    </DialogActions>
                </Dialog>

            </Box>

        </Layout >
    )
}

export default AddVehicle