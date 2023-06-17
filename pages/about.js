import Layout from '@/layouts/Layout'
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import dhang_casten from '@/public/dhang_casten.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import styles from '@/styles/About.module.css'

import expertise from '@/public/expertise.svg'

const About = () => {
    return (
        <Layout>

            <Box className={styles.wrapper}>

                <Box className={styles.profileWrapper}>
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
                            <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={.5}>Dhang Casten</Typography>
                            <Typography fontSize='1rem' variant="h3" lineHeight={1.5} color='secondary'>Marketing Consultant</Typography>
                        </Box>
                    </Box>
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <Link href='/contact'>
                            <Button variant="outlined" sx={{ mb: 4 }} startIcon={<PhoneIcon />} disableElevation>Get in touch</Button>
                        </Link>
                    </Box>
                </Box>

                <Box display={{ xs: 'block', md: 'none' }}>
                    <Link href='/contact'>
                        <Button variant="outlined" sx={{ mb: 4 }} startIcon={<PhoneIcon />} disableElevation>Get in touch</Button>
                    </Link>
                </Box>

                <Typography fontSize='2.5rem' variant="h1" fontWeight='700' mb={1}><span className={styles.brand}>Auto Promo PH</span></Typography>
                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Thank you for considering Auto Promo PH. I believe that my experience, skills and dedication set me apart and make me the ideal choice for your journey.</Typography>

                <Grid
                    container
                    mt={1}
                    mb={3}
                    rowSpacing={3}
                    columnSpacing={2}
                    justifyContent='center'
                >
                    <Grid item xs={12} md={6}>
                        <Box sx={{ backgroundColor: '#fafafa', padding: 2, borderRadius: '15px' }}>
                            <Image
                                src={expertise}
                                width={48}
                                height={48}
                                alt='Hello'
                            />
                            <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1}>Expertise</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>We have extensive experience in designing and developing websites for clients across various industries.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ backgroundColor: '#fafafa', padding: 2, borderRadius: '15px' }}>
                            <Image
                                src={expertise}
                                width={48}
                                height={48}
                                alt='Hello'
                            />
                            <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1}>Attention to Detail</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>We have extensive experience in designing and developing websites for clients across various industries.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ backgroundColor: '#fafafa', padding: 2, borderRadius: '15px' }}>
                            <Image
                                src={expertise}
                                width={48}
                                height={48}
                                alt='Hello'
                            />
                            <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1}>Communication</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>We have extensive experience in designing and developing websites for clients across various industries.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ backgroundColor: '#fafafa', padding: 2, borderRadius: '15px' }}>
                            <Image
                                src={expertise}
                                width={48}
                                height={48}
                                alt='Hello'
                            />
                            <Typography fontSize='1.2rem' fontWeight='700' mt={2} mb={1}>Customer Service</Typography>
                            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>We have extensive experience in designing and developing websites for clients across various industries.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* <Grid
                container
                mt={1}
                mb={3}
                rowSpacing={3}
                columnSpacing={2}
                justifyContent='center'
            >
                <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                    <Box sx={{ marginBottom: '30px' }}>
                        <Image
                            src={dhang_casten}
                            width={200}
                            height={200}
                            alt='Dhang Casten'
                            style={{ borderRadius: '50%', marginBottom: 10 }}
                        />
                        <Typography fontWeight='700' variant='h1' fontSize='3rem' color='primary' mb={1}>Dhang Casten</Typography>
                        <Typography variant='h3' fontSize='1.2rem' fontWeight='700' mb={2}>Marketing Consultant</Typography>
                        <Typography variant='h3' fontSize='1.2rem' color='secondary' fontWeight='400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolores temporibus quo perferendis sequi ratione rerum eligendi veritatis omnis, adipisci eaque accusamus, veniam, illum cupiditate voluptatibus inventore tempora expedita officiis!</Typography>
                    </Box>
                    <Link href='/contact'>
                        <Button variant="contained" startIcon={<PhoneIcon />} disableElevation>Contact Me</Button>
                    </Link>
                </Grid>
            </Grid> */}

        </Layout>
    )
}

export default About