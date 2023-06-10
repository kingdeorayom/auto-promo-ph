import Link from 'next/link'
import { useRouter } from "next/router";
import { Box, Stack, Typography } from '@mui/material'
import styles from '../../styles/Header.module.css'
import { useAuthContext } from '@/hooks/useAuthContext';

const Navbar = ({ router, fromMediumDisplay }) => {

    // const router = useRouter()

    const { user } = useAuthContext()

    const navigation_item_override = {
        px: 2,
        py: 1,
        '&:hover': {
            borderRadius: 2.5,
            backgroundColor: '#f5f5f5',
            // borderBottom: 'none',
            // borderBottom: router.pathname == '/' ? '2px solid #1976d2' : 'none'
        }
    }

    return (
        <Stack
            component='nav'
            direction='row'
            spacing={3}
            className={styles.navbar}
            display={fromMediumDisplay}
        >
            {/* Show dashboard link only if logged in */}
            {user && (
                <Link href='/admin/dashboard'>
                    <Box sx={navigation_item_override}>
                        <Typography fontWeight={router.pathname == '/admin/dashboard' ? "700" : "400"} color={router.pathname == '/admin/dashboard' ? "primary" : "black"}>Dashboard</Typography>
                    </Box>
                </Link>
            )}
            <Link href='/'>
                <Box sx={navigation_item_override}>
                    <Typography fontWeight={router.pathname == '/' ? "700" : "400"} color={router.pathname == '/' ? "primary" : "black"}>Explore</Typography>
                </Box>
            </Link>
            <Link href='/brands'>
                <Box sx={navigation_item_override}>
                    <Typography fontWeight={router.pathname == '/brands' ? "700" : "400"} color={router.pathname == '/brands' ? "primary" : "black"}>Brands</Typography>
                </Box>
            </Link>
            <Link href='/promos'>
                <Box sx={navigation_item_override}>
                    <Typography fontWeight={router.pathname == '/promos' ? "700" : "400"} color={router.pathname == '/promos' ? "primary" : "black"}>Promos</Typography>
                </Box>
            </Link>
            {/* <Link href='/application'>
                <Box sx={navigation_item_override}>
                    <Typography fontWeight={router.pathname == '/application' ? "700" : "400"} color={router.pathname == '/application' ? "primary" : "black"}>Application</Typography>
                </Box>
            </Link> */}
            <Link href='/about'>
                <Box sx={navigation_item_override}>
                    <Typography fontWeight={router.pathname == '/about' ? "700" : "400"} color={router.pathname == '/about' ? "primary" : "black"}>About</Typography>
                </Box>
            </Link>
            <Link href='/contact'>
                <Box sx={navigation_item_override}>
                    <Typography fontWeight={router.pathname == '/contact' ? "700" : "400"} color={router.pathname == '/contact' ? "primary" : "black"}>Contact</Typography>
                </Box>
            </Link>
        </Stack>
    )
}

export default Navbar