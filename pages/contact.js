import Layout from '@/layouts/Layout'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import dhang_casten from '../public/dhang_casten.jpg'

const Contact = () => {
    return (
        <Layout>
            <Typography fontSize='2rem' variant="h2" fontWeight='600'>Contact Me</Typography>
            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
        </Layout>
    )
}

export default Contact