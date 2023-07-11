import { Box, Typography, Breadcrumbs } from '@mui/material';
import Link from 'next/link';

const NavigationControl = ({ vehicle }) => {
    return (
        <Box mb={4}>
            <Breadcrumbs separator=">" aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                >
                    Explore
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/vehicles"
                >
                    All Vehicles
                </Link>
                <Typography color="primary" fontWeight='500'>{vehicle.name}</Typography>
            </Breadcrumbs>
        </Box>
    )
}

export default NavigationControl