import Layout from '@/layouts/Layout'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import styles from '@/styles/Vehicles.module.css'
import Head from 'next/head';
import AllVehicles from '@/components/Home/AllVehicles';
import Link from 'next/link';

const AllVehiclesPage = () => {

    return (
        <>
            <Head>
                <title>Vehicles | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.wrapper}>
                    <Box mb={4}>
                        <Breadcrumbs separator=">" aria-label="breadcrumb">
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/"
                            >
                                Explore
                            </Link>
                            <Typography color="primary" fontWeight='500'>All Vehicles</Typography>
                        </Breadcrumbs>
                    </Box>
                    <AllVehicles />
                </Box>
            </Layout>
        </>
    )
}

export default AllVehiclesPage