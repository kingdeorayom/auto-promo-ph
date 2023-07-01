import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import VehicleCard from '@/components/Vehicles/VehicleCard'
import { useAllVehicles } from '@/hooks/useAllVehicles'
import { ListingContext } from '@/context/ListingContext'
import styles from '@/styles/Vehicles.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL

const AllVehicles = ({ isHome, hasSeeAll }) => {

    const { getAllVehicles, isAllVehiclesLoading } = useAllVehicles()
    const { allVehicles } = useContext(ListingContext)

    useEffect(() => {
        getAllVehicles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Box>
                    <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mb={1} color='#343434' className={styles.sectionLabel}>All Vehicles</Typography>
                    <Typography fontSize='14px' variant="h3" fontWeight='400' color='#505050' className={styles.sectionLabelSubtitle}>All vehicles available under Auto Promo PH</Typography>
                </Box>
                {
                    hasSeeAll ?
                        <Link href='/vehicles'>
                            <Box>
                                <Typography color='#1976d2' fontSize='14px' fontWeight='500' className={styles.seeAll}>See all</Typography>
                            </Box>
                        </Link> : null
                }
            </Box>

            {
                isAllVehiclesLoading ?
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3, mb: 4 }}>
                        <CircularProgress />
                    </Box> :
                    isHome ?
                        <Carousel
                            swipeable={true}
                            infinite={true}
                            draggable={false}
                            responsive={responsive}
                            className={styles.allVehiclesCarousel}
                        >
                            {
                                allVehicles.reverse().map(vehicle => {
                                    return (
                                        <Link key={vehicle._id} href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`}>
                                            <VehicleCard
                                                image={`${API_URL}${vehicle.image}`}
                                                name={vehicle.name}
                                                price={vehicle.price}
                                                promo={vehicle.price}
                                                fuelType={vehicle.fuelType}
                                                transmission={vehicle.transmission}
                                                type={vehicle.type}
                                            />
                                        </Link>
                                    )
                                })
                            }
                        </Carousel>
                        : <Grid
                            container
                            mt={2}
                            mb={4}
                            rowSpacing={3}
                            columnSpacing={2}
                        >
                            {
                                allVehicles.reverse().map(vehicle => {
                                    return (
                                        <Grid key={vehicle._id} item xs={12} sm={6} lg={3}>
                                            <Link href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`}>
                                                <VehicleCard
                                                    image={`${API_URL}${vehicle.image}`}
                                                    name={vehicle.name}
                                                    price={vehicle.price}
                                                    promo={vehicle.price}
                                                    fuelType={vehicle.fuelType}
                                                    transmission={vehicle.transmission}
                                                    type={vehicle.type}
                                                />
                                            </Link>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
            }

        </>
    )
}

export default AllVehicles