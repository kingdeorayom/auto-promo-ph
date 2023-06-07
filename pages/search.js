import Layout from '@/layouts/Layout'
import SearchBox from '@/components/Search/SearchBox';
import SearchSuggestions from '@/components/Search/SearchSuggestions';
import { Typography } from '@mui/material';

const Search = () => {

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h1" fontWeight='600' mb={1}>
                Search for vehicles
            </Typography>
            <Typography fontSize='1rem' variant="h3" lineHeight={1.5} color='secondary'>
                Easily search for vehicles using our search field below
            </Typography>
            <SearchBox />
            <SearchSuggestions />
        </Layout>
    )
}

export default Search