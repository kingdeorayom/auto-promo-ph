import Image from 'next/image';
import { Box, Button, Stack, Typography } from '@mui/material'
// import banner from '@/public/banner-sample.png'
import corporate from '@/public/corporate.png'
import styles from '@/styles/Banner.module.css'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const Banner = () => {
    return (

        <Box className={styles.banner}>
            <Stack direction={{ xs: 'column', md: 'row' }} display='flex' alignItems='center'>
                <Box mx={5}>
                    <Image
                        src={corporate}
                        alt='Phone'
                        height={400}
                        style={{ aspectRatio: 1 }}
                    />
                </Box>
                <Box sx={{ textAlign: 'center', paddingX: '30px', mt: 4 }}>
                    <Typography
                        fontSize='2.5rem'
                        variant="h1"
                        mt={.8}
                        mb={2.5}
                        lineHeight={1}
                        fontWeight='800'
                        color='#1f308a'

                    >
                        At Auto Promo PH, {"you're in good hands!"}
                    </Typography>
                    <Typography fontSize='1.1rem' variant="h3" fontWeight='500' lineHeight={1.5} mb={2} color='#505050'  >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                    </Typography>
                    <Button startIcon={<LocalPhoneOutlinedIcon />} variant='contained' size='large' disableElevation sx={{ backgroundColor: '#1976d2', color: '#fafafa', borderRadius: 10, mt: 2, textTransform: "none", ':hover': { backgroundColor: '#1f308a' } }}>Contact Me</Button>
                </Box>
            </Stack>
            {/* <Box className='overlayBackground'></Box> */}
        </Box>
    )
}

export default Banner