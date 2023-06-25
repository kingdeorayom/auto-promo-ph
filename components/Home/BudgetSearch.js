import Link from 'next/link'
import { Box, Button, Slider, Typography } from '@mui/material'
import { useState } from 'react';
import useNumberFormatter from '@/hooks/useNumberFormatter';
import EastIcon from '@mui/icons-material/East';

const BudgetSearch = () => {

    const [value, setValue] = useState(2000000);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const marks = [
        {
            value: 700000,
            label: '700K',
        },
        {
            value: 1000000,
            label: '1M',
        },
        {
            value: 1500000,
            label: '1.5M',
        },
        {
            value: 2000000,
            label: '2M',
        },
        {
            value: 2500000,
            label: '2.5M',
        },
    ];

    return (
        <>
            <Typography fontSize='1.5rem' variant="h2" fontWeight='700' mb={1} color='#343434'>Browse cars by budget</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary' lineHeight={1.5}>Tight on budget? Use our Budget Search below to search for vehicles fitting your <strong>maximum</strong> budget</Typography>

            <Box display='flex' justifyContent='center'>
                <Box sx={{
                    mt: 3,
                    mb: 5,
                    backgroundColor: '#ffffff',
                    padding: '5px 15px',
                    borderRadius: '10px',
                    boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)',
                    width: '100%',
                    // maxWidth: '1000px',
                }}
                >

                    <Box sx={{ marginY: 2, marginX: 3 }}>
                        <Typography fontSize='1rem' variant="h3" color='#343434' fontWeight='500' lineHeight={1.5}>Adjust the slider below to match your maximum budget</Typography>
                        <Box sx={{ mt: 3, marginX: 5 }}>
                            <Slider
                                valueLabelDisplay="on"
                                valueLabelFormat={`₱ ${useNumberFormatter(value)}`}
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                step={100000}
                                marks={marks}
                                min={700000}
                                max={2500000}
                            />
                        </Box>
                        <Box display='flex' justifyContent='flex-start' sx={{ mt: 3.5, mb: .5, }}>
                            <Link href={`/budget-search?budget=${value}`}>
                                <Button
                                    variant='outlined'
                                    size='large'
                                    color='info'
                                    sx={{ textTransform: 'unset' }}
                                    endIcon={<EastIcon />}
                                >
                                    Search for vehicles under ₱ {useNumberFormatter(value)}
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default BudgetSearch