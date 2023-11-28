import Layout from '@/layouts/Layout'
import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/About.module.css'
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
                        <Typography mb={2}>{"Hello there! I'm Dhang Casten, your go-to Marketing Consultant in the dynamic world of vehicle sales. With a keen eye for market trends and a passion for crafting impactful strategies, I specialize in elevating the selling experience for both dealerships and individuals."}</Typography>
                        <Typography>{"Navigating the ever-evolving landscape of vehicle sales requires more than just expertise; it demands a tailored approach. As a Marketing Consultant, I bring a wealth of experience to the table, ensuring that your vehicles not only meet the eyes of potential buyers but leave a lasting impression. Let's embark on a journey to boost your sales and create a compelling narrative for every vehicle in your inventory."}</Typography>
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
                            <Typography fontWeight='700' fontSize='3rem' lineHeight='52px' mb={2}>Driven by Automotive Excellence and Customer Satisfaction.</Typography>
                            <Typography>Built within the passion in Automotive Industry and Customer Satisfaction. Here, we make sure that you will get the best deals at the right price and at the right brand.</Typography>
                            <Link href='/vehicles'>
                                <Button startIcon={<ExploreOutlinedIcon />} variant='contained' size='large' disableElevation sx={{ backgroundColor: '#1f308a', color: '#fafafa', borderRadius: 10, mt: 5, mb: 5, textTransform: "none", ':hover': { backgroundColor: '#1976d2' } }}>Explore Vehicles</Button>
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