import Link from "next/link"
import Image from "next/image"
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import gmail_icon from '@/public/gmail_icon.svg'
import viber_icon from '@/public/viber_icon.svg'
import facebook_icon from '@/public/facebook_icon.svg'
import styles from '@/styles/Footer.module.css'
import logo from '@/public/logotosvg.png'

const Footer = () => {
    return (
        <Box component='footer' className={styles.footer}>
            <Box
                sx={{
                    // borderTop: '1px solid #d3d3d3',
                    paddingTop: .1,
                    paddingX: 5,
                    // borderBottom: '1px solid #d3d3d3',
                    // display: 'flex',
                    // justifyContent: 'center',
                    maxWidth: '1280px',
                    margin: '0 auto'
                }}
            >
                <Grid
                    container
                    mt={2}
                    mb={4}
                    rowSpacing={3}
                    columnSpacing={'60px'}
                // sx={{ backgroundColor: 'red' }}
                >

                    <Grid item xs={12} sm={4}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' fontSize='.9rem' mb={3}>OVERVIEW</Typography>
                            <Link className={styles.link} href='/'>
                                <Typography className={styles.linkText} mb={1} color='secondary' fontSize='.9rem'>Explore</Typography>
                            </Link>
                            <Link className={styles.link} href='/brands'>
                                <Typography className={styles.linkText} mb={1} color='secondary' fontSize='.9rem'>Brands</Typography>
                            </Link>
                            <Link className={styles.link} href='/promos'>
                                <Typography className={styles.linkText} mb={1} color='secondary' fontSize='.9rem'>Promos</Typography>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' fontSize='.9rem' mb={3}>OTHERS</Typography>
                            <Link className={styles.link} href='/about'>
                                <Typography className={styles.linkText} mb={1} color='secondary' fontSize='.9rem'>About</Typography>
                            </Link>
                            <Link className={styles.link} href='/terms-and-conditions'>
                                <Typography className={styles.linkText} mb={1} color='secondary' fontSize='.9rem'>Terms and Conditions</Typography>
                            </Link>
                            <Link className={styles.link} href='/privacy-policy'>
                                <Typography className={styles.linkText} mb={1} color='secondary' fontSize='.9rem'>Privacy Policy</Typography>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' fontSize='.9rem' mb={3}>CONNECT WITH ME</Typography>
                            <Typography mb={1} color='secondary' fontSize='.9rem'>Dhang Casten</Typography>
                            <Typography mb={1} color='secondary' fontSize='.9rem'>+63 928 513 0117</Typography>
                            <Stack direction='row' spacing={2} display={{ xs: 'block', sm: 'none' }}>
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
                                <Link href='mailto:dhangcasten@autopromo.ph' target="_blank">
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
                    </Grid>

                </Grid >
            </Box>
            <Box component='footer'
                sx={{
                    // backgroundColor: '#fafafa',
                    backgroundColor: '#ffffff',
                    paddingX: 5,
                    paddingY: 2.5,
                    // borderBottom: '1px solid #d3d3d3',
                    borderTop: '1px solid #d3d3d3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: "center"
                }}
            >
                <Typography fontSize='.8rem'>
                    {`Copyright © Auto Promo PH ${new Date().getFullYear()}. All rights reserved.`}
                </Typography>
                <Typography fontSize='.8rem'>
                    Developed by <Link href='https://github.com/kingdeorayom' target="_blank"><span className={styles.developer}>Serking</span></Link>.
                </Typography>
                {/* <Stack direction='row' spacing={2}>
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
                    <Link href='mailto:dhangcasten@autopromo.ph' target="_blank">
                        <IconButton>
                            <Image
                                src={gmail_icon}
                                alt="Gmail Icon"
                                width={20}
                                height={20}
                            />
                        </IconButton>
                    </Link>
                </Stack> */}
            </Box>
        </Box>
    )
}

export default Footer