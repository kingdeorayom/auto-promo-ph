import { Box, Typography, Stack, Divider, Button } from '@mui/material'
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import Image from 'next/image';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

const TradeIn = ({ vehicle }) => {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} display='flex' justifyContent='space-between' sx={{ backgroundColor: '#f5f8ff', paddingX: '10px', paddingY: '30px' }}>
            <Typography fontWeight='700' fontSize='1.2rem' textAlign='center' display={{ xs: 'block', md: 'none' }}>{`Trade in your old car for a new ${vehicle.name}`}</Typography>
            <Box display={{ xs: 'flex', md: 'none' }} justifyContent='center'>
                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={450}
                    height={250}
                    style={{ objectFit: 'contain', maxWidth: '100%' }}
                />
            </Box>
            <Box>
                <Typography fontWeight='700' display={{ xs: 'none', md: 'block' }}>{`Trade in your old car for a new ${vehicle.name}`}</Typography>
                <Typography fontWeight='400' fontSize='14px' mt={2} mb={1}>Let me bid on your vehicle and all you have to do is wait</Typography>

                <Stack direction='row' alignItems='center' mt={3} mb={2}>
                    <LocalOfferOutlinedIcon sx={{ color: 'royalblue', fontSize: '18px', marginRight: '10px' }} />
                    <Typography fontWeight='300' fontSize='14px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                </Stack>
                <Divider />
                <Stack direction='row' alignItems='center' mt={2} mb={2}>
                    <LocalPhoneOutlinedIcon sx={{ color: '#fd8f52', fontSize: '18px', marginRight: '10px' }} />
                    <Typography fontWeight='300' fontSize='14px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                </Stack>
                <Divider />
                <Stack direction='row' alignItems='center' mt={2} mb={2}>
                    <CheckCircleOutlinedIcon sx={{ color: 'green', fontSize: '18px', marginRight: '10px' }} />
                    <Typography fontWeight='300' fontSize='14px'>Complete the process quickly within days.</Typography>
                </Stack>

                <Link href='/contact'>
                    <Button variant='contained' color='success' disableElevation sx={{ mt: 2, textTransform: 'none' }}>Start your trade-in</Button>
                </Link>
            </Box>
            <Box display={{ xs: 'none', md: 'block' }}>
                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={450}
                    height={250}
                    style={{ objectFit: 'contain', marginRight: '40px', maxWidth: '100%' }}
                />
            </Box>
        </Stack>
    )
}

export default TradeIn