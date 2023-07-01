import Layout from '@/layouts/Layout'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import styles from '@/styles/Vehicles.module.css'
import Head from 'next/head';
import FeaturedVehicles from '@/components/Home/FeaturedVehicles';
import Link from 'next/link';
;

const FeaturedVehiclesPage = () => {

    return (
        <>
            <Head>
                <title>Featured Vehicles | Auto Promo PH</title>
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
                            <Typography color="primary" fontWeight='500'  >Featured Vehicles</Typography>
                        </Breadcrumbs>
                    </Box>
                    <FeaturedVehicles />
                </Box>
            </Layout>
        </>
    )
}

export default FeaturedVehiclesPage