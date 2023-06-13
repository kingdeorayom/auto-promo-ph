import Layout from '@/layouts/Layout'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export async function getStaticProps() {

    const response = await fetch('https://auto-promo-ph-api.onrender.com/brands');
    const brands = await response.json();

    return {
        props: {
            brands: brands,
        }
    };
}

const Brands = ({ brands }) => {

    // console.log(brands)

    const baseURL = 'https://auto-promo-ph-api.onrender.com'

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
                                        border: '1px solid #d3d3d3',
                                        borderRadius: 2,
                                        paddingY: 2.5,
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                        }
                                    }}>
                                        <Image
                                            src={`${baseURL}${brand.logo}`}
                                            width={90}
                                            height={50}
                                            unoptimized={true}
                                            alt=''
                                            style={{ marginLeft: 15 }}
                                        />
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