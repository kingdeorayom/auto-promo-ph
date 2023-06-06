import Layout from '@/layouts/Layout'
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SearchBox = () => {

    const router = useRouter()
    const [keyword, setKeyword] = useState('');

    return (
        <TextField
            color='primary'
            placeholder='Search for brand, name, model or type'
            sx={{ width: '100%', marginY: 3 }}
            InputProps={{
                sx: { borderRadius: 10 },
                startAdornment: <InputAdornment position='start'><SearchIcon /></InputAdornment>
            }}
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            onKeyDown={e => {
                if (e.key === "Enter") {
                    router.push({
                        pathname: "/results",
                        query: {
                            q: keyword
                        }
                    })
                }
            }}
        />
    )
}

const Search = () => {

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h1" fontWeight='600' mb={1}>Search for vehicles</Typography>
            <Typography fontSize='1rem' variant="h3" lineHeight={1.5} color='secondary'>Easily search for vehicles using our search box below</Typography>

            <SearchBox />

        </Layout>
    )
}

export default Search