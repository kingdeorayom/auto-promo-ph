import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { AppBar, IconButton, Stack, Toolbar } from "@mui/material"
import DragHandleIcon from '@mui/icons-material/DragHandle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../../public/logotosvg.png'
import gmail_icon from '../../public/gmail_icon.svg'
import viber_icon from '../../public/viber_icon.svg'
import facebook_icon from '../../public/facebook_icon.svg'

import styles from '../../styles/Header.module.css'

import Navbar from "./Navbar";
import Drawer from "./Drawer";

import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const fromMediumDisplay = { xs: 'none', sm: 'none', md: 'flex' }
    const menuIconDisplay = { xs: 'flex', sm: 'flex', md: 'none' }

    return (
        <>
            <AppBar
                position='sticky'
                elevation={0}
                className={styles.appbar}
            >
                <Toolbar className={styles.toolbar}>
                    <Stack>
                        <Link href='/'>
                            <Image
                                src={logo}
                                alt="Auto Promo PH"
                                height={40}
                            />
                        </Link>
                    </Stack>
                    <Stack
                        direction='row'
                        spacing={2}
                        display={fromMediumDisplay}
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
                    <Stack
                        direction='row'
                        spacing={2}
                        display={menuIconDisplay}
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

            <Navbar router={router} fromMediumDisplay={fromMediumDisplay} />

            <Drawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                router={router}
            />

        </>
    )
}

export default Header