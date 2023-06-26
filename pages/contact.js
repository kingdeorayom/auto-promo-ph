import Layout from '@/layouts/Layout'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import facebook_icon from '@/public/facebook_icon.svg'
import viber_icon from '@/public/viber_icon.svg'
import gmail_icon from '@/public/gmail_icon.svg'
import contact from '@/public/contact.svg'
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.masthead}>
                    <Box className={styles.wrapper}>
                        <Stack direction='row' display='flex' justifyContent='space-between' alignItems='center' sx={{ padding: '20px' }}>
                            <Box>
                                <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={2} color='#343434'>Get in touch</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>{"Want to get in touch? I'd love to hear from you."}</Typography>
                            </Box>
                            <Box>
                                <Image
                                    src={contact}
                                    width={250}
                                    height={250}
                                    alt='Hello'
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box className={styles.wrapper}>
                    <Typography fontSize='1rem' variant="h2" fontWeight='400' color='#343434' mt={5} mb={2}>Reach me through the following:</Typography>
                    <Grid
                        container
                        mt={.1}
                        mb={3}
                        rowSpacing={3}
                        columnSpacing={2}
                        justifyContent='center'
                    >
                        <Grid item xs={12} md={4}>
                            <Box sx={{ backgroundColor: '#ffffff', padding: 2.5, borderRadius: '15px', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                                <Image
                                    src={facebook_icon}
                                    width={48}
                                    height={48}
                                    alt='Hello'
                                    style={{
                                        position: 'relative',
                                        marginTop: '-50px'
                                    }}
                                />
                                <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1} color='primary'>Facebook</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Dhang Casten</Typography>
                                <Link href='https://www.facebook.com/dhang.casten' target='_blank' className={styles.link}>
                                    <Typography fontSize='1rem' variant="subtitle1">facebook.com/dhang.casten</Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ backgroundColor: '#ffffff', padding: 2.5, borderRadius: '15px', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                                <Image
                                    src={viber_icon}
                                    width={48}
                                    height={48}
                                    alt='Hello'
                                    style={{
                                        position: 'relative',
                                        marginTop: '-50px'
                                    }}
                                />
                                <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1} color='primary'>Viber or Phone</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Dhang Casten</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>+63 928 513 0117</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ backgroundColor: '#ffffff', padding: 2.5, borderRadius: '15px', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                                <Image
                                    src={gmail_icon}
                                    width={48}
                                    height={48}
                                    alt='Hello'
                                    style={{
                                        position: 'relative',
                                        marginTop: '-50px'
                                    }}
                                />
                                <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1} color='primary'>Email</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Dhang Casten</Typography>
                                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>dhangcasten@example.com</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Layout>
        </>
    )
}

export default Contact