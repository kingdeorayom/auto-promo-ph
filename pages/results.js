import Layout from '@/layouts/Layout'
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import VehicleCard from '@/components/Vehicles/VehicleCard'
import SearchBox from '@/components/Search/SearchBox'
import useEmptyArrayChecker from '@/hooks/useEmptyArrayChecker'
import Image from 'next/image'
import no_results from '@/public/no_results.svg'
import SearchSuggestions from '@/components/Search/SearchSuggestions'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const SearchResults = () => {

    const router = useRouter()

    const [results, setResults] = useState([])

    const fetchSearchResults = async () => {
        const response = await fetch(`${API_URL}/search/${router.query.q}`);
        const vehicle = await response.json();
        setResults(vehicle)
    }

    // const fetchSearchResults = useCallback(async () => {
    //     const response = await fetch(`${API_URL}/search/${router.query.q}`);
    //     const vehicle = await response.json();
    //     setResults(vehicle)
    // }, [router.query.q, results])

    useEffect(() => {
        fetchSearchResults()
    }, [router.query.q])

    const isResultsEmpty = useEmptyArrayChecker(results)

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h1" fontWeight='700' mb={1}>{`Showing search results for '${router.query.q}'`}</Typography>
            <Typography fontSize='1rem' variant="h3" lineHeight={1.5} mb={1} color='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>

            <SearchBox />

            {
                isResultsEmpty ?
                    <Box mb={10} sx={{ textAlign: 'center' }}>
                        <Image
                            src={no_results}
                            width={350}
                            height={250}
                            alt='No inquiries'
                        />
                        <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={1}>Oops! No results found</Typography>
                        <Typography fontSize='1rem' variant="h3" fontWeight='400' color='#808080' mb={1}>But {"don't worry!"} Try a different of more general keywords, or take a look at the suggestions below</Typography>
                    </Box>
                    :
                    <Grid
                        container
                        mt={1}
                        mb={7}
                        rowSpacing={3}
                        columnSpacing={2}
                    >
                        {
                            results.map(vehicle => {
                                return (
                                    <Grid key={vehicle._id} item xs={12} sm={6} lg={3}>
                                        <Link href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`}>
                                            <VehicleCard
                                                image={`${API_URL}${vehicle.image}`}
                                                name={vehicle.name}
                                                price={vehicle.price}
                                                downpayment={vehicle.price}
                                            />
                                        </Link>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
            }

            <SearchSuggestions />


        </Layout>
    )
}

export default SearchResults