import Layout from '@/layouts/Layout'
import { Typography } from '@mui/material'
import Head from 'next/head'

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Typography fontSize='2rem' variant="h2" fontWeight='700'>Contact Me</Typography>
                <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            </Layout>
        </>
    )
}

export default Contact