import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { AppBar, IconButton, Stack, Toolbar } from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import logo from '../../public/auto-promo-ph-logo.svg'

import styles from '../../styles/Header.module.css'

import Navbar from "./Navbar";
import MuiDrawer from "./MuiDrawer";

import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const fromMediumDisplay = { xs: 'none', sm: 'none', md: 'flex' }
    const menuIconDisplay = { xs: 'flex', sm: 'flex', md: 'none' }

    return (
        <>
            <AppBar
                position='static'
                elevation={0}
                className={styles.appbar}
            >
                <Toolbar className={styles.toolbar}>
                    <Stack>
                        <Link href='/'>
                            <Image
                                src={logo}
                                alt="Auto Promo PH"
                                height={30}
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

            <MuiDrawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                router={router}
            />

        </>
    )
}

export default Header