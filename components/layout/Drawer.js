import Link from 'next/link'
import { Box, Divider, Drawer as MuiDrawer, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import logo from '../../public/logotosvg.png'
import styles from '../../styles/Header.module.css'

import gmail_icon from '../../public/gmail_icon.svg'
import viber_icon from '../../public/viber_icon.svg'
import facebook_icon from '../../public/facebook_icon.svg'

const Drawer = ({ router, isDrawerOpen, setIsDrawerOpen }) => {

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
        <MuiDrawer
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
        >
            <Box component='nav' paddingX={7} paddingY={5}>
                <Stack spacing={2}>
                    <Link href='/'>
                        <Image
                            src={logo}
                            alt="Auto Promo PH"
                            height={40}
                            className={styles.logo}
                        />
                    </Link>
                    <Divider />
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
                <Divider sx={{ mt: 1.5 }} />
                <Stack direction='row' my={3.5} spacing={2.5}>
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
                    <Link href='mailto:kingdeorayom@gmail.com' target="_blank">
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
            </Box>
        </MuiDrawer>
    )
}

export default Drawer