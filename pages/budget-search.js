import Layout from '@/layouts/Layout'
import { Box, Button, CircularProgress, Grid, Slider, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import VehicleCard from '@/components/Vehicles/VehicleCard'
import useEmptyArrayChecker from '@/hooks/useEmptyArrayChecker'
import Image from 'next/image'
import no_results from '@/public/no_results.svg'
import SearchSuggestions from '@/components/Search/SearchSuggestions'
import Head from 'next/head'
import { useBudgetSearchResults } from '@/hooks/useBudgetSearchResults'
import { ListingContext } from '@/context/ListingContext'
import useNumberFormatter from '@/hooks/useNumberFormatter'
import EastIcon from '@mui/icons-material/East';


const API_URL = process.env.NEXT_PUBLIC_API_URL

const BudgetSearchSlider = () => {

    const [value, setValue] = useState(2000000);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const marks = [
        {
            value: 700000,
            label: '700K',
        },
        {
            value: 1000000,
            label: '1M',
        },
        {
            value: 1500000,
            label: '1.5M',
        },
        {
            value: 2000000,
            label: '2M',
        },
        {
            value: 2500000,
            label: '2.5M',
        },
    ];

    return (
        <>
            <Box display='flex' justifyContent='center'>
                <Box sx={{
                    mt: 2,
                    mb: 5,
                    backgroundColor: '#ffffff',
                    padding: '5px 15px',
                    borderRadius: '10px',
                    width: '100%',
                    maxWidth: '1000px',
                }}
                >
                    <Box sx={{ marginY: 2, marginX: 3 }}>
                        <Typography fontSize='1rem' variant="h3" color='#343434' fontWeight='500' lineHeight={1.5}  >Adjust the slider below to match your maximum budget</Typography>
                        <Box sx={{ mt: 3, marginX: 5 }}>
                            <Slider
                                valueLabelDisplay="on"
                                valueLabelFormat={`₱ ${useNumberFormatter(value)}`}
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                step={100000}
                                marks={marks}
                                min={700000}
                                max={2500000}
                                sx={{ color: '#1f308a' }}
                            />
                        </Box>
                        <Box display='flex' justifyContent='center' sx={{ mt: 3.5, mb: .5, }}>
                            <Link href={`/budget-search?budget=${value}`}>
                                <Button
                                    variant='contained'
                                    disableElevation
                                    sx={{ fontSize: '12px', color: '#343434', backgroundColor: '#ffffff', ':hover': { backgroundColor: '#f5f5f5', boxShadow: '0 0 2px 0 rgba(34, 34, 34, 1)' }, borderRadius: '20px', boxShadow: '0 0 2px 0 rgba(34, 34, 34, 1)' }}
                                    endIcon={<EastIcon />}
                                >
                                    Search for vehicles under ₱ {useNumberFormatter(value)}
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='overlayBackground'></Box>
        </>
    )

}

const BudgetSearchResults = () => {

    const router = useRouter()

    const { getBudgetSearchResults, isBudgetSearchResultsLoading } = useBudgetSearchResults()
    const { budgetSearchResults } = useContext(ListingContext)

    useEffect(() => {
        getBudgetSearchResults(router.query.budget)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query.budget])

    const isResultsEmpty = useEmptyArrayChecker(budgetSearchResults)

    return (
        <>
            <Head>
                <title>{`Showing vehicles under ₱ ${router.query.budget} | Auto Promo PH`}</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>

                <Box sx={{
                    width: '100%',
                    backgroundColor: '#ffffff',
                    // paddingLeft: '15px',
                    // paddingRight: '15px',
                    textAlign: 'center',
                    paddingTop: '40px'
                }}
                >

                    <Typography
                        fontSize='2rem'
                        variant="h1"

                        mt={.8}
                        mb={1}
                        lineHeight={1}
                        fontWeight='800'
                        color='#505050'
                    // color='#ffffff'
                    >
                        Budget Search
                    </Typography>
                    <Typography
                        fontSize='1rem'
                        variant="h3"
                        fontWeight='400'
                        lineHeight={1.5}
                        mb={1}
                        color='#808080'
                    // color='#dadada'

                    >
                        Tight on budget? Use our Budget Search below to search for vehicles fitting your <strong>maximum</strong> budget
                    </Typography>

                    {/* <SearchBox /> */}

                    <BudgetSearchSlider />

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

                    <Typography
                        fontSize='1.5rem'
                        variant="h2"

                        mt={.8}
                        mb={1}
                        lineHeight={1}
                        fontWeight='800'
                        color='#343434'
                    // color='#ffffff'
                    >
                        {`Showing vehicles under ₱ ${useNumberFormatter(router.query.budget)}`}
                    </Typography>
                    <Typography
                        fontSize='14px'
                        variant="h3"
                        fontWeight='400'
                        lineHeight={1.5}
                        mb={1}
                        color='secondary'
                    // color='#dadada'

                    >
                        To search for another vehicle based on your maximum budget, simply use the slider above
                    </Typography>

                    {
                        isBudgetSearchResultsLoading ?
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
                                    <Typography fontSize='1rem' variant="h3" fontWeight='400' color='#808080' mb={1}>But {"don't worry!"} Try a different or more general keywords, or take a look at some suggestions below</Typography>
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
                                        budgetSearchResults.map(vehicle => {
                                            return (
                                                <Grid key={vehicle._id} item xs={12} sm={6} lg={3}>
                                                    <Link href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`}>
                                                        <VehicleCard
                                                            image={vehicle.image}
                                                            name={vehicle.name}
                                                            price={vehicle.price}
                                                            promo={vehicle.price}
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
                </Box>
            </Layout>
        </>
    )
}

export default BudgetSearchResults