import { Typography } from '@mui/material'

const Welcome = () => {
    return (
        <>
            <Typography
                fontSize='2.5rem'
                component='div'
                fontWeight='600'
                mt={.8}
                mb={1}
                lineHeight={1}
            >
                Welcome to{' '}
                <Typography
                    fontSize='2.5rem'
                    display='inline'
                    variant="h1"
                    fontWeight='600'
                    color='primary'
                >
                    Auto Promo PH
                </Typography>
            </Typography>

            <Typography fontSize='1rem' variant="h3" lineHeight={1.5} color='secondary'>
                Explore, or easily search for vehicles using our search field below
            </Typography>
        </>
    )
}

export default Welcome