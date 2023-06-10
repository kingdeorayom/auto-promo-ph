import AppLoader from '@/components/Utility/AppLoader'
import { AuthContext } from '@/context/AuthContext'
import Layout from '@/layouts/Layout'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

const Dashboard = () => {

    const router = useRouter()
    const { user } = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(true)

    const redirectToPage = () => {
        if (!isLoading || user === null) {
            router.push('/admin')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        redirectToPage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading || user === null) {
        return <AppLoader />
    }

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h2" fontWeight='600' mb={1}>Dashboard</Typography>
            <Typography fontSize='1rem' variant="h3" color='secondary'>Manage the content of your website and view customer or client inquiries</Typography>

        </Layout>
    )
}

export default Dashboard