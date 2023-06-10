import { AuthContext } from '@/context/AuthContext'
import { useLogout } from '@/hooks/useLogout'
import Layout from '@/layouts/Layout'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

const Dashboard = () => {

    const router = useRouter()
    const { user } = useContext(AuthContext)

    // const { logout } = useLogout()

    // const handleClick = () => {
    //     logout()
    //     router.replace('/admin')
    // }

    useEffect(() => {
        if (user === null) {
            router.push('/admin')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>

            <Button
                type='submit'
                variant="contained"
                disableElevation
                size="large"
            // onClick={handleClick}
            >
                Log out
            </Button>
        </Layout>
    )
}

export default Dashboard