import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import styles from '../../styles/Footer.module.css'
import Link from "next/link"
import Image from "next/image"
import logo from '../../public/auto-promo-ph-logo.svg'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Footer = () => {
    return (
        <Box component='footer' className={styles.footer}>
            <Box
                sx={{
                    // backgroundColor: '#f5f5f5',
                    borderTop: '1px solid #d3d3d3',
                    // padding: 1,
                    paddingX: 5,
                    // paddingY: 5,
                    borderBottom: '1px solid #d3d3d3',
                }}
            >
                <Grid
                    container
                    mt={2}
                    mb={4}
                    rowSpacing={3}
                    columnSpacing={2}
                >

                    <Grid item xs={12} sm={3}>
                        <Box sx={{}}>
                            <Link href='/'>
                                <Image
                                    src={logo}
                                    alt="Auto Promo PH"
                                    height={30}
                                    className={styles.logo}
                                />
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' mb={3}>OVERVIEW</Typography>
                            <Typography mb={1}>Lorem Ipsum</Typography>
                            <Typography mb={1}>Lorem Ipsum</Typography>
                            <Typography mb={1}>Lorem Ipsum</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' mb={3}>OVERVIEW</Typography>
                            <Typography mb={1}>Lorem Ipsum</Typography>
                            <Typography mb={1}>Lorem Ipsum</Typography>
                            <Typography mb={1}>Lorem Ipsum</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' mb={3}>OVERVIEW</Typography>
                            <Typography mb={1}>Lorem Ipsum</Typography>
                            <Typography mb={1}>Lorem Ipsum</Typography>
                            <Typography mb={1}>Lorem Ipsum</Typography>
                        </Box>
                    </Grid>

                </Grid >
            </Box>
            <Box component='footer'
                sx={{
                    // backgroundColor: '#f5f5f5',
                    paddingX: 5,
                    paddingY: 3,
                    borderBottom: '1px solid #d3d3d3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: "center"
                }}
            >
                <Typography>
                    Copyright &copy; 2023. All rights reserved.
                </Typography>
                <Stack direction='row' spacing={2}>
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
        </Box>
    )
}

export default Footer