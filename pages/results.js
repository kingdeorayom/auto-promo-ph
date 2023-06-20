import Layout from '@/layouts/Layout'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import VehicleCard from '@/components/Vehicles/VehicleCard'
import SearchBox from '@/components/Search/SearchBox'
import useEmptyArrayChecker from '@/hooks/useEmptyArrayChecker'
import Image from 'next/image'
import no_results from '@/public/no_results.svg'
import SearchSuggestions from '@/components/Search/SearchSuggestions'
import Head from 'next/head'
import { useSearchResults } from '@/hooks/useSearchResults'
import { ListingContext } from '@/context/ListingContext'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const SearchResults = () => {

    const router = useRouter()

    const { getSearchResults, isSearchResultsLoading } = useSearchResults()
    const { searchResults } = useContext(ListingContext)

    useEffect(() => {
        getSearchResults(router.query.q)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query.q])

    const isResultsEmpty = useEmptyArrayChecker(searchResults)

    return (
        <>
            <Head>
                <title>{`Showing search results for ${router.query.q}`}</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Typography fontSize='2rem' variant="h1" fontWeight='700' mb={1}>{`Showing search results for '${router.query.q}'`}</Typography>
                <Typography fontSize='1rem' variant="h3" lineHeight={1.5} mb={1} color='secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>

                <SearchBox />

                {
                    isSearchResultsLoading ?
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3, mb: 4 }}>
                            <CircularProgress />
                        </Box> :
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
                                    searchResults.map(vehicle => {
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
        </>
    )
}

export default SearchResults