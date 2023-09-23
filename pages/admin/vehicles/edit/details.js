import Layout from '@/layouts/Layout'
import { Alert, AlertTitle, Box, Breadcrumbs, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, InputAdornment, LinearProgress, MenuItem, TextField, Typography } from '@mui/material'
import styles from '@/styles/AddEditVehicle.module.css'
import Link from 'next/link'
import axios from 'axios';
import Swal from 'sweetalert2';
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'
import AddIcon from '@mui/icons-material/Add';
import Head from 'next/head';
import nookies from 'nookies'

import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';
import VerticalAlignBottomOutlinedIcon from '@mui/icons-material/VerticalAlignBottomOutlined';
import TollOutlinedIcon from '@mui/icons-material/TollOutlined';
import SpaceBarOutlinedIcon from '@mui/icons-material/SpaceBarOutlined';
import WidthWideOutlinedIcon from '@mui/icons-material/WidthWideOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import FiberSmartRecordOutlinedIcon from '@mui/icons-material/FiberSmartRecordOutlined';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import TurnSlightRightOutlinedIcon from '@mui/icons-material/TurnSlightRightOutlined';
import LineWeightOutlinedIcon from '@mui/icons-material/LineWeightOutlined';
import TextRotationAngleupOutlinedIcon from '@mui/icons-material/TextRotationAngleupOutlined';
import AirlineSeatFlatAngledOutlinedIcon from '@mui/icons-material/AirlineSeatFlatAngledOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import SettingsInputCompositeOutlinedIcon from '@mui/icons-material/SettingsInputCompositeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import SyncLockOutlinedIcon from '@mui/icons-material/SyncLockOutlined';
import RemoveRoadOutlinedIcon from '@mui/icons-material/RemoveRoadOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';
import GasMeterOutlinedIcon from '@mui/icons-material/GasMeterOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import { edit_vehicle } from '@/data/validation/edit_vehicle';

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

const EditVehicleDetails = ({ vehicles, vehicleDetails }) => {

    console.log(vehicleDetails);

    const router = useRouter()

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(edit_vehicle),
        defaultValues: {
            name: vehicleDetails.name,
            description: vehicleDetails.description,
            brand: vehicleDetails.brand,
            model: vehicleDetails.model,
            bodyType: vehicleDetails.bodyType,
            fuelType: vehicleDetails.fuelType,
            year: vehicleDetails.year,

            unitPrice: vehicleDetails.unitPrice,
            netPrice: vehicleDetails.netPrice,
            downpayment: vehicleDetails.downpayment,
            amortization: vehicleDetails.amortization,

            overallLength: vehicleDetails.overallLength,
            overallWidth: vehicleDetails.overallWidth,
            overallHeight: vehicleDetails.overallHeight,
            wheelbase: vehicleDetails.wheelbase,
            tread: vehicleDetails.tread,
            minimumTurningRadius: vehicleDetails.minimumTurningRadius,
            minimumGroundClearance: vehicleDetails.minimumGroundClearance,
            approachAngle: vehicleDetails.approachAngle,
            rampBreakoverAngle: vehicleDetails.rampBreakoverAngle,
            departureAngle: vehicleDetails.departureAngle,

            numberOfCylinders: vehicleDetails.numberOfCylinders,
            numberOfValves: vehicleDetails.numberOfValves,
            pistonDisplacement: vehicleDetails.pistonDisplacement,
            maximumOutput: vehicleDetails.maximumOutput,
            maximumTorque: vehicleDetails.maximumTorque,

            transmissionType: vehicleDetails.transmissionType,
            driveSystem: vehicleDetails.driveSystem,

            steering: vehicleDetails.steering,
            brakes: vehicleDetails.brakes,
            suspension: vehicleDetails.suspension,
            tyres: vehicleDetails.tyres,

            seatingCapacity: vehicleDetails.seatingCapacity,
            luggageCapacity: vehicleDetails.luggageCapacity,
            fuelTankCapacity: vehicleDetails.fuelTankCapacity,

            kerbWeight: vehicleDetails.kerbWeight,
            grossWeight: vehicleDetails.grossWeight,

        }
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors } = formState

    const [errorMessage, setErrorMessage] = useState(null)
    // const [variants, setVariants] = useState(vehicleDetails.variants)
    const [isUploading, setIsUploading] = useState(false)

    // const addToVariants = (value) => {
    //     let data = {
    //         name: value.name,
    //         vehicle_slug: value.vehicle_slug,
    //     }
    //     setVariants(current => [...current, data])
    // }

    // const removeVariant = (index) => {
    //     setVariants(oldValues => oldValues.filter((_, i) => i !== index))
    // }

    const onSubmit = (data) => {

        data['vehicle_slug'] = data.name.replace(/\W+/g, '-').toLowerCase();
        data['brand_slug'] = data.brand.charAt(0).toLowerCase() + data.brand.slice(1).toLowerCase()

        console.log(data)

        setIsUploading(true)

        axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/${vehicleDetails._id}`, data)
            .then((response) => {
                if (response.status === 200) {
                    setErrorMessage(null)
                    setIsUploading(false)
                    reset()
                    Swal.fire({
                        title: 'Vehicle details edited successfully',
                        text: 'Details you update may not immediately reflect on the details of vehicle, though this is very unlikely to happen',
                        icon: 'success',
                        confirmButtonColor: '#1976d2'
                    }).then(() => router.reload())
                }

            })
            .catch((error) => {
                setErrorMessage(error.response.data.message)
                setIsUploading(false)
            });
    }

    const [isSlugDialogOpen, setIsSlugDialogOpen] = useState(false);
    const handleSlugDialogOpen = () => setIsSlugDialogOpen(true)
    const handleSlugDialogClose = () => setIsSlugDialogOpen(false)

    return (
        <>
            <Head>
                <title>Edit vehicle details | Auto Promo PH</title>
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
                            <Typography color="primary" fontWeight='500'>Edit Details</Typography>
                        </Breadcrumbs>
                    </Box>

                    <Box>
                        <Box>
                            <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1} color='#343434'>Edit {vehicleDetails.name}</Typography>
                            <Typography fontSize='1rem' variant="h3" lineHeight='1.5' color='secondary' mb={3}>Details you update may not immediately reflect on the details of vehicle, though this is very unlikely to happen</Typography>
                        </Box>

                        <Alert severity="warning" sx={{ mt: 3, mb: 5 }}>Review the data you will input before clicking the save button below. Fields marked with red asterisk (*) are required and cannot be left blank or without any data with it.</Alert>

                    </Box>

                    <Box mb={3}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            encType='multipart/form-data'
                        >

                            <Box sx={{ backgroundColor: '#ffffff', paddingX: '30px', paddingY: '30px', borderRadius: '5px', border: '1px solid #d3d3d3', mb: '40px' }}>

                                <Typography fontSize='1.8rem' variant="h2" fontWeight='700' mb={3} color='#505050'>Basic Information</Typography>
                                <Divider />

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Vehicle Name<sup><span className={styles.required}>*</span></sup></Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., Toyota Yaris 1.5 S CVT'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><AbcOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#1976d2' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, marginTop: 1.5, backgroundColor: '#ffffff' }
                                        }}
                                        {...register('name')}
                                        helperText={errors.name?.message}
                                    />
                                    <Box onClick={handleSlugDialogOpen} sx={{ cursor: 'pointer' }}>
                                        <Typography mt={1} fontSize='13px' color='primary' fontWeight='400'>Learn more about vehicle name and vehicle slug</Typography>
                                    </Box>
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Description<sup><span className={styles.required}>*</span></sup></Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='Provide a description of the vehicle'
                                        {...register('description')}
                                        helperText={errors.description?.message}
                                        multiline
                                        rows={7}
                                        InputProps={{
                                            sx: { borderRadius: 2, marginTop: 1.5, backgroundColor: '#ffffff' }
                                        }}
                                    />
                                </Box>

                                {/* <Box my={2} sx={{ pointerEvents: 'none' }}>
                                    <Typography mb={2} fontWeight='700' color='#505050'>Brand <sup><span className={styles.disabled}>This cannot be changed</span></sup></Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., Mirage G4'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><DashboardOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: 'brown' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('brand')}
                                        helperText={errors.brand?.message}
                                    />
                                </Box> */}

                                <Box my={2}>
                                    <Typography mb={2} fontWeight='700' color='#505050'>Brand<sup><span className={styles.required}>*</span></sup></Typography>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Select Brand"
                                        defaultValue={vehicleDetails.brand}
                                        inputProps={register('brand')}
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><DashboardOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: 'brown' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                    >
                                        <MenuItem value='Ford'>Ford</MenuItem>
                                        <MenuItem value='Geely'>Geely</MenuItem>
                                        <MenuItem value='MG'>MG</MenuItem>
                                        <MenuItem value='Mitsubishi'>Mitsubishi</MenuItem>
                                        <MenuItem value='Suzuki'>Suzuki</MenuItem>
                                        <MenuItem value='Toyota'>Toyota</MenuItem>
                                    </TextField>
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Model<sup><span className={styles.required}>*</span></sup></Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., Mirage G4'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><CategoryOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: 'green' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('model')}
                                        helperText={errors.model?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={2} fontWeight='700' color='#505050'>Body Type<sup><span className={styles.required}>*</span></sup></Typography>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Select Body Type"
                                        // defaultValue=''
                                        defaultValue={vehicleDetails.bodyType}
                                        inputProps={register('bodyType')}
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><AirportShuttleOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#caa448' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                    >
                                        <MenuItem value='Sedan'>Sedan</MenuItem>
                                        <MenuItem value='SUV'>SUV</MenuItem>
                                        <MenuItem value='Hatchback'>Hatchback</MenuItem>
                                        <MenuItem value='Van'>Van</MenuItem>
                                        <MenuItem value='Utility'>Utility</MenuItem>
                                        <MenuItem value='Crossover'>Crossover</MenuItem>
                                    </TextField>
                                </Box>

                                {/* <Box my={2} sx={{ pointerEvents: 'none' }}>
                                    <Typography mb={2} fontWeight='700' color='#505050'>Body Type <sup><span className={styles.disabled}>This cannot be changed</span></sup></Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., Mirage G4'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><AirportShuttleOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#caa448' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('bodyType')}
                                        helperText={errors.bodyType?.message}
                                    />
                                </Box> */}

                                <Box my={2}>
                                    <Typography mb={2} fontWeight='700' color='#505050'>Fuel Type<sup><span className={styles.required}>*</span></sup></Typography>
                                    <TextField
                                        select
                                        fullWidth
                                        // defaultValue=''
                                        defaultValue={vehicleDetails.fuelType}
                                        label="Select Fuel Type"
                                        inputProps={register('fuelType')}
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><LocalGasStationOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: 'crimson' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                    >
                                        <MenuItem value='Diesel'>Diesel</MenuItem>
                                        <MenuItem value='Gasoline'>Gasoline</MenuItem>
                                    </TextField>
                                </Box>

                                <Box my={2}>
                                    <Typography mb={2} fontWeight='700' color='#505050'>Transmission Type<sup><span className={styles.required}>*</span></sup></Typography>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Select Transmission Type"
                                        // defaultValue=''
                                        defaultValue={vehicleDetails.transmissionType}
                                        inputProps={register('transmissionType')}
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><SettingsOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#1976d2' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                    >
                                        {/* <MenuItem value='Automatic, CVT'>Automatic, CVT</MenuItem>
                                        <MenuItem value='Automatic, TCT'>Automatic, TCT</MenuItem>
                                        <MenuItem value='Automatic, SAT'>Automatic, SAT</MenuItem>
                                        <MenuItem value='Automatic, DCT'>Automatic, DCT</MenuItem>
                                        <MenuItem value='Semi-Automatic'>Semi-Automatic</MenuItem>
                                        <MenuItem value='Manual'>Manual</MenuItem> */}
                                        <MenuItem value='Automatic'>Automatic</MenuItem>
                                        <MenuItem value='Automatic, AT'>Automatic, AT</MenuItem>
                                        <MenuItem value='Automatic, AMT'>Automatic, AMT</MenuItem>
                                        <MenuItem value='Automatic, CVT'>Automatic, CVT</MenuItem>
                                        <MenuItem value='Automatic, TCT'>Automatic, TCT</MenuItem>
                                        <MenuItem value='Automatic, SAT'>Automatic, SAT</MenuItem>
                                        <MenuItem value='Automatic, DCT'>Automatic, DCT</MenuItem>
                                        <MenuItem value='Semi-Automatic'>Semi-Automatic</MenuItem>
                                        <MenuItem value='Manual'>Manual</MenuItem>
                                        <MenuItem value='Dual Clutch'>Dual Clutch</MenuItem>
                                    </TextField>
                                </Box>

                                {/* <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Transmission Type</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 1,280 mm'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><SettingsOutlinedIcon sx={{ marginLeft: .8, marginRight: .5 }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('transmissionType')}
                                        helperText={errors.transmissionType?.message}
                                    />
                                </Box> */}

                                <Box my={2}>
                                    <Typography mb={2} fontWeight='700' color='#505050'>Year<sup><span className={styles.required}>*</span></sup></Typography>
                                    <TextField
                                        type='tel'
                                        fullWidth
                                        placeholder='e.g., 2023'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><CalendarMonthOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#caa448' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        inputProps={{ maxLength: 4 }}
                                        {...register('year')}
                                        helperText={errors.year?.message}
                                    />
                                </Box>

                                {/* <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Variants</Typography>
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
                                </Box> */}

                            </Box>

                            <Box sx={{ backgroundColor: '#ffffff', paddingX: '30px', paddingY: '30px', borderRadius: '5px', border: '1px solid #d3d3d3', mb: '40px' }}>
                                <Typography fontSize='1.8rem' variant="h2" fontWeight='700' mb={3} color='#505050'>Price Information</Typography>
                                <Divider />
                                <Box my={2}>
                                    <Typography fontWeight='700' color='#505050'>Unit Price<sup><span className={styles.required}>*</span></sup></Typography>
                                    <Typography mb={1} fontSize='13px' fontWeight='400'>No need to add any special character such as commas, dots or currency symbol. It will be automatically added later. Just add the price as is.</Typography>
                                    <TextField
                                        type='number'
                                        fullWidth
                                        placeholder='e.g., 768000'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><LocalOfferOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: 'green' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, marginTop: 1.5, }
                                        }}
                                        {...register('unitPrice')}
                                        helperText={errors.unitPrice?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography fontWeight='700' color='#505050'>Net Price<sup><span className={styles.required}>*</span></sup></Typography>
                                    <Typography mb={1} fontSize='13px' fontWeight='400'>No need to add any special character such as commas, dots or currency symbol just like with Unit Price.</Typography>
                                    <TextField
                                        type='number'
                                        fullWidth
                                        placeholder='e.g., 750000'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><TollOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: 'crimson' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, marginTop: 1.5, }
                                        }}
                                        {...register('netPrice')}
                                        helperText={errors.netPrice?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography fontWeight='700' color='#505050'>Downpayment<sup><span className={styles.required}>*</span></sup></Typography>
                                    <Typography mb={1} fontSize='13px' fontWeight='400'>No need to add any special character such as commas, dots or currency symbol. It will be automatically added later. Just add the downpayment as is.</Typography>
                                    <TextField
                                        type='number'
                                        fullWidth
                                        placeholder='e.g., 60000'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><VerticalAlignBottomOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: 'brown' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, marginTop: 1.5, }
                                        }}
                                        {...register('downpayment')}
                                        helperText={errors.downpayment?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography fontWeight='700' color='#505050'>5 years Amortization<sup><span className={styles.required}>*</span></sup></Typography>
                                    <Typography mb={1} fontSize='13px' fontWeight='400'>No need to add any special character such as commas, dots or currency symbol. It will be automatically added later. Just add the value as is.</Typography>
                                    <TextField
                                        type='number'
                                        fullWidth
                                        placeholder='e.g., 12844'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><Looks5OutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#caa448' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, marginTop: 1.5, }
                                        }}
                                        {...register('amortization')}
                                        helperText={errors.amortization?.message}
                                    />
                                </Box>
                            </Box>

                            <Box sx={{ backgroundColor: '#ffffff', paddingX: '30px', paddingY: '30px', borderRadius: '5px', border: '1px solid #d3d3d3', mb: '40px' }}>
                                <Typography fontSize='1.8rem' variant="h2" fontWeight='700' mb={3} color='#505050'>Dimensions</Typography>
                                <Divider />

                                <Alert severity="warning" sx={{ mt: 3, mb: 3 }}>
                                    <AlertTitle>Important</AlertTitle>
                                    Include any special character such as commas. Also include the corresponding unit symbol as it would not be automatically added later.</Alert>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Overall Length</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 3,695 mm'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><SpaceBarOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('overallLength')}
                                        helperText={errors.overallLength?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Overall Width</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 1,655 mm'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><WidthWideOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('overallWidth')}
                                        helperText={errors.overallWidth?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Overall Height</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 1,555 mm'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><HeightOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('overallHeight')}
                                        helperText={errors.overallHeight?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Wheelbase</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 2,435 mm'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><FiberSmartRecordOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('wheelbase')}
                                        helperText={errors.wheelbase?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Tread</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 1,280 mm'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><AddRoadOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('tread')}
                                        helperText={errors.tread?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Minimum Turning Radius</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 4.7 m'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><TurnSlightRightOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('minimumTurningRadius')}
                                        helperText={errors.minimumTurningRadius?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Minimum Ground Clearance</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 170 mm'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><LineWeightOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('minimumGroundClearance')}
                                        helperText={errors.minimumGroundClearance?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Approach Angle</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 37 deg'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><TextRotationAngleupOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('approachAngle')}
                                        helperText={errors.approachAngle?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Ramp Breakover Angle</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 28 deg'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><AirlineSeatFlatAngledOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('rampBreakoverAngle')}
                                        helperText={errors.rampBreakoverAngle?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Departure Angle</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 49 deg'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><CropSquareOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('departureAngle')}
                                        helperText={errors.departureAngle?.message}
                                    />
                                </Box>

                            </Box>

                            <Box sx={{ backgroundColor: '#ffffff', paddingX: '30px', paddingY: '30px', borderRadius: '5px', border: '1px solid #d3d3d3', mb: '40px' }}>
                                <Typography fontSize='1.8rem' variant="h2" fontWeight='700' mb={3} color='#505050'>Engine Specifications</Typography>
                                <Divider />

                                <Alert severity="warning" sx={{ mt: 3, mb: 3 }}>
                                    <AlertTitle>Important</AlertTitle>
                                    Include any special character such as commas. Also include the corresponding unit symbol as it would not be automatically added later.</Alert>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Number of Cylinders</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 3 Cylinders'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><SettingsInputCompositeOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('numberOfCylinders')}
                                        helperText={errors.numberOfCylinders?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Number of Valves</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 3 Valves'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><TuneOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('numberOfValves')}
                                        helperText={errors.numberOfValves?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Piston Displacement</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 1,996 cc'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><PrecisionManufacturingOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('pistonDisplacement')}
                                        helperText={errors.pistonDisplacement?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Maximum Output</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 190hp @ 5,500rpm'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><ManageHistoryOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('maximumOutput')}
                                        helperText={errors.maximumOutput?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Maximum Torque</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 300Nm @ 1,500 - 4,000rpm'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><DynamicFormOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('maximumTorque')}
                                        helperText={errors.maximumTorque?.message}
                                    />
                                </Box>

                            </Box>

                            <Box sx={{ backgroundColor: '#ffffff', paddingX: '30px', paddingY: '30px', borderRadius: '5px', border: '1px solid #d3d3d3', mb: '40px' }}>
                                <Typography fontSize='1.8rem' variant="h2" fontWeight='700' mb={3} color='#505050'>Transmission</Typography>
                                <Divider />

                                <Alert severity="warning" sx={{ mt: 3, mb: 3 }}>
                                    <AlertTitle>Important</AlertTitle>
                                    Include any special character such as commas. Also include the corresponding unit symbol as it would not be automatically added later.</Alert>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Drive System</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 6-speed'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><DirectionsCarOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('driveSystem')}
                                        helperText={errors.driveSystem?.message}
                                    />
                                </Box>

                            </Box>

                            <Box sx={{ backgroundColor: '#ffffff', paddingX: '30px', paddingY: '30px', borderRadius: '5px', border: '1px solid #d3d3d3', mb: '40px' }}>
                                <Typography fontSize='1.8rem' variant="h2" fontWeight='700' mb={3} color='#505050'>Chassis</Typography>
                                <Divider />

                                <Alert severity="warning" sx={{ mt: 3, mb: 3 }}>
                                    <AlertTitle>Important</AlertTitle>
                                    Include any special character such as commas. Also include the corresponding unit symbol as it would not be automatically added later.</Alert>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Steering</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 18-inch'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><SyncLockOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('steering')}
                                        helperText={errors.steering?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Brakes</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., Ventilated Discs/Drums'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><RemoveRoadOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('brakes')}
                                        helperText={errors.brakes?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Suspension</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., Double Wishbone/Leaf Springs'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><SettingsInputCompositeOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('suspension')}
                                        helperText={errors.suspension?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Tyres</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 255/65 R18'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><FiberSmartRecordOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('tyres')}
                                        helperText={errors.tyres?.message}
                                    />
                                </Box>

                            </Box>

                            <Box sx={{ backgroundColor: '#ffffff', paddingX: '30px', paddingY: '30px', borderRadius: '5px', border: '1px solid #d3d3d3', mb: '40px' }}>
                                <Typography fontSize='1.8rem' variant="h2" fontWeight='700' mb={3} color='#505050'>Capacity</Typography>
                                <Divider />

                                <Alert severity="warning" sx={{ mt: 3, mb: 3 }}>
                                    <AlertTitle>Important</AlertTitle>
                                    Include any special character such as commas. Also include the corresponding unit symbol as it would not be automatically added later.</Alert>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Seating Capacity</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 5 seats'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><AirlineSeatReclineExtraOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('seatingCapacity')}
                                        helperText={errors.seatingCapacity?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Luggage Capacity</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 330 L'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><EventSeatOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('luggageCapacity')}
                                        helperText={errors.luggageCapacity?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Fuel Tank Capacity</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 80 L'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><GasMeterOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('fuelTankCapacity')}
                                        helperText={errors.fuelTankCapacity?.message}
                                    />
                                </Box>

                            </Box>

                            <Box sx={{ backgroundColor: '#ffffff', paddingX: '30px', paddingY: '30px', borderRadius: '5px', border: '1px solid #d3d3d3', mb: '40px' }}>
                                <Typography fontSize='1.8rem' variant="h2" fontWeight='700' mb={3} color='#505050'>Weights</Typography>
                                <Divider />

                                <Alert severity="warning" sx={{ mt: 3, mb: 3 }}>
                                    <AlertTitle>Important</AlertTitle>
                                    Include any special character such as commas. Also include the corresponding unit symbol as it would not be automatically added later.</Alert>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Kerb Weight (min./with full option)</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 820 kg'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><FitnessCenterOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('kerbWeight')}
                                        helperText={errors.kerbWeight?.message}
                                    />
                                </Box>

                                <Box my={2}>
                                    <Typography mb={1} fontWeight='700' color='#505050'>Gross Weight</Typography>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        placeholder='e.g., 1,260 kg'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'><DirectionsCarOutlinedIcon sx={{ marginLeft: .8, marginRight: .5, color: '#343434' }} /></InputAdornment>,
                                            sx: { borderRadius: 2, }
                                        }}
                                        {...register('grossWeight')}
                                        helperText={errors.grossWeight?.message}
                                    />
                                </Box>

                            </Box>

                            <Alert severity="warning" sx={{ mt: 3, mb: 3 }}>Review the data you input before clicking the save button below</Alert>

                            {
                                errorMessage !== null ?
                                    <Alert severity="error" sx={{ my: 3 }}>
                                        <AlertTitle>Oops! There is an error updating the details of this vehicle. Read the message below for more information.</AlertTitle>
                                        {errorMessage}
                                    </Alert> : null
                            }

                            {
                                isUploading ?
                                    <Box sx={{ my: 3 }}>
                                        <Typography mb={2}>Updating vehicle details ...</Typography>
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

                    {/* <Dialog
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
                    </Dialog> */}

                </Box>

            </Layout>
        </>
    )
}

export default EditVehicleDetails