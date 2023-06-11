import Layout from '@/layouts/Layout'
import { Avatar, Box, Breadcrumbs, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import styles from '../../../styles/Inquiries.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import moment from 'moment/moment'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import AppLoader from '@/components/Utility/AppLoader'
import no_inquiries from '../../../public/no_inquiries.svg'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';
import Swal from 'sweetalert2';

export async function getStaticProps() {

    const response = await fetch(`http://192.168.1.3:3001/inquiries`);
    const inquiries = await response.json();

    return {
        props: {
            inquiries: inquiries
        },
        revalidate: 10
    };
}

const InquiriesPage = ({ inquiries }) => {

    const router = useRouter()

    const hasInquiry = inquiries.length !== 0
    console.log(hasInquiry)

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const handleDeleteDialogOpen = () => {
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteDialogClose = () => {
        setIsDeleteDialogOpen(false);
    };

    const handleDeleteInquiry = () => {

        setIsDeleteDialogOpen(false);

        axios.delete(`http://192.168.1.3:3001/inquiries`)
            .then((response) => {
                Swal.fire(
                    'Successfully deleted all inquiries.',
                    'Lorem ipsum',
                    'success'
                ).then(() => router.push('/admin/inquiries'))
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
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
                        <Typography color="primary">Inquiries</Typography>
                    </Breadcrumbs>
                </Box>

                <Box>
                    <Typography fontSize='2.5rem' variant="h2" fontWeight='600' mb={1}>Inquiries</Typography>
                    <Typography fontSize='1rem' variant="h3" lineHeight='1.5' color='secondary'>View and manage inquiries of clients or customers, their name, and contact information</Typography>
                </Box>

                {
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
                                                    <Typography fontWeight='500'>{`${inquiry.firstName} ${inquiry.lastName}`}</Typography>
                                                    <Typography color='#808080' className={styles.truncate}>
                                                        {inquiry.message}
                                                    </Typography>
                                                </Box>
                                                <Typography fontSize='14px' fontWeight='300'>
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
                            <Typography fontSize='2rem' variant="h2" fontWeight='600' mb={1}>No inquiries yet</Typography>
                            <Typography fontSize='1.2rem' variant="h2" fontWeight='300' color='#808080' mb={1}>But {"don't worry! You'll"} see all your inquiries here once someone has messaged you.</Typography>
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
    )
}

export default InquiriesPage