import Layout from '@/layouts/Layout'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import geely from '../../public/geely.png'
// import toyota from '../../public/toyota.png'
import suzuki from '../../public/suzuki.png'

export async function getStaticProps() {

    const response = await fetch('http://localhost:3001/brands');
    const brands = await response.json();

    return {
        props: {
            brands: brands,
        }
    };
}

const Brands = ({ brands }) => {

    // console.log(brands)

    return (
        <Layout>
            <Typography fontSize='2rem' variant="h2" fontWeight='600'>All Brands</Typography>
            <Typography fontSize='1rem' variant="subtitle1" color='secondary'>Choose vehicle from the most popular brands</Typography>

            <Grid
                container
                mt={2}
                mb={4}
                rowSpacing={3}
                columnSpacing={2}
            >

                {
                    brands.map(brand => {
                        return (
                            <Grid key={brand._id} item xs={12} lg={6}>
                                <Link
                                    key={brand._id}
                                    href={`brands/${brand.slug}`}
                                >
                                    <Box sx={{
                                        // width: 250,
                                        // height: 250,
                                        // backgroundColor: '#f5f5f5',
                                        border: '1px solid #d3d3d3',
                                        borderRadius: 2,
                                        // paddingX: 3,
                                        paddingY: 2.5,
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        // height: 250,
                                        // overflow: 'hidden'
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            // border: '1px solid #d3d3d3',
                                            // color: 'primary.main'
                                        }
                                    }}>
                                        <Image src={suzuki} alt='' style={{ marginLeft: 3 }} />
                                        <Box mx={2}>
                                            <Typography
                                                fontSize='1.5rem'
                                                variant="h3"
                                                fontWeight='600'
                                                mb={1}
                                            >
                                                {brand.name}
                                            </Typography>
                                            <Typography fontWeight='300' color='secondary'>{brand.description}</Typography>
                                        </Box>
                                        <ChevronRightIcon color='secondary' sx={{ marginRight: 3 }} />
                                    </Box>
                                </Link>
                            </Grid>
                        )
                    })
                }

            </Grid >



        </Layout>
    )
}

export default Brands