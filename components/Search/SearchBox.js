import { useState } from 'react';
import { useRouter } from 'next/router';
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {

    const router = useRouter()
    const [keyword, setKeyword] = useState('');

    return (
        <TextField
            color='primary'
            placeholder='Search for brand, name, model or type'
            sx={{ width: '100%', marginY: 3, maxWidth: '750px' }}
            InputProps={{
                sx: { borderRadius: 10, marginBottom: 2 },
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

export default SearchBox