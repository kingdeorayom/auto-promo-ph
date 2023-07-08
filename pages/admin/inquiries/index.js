import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/layouts/Layout'
import styles from '@/styles/Inquiries.module.css'
import { Avatar, Box, Breadcrumbs, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import no_inquiries from '@/public/no_inquiries.svg'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import Swal from 'sweetalert2';
import Head from 'next/head'
import { InquiriesContext } from '@/context/InquiriesContext'
import { useInquiries } from '@/hooks/useInquiries'
import nookies from 'nookies'

export async function getServerSideProps(context) {

    const cookies = nookies.get(context)

    if (!cookies['auth_token']) {
        return {
            redirect: {
                destination: '/admin',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    };
}

const InquiriesPage = () => {

    const { getInquiries, isInquiriesLoading } = useInquiries()
    const { inquiries } = useContext(InquiriesContext)

    useEffect(() => {
        getInquiries()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const router = useRouter()

    const hasInquiry = inquiries.length !== 0

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const handleDeleteDialogOpen = () => setIsDeleteDialogOpen(true)

    const handleDeleteDialogClose = () => setIsDeleteDialogOpen(false)

    const handleDeleteInquiry = () => {
        setIsDeleteDialogOpen(false);
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/inquiries`)
            .then((response) => {
                Swal.fire(
                    'Successfully deleted all inquiries.',
                    'Lorem ipsum',
                    'success'
                ).then(() => router.push('/admin/inquiries'))
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <Head>
                <title>Inquiries | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.wrapper}>

                    <Box mb={4}>
                        <Breadcrumbs separator=">" aria-label="breadcrumb">
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/admin/dashboard"
                            >
                                Dashboard
                            </Link>
                            <Typography color="primary" fontWeight='500'>Inquiries</Typography>
                        </Breadcrumbs>
                    </Box>

                    <Box>
                        <Typography fontSize='2.1rem' variant="h2" fontWeight='700' mb={1} color='#343434'>Inquiries</Typography>
                        <Typography fontSize='1rem' variant="h3" lineHeight='1.5' color='secondary'>View and manage inquiries of clients or customers, their name, and contact information</Typography>
                    </Box>

                    {
                        isInquiriesLoading ?
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3, mb: 4 }}>
                                <CircularProgress />
                            </Box> :
                            hasInquiry ?
                                <Box my={5}>
                                    {
                                        inquiries.reverse().map(inquiry => {
                                            return (
                                                <Link href={`/admin/inquiries/${inquiry._id}`} key={inquiry._id}>
                                                    <Box className={styles.inquiryCard}>
                                                        <Avatar className={styles.avatar}>
                                                            {`${inquiry.firstName.charAt(0).toUpperCase()}${inquiry.lastName.charAt(0).toUpperCase()}`}
                                                        </Avatar>
                                                        <Box sx={{ flex: 1 }}>
                                                            <Typography className={styles.name} fontWeight='500'>{`${inquiry.firstName} ${inquiry.lastName}`}</Typography>
                                                            <Typography color='#808080' className={styles.truncate}>
                                                                {inquiry.message}
                                                            </Typography>
                                                        </Box>
                                                        <Typography fontSize='14px' fontWeight='400'>
                                                            {inquiry.date}
                                                        </Typography>
                                                    </Box>
                                                </Link>
                                            )
                                        })
                                    }
                                </Box> :
                                <Box my={5} sx={{ textAlign: 'center' }}>
                                    <Image
                                        src={no_inquiries}
                                        width={350}
                                        height={250}
                                        alt='No inquiries'
                                    />
                                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1}>No inquiries yet</Typography>
                                    <Typography fontSize='1.1rem' variant="h3" fontWeight='400' color='#808080' mb={1}>But {"don't worry! You'll"} see all your inquiries here once someone has messaged you.</Typography>
                                </Box>
                    }
                    {
                        hasInquiry ?
                            <Box mt={5} display='flex' justifyContent='flex-start'>
                                <Button variant='text' color='error' startIcon={<DeleteOutlineIcon />} onClick={handleDeleteDialogOpen}>Delete all messages</Button>
                            </Box> :
                            null
                    }

                    <Dialog
                        open={isDeleteDialogOpen}
                        onClose={handleDeleteDialogClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" color='error'>
                            {"Are you sure you want to delete all inquiries?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                This action is irreversible. Please be careful.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDeleteDialogClose} color='primary'>Cancel</Button>
                            <Button onClick={handleDeleteInquiry} autoFocus color='error'>
                                Yes, I am sure
                            </Button>
                        </DialogActions>
                    </Dialog>

                </Box>
            </Layout>
        </>
    )
}

export default InquiriesPage