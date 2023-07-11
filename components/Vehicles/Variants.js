import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import VehicleCard from '@/components/Vehicles/VehicleCard'
import useEmptyArrayChecker from '@/hooks/useEmptyArrayChecker'

const Variants = ({ variants }) => {

    const isVariantsEmpty = useEmptyArrayChecker(variants)

    return (
        isVariantsEmpty ?
            <Typography textAlign='center' mt={4} mb={3} color='#606060'>This vehicle has no variant</Typography> :
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
    )
}

export default Variants