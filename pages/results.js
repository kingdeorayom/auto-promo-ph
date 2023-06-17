import Layout from '@/layouts/Layout'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import styles from '@/styles/Vehicles.module.css'
import setCurrency from '@/utils/setCurrency'

const SearchResults = () => {

    const router = useRouter()

    const [results, setResults] = useState([])

    const fetchSearchResults = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${router.query.q}`);
        const vehicle = await response.json();
        setResults(vehicle)
    }

    useEffect(() => {
        fetchSearchResults()
    })

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h1" fontWeight='500' mb={1}>{`Showing search results for '${router.query.q}'`}</Typography>
            <Typography fontSize='1rem' variant="h3" lineHeight={1.5} color='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >
                {
                    results.map(result => {
                        return (
                            <Grid key={result._id} item xs={12} sm={6} lg={3}>
                                <Link href={`/brands/${result.brand_slug}/${result.vehicle_slug}`}>
                                    <Box className={styles.imageBox}>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_API_URL}${result.image}`}
                                            alt={result.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            className={styles.vehicleImage}
                                            placeholder='blur'
                                            blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}${result.image}`}
                                        />
                                    </Box>
                                    <Typography fontWeight='500' variant='h4' fontSize='1rem' mt={1.5}>{result.name}</Typography>
                                    <Typography color='secondary'>PHP {setCurrency(result.price)}</Typography>
                                    <Typography color='secondary'>DP starts @ PHP 23,829.00</Typography>
                                    <Stack direction='row' spacing={1}>
                                        <Typography variant="button" fontWeight='500' color='primary.main'>
                                            VIEW MORE INFORMATION
                                        </Typography>
                                        <EastIcon color='primary' />
                                    </Stack>
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Layout>
    )
}

export default SearchResults