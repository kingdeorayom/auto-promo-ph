import { Box, Typography } from '@mui/material'
import styles from '@/styles/Details.module.css'

const Specifications = ({ vehicle }) => {
    return (
        <>
            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={0} mb={1} color='#343434'>Specs & Features</Typography>
            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={4}>Major specifications & key features of the {vehicle.name}. View engine specs, dimensions, fuel information and safety and technology features below.
            </Typography>

            {
                vehicle.overallLength === '' && vehicle.overallWidth === '' && vehicle.overallHeight === '' && vehicle.wheelbase === '' && vehicle.tread === '' && vehicle.minimumTurningRadius === '' && vehicle.minimumGroundClearance === '' && vehicle.approachAngle === '' && vehicle.rampBreakoverAngle === '' && vehicle.departureAngle === '' ?
                    null :
                    <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                        <Box bgcolor='#404040' px={2} py={1}>
                            <Typography color='white' fontWeight='700' fontSize='1rem'>DIMENSIONS</Typography>
                        </Box>
                        {
                            vehicle.overallLength !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Overall Length</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.overallLength}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.overallWidth !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Overall Width</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.overallWidth}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.overallHeight !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Overall Height</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.overallHeight}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.wheelbase !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Wheelbase</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.wheelbase}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.tread !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Tread</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.tread}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.minimumTurningRadius !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Minimum Turning Radius</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.minimumTurningRadius}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.minimumGroundClearance !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Minimum Ground Clearance</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.minimumGroundClearance}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.approachAngle !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Approach angle</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.approachAngle}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.rampBreakoverAngle !== '' ?

                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Ramp breakover angle</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.rampBreakoverAngle}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.departureAngle !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Departure angle</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.departureAngle}</Typography>
                                </Box> : null
                        }
                    </Box>
            }

            {
                vehicle.numberOfCylinders === '' && vehicle.numberOfValves === '' && vehicle.pistonDisplacement === '' && vehicle.maximumOutput === '' && vehicle.maximumTorque ?
                    null :
                    <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                        <Box bgcolor='#404040' px={2} py={1}>
                            <Typography color='white' fontWeight='700' fontSize='1rem'>ENGINE</Typography>
                        </Box>
                        {
                            vehicle.numberOfCylinders !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Number of cylinders</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.numberOfCylinders}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.numberOfValves !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Number of valves</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.numberOfValves}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.pistonDisplacement !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Piston displacement</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.pistonDisplacement}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.maximumOutput !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Maximum output</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.maximumOutput}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.maximumTorque !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Maximum torque</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.maximumTorque}</Typography>
                                </Box> : null
                        }
                    </Box>
            }

            {
                vehicle.transmissionType === '' && vehicle.driveSystem === '' ?
                    null :
                    <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                        <Box bgcolor='#404040' px={2} py={1}>
                            <Typography color='white' fontWeight='700' fontSize='1rem'>TRANSMISSION</Typography>
                        </Box>
                        {
                            vehicle.transmissionType !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Type</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.transmissionType}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.driveSystem !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Drive system</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.driveSystem}</Typography>
                                </Box> : null
                        }
                    </Box>
            }

            {
                vehicle.steering === '' && vehicle.brakes === '' && vehicle.suspension === '' && vehicle.tyres === '' ?
                    null :
                    <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                        <Box bgcolor='#404040' px={2} py={1}>
                            <Typography color='white' fontWeight='700' fontSize='1rem'>CHASSIS</Typography>
                        </Box>
                        {
                            vehicle.steering !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Steering</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.steering}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.brakes !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Brakes</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.brakes}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.suspension !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Suspension</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.suspension}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.tyres !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Tyres</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.tyres}</Typography>
                                </Box> : null
                        }
                    </Box>
            }

            {
                vehicle.seatingCapacity === '' && vehicle.fuelTankCapacity === '' && vehicle.luggageCapacity === '' ?
                    null :
                    <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                        <Box bgcolor='#404040' px={2} py={1}>
                            <Typography color='white' fontWeight='700' fontSize='1rem'>CAPACITY</Typography>
                        </Box>
                        {
                            vehicle.seatingCapacity !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Seating capacity</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.seatingCapacity}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.luggageCapacity !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Luggage capacity</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.luggageCapacity}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.fuelTankCapacity !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Fuel tank capacity</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.fuelTankCapacity}</Typography>
                                </Box> : null
                        }
                    </Box>
            }

            {
                vehicle.kerbWeight === '' && vehicle.grossWeight === '' ?
                    null :
                    <Box sx={{ border: '1px solid #d3d3d3', mb: '20px' }}>
                        <Box bgcolor='#404040' px={2} py={1}>
                            <Typography color='white' fontWeight='700' fontSize='1rem'>WEIGHTS</Typography>
                        </Box>
                        {
                            vehicle.kerbWeight !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Kerb weight (min./with full option)</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.kerbWeight}</Typography>
                                </Box> : null
                        }
                        {
                            vehicle.grossWeight !== '' ?
                                <Box className={styles.specificationItemBox}>
                                    <Typography color='#505050' fontWeight='700' mr={'24px'}>Gross vehicle weight</Typography>
                                    <Typography color='#343434' fontSize='14px' fontWeight='400' textAlign='end'>{vehicle.grossWeight}</Typography>
                                </Box> : null
                        }
                    </Box>
            }
        </>
    )
}

export default Specifications