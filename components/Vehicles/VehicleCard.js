import { Box, Button, Chip, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import EastIcon from '@mui/icons-material/East';
import useNumberFormatter from '@/hooks/useNumberFormatter';
import styles from '@/styles/Vehicles.module.css'
import { blue } from '@mui/material/colors';
import carnobg from '@/public/carnobg.png'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const VehicleCard = ({ image, name, unitPrice, promo, fuelType, transmissionType, bodyType, description, model }) => {

    const shortHandTransmission = transmissionType === "Automatic, AT" ? "AT" : transmissionType === "Automatic, AMT" ? "AMT" : transmissionType === "Automatic, CVT" ? "CVT" : transmissionType === "Automatic, SAT" ? "SAT" : transmissionType === "Automatic, DCT" ? "DCT" : transmissionType === "Automatic, TCT" ? "TCT" : transmissionType === "Semi-Automatic" ? "Semi" : transmissionType === "Manual" ? "Manual" : transmissionType === "Automatic" ? "Auto" : transmissionType === "Dual Clutch" ? "DCT" : null;

    const chipStyle = {
        color: '#505050',
        fontWeight: '600',
        fontSize: '11.5px',
        borderColor: '#d3d3d3'
        // border: '1px solid #31418f',
        // backgroundColor: '#f5f8ff'
    }

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

                    <Stack direction={'row'} spacing={1} mt={1} mb={1.2} flexWrap='wrap'>
                        <Chip label={bodyType} variant="outlined" size='small' sx={chipStyle} />
                        <Chip label={shortHandTransmission} variant="outlined" size='small' sx={chipStyle} />
                        <Chip label={fuelType} variant="outlined" size='small' sx={chipStyle} />
                    </Stack>

                    <Typography fontWeight='400' color='#808080' variant='h4' fontSize='.9rem' className={styles.model}>{model}</Typography>
                    <Typography fontWeight='700' color='#343434' variant='h4' fontSize='1rem' className={styles.title}>{name}</Typography>
                    <Typography color='success.main' fontSize='14px' fontWeight='500'>₱ {useNumberFormatter(unitPrice)}</Typography>
                    {/* <Typography color='secondary' fontSize='14px'>Promo: ₱ {useNumberFormatter(promo)}</Typography> */}
                    <Typography color='secondary' fontSize='13px' mt={1} className={styles.truncate}>{description}</Typography>
                    {/* <Stack direction='row' alignItems='center'>
                        <LocalOfferOutlinedIcon sx={{ color: 'royalblue', fontSize: '14px', marginRight: '5px', marginTop: '2px' }} />
                        <Typography color='secondary' fontSize='14px'>Available for trade in</Typography>
                    </Stack> */}

                    {/* <Stack direction={'row'} spacing={2} mt={2} mb={.5} justifyContent='space-around'>

                        <Stack direction='row' spacing={1}>
                            <WidgetsOutlinedIcon sx={{ fontSize: '18px', color: '#5D5FC0' }} />
                            <Typography fontWeight='500' fontSize='12px'>{bodyType}</Typography>
                        </Stack>

                        <Stack direction='row' spacing={1}>
                            <SettingsOutlinedIcon sx={{ fontSize: '18px', color: '#FF905E' }} />
                            <Typography fontWeight='500' fontSize='12px'>{shortHandTransmission}</Typography>
                        </Stack>

                        <Stack direction='row' spacing={1}>
                            <LocalGasStationOutlinedIcon sx={{ fontSize: '18px', color: '#47AE58' }} />
                            <Typography fontWeight='500' fontSize='12px'>{fuelType}</Typography>
                        </Stack>

                    </Stack> */}

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
                                border: '1px solid #d3d3d3',
                                ':hover': {
                                    backgroundColor: '#ffffff',
                                    // boxShadow: '0 0 2px 0 rgba(34, 34, 34, 1)',
                                    border: '1px solid #1f308a'
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