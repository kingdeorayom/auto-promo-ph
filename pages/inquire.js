import Layout from '@/layouts/Layout'
import { Box } from '@mui/material'
import Profile from '@/components/Inquire/Profile'
import InquiryForm from '@/components/Form/InquiryForm'
import styles from '@/styles/Inquire.module.css'

const Inquire = () => {

    return (
        <Layout>
            <Box className={styles.wrapper}>
                <Profile />
                <InquiryForm />
            </Box>
        </Layout>
    )
}

export default Inquire