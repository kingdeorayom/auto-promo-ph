import Layout from '@/layouts/Layout'
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import dhang_casten from '@/public/dhang_casten.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import styles from '@/styles/About.module.css'
import gmail_icon from '@/public/gmail_icon.svg'
import viber_icon from '@/public/viber_icon.svg'
import facebook_icon from '@/public/facebook_icon.svg'

import expertise from '@/public/expertise.svg'
import detail from '@/public/detail.svg'
import communication from '@/public/communication.svg'
import customer from '@/public/customer.svg'
import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
                <title>About | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>

                <Box className={styles.wrapper}>

                    <Box className={styles.profileWrapper}>
                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                            <Box className={styles.imageWrapper}>
                                <Image
                                    src={dhang_casten}
                                    width={100}
                                    height={100}
                                    priority
                                    alt='Dhang Casten'
                                    className={styles.image}
                                />
                                <Box>
                                    <Typography fontSize='2rem' variant="h1" fontWeight='700' mb={.5} color='primary'>Dhang Casten</Typography>
                                    <Typography fontSize='1rem' variant="h2" lineHeight={1.5} color='secondary'>Marketing Consultant</Typography>
                                </Box>
                            </Box>

                            <Stack
                                direction='row'
                                spacing={2}
                                mb={1}
                                display={{ xs: 'none', md: 'block' }}
                            >
                                <Link href='https://www.facebook.com/dhang.casten' target="_blank">
                                    <IconButton>
                                        <Image
                                            src={facebook_icon}
                                            alt="Facebook Icon"
                                            width={20}
                                            height={20}
                                        />
                                    </IconButton>
                                </Link>
                                <Link href='https://www.viber.com/' target="_blank">
                                    <IconButton>
                                        <Image
                                            src={viber_icon}
                                            alt="Viber Icon"
                                            width={20}
                                            height={20}
                                        />
                                    </IconButton>
                                </Link>
                                <Link href='mailto:dhangcasten@autopromo.ph' target="_blank">
                                    <IconButton>
                                        <Image
                                            src={gmail_icon}
                                            alt="Gmail Icon"
                                            width={20}
                                            height={20}
                                        />
                                    </IconButton>
                                </Link>
                            </Stack>

                            {/* <Box display={{ xs: 'none', md: 'block' }}>
                                <Link href='/contact'>
                                    <Button variant="outlined" sx={{ mb: 4 }} startIcon={<PhoneIcon />} disableElevation>Get in touch</Button>
                                </Link>
                            </Box> */}
                        </Box>

                        <Box>

                            {/* <Box display={{ xs: 'block', md: 'none' }}>
                                <Link href='/contact'>
                                    <Button variant="outlined" sx={{ mb: 4, mt: 2 }} startIcon={<PhoneIcon />} disableElevation>Get in touch</Button>
                                </Link>
                            </Box> */}

                            <Stack
                                direction='row'
                                spacing={2}
                                display={{ xs: 'block', md: 'none' }}
                                my={2}
                            >
                                <Link href='https://www.facebook.com/dhang.casten' target="_blank">
                                    <IconButton>
                                        <Image
                                            src={facebook_icon}
                                            alt="Facebook Icon"
                                            width={20}
                                            height={20}
                                        />
                                    </IconButton>
                                </Link>
                                <Link href='https://www.viber.com/' target="_blank">
                                    <IconButton>
                                        <Image
                                            src={viber_icon}
                                            alt="Viber Icon"
                                            width={20}
                                            height={20}
                                        />
                                    </IconButton>
                                </Link>
                                <Link href='mailto:dhangcasten@autopromo.ph' target="_blank">
                                    <IconButton>
                                        <Image
                                            src={gmail_icon}
                                            alt="Gmail Icon"
                                            width={20}
                                            height={20}
                                        />
                                    </IconButton>
                                </Link>
                            </Stack>

                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mt={1} mb={1}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci laudantium harum dicta a incidunt quas veniam at est sapiente nam asperiores eaque ratione magnam architecto, explicabo ipsum laborum consequuntur?
                            </Typography>

                            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore omnis ducimus earum voluptate rem, impedit dolore laborum numquam. Vel doloremque molestias quas repudiandae qui quisquam autem illum aut praesentium rerum?
                            </Typography>
                        </Box>

                    </Box>

                    <Box sx={{ backgroundColor: '#ffffff', padding: 2.5, marginBottom: '20px', borderRadius: '15px', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                        <Typography fontSize='1.5rem' variant="h1" fontWeight='700' mb={1}>Why choose <span className={styles.brand}>Auto Promo PH?</span></Typography>
                        <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Thank you for considering Auto Promo PH. I believe that my experience, skills and dedication set me apart and make me the ideal choice for your journey.</Typography>
                    </Box>

                    <Grid
                        container
                        mt={.1}
                        mb={3}
                        rowSpacing={3}
                        columnSpacing={2}
                        justifyContent='center'
                    >
                        <Grid item xs={12} md={6}>
                            <Box sx={{ backgroundColor: '#ffffff', padding: 2.5, borderRadius: '15px', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                                <Image
                                    src={expertise}
                                    width={48}
                                    height={48}
                                    alt='Hello'
                                    style={{
                                        position: 'relative',
                                        marginTop: '-50px'
                                    }}
                                />
                                <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1} color='primary'>Expertise</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem vero quidem culpa distinctio numquam quia quo possimus.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ backgroundColor: '#ffffff', padding: 2.5, borderRadius: '15px', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                                <Image
                                    src={detail}
                                    width={48}
                                    height={48}
                                    alt='Hello'
                                    style={{
                                        position: 'relative',
                                        marginTop: '-50px'
                                    }}
                                />
                                <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1} color='primary'>Attention to Detail</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem vero quidem culpa distinctio numquam quia quo possimus.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ backgroundColor: '#ffffff', padding: 2.5, borderRadius: '15px', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                                <Image
                                    src={communication}
                                    width={48}
                                    height={48}
                                    alt='Hello'
                                    style={{
                                        position: 'relative',
                                        marginTop: '-50px'
                                    }}
                                />
                                <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1} color='primary'>Communication</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem vero quidem culpa distinctio numquam quia quo possimus.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ backgroundColor: '#ffffff', padding: 2.5, borderRadius: '15px', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                                <Image
                                    src={customer}
                                    width={48}
                                    height={48}
                                    alt='Hello'
                                    style={{
                                        position: 'relative',
                                        marginTop: '-50px'
                                    }}
                                />
                                <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1} color='primary'>Customer Service</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem vero quidem culpa distinctio numquam quia quo possimus.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Layout>
        </>
    )
}

export default About