import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router";
import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '@/public/logotosvg.png'
import gmail_icon from '@/public/gmail_icon.svg'
import viber_icon from '@/public/viber_icon.svg'
import facebook_icon from '@/public/facebook_icon.svg'
import styles from '@/styles/Header.module.css'
import Drawer from "./Drawer";
import { useAuthContext } from "@/hooks/useAuthContext";
import nookies from 'nookies'
import { grey } from '@mui/material/colors';

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const selectedLink = '#FFDE00'
    // const selectedLink = '#ffffff'
    const unSelectedLink = '#ffffff'

    // const navigation_item_override = {
    //     px: '16px',
    //     py: '8px',
    //     '&:hover': {
    //         borderBottom: `2px solid ${selectedLink}`
    //     }
    // }

    const cookies = nookies.get()

    useEffect(() => {
        setIsLoggedIn(cookies['auth_token'] === 'loggedIn')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const router = useRouter()

    const { user } = useAuthContext()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const fromMediumDisplayWithoutDashboard = { xs: 'none', sm: 'none', md: 'flex' }
    const fromMediumDisplayWithDashboard = { xs: 'none', sm: 'none', lg: 'flex' }

    const menuIconDisplayWithoutDashboard = { xs: 'flex', sm: 'flex', md: 'none' }
    const menuIconDisplayWithDashboard = { xs: 'flex', md: 'flex', lg: 'none' }

    const withDashboardDisplay = { xs: 'none', lg: 'flex' }
    const withNoDashboardDisplay = { xs: 'none', md: 'flex' }

    return (
        <>
            <AppBar
                position='sticky'
                elevation={0}
                sx={{
                    // boxShadow: '0 0 4px 2px rgba(36, 39, 44, 0.15)',
                }}
            >
                <Toolbar className={styles.toolbar}>
                    <Box>
                        <Link href='/'>
                            {/* <Image
                                src={logo}
                                alt="Auto Promo PH"
                                height={40}
                            /> */}
                            <Typography fontSize='1.2rem' fontWeight='700'>Logo</Typography>
                        </Link>
                    </Box>
                    <Stack direction='row' spacing={3} marginLeft='30px' display={isLoggedIn ? withDashboardDisplay : withNoDashboardDisplay}>
                        {isLoggedIn ?
                            <Link href='/admin/dashboard'>
                                <Box className={router.pathname == '/admin/dashboard' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                                    <Typography fontSize='1rem' fontWeight={router.pathname == '/admin/dashboard' ? "700" : "400"} color={router.pathname == '/admin/dashboard' ? selectedLink : unSelectedLink}>Dashboard</Typography>
                                </Box>
                            </Link> : null
                        }
                        <Link href='/'>
                            <Box className={router.pathname == '/' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                                <Typography fontSize='1rem' fontWeight={router.pathname == '/' ? "700" : "400"} color={router.pathname == '/' ? selectedLink : unSelectedLink}>Explore</Typography>
                            </Box>
                        </Link>
                        <Link href='/brands'>
                            <Box className={router.pathname == '/brands' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                                <Typography fontSize='1rem' fontWeight={router.pathname == '/brands' ? "700" : "400"} color={router.pathname == '/brands' ? selectedLink : unSelectedLink}>Brands</Typography>
                            </Box>
                        </Link>
                        <Link href='/promos'>
                            <Box className={router.pathname == '/promos' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                                <Typography fontSize='1rem' fontWeight={router.pathname == '/promos' ? "700" : "400"} color={router.pathname == '/promos' ? selectedLink : unSelectedLink}>Promos</Typography>
                            </Box>
                        </Link>
                        <Link href='/contact'>
                            <Box className={router.pathname == '/contact' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                                <Typography fontSize='1rem' fontWeight={router.pathname == '/contact' ? "700" : "400"} color={router.pathname == '/contact' ? selectedLink : unSelectedLink}>Contact</Typography>
                            </Box>
                        </Link>
                    </Stack>
                    <Stack
                        direction='row'
                        spacing={2}
                        display={isLoggedIn ? menuIconDisplayWithDashboard : menuIconDisplayWithoutDashboard}
                    >
                        <Link href='/search'>
                            <IconButton>
                                <SearchIcon
                                    sx={{ color: grey[50], ':hover': { color: '#FFDE00' } }}
                                />
                            </IconButton>
                        </Link>
                        <IconButton onClick={() => setIsDrawerOpen(true)}>
                            <MenuIcon
                                sx={{ color: grey[50], ':hover': { color: '#FFDE00' } }}
                            />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* <Navbar router={router} fromMediumDisplay={fromMediumDisplay} /> */}

            <Drawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                router={router}
                isLoggedIn={isLoggedIn}
            />

        </>
    )
}

export default Header
