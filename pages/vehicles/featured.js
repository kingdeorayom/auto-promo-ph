import Layout from '@/layouts/Layout'
import { Box } from '@mui/material'
import styles from '@/styles/Vehicles.module.css'
import Head from 'next/head';
import FeaturedVehicles from '@/components/Home/FeaturedVehicles';

const FeaturedVehiclesPage = () => {

    return (
        <>
            <Head>
                <title>Featured Vehicles | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.wrapper}>
                    <FeaturedVehicles />
                </Box>
            </Layout>
        </>
    )
}

export default FeaturedVehiclesPage