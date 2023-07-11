import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Image from 'next/image';
import Link from 'next/link';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import setCurrency from '@/utils/setCurrency';

const Showcase = ({ vehicle }) => {

    return (
        <Grid container spacing={{ xs: 2, sm: 3, md: 5 }} mb={3}>
            <Grid item xs={12} sm={7}>
                <Box width={'100%'} height={300} position='relative' display='block' sx={{ aspectRatio: 1 }}>
                    <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        style={{
                            borderRadius: '5px',
                            objectFit: 'contain'
                        }}
                        placeholder='blur'
                        blurDataURL={vehicle.image}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} sm={5} display={{ xs: 'block', sm: 'flex' }} alignItems='center'>
                <Box>
                    <Typography fontSize='2.5rem' variant="h2" fontWeight='800' mb={1}>{vehicle.name}</Typography>
                    <Typography fontSize='1rem' variant="subtitle1" color='success.main' fontWeight='500'>₱ {setCurrency(vehicle.unitPrice)}</Typography>
                    <Stack direction={'row'} spacing={2} mt={2} mb={.5} justifyContent='space-between'>
                        <Stack direction='row' spacing={1}>
                            <WidgetsOutlinedIcon sx={{ fontSize: '18px', color: '#5D5FC0' }} />
                            <Typography fontWeight='500' fontSize='12px'>{vehicle.bodyType}</Typography>
                        </Stack>

                        <Stack direction='row' spacing={1}>
                            <SettingsOutlinedIcon sx={{ fontSize: '18px', color: '#FF905E' }} />
                            <Typography fontWeight='500' fontSize='12px'>{vehicle.transmissionType}</Typography>
                        </Stack>

                        <Stack direction='row' spacing={1}>
                            <CalendarMonthOutlinedIcon sx={{ fontSize: '18px', color: 'darkgoldenrod' }} />
                            <Typography fontWeight='500' fontSize='12px'>{vehicle.year}</Typography>
                        </Stack>
                    </Stack>
                    <Link href={{ pathname: '/inquire', query: { q: vehicle.vehicle_slug } }}>
                        <Button
                            fullWidth
                            startIcon={<QuestionAnswerOutlinedIcon />}
                            variant="contained"
                            disableElevation
                            sx={{
                                mt: 5,
                                backgroundColor: '#ff3366',
                                borderRadius: 2,
                                ':hover': {
                                    backgroundColor: '#ff3366',
                                    boxShadow: "0 8px 8px 0 rgba(255,51,102,0.2)"
                                }
                            }}
                        >
                            Inquire Today
                        </Button>
                    </Link>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Showcase