import Layout from '@/layouts/Layout'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import mitsubishi from '../public/mitsubishi-g4.jpg'
import EastIcon from '@mui/icons-material/East';
import styles from '../styles/Vehicles.module.css'

const SearchResults = () => {

    const router = useRouter()

    const [results, setResults] = useState([])

    const fetchSearchResults = async () => {
        const response = await fetch(`http://192.168.1.3:3001/search/${router.query.q}`);
        const vehicle = await response.json();
        setResults(vehicle)
    }

    useEffect(() => {
        fetchSearchResults()
    })

    const baseURL = 'http://192.168.1.3:3001'

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h1" fontWeight='600' mb={1}>{`Showing search results for '${router.query.q}'`}</Typography>
            <Typography fontSize='1rem' variant="h3" lineHeight={1.5} color='secondary'>Easily search for vehicles using our search box below</Typography>
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
                                            // src={mitsubishi}
                                            // alt="Mitsubishi Mirage G4"
                                            // className={styles.vehicleImage}
                                            // priority

                                            // loader={() => `${baseURL}${result.image}`}
                                            // src={`${baseURL}${result.image}`}
                                            // alt="Mitsubishi Mirage G4"
                                            // width={565}
                                            // height={50}
                                            // // style={{
                                            // //     width: '565',
                                            // //     height: '100%',
                                            // //     maxWidth: '100%',
                                            // //     borderRadius: 5
                                            // // }}
                                            // className={styles.vehicleImage}
                                            // priority

                                            src={`${baseURL}${result.image}`}
                                            alt="Mitsubishi Mirage G4"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className={styles.vehicleImage}
                                            priority

                                        />
                                    </Box>
                                    <Typography fontWeight='500' variant='h4' fontSize='1rem' mt={1.5}>{result.name}</Typography>
                                    <Typography color='secondary'>PHP {result.price}</Typography>
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