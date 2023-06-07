import { inquiry_validation } from '@/data/validation/inquiry'
import Layout from '@/layouts/Layout'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'

const Inquire = () => {

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h1" fontWeight='600' mb={1}>Inquire</Typography>
            <Typography fontSize='1rem' variant="h3" lineHeight={1.5} color='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>

        </Layout>
    )
}

export default Inquire