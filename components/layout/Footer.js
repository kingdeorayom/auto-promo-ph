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
                            <Typography fontWeight='500' mb={3}>CORPORATE</Typography>
                            <Typography mb={1}>Home</Typography>
                            <Typography mb={1}>About Me</Typography>
                            <Typography mb={1}>Application</Typography>
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