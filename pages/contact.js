import Layout from '@/layouts/Layout'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import facebook_icon from '@/public/facebook_icon.svg'
import viber_icon from '@/public/viber_icon.svg'
import gmail_icon from '@/public/gmail_icon.svg'
import contact from '@/public/contact.svg'
import Link from 'next/link'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import corporate from '@/public/corporate.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box sx={{
                    width: '100%',
                    backgroundColor: '#1f308a',
                    // paddingLeft: '15px',
                    // paddingRight: '15px',
                    textAlign: 'center',
                }}>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '768px',
                            margin: 'auto',
                            paddingLeft: '5px',
                            paddingRight: '5px',
                            my: '40px'
                        }}
                    >
                        <Box mx={2}>
                            <Typography
                                fontSize='2rem'
                                variant="h1"

                                mt={2.5}
                                mb={1}
                                lineHeight={1}
                                fontWeight='800'
                                color='#ffffff'
                            >
                                Get in touch
                            </Typography>
                            <Typography
                                fontSize='1rem'
                                variant="h3"
                                fontWeight='400'
                                lineHeight={1.5}
                                mt={3}
                                mb={1}
                                color='#dadada'

                            >
                                Want to get in touch? {"I'd"} love to hear from you. Just contact me through the following contact information below:
                            </Typography>
                        </Box>

                        {/* <Typography fontSize='2rem' variant="h1" fontWeight='700' mb={1} mt={2} color='#343434'>{brand.name}</Typography> */}
                        {/* <Typography fontSize='1rem' variant="h3" lineHeight={1.5} mb={1} color='secondary'>{brand.description}</Typography> */}
                    </Box>
                    <Box className='overlayBackground'></Box>
                </Box>

                <Box sx={{ width: '100%', maxWidth: 1280, margin: '40px auto 40px auto', paddingX: '15px' }}>
                    <Typography fontSize='1.2rem' fontWeight='500' mb={4} textAlign='center'>Contact me through the following:</Typography>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} mb={3}>
                        <Grid item xs={12} md={3}>
                            <Box className={styles.contactBox}>
                                <LocalPhoneOutlinedIcon sx={{ fontSize: '50px', color: '#47AE58' }} />
                                <Box ml={2}>
                                    <Typography fontWeight='700'>Call or Text</Typography>
                                    <Typography>+63 928 513 0117</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box className={styles.contactBox}>
                                <EmailOutlinedIcon sx={{ fontSize: '50px', color: '#FF905E' }} />
                                <Box ml={2}>
                                    <Typography fontWeight='700'>Send me an email</Typography>
                                    <Typography>someone@example.com</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box className={styles.contactBox}>
                                <LocalPhoneOutlinedIcon sx={{ fontSize: '50px', color: '#5D5FC0' }} />
                                <Box ml={2}>
                                    <Typography fontWeight='700'>Viber</Typography>
                                    <Typography>+63 928 513 0117</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box className={styles.contactBox}>
                                <FacebookOutlinedIcon sx={{ fontSize: '50px', color: '#4267B2' }} />
                                <Box ml={2}>
                                    <Typography fontWeight='700'>Facebook</Typography>
                                    <Link href='https://www.facebook.com/dhang.casten' target='_blank'>
                                        <Typography className={styles.link}>Dhang Casten</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box bgcolor='#fafafa' mb={5}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ width: '100%', maxWidth: 1280, margin: '50px auto 40px auto', paddingX: '15px' }}>
                        <Box>
                            <Typography color='#808080' fontWeight='300' mb={2}>Contact Me</Typography>
                            <Typography fontWeight='700' fontSize='3rem' lineHeight='52px' mb={2}>Dhang Casten</Typography>
                            <Typography fontWeight='500' color='#808080' mb={3}>Marketing Consultant</Typography>
                            <Typography mb={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic a natus fugiat officiis, harum enim asperiores consectetur, amet voluptas sed aliquid numquam reprehenderit in, labore quia animi aperiam eum!</Typography>
                            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic a natus fugiat officiis, harum enim asperiores consectetur, amet voluptas sed aliquid numquam reprehenderit in, labore quia animi aperiam eum!</Typography>
                            <Link href='/contact'>
                                <Button startIcon={<LocalPhoneOutlinedIcon />} variant='contained' size='large' disableElevation sx={{ backgroundColor: '#1976d2', color: '#fafafa', borderRadius: 10, mt: 5, mb: 5, textTransform: "none", ':hover': { backgroundColor: '#1f308a' } }}>Contact Me</Button>
                            </Link>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Image
                                src={corporate}
                                alt='Phone'
                                height={400}
                                style={{ aspectRatio: 1 }}
                            />
                        </Box>
                    </Stack>
                </Box>
                {/* <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ width: '100%', maxWidth: 1280, margin: '50px auto 40px auto', paddingX: '15px' }}>
                    <Box sx={{ backgroundColor: '#f5f5f5', height: 200, width: 200, mx: 3 }} />
                    <Box sx={{ backgroundColor: '#f5f5f5', height: 200, width: 200, mx: 3 }} />
                    <Box sx={{ backgroundColor: '#f5f5f5', height: 200, width: 200, mx: 3 }} />
                    <Box sx={{ backgroundColor: '#f5f5f5', height: 200, width: 200, mx: 3 }} />
                </Stack> */}



            </Layout>
        </>
    )
}

export default Contact
