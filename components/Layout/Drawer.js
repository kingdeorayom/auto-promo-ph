import Link from 'next/link'
import Image from 'next/image'
import { Box, Divider, Drawer as MuiDrawer, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import gmail_icon from '@/public/gmail_icon.svg'
import viber_icon from '@/public/viber_icon.svg'
import facebook_icon from '@/public/facebook_icon.svg'
import logo from '@/public/logo.svg'
import styles from '@/styles/Drawer.module.css'

import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ScatterPlotOutlinedIcon from '@mui/icons-material/ScatterPlotOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

const Drawer = ({ router, isDrawerOpen, setIsDrawerOpen, isLoggedIn }) => {

    return (
        <MuiDrawer
            anchor='left'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            transitionDuration={0}
            PaperProps={{
                sx: {
                    width: '100%',
                }
            }}
        >
            <Box component='nav' className={styles.wrapper}>
                <Box>
                    <IconButton onClick={() => setIsDrawerOpen(false)}>
                        <CloseIcon sx={{ color: '#ffffff', ':hover': { color: '#FFDE00' } }} />
                    </IconButton>
                </Box>
                <Link href='/'>
                    <Image
                        src={logo}
                        alt="Auto Promo PH"
                        height={25}
                        className={styles.logo}
                    />
                </Link>
                <Box>
                    <Link href='/search'>
                        <IconButton sx={{ color: '#ffffff', ':hover': { color: '#FFDE00' } }}>
                            <SearchIcon />
                        </IconButton>
                    </Link>
                </Box>
            </Box>

            {
                isLoggedIn ? <Link href='/admin/dashboard'>
                    <Box className={router.pathname == '/admin/dashboard' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                        <Box display='flex' alignItems='center'>
                            <DashboardCustomizeOutlinedIcon sx={{ mx: 3 }} />
                            <Box>
                                <Typography fontSize='15px' fontWeight='700' mb={.5}>Dashboard</Typography>
                                <Typography fontSize='13px' color='#808080'>Manage the content of your website and view customer or client inquiries</Typography>
                            </Box>
                        </Box>
                        <ChevronRightIcon sx={{ marginRight: 2, color: '#808080' }} />
                    </Box>
                </Link> : null
            }

            <Link href='/'>
                <Box className={router.pathname == '/' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                    <Box display='flex' alignItems='center'>
                        <ExploreOutlinedIcon sx={{ mx: 3 }} />
                        <Box>
                            <Typography fontSize='15px' fontWeight='700' mb={.5}>Explore</Typography>
                            <Typography fontSize='13px' color='#808080'>Browse different collections of vehicles offered by Auto Promo PH. Use the Quick Search Filters to easily find your dream vehicle</Typography>
                        </Box>
                    </Box>
                    <ChevronRightIcon sx={{ marginRight: 2, color: '#808080' }} />
                </Box>
            </Link>

            <Link href='/brands'>
                <Box className={router.pathname == '/brands' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                    <Box display='flex' alignItems='center'>
                        <ScatterPlotOutlinedIcon sx={{ mx: 3 }} />
                        <Box>
                            <Typography fontSize='15px' fontWeight='700' mb={.5}>Brands</Typography>
                            <Typography fontSize='13px' color='#808080'>View available vehicle brands offered by Auto Promo PH. Read a few insight regarding a brand</Typography>
                        </Box>
                    </Box>
                    <ChevronRightIcon sx={{ marginRight: 2, color: '#808080' }} />
                </Box>
            </Link>

            <Link href='/promos'>
                <Box className={router.pathname == '/promos' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                    <Box display='flex' alignItems='center'>
                        <SellOutlinedIcon sx={{ mx: 3 }} />
                        <Box>
                            <Typography fontSize='15px' fontWeight='700' mb={.5}>Promos</Typography>
                            <Typography fontSize='13px' color='#808080'>View the current promos offered by Auto Promo PH</Typography>
                        </Box>
                    </Box>
                    <ChevronRightIcon sx={{ marginRight: 2, color: '#808080' }} />
                </Box>
            </Link>

            <Link href='/contact'>
                <Box className={router.pathname == '/contact' ? styles.navLinkContainer : styles.navLinkContainerUnselected}>
                    <Box display='flex' alignItems='center'>
                        <ContactPhoneOutlinedIcon sx={{ mx: 3 }} />
                        <Box>
                            <Typography fontSize='15px' fontWeight='700' mb={.5}>Contact</Typography>
                            <Typography fontSize='13px' color='#808080'>Reach out to us. View our contact information</Typography>
                        </Box>
                    </Box>
                    <ChevronRightIcon sx={{ marginRight: 2, color: '#808080' }} />
                </Box>
            </Link>

            <Divider sx={{ my: 2 }} />

        </MuiDrawer>
    )
}

export default Drawer