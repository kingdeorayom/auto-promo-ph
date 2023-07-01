import { Alert, Box, Button, Divider, InputAdornment, LinearProgress, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { inquiry } from '@/data/validation/inquiry'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from 'axios';
import Swal from 'sweetalert2';
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';

const InquiryForm = () => {

    const router = useRouter()

    const [vehicleName, setVehicleName] = useState('a vehicle')

    const getVehicleBySlug = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/detail/${router.query.q}`);
            const vehicle = await response.json();
            setVehicleName(vehicle.name)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getVehicleBySlug()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query.q])

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(inquiry),
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors } = formState
    const [isSending, setIsSending] = useState(false)

    const onSubmit = async (data) => {

        data['vehicleSlug'] = router.query.q
        data['vehicleName'] = vehicleName

        setIsSending(true)

        // console.log(data)

        await emailjs.send('service_00x8du6', 'template_fh6lsi2', data, '_feim_H0vcS-Wc5_u')
            .then((result) => {
                console.log("result => " + result.text);
            }, (error) => {
                console.log("error => " + error.text);
            });

        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/inquiries`, data)
            .then((response) => {
                if (response.status === 201) {
                    setIsSending(false)
                    reset()
                    Swal.fire(
                        'Your message has been sent successfully.',
                        'I will get back to you as soon as possible.',
                        'success'
                    )
                }
            })
            .catch((error) => {
                console.log(error.response.data.message);
                setIsSending(false)
            });
    }

    return (
        <Box
            sx={{
                backgroundColor: '#ffffff',
                padding: '30px 20px',
                mb: '30px',
                borderRadius: '10px',
                boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)'
            }}
        >
            <Typography fontSize='1.5rem' variant="h1" fontWeight='500' mb={3}>Inquiry Form</Typography>

            <Divider />

            <Box>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <Box my={2}>
                        <Typography mb={1} fontWeight='500'>First Name*</Typography>
                        <TextField
                            type='text'
                            id='firstName'
                            fullWidth
                            placeholder='Enter your first name'
                            InputProps={{
                                startAdornment: <InputAdornment position='start'><PersonOutlineIcon sx={{ marginRight: .5, marginLeft: .8 }} /></InputAdornment>,
                                sx: { borderRadius: 10, marginTop: 1.5, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                            }}
                            {...register('firstName')}
                            helperText={errors.firstName?.message}
                        />
                    </Box>

                    <Box my={2}>
                        <Typography mb={1} fontWeight='500'>Last Name*</Typography>
                        <TextField
                            type='text'
                            id='lastName'
                            fullWidth
                            placeholder='Enter your last name'
                            InputProps={{
                                startAdornment: <InputAdornment position='start'><PersonOutlineIcon sx={{ marginRight: .5, marginLeft: .8 }} /></InputAdornment>,
                                sx: { borderRadius: 10, marginTop: 1.5, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                            }}
                            {...register('lastName')}
                            helperText={errors.lastName?.message}
                        />
                    </Box>

                    <Box my={2}>
                        <Typography mb={1} fontWeight='500'>Email*</Typography>
                        <TextField
                            type='email'
                            id='email'
                            fullWidth
                            placeholder='Enter your email'
                            InputProps={{
                                startAdornment: <InputAdornment position='start'><MailOutlineIcon sx={{ marginRight: .5, marginLeft: .8 }} /></InputAdornment>,
                                sx: { borderRadius: 10, marginTop: 1.5, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                            }}
                            {...register('email')}
                            helperText={errors.email?.message}
                        />
                    </Box>

                    <Box my={2}>
                        <Typography mb={1} fontWeight='500'>Mobile Number*</Typography>
                        <TextField
                            type='number'
                            id='mobileNumber'
                            fullWidth
                            placeholder='Enter your mobile number'
                            InputProps={{
                                startAdornment: <InputAdornment position='start'><LocalPhoneOutlinedIcon sx={{ marginRight: .5, marginLeft: .8 }} /></InputAdornment>,
                                sx: { borderRadius: 10, marginTop: 1.5, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                            }}
                            {...register('mobileNumber')}
                            helperText={errors.mobileNumber?.message}
                        />
                    </Box>

                    <Box my={2}>
                        <Typography mb={1} fontWeight='500'>Message*</Typography>
                        <TextField
                            type='text'
                            id='message'
                            fullWidth
                            placeholder='Provide a brief yet concise message'
                            multiline
                            rows={5}
                            {...register('message')}
                            helperText={errors.message?.message}
                            InputProps={{
                                sx: { borderRadius: 3, marginTop: 1.5, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
                            }}
                        />
                    </Box>

                    <Alert severity="warning" sx={{ my: 3, borderRadius: '10px' }}>By clicking the submit button below, you agree to send your <strong>name</strong>, <strong>email address</strong> and <strong>mobile number</strong>. Also, please make sure that the information you provided above are accurate.</Alert>

                    {
                        isSending ?
                            <Box sx={{ mb: 3 }}>
                                <Typography mb={2}>Sending ...</Typography>
                                <LinearProgress />
                            </Box> : null
                    }

                    <Button
                        type='submit'
                        variant="contained"
                        disableElevation
                        size="large"
                        disabled={isSending}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default InquiryForm