import Link from 'next/link'
import { Drawer, Stack, Typography } from '@mui/material'

const MuiDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
    return (
        <Drawer
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
        >
            <nav>
                <Stack spacing={2}>
                    <Link href='/'>
                        <Typography color='black'>Explore</Typography>
                    </Link>
                    <Link href='/brands'>
                        <Typography color='black'>Brands</Typography>
                    </Link>
                    <Link href='/promos'>
                        <Typography color='black'>Promos</Typography>
                    </Link>
                    <Link href='/application'>
                        <Typography color='black'>Application</Typography>
                    </Link>
                    <Link href='/contact'>
                        <Typography color='black'>Contact</Typography>
                    </Link>
                </Stack>
            </nav>
        </Drawer>
    )
}

export default MuiDrawer