import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import VehicleCard from '@/components/Vehicles/VehicleCard'
import useEmptyArrayChecker from '@/hooks/useEmptyArrayChecker'

const Variants = ({ vehicle, variants }) => {

    const isVariantsEmpty = useEmptyArrayChecker(variants)

    return (
        isVariantsEmpty ?
            <>
                <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={0} mb={1} color='#343434'>{`${vehicle.name} Variants`}</Typography>
                <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sunt a repellat nostrum consequatur dolore vitae optio. Suscipit consequuntur inventore dolores cum fuga dicta eius atque nam. Adipisci, sed impedit!</Typography>
                <Typography textAlign='center' mt={4} mb={3} color='#606060'>This vehicle has no variant</Typography>
            </> :
            <>
                <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={0} mb={1} color='#343434'>{`${vehicle.name} Variants`}</Typography>
                <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sunt a repellat nostrum consequatur dolore vitae optio. Suscipit consequuntur inventore dolores cum fuga dicta eius atque nam. Adipisci, sed impedit!</Typography>
                <Grid
                    container
                    mt={2}
                    mb={4}
                    rowSpacing={3}
                    columnSpacing={2}
                >
                    {
                        variants.map(vehicle => {
                            return (
                                <Grid key={vehicle._id} item xs={12} sm={6} lg={4}>
                                    <Link href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`}>
                                        <VehicleCard
                                            image={vehicle.image}
                                            name={vehicle.name}
                                            unitPrice={vehicle.unitPrice}
                                            fuelType={vehicle.fuelType}
                                            transmission={vehicle.transmission}
                                            bodyType={vehicle.bodyType}
                                            description={vehicle.description}
                                        />
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </>
    )
}

export default Variants