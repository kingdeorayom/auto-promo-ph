import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import EastIcon from '@mui/icons-material/East';
import useNumberFormatter from '@/hooks/useNumberFormatter';
import styles from '@/styles/Vehicles.module.css'
import { blue } from '@mui/material/colors';
import carnobg from '@/public/carnobg.png'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

const VehicleCard = ({ image, name, price, promo, fuelType, transmission, type }) => {

    const shortHandTransmission = transmission === "Automatic, CVT" ? "CVT" : transmission === "Automatic, SAT" ? "SAT" : transmission === "Automatic, DCT" ? "DCT" : transmission === "Semi-Automatic" ? "Semi" : transmission === "Manual" ? "Manual" : null

    return (
        <>
            <Box className={styles.card}>
                <Box className={styles.imageBox}>
                    <Image
                        // src={carnobg}
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className={styles.vehicleImage}
                        placeholder='blur'
                        blurDataURL={image}
                    />
                </Box>
                <Box className={styles.details}>
                    <Typography fontWeight='700' color='#343434' variant='h4' fontSize='.9rem' mt={1.5} className={styles.title}>{name}</Typography>
                    <Typography color='success.main' fontSize='14px' fontWeight='500'>₱ {useNumberFormatter(price)}</Typography>
                    <Typography color='secondary' fontSize='14px'>Promo: ₱ {useNumberFormatter(promo)}</Typography>

                    <Stack direction={'row'} spacing={2} mt={2} mb={.5} justifyContent='space-around'>

                        <Stack direction='row' spacing={1}>
                            <WidgetsOutlinedIcon sx={{ fontSize: '18px', color: '#5D5FC0' }} />
                            <Typography fontWeight='500' fontSize='12px'>{type}</Typography>
                        </Stack>

                        <Stack direction='row' spacing={1}>
                            <SettingsOutlinedIcon sx={{ fontSize: '18px', color: '#FF905E' }} />
                            <Typography fontWeight='500' fontSize='12px'>{shortHandTransmission}</Typography>
                        </Stack>

                        <Stack direction='row' spacing={1}>
                            <LocalGasStationOutlinedIcon sx={{ fontSize: '18px', color: '#47AE58' }} />
                            <Typography fontWeight='500' fontSize='12px'>{fuelType}</Typography>
                        </Stack>

                    </Stack>

                    <Box display='flex' justifyContent='center' mt={1.5} mb={1}>
                        <Button
                            variant='contained'
                            size='small'
                            fullWidth
                            disableElevation
                            endIcon={<EastIcon />}
                            sx={{
                                mt: 1.5,
                                backgroundColor: '#ffffff',
                                borderRadius: '15px',
                                fontSize: '12px',
                                px: 3,
                                py: .8,
                                color: '#505050',
                                ':hover': {
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 0 2px 0 rgba(34, 34, 34, 1)',
                                }
                            }}
                        >
                            More Details
                        </Button>
                    </Box>

                </Box>

            </Box>
        </>
    )
}

export default VehicleCard