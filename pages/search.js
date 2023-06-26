import Layout from '@/layouts/Layout'
import SearchBox from '@/components/Search/SearchBox';
import SearchSuggestions from '@/components/Search/SearchSuggestions';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';

const Search = () => {

    return (
        <>
            <Head>
                <title>Search | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box sx={{
                    width: '100%',
                    backgroundColor: '#ffffff',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    textAlign: 'center',
                    paddingTop: '40px'
                }}>
                    <Typography fontSize='2rem' variant="h1" fontWeight='700' mb={1} color='#343434'>Search for vehicles</Typography>
                    <Typography fontSize='1rem' variant="h3" lineHeight={1.5} mb={1} color='secondary'>Easily search for vehicles using our search field below</Typography>

                    <SearchBox autoFocus={true} />
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1280px',
                        margin: '40px auto',
                        paddingLeft: '15px',
                        paddingRight: '15px'
                    }}
                >
                    <SearchSuggestions />
                </Box>
            </Layout>
        </>
    )
}

export default Search