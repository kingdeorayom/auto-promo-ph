import Layout from '@/layouts/Layout'
import { Box } from '@mui/material'
import Profile from '@/components/Inquire/Profile'
import InquiryForm from '@/components/Form/InquiryForm'
import styles from '@/styles/Inquire.module.css'
import Head from 'next/head'

const Inquire = () => {

    return (
        <>
            <Head>
                <title>Inquire | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.wrapper}>
                    <Profile />
                    <InquiryForm />
                </Box>
            </Layout>
        </>
    )
}

export default Inquire