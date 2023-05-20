import Layout from '@/layouts/Layout'
import { Typography } from '@mui/material'

const Brands = () => {
    return (
        <Layout>
            <Typography fontSize='2rem' variant="h2" fontWeight='600'>All Brands</Typography>
            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Choose vehicle from the most popular brands</Typography>
        </Layout>
    )
}

export default Brands