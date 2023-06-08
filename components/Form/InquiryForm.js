import { Alert, Box, Button, Divider, InputAdornment, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'
// import { inquiry_validation } from '@/data/validation/inquiry'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from 'axios';
import Swal from 'sweetalert2';

let renderCount = 0

const InquiryForm = () => {

    const form = useForm()
    const { register, control, handleSubmit, formState, reset } = form
    const { errors } = formState

    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://192.168.1.3:3001/inquiries', data)
            .then((response) => {
                reset()
                Swal.fire(
                    'Your message has been sent successfully.',
                    'I will get back to you as soon as possible.',
                    'success'
                )
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <Typography fontSize='1.5rem' variant="h1" fontWeight='600' mb={3}>Inquiry Form</Typography>

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
                            id='name'
                            fullWidth
                            placeholder='e.g, Juan de la Cruz'
                            InputProps={{
                                startAdornment: <InputAdornment position='start'><PersonOutlineIcon sx={{ marginRight: .5 }} /></InputAdornment>
                            }}
                            {...register('name')}
                        />
                    </Box>

                    <Box my={2}>
                        <Typography mb={1} fontWeight='500'>Email*</Typography>
                        <TextField
                            type='text'
                            id='name'
                            fullWidth
                            placeholder='juandelacruz@example.com'
                            InputProps={{
                                startAdornment: <InputAdornment position='start'><MailOutlineIcon sx={{ marginRight: .5 }} /></InputAdornment>
                            }}
                            {...register('email')}
                        />
                    </Box>

                    <Box my={2}>
                        <Typography mb={1} fontWeight='500'>Mobile Number*</Typography>
                        <TextField
                            type='text'
                            id='name'
                            fullWidth
                            placeholder='Enter your mobile number'
                            InputProps={{
                                startAdornment: <InputAdornment position='start'><LocalPhoneOutlinedIcon sx={{ marginRight: .5 }} /></InputAdornment>
                            }}
                            {...register('mobileNumber')}
                        />
                    </Box>

                    <Box my={2}>
                        <Typography mb={1} fontWeight='500'>Message*</Typography>
                        <TextField
                            type='text'
                            id='name'
                            fullWidth
                            placeholder='Provide a brief yet concise message'
                            multiline
                            rows={5}
                            {...register('message')}
                        />
                    </Box>

                    <Alert severity="warning" sx={{ my: 3, }}>By clicking the submit button below, you agree to send your <strong>name</strong>, <strong>email address</strong> and <strong>mobile number</strong>.</Alert>

                    <Button
                        type='submit'
                        variant="contained"
                        disableElevation
                        size="large"
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </>
    )
}

export default InquiryForm