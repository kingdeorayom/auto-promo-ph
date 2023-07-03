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
                <Box className={styles.wrapper}>
                </Box>
            </Layout>
        </>
    )
}

export default Contact