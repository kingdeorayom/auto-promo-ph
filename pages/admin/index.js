import { Alert, AlertTitle, Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import styles from '@/styles/Login.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { login_validation } from '@/data/validation/login'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useLogin } from '@/hooks/useLogin';
import Image from 'next/image';
import logo from '@/public/logotosvg.png'
import Head from 'next/head';
import nookies from 'nookies'

export async function getServerSideProps(context) {

    const cookies = nookies.get(context)

    if (cookies['auth_token']) {
        return {
            redirect: {
                destination: '/admin/dashboard',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    };
}

const LoginPage = () => {

    const router = useRouter()

    const { login, error, isLoading } = useLogin()

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(login_validation)
    })

    const { register, control, handleSubmit, formState, reset } = form
    const { errors } = formState

    const onSubmit = async (data) => {
        await login(data.email, data.password)
        router.reload()
    }

    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePassword = () => setIsPasswordShown(!isPasswordShown);

    return (
        <>
            <Head>
                <title>Log in | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Box className={styles.container}>
                <Box className={styles.wrapper}>
                    <Box className={styles.formContainer}>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Link href='/'>
                                <Image
                                    src={logo}
                                    alt="Auto Promo PH"
                                    height={48}
                                />
                            </Link>
                        </Box>

                        <Typography fontSize='2rem' variant="h2" fontWeight='700' mt={4} mb={1}>Hi <span className={styles.name}>Dhang</span>, welcome back! &#128075;</Typography>
                        <Typography fontSize='1rem' variant="h3" color='secondary'>Log in to your account</Typography>

                        {error &&
                            <Alert severity="error" sx={{ my: 3 }}>
                                <AlertTitle>Oops!</AlertTitle>
                                {error}
                            </Alert>
                        }

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
                                        startAdornment: <InputAdornment position='start'><MailOutlineIcon sx={{ marginRight: .5, marginLeft: .8 }} /></InputAdornment>,
                                        sx: { borderRadius: 10, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
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
                                        startAdornment: <InputAdornment position='start'><LockOutlinedIcon sx={{ marginRight: .5, marginLeft: .8 }} /></InputAdornment>,
                                        endAdornment: <InputAdornment position='end'><IconButton onClick={togglePassword}>{isPasswordShown ? <VisibilityOutlinedIcon sx={{ marginRight: .5 }} /> : <VisibilityOffOutlinedIcon sx={{ marginRight: .5 }} />}</IconButton></InputAdornment>,
                                        sx: { borderRadius: 10, backgroundColor: '#F3F4F8', "& fieldset": { border: 'none' } }
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
                                    disabled={isLoading}
                                >
                                    Log in
                                </Button>
                            </Box>

                            {/* <Link href='/admin/register'>
                            <Typography color='primary' my={5}>Create an account</Typography>
                        </Link> */}
                        </form>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default LoginPage