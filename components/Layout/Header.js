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

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const navigation_item_override = {
        px: 2,
        py: 1,
        '&:hover': {
            borderRadius: 2.5,
            backgroundColor: '#f5f5f5',
        }
    }

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
                    backgroundColor: 'white',
                    boxShadow: '0 0 4px 0 rgba(36, 39, 44, 0.15)',
                    margin: '0 auto',
                    // maxWidth: '1280px',
                }}
            >
                <Toolbar className={styles.toolbar}>
                    <Box>
                        <Link href='/'>
                            <Image
                                src={logo}
                                alt="Auto Promo PH"
                                height={40}
                            />
                        </Link>
                    </Box>
                    <Stack direction='row' spacing={3} marginLeft='30px' display={isLoggedIn ? withDashboardDisplay : withNoDashboardDisplay}>
                        {isLoggedIn ?
                            <Link href='/admin/dashboard'>
                                <Box sx={navigation_item_override}>
                                    <Typography fontSize='1rem' fontWeight={router.pathname == '/admin/dashboard' ? "700" : "400"} color={router.pathname == '/admin/dashboard' ? "primary" : "black"}>Dashboard</Typography>
                                </Box>
                            </Link> : null
                        }
                        <Link href='/'>
                            <Box sx={navigation_item_override}>
                                <Typography fontSize='1rem' fontWeight={router.pathname == '/' ? "700" : "400"} color={router.pathname == '/' ? "primary" : "black"}>Explore</Typography>
                            </Box>
                        </Link>
                        <Link href='/brands'>
                            <Box sx={navigation_item_override}>
                                <Typography fontSize='1rem' fontWeight={router.pathname == '/brands' ? "700" : "400"} color={router.pathname == '/brands' ? "primary" : "black"}>Brands</Typography>
                            </Box>
                        </Link>
                        <Link href='/promos'>
                            <Box sx={navigation_item_override}>
                                <Typography fontSize='1rem' fontWeight={router.pathname == '/promos' ? "700" : "400"} color={router.pathname == '/promos' ? "primary" : "black"}>Promos</Typography>
                            </Box>
                        </Link>
                        {/* <Link href='/about'>
                                <Box sx={navigation_item_override}>
                                    <Typography fontSize='1rem' fontWeight={router.pathname == '/about' ? "700" : "400"} color={router.pathname == '/about' ? "primary" : "black"}>About</Typography>
                                </Box>
                            </Link> */}
                        <Link href='/contact'>
                            <Box sx={navigation_item_override}>
                                <Typography fontSize='1rem' fontWeight={router.pathname == '/contact' ? "700" : "400"} color={router.pathname == '/contact' ? "primary" : "black"}>Contact</Typography>
                            </Box>
                        </Link>
                    </Stack>
                    <Stack
                        direction='row'
                        spacing={2}
                        display={isLoggedIn ? fromMediumDisplayWithDashboard : fromMediumDisplayWithoutDashboard}
                    >
                        <Link href='/search'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Link>
                        <Link href='https://www.facebook.com/dhang.casten' target="_blank">
                            <IconButton>
                                <Image
                                    src={facebook_icon}
                                    alt="Facebook Icon"
                                    width={20}
                                    height={20}
                                />
                            </IconButton>
                        </Link>
                        <Link href='https://www.viber.com/' target="_blank">
                            <IconButton>
                                <Image
                                    src={viber_icon}
                                    alt="Viber Icon"
                                    width={20}
                                    height={20}
                                />
                            </IconButton>
                        </Link>
                        <Link href='mailto:dhangcasten@autopromo.ph' target="_blank">
                            <IconButton>
                                <Image
                                    src={gmail_icon}
                                    alt="Gmail Icon"
                                    width={20}
                                    height={20}
                                />
                            </IconButton>
                        </Link>
                    </Stack>
                    <Stack
                        direction='row'
                        spacing={2}
                        display={isLoggedIn ? menuIconDisplayWithDashboard : menuIconDisplayWithoutDashboard}
                    >
                        <Link href='/search'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Link>
                        <IconButton onClick={() => setIsDrawerOpen(true)}>
                            <MenuIcon color="primary" />
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
