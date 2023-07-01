import { Typography } from '@mui/material'
import styles from '@/styles/Home.module.css'


const Welcome = () => {
    return (
        <>
            <Typography
                fontSize='3rem'
                // fontSize='5vw'
                variant="h1"
                mt={.8}
                mb={2.5}
                lineHeight={1}
                fontWeight='800'
                color='white'

            >
                Find, Inquire, Buy &mdash; quick and super easy!
            </Typography>

            <Typography fontSize='1.1rem' variant="h3" fontWeight='500' lineHeight={1.5} mb={2} color='#dadada'  >
                Streamline your car-buying experience with our effortless search
                {/* Explore, or easily search for vehicles using our search field below */}
            </Typography>
        </>
    )
}

export default Welcome