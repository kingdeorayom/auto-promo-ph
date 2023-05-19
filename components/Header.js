import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { AppBar, Button, IconButton, Stack, Toolbar, Drawer } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../public/auto-promo-ph-logo.svg'

const Header = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
            <AppBar
                position='static'
                elevation={0}
                sx={{ backgroundColor: '#ffffff', borderBottom: 1, borderColor: '#d3d3d3' }}
            >
                <Toolbar>
                    <Stack sx={{ flexGrow: 1 }}>
                        <Link href='/'>
                            <Image src={logo} alt="Auto Promo PH" height={30} />
                        </Link>
                    </Stack>
                    <Stack direction='row' spacing={2} display={{ xs: 'none', sm: 'none', md: 'flex' }}>
                        <Link href='/search'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Link>
                    </Stack>
                    <Stack direction='row' spacing={2} display={{ xs: 'flex', sm: 'flex', md: 'none' }}>
                        <Link href='/search'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Link>
                        <IconButton onClick={() => setIsDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
                <Stack direction='row' spacing={2} sx={{ marginLeft: '20px', marginBottom: '10px', marginTop: '10px' }} display={{ xs: 'none', sm: 'none', md: 'flex' }}>
                    <nav>
                        <Stack direction='row' spacing={2} display={{ xs: 'none', sm: 'none', md: 'flex' }}>
                            <Link href='/'>
                                <Button color='primary' disableTouchRipple>Explore</Button>
                            </Link>
                            <Link href='/brands'>
                                <Button color='primary' disableTouchRipple>Brands</Button>
                            </Link>
                            <Link href='/promos'>
                                <Button color='primary' disableTouchRipple>Promos</Button>
                            </Link>
                            <Link href='/application'>
                                <Button color='primary' disableTouchRipple>Application</Button>
                            </Link>
                            <Link href='/contact'>
                                <Button color='primary' disableTouchRipple>Contact</Button>
                            </Link>
                        </Stack>
                    </nav>
                </Stack>
            </AppBar>
            <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <nav>
                    <Stack spacing={2}>
                        <Link href='/'>
                            <Button color='primary' disableTouchRipple>Explore</Button>
                        </Link>
                        <Link href='/brands'>
                            <Button color='primary' disableTouchRipple>Brands</Button>
                        </Link>
                        <Link href='/promos'>
                            <Button color='primary' disableTouchRipple>Promos</Button>
                        </Link>
                        <Link href='/application'>
                            <Button color='primary' disableTouchRipple>Application</Button>
                        </Link>
                        <Link href='/contact'>
                            <Button color='primary' disableTouchRipple>Contact</Button>
                        </Link>
                    </Stack>
                </nav>
            </Drawer>
        </>
    )
}

export default Header