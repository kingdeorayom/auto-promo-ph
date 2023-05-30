import Layout from '@/layouts/Layout'
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import dhang_casten from '../public/dhang_casten.jpg'
import PhoneIcon from '@mui/icons-material/Phone';

const About = () => {
    return (
        <Layout>
            {/* <Typography fontSize='2rem' variant="h2" fontWeight='600'>About Me</Typography> */}
            {/* <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography> */}

            <Grid
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
                        <Typography fontWeight='500' variant='h1' fontSize='3rem' color='primary' mb={1}>Dhang Casten</Typography>
                        <Typography variant='h3' fontSize='1.2rem' fontWeight='500' mb={2}>Marketing Consultant</Typography>
                        <Typography variant='h3' fontSize='1.2rem' color='secondary' fontWeight='300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolores temporibus quo perferendis sequi ratione rerum eligendi veritatis omnis, adipisci eaque accusamus, veniam, illum cupiditate voluptatibus inventore tempora expedita officiis!</Typography>
                    </Box>
                    <Link href='/contact'>
                        <Button variant="contained" startIcon={<PhoneIcon />} disableElevation>Contact Me</Button>
                    </Link>
                </Grid>

            </Grid >
        </Layout>
    )
}

export default About