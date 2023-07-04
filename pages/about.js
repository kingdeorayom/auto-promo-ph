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
import Banner from '@/components/Home/Banner'
import Ratings from '@/components/Home/Ratings'
import corporate from '@/public/corporate.png'
import consulting from '@/public/consulting.svg'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

const About = () => {
    return (
        <>
            <Head>
                <title>About | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>

                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ width: '100%', maxWidth: 1280, margin: '50px auto 40px auto', paddingX: '15px' }}>
                    <Box>
                        <Typography color='#808080' fontWeight='300' mb={2}>ABOUT US</Typography>
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

                <Box className={styles.reasons}>
                    <Stack direction={{ xs: 'column', md: 'row' }} sx={{ width: '100%', maxWidth: 1280, margin: '40px auto 0 auto', paddingX: '15px' }}>
                        <Box display='flex' justifyContent='center'>
                            <Image
                                src={consulting}
                                alt='Phone'
                                height={400}
                                style={{ aspectRatio: 1 }}
                            />
                        </Box>
                        <Box>
                            <Typography color='#808080' fontWeight='300' mb={2}>WHY AUTO PROMO PH?</Typography>
                            <Typography fontWeight='700' fontSize='3rem' lineHeight='52px' mb={2}>Lorem ipsum dolor sit amet</Typography>
                            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic a natus fugiat officiis, harum enim asperiores consectetur, amet voluptas sed aliquid numquam reprehenderit in, labore quia animi aperiam eum!</Typography>
                            <Link href='/vehicles'>
                                <Button startIcon={<ExploreOutlinedIcon />} variant='contained' size='large' disableElevation sx={{ backgroundColor: '#1976d2', color: '#fafafa', borderRadius: 10, mt: 5, mb: 5, textTransform: "none", ':hover': { backgroundColor: '#1f308a' } }}>Explore Vehicles</Button>
                            </Link>
                        </Box>
                    </Stack>
                </Box>

                <Ratings />
                <Banner />

            </Layout>
        </>
    )
}

export default About