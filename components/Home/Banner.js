import Image from 'next/image';
import { Box } from '@mui/material'
import banner from '@/public/banner-sample.jpg'

const Banner = () => {
    return (

        <Box display='flex' justifyContent='center'>
            <Image
                src={banner}
                alt='Banner'
                style={{ maxWidth: '100%', objectFit: 'contain' }}
            />
        </Box>
    )
}

export default Banner