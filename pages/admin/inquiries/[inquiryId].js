import Layout from '@/layouts/Layout'
import { Avatar, Box, Breadcrumbs, Button, Divider, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import styles from '../../../styles/Inquiries.module.css'
import Link from 'next/link'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';
import setCurrency from '@/utils/setCurrency';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

export async function getStaticPaths() {

    const response = await fetch('http://192.168.1.3:3001/inquiries')
    const inquiries = await response.json()

    const paths = inquiries.map(inquiry => {
        return { params: { inquiryId: inquiry._id } }
    })

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {

    const inquiry_id = context.params.inquiryId

    const inquiryResponse = await fetch(`http://192.168.1.3:3001/inquiries/${inquiry_id}`);
    const inquiry = await inquiryResponse.json();

    const vehicleResponse = await fetch(`http://192.168.1.3:3001/vehicles/detail/${inquiry.vehicleSlug}`);
    const vehicle = await vehicleResponse.json();

    return {
        props: {
            inquiry: inquiry,
            vehicle: vehicle
        },
        revalidate: 10
    };
}

const ViewInquiry = ({ inquiry, vehicle }) => {

    const baseURL = 'http://192.168.1.3:3001'

    return (
        <Layout>
            <Box className={styles.wrapper}>

                <Box mb={4}>
                    <Breadcrumbs separator=">" aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/admin/dashboard">
                            Dashboard
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/admin/inquiries"
                        >
                            Inquiries
                        </Link>
                        <Typography color="primary">{`${inquiry.firstName} ${inquiry.lastName}`}</Typography>
                    </Breadcrumbs>
                </Box>

                <Box>
                    <Typography fontSize='14px' fontWeight='300' mb={2} sx={{ textAlign: 'start' }}>
                        {inquiry.date}
                    </Typography>
                    <Typography fontSize='2.5rem' variant="h2" fontWeight='600' mb={1} color='primary'>{`${inquiry.firstName} ${inquiry.lastName}`}</Typography>
                    <Box mt={2} mb={4}>
                        <Tooltip title={inquiry.mobileNumber}>
                            <IconButton onClick={() => { navigator.clipboard.writeText(inquiry.mobileNumber) }}>
                                <LocalPhoneOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={inquiry.email}>
                            <IconButton onClick={() => { navigator.clipboard.writeText(inquiry.email) }}>
                                <EmailOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Typography fontSize='13px' color='#808080' fontWeight='300'>Hover on icon to view information. Click to copy.</Typography>
                    </Box>
                </Box>

                {/* <Divider sx={{ my: 3 }} /> */}

                <Box>
                    <Box className={styles.messageWrapper}>
                        <Avatar className={styles.bigAvatar}>
                            {`${inquiry.firstName.charAt(0).toUpperCase()}${inquiry.lastName.charAt(0).toUpperCase()}`}
                        </Avatar>
                        <Box className={styles.messageBubble}>
                            <Typography>
                                {inquiry.message}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Typography fontSize='1.3rem' variant="h2" fontWeight='400' my={5}>Inquires about:</Typography>

                <Box className={styles.box}>
                    <Box display='flex' alignItems='center'>
                        <Box>
                            <Typography fontSize='1.5rem' variant="h2" fontWeight='500' mb={1.5} color='#1976D2'>{vehicle.name}</Typography>
                            <Typography color='#808080' mb={1} fontWeight='400'>PHP {setCurrency(vehicle.price)}</Typography>
                            <Typography color='#808080' mb={2} fontWeight='300' className={styles.truncate}>{vehicle.description}</Typography>
                            <Link href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`} >
                                <Button variant="outlined" disableElevation color='primary' endIcon={<ArrowOutwardOutlinedIcon />}>View Details</Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default ViewInquiry