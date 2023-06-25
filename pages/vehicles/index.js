import Layout from '@/layouts/Layout'
import { Box } from '@mui/material'
import styles from '@/styles/Vehicles.module.css'
import Head from 'next/head';
import AllVehicles from '@/components/Home/AllVehicles';

const AllVehiclesPage = () => {

    return (
        <>
            <Head>
                <title>Vehicles | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.wrapper}>
                    <AllVehicles />
                </Box>
            </Layout>
        </>
    )
}

export default AllVehiclesPage