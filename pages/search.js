import Layout from '@/layouts/Layout'
import SearchBox from '@/components/Search/SearchBox';
import SearchSuggestions from '@/components/Search/SearchSuggestions';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import styles from '@/styles/Search.module.css'

const Search = () => {

    return (
        <>
            <Head>
                <title>Search | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.search}>
                    <Box sx={{ paddingLeft: '15px', paddingRight: '15px' }}>
                        <Typography
                            fontSize='2rem'
                            variant="h1"
                            className={styles.title}
                            mt={.8}
                            mb={1}
                            lineHeight={1}
                            fontWeight='800'
                            color='#505050'
                        // color='#ffffff'
                        >
                            Search for vehicles</Typography>
                        <Typography
                            fontSize='1rem'
                            variant="h3"
                            fontWeight='400'
                            lineHeight={1.5}
                            mb={1}
                            color='#808080'
                            // color='#dadada'
                            className={styles.subtitle}
                        >
                            Easily search for vehicles using our search field below
                        </Typography>

                        <SearchBox autoFocus={true} />
                    </Box>
                    <Box className='overlayBackground'></Box>
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