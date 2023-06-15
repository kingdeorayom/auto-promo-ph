import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Divider, Drawer as MuiDrawer, IconButton, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import gmail_icon from '@/public/gmail_icon.svg'
import viber_icon from '@/public/viber_icon.svg'
import facebook_icon from '@/public/facebook_icon.svg'
import logo from '@/public/logotosvg.png'
import styles from '@/styles/Header.module.css'

const Drawer = ({ router, isDrawerOpen, setIsDrawerOpen }) => {

    const navigation_item_override = {
        mx: 1,
        my: .9,
        borderRadius: 2.5,
        py: 1.4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#E6F7FF',
        }
    }

    return (
        <MuiDrawer
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            transitionDuration={0}
            PaperProps={{
                sx: {
                    width: '100%',
                }
            }}
        >
            <Box component='nav'
                sx={{
                    py: '9px', px: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}
            >
                <Link href='/'>
                    <Image
                        src={logo}
                        alt="Auto Promo PH"
                        height={40}
                    // className={styles.logo}
                    />
                </Link>
                <Stack direction='row' spacing={2}>
                    <Link href='/search'>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Link>
                    <IconButton onClick={() => setIsDrawerOpen(false)}>
                        <CloseIcon color='primary' />
                    </IconButton>
                </Stack>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Link href='/'>
                <Box sx={navigation_item_override}>
                    <Box marginLeft={2.5}>
                        <Typography fontWeight={router.pathname == '/' ? "700" : "400"} fontSize='16px' color={router.pathname == '/' ? "primary" : "black"}>Explore</Typography>
                        <Typography fontSize='13px' color='#808080'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad excepturi.</Typography>
                    </Box>
                    <ChevronRightIcon sx={{ marginRight: 2, color: '#808080' }} />
                </Box>
            </Link>

            <Link href='/brands'>
                <Box sx={navigation_item_override}>
                    <Box marginLeft={2.5}>
                        <Typography fontWeight={router.pathname == '/brands' ? "700" : "400"} fontSize='16px' color={router.pathname == '/brands' ? "primary" : "black"}>Brands</Typography>
                        <Typography fontSize='13px' color='#808080'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad excepturi.</Typography>
                    </Box>
                    <ChevronRightIcon sx={{ marginRight: 2, color: '#808080' }} />
                </Box>
            </Link>

            <Link href='/promos'>
                <Box sx={navigation_item_override}>
                    <Box marginLeft={2.5}>
                        <Typography fontWeight={router.pathname == '/promos' ? "700" : "400"} fontSize='16px' color={router.pathname == '/promos' ? "primary" : "black"}>Promos</Typography>
                        <Typography fontSize='13px' color='#808080'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad excepturi.</Typography>
                    </Box>
                    <ChevronRightIcon sx={{ marginRight: 2, color: '#808080' }} />
                </Box>
            </Link>

            <Link href='/about'>
                <Box sx={navigation_item_override}>
                    <Box marginLeft={2.5}>
                        <Typography fontWeight={router.pathname == '/about' ? "700" : "400"} fontSize='16px' color={router.pathname == '/about' ? "primary" : "black"}>About</Typography>
                        <Typography fontSize='13px' color='#808080'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad excepturi.</Typography>
                    </Box>
                    <ChevronRightIcon sx={{ marginRight: 2, color: '#808080' }} />
                </Box>
            </Link>

            <Link href='/contact'>
                <Box sx={navigation_item_override}>
                    <Box marginLeft={2.5}>
                        <Typography fontWeight={router.pathname == '/contact' ? "700" : "400"} fontSize='16px' color={router.pathname == '/contact' ? "primary" : "black"}>Contact</Typography>
                        <Typography fontSize='13px' color='#808080'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad excepturi.</Typography>
                    </Box>
                    <ChevronRightIcon sx={{ marginRight: 2, color: '#808080' }} />
                </Box>
            </Link>

            <Divider sx={{ my: 2 }} />

        </MuiDrawer>
    )
}

export default Drawer