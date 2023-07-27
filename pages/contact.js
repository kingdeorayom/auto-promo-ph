import Layout from '@/layouts/Layout'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import facebook_icon from '@/public/facebook_icon.svg'
import viber_icon from '@/public/viber_icon.svg'
import gmail_icon from '@/public/gmail_icon.svg'
import Link from 'next/link'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import corporate from '@/public/corporate.png'
import SearchBox from "@/components/Search/SearchBox"
import Welcome from "@/components/Home/Welcome"

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.welcome}>
                    <Box
                        sx={{
                            mt: { xs: 7, md: 3 }, mb: 0, paddingLeft: '15px', paddingRight: '15px',
                            background: "linear-gradient(rgba(31,48,138,.9), rgba(31,48,138,.2)), url(https://static1.eyellowpages.ph/assets/yp_home_bg-8b8da4e918d8629254f2955c51da2e5c43be81ce031d3b417800e4991ff3d2e7.png) transparent no-repeat",
                        }}
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Box textAlign='center'>
                            <Box mx={2} mb={4}>
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
                                    fontWeight='500'
                                    lineHeight={1.5}
                                    mt={3}
                                    mb={1}
                                    color='#ffffff'
                                >
                                    Want to get in touch? {"I'd"} love to hear from you. Just contact me through the following contact information below:
                                </Typography>
                            </Box>

                            <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} mb={4}>
                                <Grid item xs={12} lg={4}>
                                    <Box className={styles.contactBox}>
                                        <Image
                                            src={viber_icon}
                                            alt='Viber'
                                            height={50}
                                            width={50}
                                            style={{ maxWidth: '100%' }}
                                        />
                                        <Box ml={5}>
                                            <Typography fontWeight='700' color='#505050'>Call, Text or Viber</Typography>
                                            <Typography color='#505050'>+63 928 513 0117</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} lg={4}>
                                    <Box className={styles.contactBox}>
                                        <Image
                                            src={gmail_icon}
                                            alt='Gmail'
                                            height={50}
                                            width={50}
                                            style={{ maxWidth: '100%' }}
                                        />
                                        <Box ml={5}>
                                            <Typography fontWeight='700' color='#505050'>Send me an email</Typography>
                                            <Typography color='#505050'>autopromoph@gmail.com</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} lg={4}>
                                    <Box className={styles.contactBox}>
                                        <Image
                                            src={facebook_icon}
                                            alt='Facebook'
                                            height={50}
                                            width={50}
                                            style={{ maxWidth: '100%' }}
                                        />
                                        <Box ml={5}>
                                            <Typography fontWeight='700' color='#505050'>Facebook</Typography>
                                            <Link href='https://www.facebook.com/profile.php?id=100093458535215' target='_blank'>
                                                <Typography className={styles.link}>Auto Promo PH</Typography>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Box>
                        <Box display={{ xs: 'none', sm: 'block' }}>
                            <Image
                                src={corporate}
                                alt='Dhang Casten'
                                height={400}
                                style={{ aspectRatio: 1 }}
                            />
                        </Box>
                    </Box>
                    {/* <Box className='overlayBackground'></Box> */}
                </Box>

                {/* <Box sx={{ width: '100%', maxWidth: 1280, margin: '40px auto 40px auto', paddingX: '15px' }}>
                    <Typography fontSize='1.2rem' fontWeight='500' mb={4} textAlign='center'>Contact me through the following:</Typography>
                    <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} mb={3}>
                        <Grid item xs={12} md={4}>
                            <Box className={styles.contactBox}>
                                <Image
                                    src={viber_icon}
                                    alt='Viber'
                                    height={50}
                                    width={50}
                                />
                                <Box ml={5}>
                                    <Typography fontWeight='700'>Call, Text or Viber</Typography>
                                    <Typography>+63 928 513 0117</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={styles.contactBox}>
                                <Image
                                    src={gmail_icon}
                                    alt='Gmail'
                                    height={50}
                                    width={50}
                                />
                                <Box ml={5}>
                                    <Typography fontWeight='700'>Send me an email</Typography>
                                    <Typography>autopromoph@gmail.com</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={styles.contactBox}>
                                <Image
                                    src={facebook_icon}
                                    alt='Facebook'
                                    height={50}
                                    width={50}
                                />
                                <Box ml={5}>
                                    <Typography fontWeight='700'>Facebook</Typography>
                                    <Link href='https://www.facebook.com/profile.php?id=100093458535215' target='_blank'>
                                        <Typography className={styles.link}>Auto Promo PH</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box> */}

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
                        <Box display={{ xs: 'flex', sm: 'none' }} justifyContent='center' >
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
