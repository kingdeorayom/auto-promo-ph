import Layout from '@/layouts/Layout'
import { InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <Layout>
            <Typography fontSize='2rem' variant="h1" fontWeight='600' mb={1}>Search for vehicles</Typography>
            <Typography fontSize='1rem' variant="h3" lineHeight={1.5} color='secondary'>Easily search for vehicles using our search box below</Typography>

            <TextField
                color='primary'
                // label='Search for vehicle brand, name, model or price'
                placeholder='Search for brand, name, model or price'
                sx={{ width: '100%', marginY: 3 }}
                InputProps={{
                    sx: { borderRadius: 10 },
                    startAdornment: <InputAdornment position='start'><SearchIcon /></InputAdornment>
                }}

            />

        </Layout>
    )
}

export default Search