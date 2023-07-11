import { Alert, AlertTitle, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import styles from '@/styles/Details.module.css'
import Link from 'next/link';
import Image from 'next/image';
import setCurrency from '@/utils/setCurrency';

const PriceList = ({ vehicle, variants }) => {
    return (
        <>
            <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={0} mb={1} color='#343434'>{vehicle.name} Price List</Typography>
            <Typography fontSize='1rem' variant="subtitle1" color='secondary' mb={3}>View price list of {vehicle.name} and its variants, if any</Typography>

            <Alert severity="warning" sx={{ mb: 3 }}>
                <AlertTitle>Important!</AlertTitle>
                The following price list is subject to change without prior notice.
            </Alert>

            <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #d3d3d3', boxShadow: '0 1px 2px 0 rgba(36, 39, 44, 0.15)' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#404040" }}>
                        <TableRow>
                            <TableCell align='center' sx={{ fontWeight: '700', color: '#fff' }}>Image</TableCell>
                            <TableCell align='center' sx={{ fontWeight: '700', color: '#fff' }}>Name</TableCell>
                            <TableCell align='center' sx={{ fontWeight: '700', color: '#fff' }}>Unit Price</TableCell>
                            {/* <TableCell align='center'>Discount</TableCell> */}
                            <TableCell align='center' sx={{ fontWeight: '700', color: '#fff' }}>Net Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align='center' component="th" scope="row">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    width={200}
                                    height={100}
                                    style={{ objectFit: 'contain' }}
                                />
                            </TableCell>
                            <TableCell align='center'>
                                <Link className={styles.link} href={`/brands/${vehicle.brand_slug}/${vehicle.vehicle_slug}`} target='_blank'>
                                    <Typography fontSize='14px' color='primary'>{vehicle.name}</Typography>
                                </Link>
                            </TableCell>
                            <TableCell align='center'>₱ {setCurrency(vehicle.unitPrice)}</TableCell>
                            <TableCell align='center'>₱ {setCurrency(vehicle.netPrice)}</TableCell>
                        </TableRow>
                        {
                            variants.map((item, index) => {
                                return (
                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align='center' component="th" scope="row">
                                            <Image
                                                src={item.image}
                                                alt={vehicle.name}
                                                width={200}
                                                height={100}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Link className={styles.link} href={`/brands/${item.brand_slug}/${item.vehicle_slug}`} target='_blank'>
                                                <Typography fontSize='14px' color='primary'>{item.name}</Typography>
                                            </Link>
                                        </TableCell>
                                        <TableCell align='center'>₱ {setCurrency(item.unitPrice)}</TableCell>
                                        <TableCell align='center'>₱ {setCurrency(item.netPrice)}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default PriceList