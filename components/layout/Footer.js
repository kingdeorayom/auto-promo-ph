import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import styles from '../../styles/Footer.module.css'
import Link from "next/link"
import Image from "next/image"
import logo from '../../public/logotosvg.png'

import gmail_icon from '../../public/gmail_icon.svg'
import viber_icon from '../../public/viber_icon.svg'
import facebook_icon from '../../public/facebook_icon.svg'

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
                                    height={40}
                                    className={styles.logo}
                                />
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' fontSize='.9rem' mb={3}>OVERVIEW</Typography>
                            <Link href='/'>
                                <Typography mb={1} color='secondary' fontSize='.9rem'>Explore</Typography>
                            </Link>
                            <Link href='/brands'>
                                <Typography mb={1} color='secondary' fontSize='.9rem'>Brands</Typography>
                            </Link>
                            <Link href='/promos'>
                                <Typography mb={1} color='secondary' fontSize='.9rem'>Promos</Typography>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' fontSize='.9rem' mb={3}>OTHERS</Typography>
                            <Link href='/about'>
                                <Typography mb={1} color='secondary' fontSize='.9rem'>About</Typography>
                            </Link>
                            <Link href='/terms-and-condition'>
                                <Typography mb={1} color='secondary' fontSize='.9rem'>Terms and Condition</Typography>
                            </Link>
                            <Link href='/privacy-policy'>
                                <Typography mb={1} color='secondary' fontSize='.9rem'>Privacy Policy</Typography>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' fontSize='.9rem' mb={3}>CONNECT WITH ME</Typography>
                            <Typography mb={1} color='secondary' fontSize='.8rem'>+63 956 475 0051</Typography>
                            <Typography mb={1} color='secondary' fontSize='.8rem'>Dhang Casten</Typography>
                        </Box>
                    </Grid>

                </Grid >
            </Box>
            <Box component='footer'
                sx={{
                    // backgroundColor: '#fafafa',
                    backgroundColor: '#ffffff',
                    paddingX: 5,
                    paddingY: 3,
                    borderBottom: '1px solid #d3d3d3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: "center"
                }}
            >
                <Typography fontSize='.9rem'>
                    Copyright &copy; 2023. All rights reserved.
                </Typography>
                <Stack direction='row' spacing={2}>
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
        </Box>
    )
}

export default Footer