import { Box, CircularProgress, Typography } from '@mui/material'

const AppLoader = () => {
    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
            <Typography mx={2}>Loading... Please wait</Typography>
        </Box>
    )
}

export default AppLoader