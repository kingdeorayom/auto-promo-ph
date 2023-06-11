import Layout from '@/layouts/Layout'
import { Avatar, Box, Breadcrumbs, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import styles from '../../../styles/Inquiries.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import moment from 'moment/moment'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import AppLoader from '@/components/Utility/AppLoader'

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
                    <Typography fontSize='1rem' variant="h3" color='secondary'>View and manage inquiries of clients or customers, their name, and contact information</Typography>
                </Box>

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
                </Box>
            </Box>
        </Layout>
    )
}

export default InquiriesPage