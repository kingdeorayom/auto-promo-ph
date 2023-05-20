import Link from 'next/link'
import { Stack, Typography } from '@mui/material'
import { useRouter } from "next/router";
import styles from '../../styles/Header.module.css'

const Navbar = ({ fromMediumDisplay }) => {

    const router = useRouter()

    return (
        <Stack
            component='nav'
            direction='row'
            spacing={5}
            className={styles.navbar}
            display={fromMediumDisplay}
        >
            <Link href='/'>
                <Typography fontWeight={router.pathname == '/' ? "700" : "400"} color={router.pathname == '/' ? "primary" : "black"}>Explore</Typography>
            </Link>
            <Link href='/brands'>
                <Typography fontWeight={router.pathname == '/brands' ? "700" : "400"} color={router.pathname == '/brands' ? "primary" : "black"}>Brands</Typography>
            </Link>
            <Link href='/promos'>
                <Typography fontWeight={router.pathname == '/promos' ? "700" : "400"} color={router.pathname == '/promos' ? "primary" : "black"}>Promos</Typography>
            </Link>
            <Link href='/application'>
                <Typography fontWeight={router.pathname == '/application' ? "700" : "400"} color={router.pathname == '/application' ? "primary" : "black"}>Application</Typography>
            </Link>
            <Link href='/contact'>
                <Typography fontWeight={router.pathname == '/contact' ? "700" : "400"} color={router.pathname == '/contact' ? "primary" : "black"}>Contact</Typography>
            </Link>
        </Stack>
    )
}

export default Navbar