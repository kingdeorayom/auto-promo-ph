import Link from "next/link"
import Image from "next/image"
import { Box, Divider, Grid, IconButton, Stack, Typography } from "@mui/material"
import gmail_icon from '@/public/gmail_icon.svg'
import viber_icon from '@/public/viber_icon.svg'
import facebook_icon from '@/public/facebook_icon.svg'
import styles from '@/styles/Footer.module.css'
import logo from '@/public/logotosvg.png'

const Footer = () => {
    return (
        <Box component='footer' className={styles.footer}>

            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                mt={5}
                sx={{
                    borderBottom: '1px solid #808080',
                    maxWidth: '1280px',
                    margin: '0 auto',
                    paddingY: 3,
                    paddingX: 2
                }}>
                <Link href='/'>
                    {/* <Image
                        src={logo}
                        alt="Auto Promo PH"
                        height={40}
                        className={styles.logo}
                    /> */}
                    <Typography fontSize='1.2rem' fontWeight='700' color='white'>Logo</Typography>
                </Link>
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

            <Box
                sx={{
                    paddingTop: .1,
                    maxWidth: '1280px',
                    margin: '0 auto',
                    paddingX: 5
                }}
            >
                <Grid
                    container
                    mt={1}
                    mb={4}
                    rowSpacing={3}
                    columnSpacing={'60px'}
                >

                    <Grid item xs={12} md={6}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' fontSize='.9rem' mb={2} color='white'>AUTO PROMO PH</Typography>
                            <Typography className={styles.linkText} mb={1} color='#d3d3d3' fontSize='.9rem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quidem tempora deserunt saepe placeat dignissimos optio laborum facilis exercitationem alias. Consectetur dignissimos et deserunt reiciendis ea quisquam illo earum repudiandae.</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' fontSize='.7rem' mb={3} color='white'>QUICK LINKS</Typography>
                            <Link className={styles.link} href='/'>
                                <Typography className={styles.linkText} mb={1} color='#d3d3d3' fontSize='.9rem'>Explore</Typography>
                            </Link>
                            <Link className={styles.link} href='/brands'>
                                <Typography className={styles.linkText} mb={1} color='#d3d3d3' fontSize='.9rem'>Brands</Typography>
                            </Link>
                            <Link className={styles.link} href='/promos'>
                                <Typography className={styles.linkText} mb={1} color='#d3d3d3' fontSize='.9rem'>Promos</Typography>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' fontSize='.7rem' mb={3} color='white'>OTHERS</Typography>
                            <Link className={styles.link} href='/about'>
                                <Typography className={styles.linkText} mb={1} color='#d3d3d3' fontSize='.9rem'>About</Typography>
                            </Link>
                            <Link className={styles.link} href='/terms-and-conditions'>
                                <Typography className={styles.linkText} mb={1} color='#d3d3d3' fontSize='.9rem'>Terms and Conditions</Typography>
                            </Link>
                            <Link className={styles.link} href='/privacy-policy'>
                                <Typography className={styles.linkText} mb={1} color='#d3d3d3' fontSize='.9rem'>Privacy Policy</Typography>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Box sx={{}}>
                            <Typography fontWeight='500' fontSize='.7rem' mb={3} color='white'>CONNECT WITH ME</Typography>
                            <Typography mb={1} color='#d3d3d3' fontSize='.9rem'>Dhang Casten</Typography>
                            <Typography mb={1} color='#d3d3d3' fontSize='.9rem'>+63 928 513 0117</Typography>
                        </Box>
                    </Grid>

                </Grid >
            </Box>

            <Box component='footer'
                sx={{
                    backgroundColor: '#202020',
                    paddingX: 1,
                    paddingY: 2.5,
                    borderTop: '1px solid #808080',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    maxWidth: '1280px',
                    margin: '0 auto'
                }}
            >
                <Typography fontSize='.8rem' color='#d3d3d3'>
                    {`Copyright © Auto Promo PH ${new Date().getFullYear()}. All rights reserved. `}
                    {/* Developed by <Link href='https://github.com/kingdeorayom' target="_blank"><span className={styles.developer}>Serking</span></Link>. */}
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer