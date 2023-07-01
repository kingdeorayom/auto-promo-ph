import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router";
import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '@/public/logotosvg.png'
import styles from '@/styles/Header.module.css'
import Drawer from "./Drawer";
import nookies from 'nookies'
import { grey } from '@mui/material/colors';

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const cookies = nookies.get()

    useEffect(() => {
        setIsLoggedIn(cookies['auth_token'] === 'loggedIn')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const router = useRouter()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const menuIconDisplayWithoutDashboard = { xs: 'flex', sm: 'flex', md: 'none' }
    const menuIconDisplayWithDashboard = { xs: 'flex', md: 'flex', lg: 'none' }

    const withDashboardDisplay = { xs: 'none', lg: 'flex' }
    const withNoDashboardDisplay = { xs: 'none', md: 'flex' }

    return (
        <>
            <AppBar
                position='sticky'
                elevation={0}
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
                                    <Typography fontSize='1rem' fontWeight='700'>Dashboard</Typography>
                                </Box>
                            </Link> : null
                        }
                        <Link href='/'>
                            <Box className={router.pathname == '/' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                                <Typography fontSize='1rem' fontWeight='700'>Explore</Typography>
                            </Box>
                        </Link>
                        <Link href='/brands'>
                            <Box className={router.pathname == '/brands' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                                <Typography fontSize='1rem' fontWeight='700'>Brands</Typography>
                            </Box>
                        </Link>
                        <Link href='/promos'>
                            <Box className={router.pathname == '/promos' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                                <Typography fontSize='1rem' fontWeight='700'>Promos</Typography>
                            </Box>
                        </Link>
                        <Link href='/contact'>
                            <Box className={router.pathname == '/contact' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                                <Typography fontSize='1rem' fontWeight='700'>Contact</Typography>
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
