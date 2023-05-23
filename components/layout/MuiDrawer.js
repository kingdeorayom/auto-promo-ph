import Link from 'next/link'
import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import logo from '../../public/auto-promo-ph-logo.svg'
import styles from '../../styles/Header.module.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const MuiDrawer = ({ router, isDrawerOpen, setIsDrawerOpen }) => {

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
        <Drawer
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
                            height={30}
                            className={styles.logo}
                        />
                    </Link>
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
                    <Link href='/application'>
                        <Box sx={navigation_item_override}>
                            <Typography fontWeight={router.pathname == '/application' ? "700" : "400"} color={router.pathname == '/application' ? "primary" : "black"}>Application</Typography>
                        </Box>
                    </Link>
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
                <Stack direction='row' my={3.5}>
                    <Link href='https://www.facebook.com/kingdeorayom' target="_blank">
                        <IconButton>
                            <FacebookRoundedIcon color="primary" />
                        </IconButton>
                    </Link>
                    <Link href='https://www.facebook.com/kingdeorayom' target="_blank">
                        <IconButton>
                            <FacebookRoundedIcon color="primary" />
                        </IconButton>
                    </Link>
                    <Link href='https://www.facebook.com/kingdeorayom' target="_blank">
                        <IconButton>
                            <FacebookRoundedIcon color="primary" />
                        </IconButton>
                    </Link>
                </Stack>
            </Box>
        </Drawer>
    )
}

export default MuiDrawer