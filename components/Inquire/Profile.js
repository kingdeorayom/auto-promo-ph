import Image from 'next/image'
import { useRouter } from 'next/router'
import { Alert, AlertTitle, Box, Typography } from '@mui/material'
import styles from '@/styles/Inquire.module.css'
import dhang_casten from '@/public/dhang_casten.jpg'

const Profile = () => {

    return (
        <>
            <Box className={styles.profileWrapper}>
                <Image
                    src={dhang_casten}
                    width={100}
                    height={100}
                    priority
                    alt='Dhang Casten'
                    className={styles.image}
                />
                <Box>
                    <Typography fontSize='1.5rem' variant="h1" fontWeight='700' mb={1}>Hi, {"I'm"} Dhang &#128075;</Typography>
                    <Typography fontSize='1rem' variant="h3" lineHeight={1.5} color='secondary'>Ask me anything you need to know about this vehicle.</Typography>
                </Box>
            </Box>
            <Alert severity="info" sx={{ mb: 5, borderRadius: '10px' }}>
                <AlertTitle>{"Head's up!"}</AlertTitle>
                To provide full assistance and the best experience, I need you to fill out this form. <strong>{"Don't"} worry, as only I can see the information you will provide.</strong>
            </Alert>
        </>
    )
}

export default Profile