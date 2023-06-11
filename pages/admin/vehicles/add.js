import Layout from '@/layouts/Layout'
import { Alert, Autocomplete, Box, Breadcrumbs, Button, Divider, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import styles from '../../../styles/AddEditVehicle.module.css'
import Link from 'next/link'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from 'axios';
import Swal from 'sweetalert2';
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'

const AddVehicle = () => {

    const router = useRouter()

    const form = useForm({
        mode: 'onChange',
        // resolver: yupResolver(inquiry),
        defaultValues: {
            name: "Mitsubishi Mirage G4",
            price: "768000",
            description: "Lorem ipsum dolor sit amet",
            image: "/images/vehicles/mitsubishi-g4.jpg",
            brand: "Mitsubishi",
            model: "Mirage G4",
            type: "Sedan",
            transmission: "Automatic",
            fuelType: "Diesel",
            year: "2022",
            keyFeatures: "Marami",
        }
    })

    const { register, control, handleSubmit, formState, reset, getValues } = form
    const { errors } = formState

    // const [image, setImage] = useState('')

    // const convertToBase64 = (file) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setImage(reader.result.toString())
    //     }
    //     reader.readAsDataURL(file)
    // }

    const onSubmit = (data) => {

        console.log(data)

        data['vehicle_slug'] = 'geely-magic'
        data['brand_slug'] = data.brand.charAt(0).toLowerCase() + data.brand.slice(1).toLowerCase()

        // if (data.file.length > 0) {
        //     convertToBase64(data.file[0])
        // }

        axios.post('http://192.168.1.3:3001/vehicles', data)
            .then((response) => {
                reset()
                Swal.fire(
                    'Vehicle added successfully.',
                    'Lorem ipsum',
                    'success'
                )
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }

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

                <Divider />

                <Box mb={3}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
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
                            <Typography fontWeight='500'>Price*</Typography>
                            <Typography mb={1} fontSize='13px' fontWeight='300'>No need to add any special character such as comma, dots or currency symbol. It will be automatically added later. Just add the price as is. For example: 100000.</Typography>
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
                            <Typography mb={1} fontWeight='500'>Image*</Typography>
                            <TextField
                                type='text'
                                fullWidth
                                placeholder='Test'
                                InputProps={{
                                    startAdornment: <InputAdornment position='start'><PersonOutlineIcon sx={{ marginRight: .5 }} /></InputAdornment>
                                }}
                                {...register('image')}
                                helperText={errors.image?.message}
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
                            <Typography mb={2} fontWeight='500'>Type*</Typography>
                            <TextField
                                select
                                fullWidth
                                label="Select Type"
                                defaultValue=''
                                inputProps={register('type')}
                            >
                                <MenuItem value='Sedan'>Sedan</MenuItem>
                                <MenuItem value='SUV'>SUV</MenuItem>
                                <MenuItem value='Hatchback'>Hatchback</MenuItem>
                                <MenuItem value='Van'>Van</MenuItem>
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
                                <MenuItem value='Automatic'>Automatic</MenuItem>
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

                        <Alert severity="warning" sx={{ my: 3 }}>Review the data you input before clicking the button below. In case of any errors in details, you may edit through <strong>Vehicle Management</strong> section under <strong>Dashboard</strong>.</Alert>

                        <Button
                            type='submit'
                            variant="contained"
                            disableElevation
                            size="large"
                        >
                            Save
                        </Button>
                    </form>
                </Box>

            </Box>

        </Layout>
    )
}

export default AddVehicle