import { Alert, AlertTitle, Box, Button, Divider, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import styles from '../../styles/Login.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { login_validation } from '@/data/validation/login'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useRouter } from 'next/router';

const LoginPage = () => {

    const router = useRouter()

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(login_validation)
    })

    const { register, control, handleSubmit, formState, reset } = form
    const { errors } = formState

    const onSubmit = (data) => {
        console.log(data)
        reset()
        router.push({ pathname: "/admin/dashboard" })
    }

    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePassword = () => setIsPasswordShown(!isPasswordShown);

    return (
        <Box className={styles.container}>
            <Box className={styles.wrapper}>
                <Box className={styles.formContainer}>

                    <Typography fontSize='2rem' variant="h2" fontWeight='600' mt={2} mb={1}>Hi <span className={styles.name}>Dhang</span>, welcome back! &#128075;</Typography>
                    <Typography fontSize='1rem' variant="h3" color='secondary'>Log in to your account</Typography>

                    {/* <Divider sx={{ my: 3 }} /> */}

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        <Box my={2}>
                            <Typography mb={1} fontWeight='500'>Email</Typography>
                            <TextField
                                type='email'
                                id='email'
                                fullWidth
                                placeholder='juandelacruz@example.com'
                                InputProps={{
                                    startAdornment: <InputAdornment position='start'><MailOutlineIcon sx={{ marginRight: .5 }} /></InputAdornment>
                                }}
                                {...register('email')}
                                helperText={errors.email?.message}
                            />
                        </Box>

                        <Box my={2}>
                            <Typography mb={1} fontWeight='500'>Password</Typography>
                            <TextField
                                type={isPasswordShown ? 'text' : 'password'}
                                id='password'
                                fullWidth
                                placeholder='Enter your password'
                                InputProps={{
                                    startAdornment: <InputAdornment position='start'><LockOutlinedIcon sx={{ marginRight: .5 }} /></InputAdornment>,
                                    endAdornment: <InputAdornment position='end'><IconButton onClick={togglePassword}>{isPasswordShown ? <VisibilityOutlinedIcon sx={{ marginRight: .5 }} /> : <VisibilityOffOutlinedIcon sx={{ marginRight: .5 }} />}</IconButton></InputAdornment>
                                }}
                                {...register('password')}
                                helperText={errors.password?.message}
                            />
                        </Box>

                        <Alert severity="warning" sx={{ my: 3 }}>
                            <AlertTitle>Important</AlertTitle>
                            In case of forgotten email or password, contact the web administrator immediately.
                        </Alert>

                        <Box className={styles.buttonWrapper}>
                            <Button
                                type='submit'
                                variant="contained"
                                disableElevation
                                size="large"
                                // sx={{ width: '75%' }}
                                fullWidth
                            >
                                Log in
                            </Button>
                        </Box>
                    </form>

                </Box>
            </Box>
        </Box>
    )
}

export default LoginPage