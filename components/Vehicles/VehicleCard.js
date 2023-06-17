import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import EastIcon from '@mui/icons-material/East';
import useNumberFormatter from '@/hooks/useNumberFormatter';
import styles from '@/styles/Vehicles.module.css'

const VehicleCard = ({ image, name, price, downpayment }) => {
    return (
        <>
            <Box className={styles.card}>
                <Box className={styles.imageBox}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className={styles.vehicleImage}
                        placeholder='blur'
                        blurDataURL={image}
                    />
                </Box>
                <Typography fontWeight='500' variant='h4' fontSize='1rem' mt={1.5} className={styles.title}>{name}</Typography>
                <Typography color='secondary'>₱ {useNumberFormatter(price)}</Typography>
                <Typography color='secondary'>DP starts @ ₱ {useNumberFormatter(downpayment)}</Typography>
                <Stack direction='row' spacing={1}>
                    <Typography className={styles.link} variant="button" fontWeight='500' color='primary.main'>
                        VIEW MORE INFORMATION
                    </Typography>
                    <EastIcon color='primary' />
                </Stack>
            </Box>
        </>
    )
}

export default VehicleCard