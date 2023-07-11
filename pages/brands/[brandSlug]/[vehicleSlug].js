import { useState } from "react"
import Head from 'next/head';
import Layout from '@/layouts/Layout';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from "@mui/lab"
import Suggestion from '@/components/Vehicles/Suggestion';
import Variants from "@/components/Vehicles/Variants";
import Description from "@/components/Details/Description";
import InteriorExterior from "@/components/Details/InteriorExterior";
import AvailableColors from "@/components/Details/AvailableColors";
import Specifications from "@/components/Details/Specifications";
import PriceList from "@/components/Details/PriceList";
import TradeIn from "@/components/Details/TradeIn";
import Showcase from "@/components/Details/Showcase";
import NavigationControl from "@/components/Details/NavigationControl";
import styles from '@/styles/Details.module.css'

export async function getStaticPaths() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`)
    const vehicles = await response.json()

    const paths = vehicles.map(vehicle => {
        return {
            params: {
                brandSlug: vehicle.brand_slug,
                vehicleSlug: vehicle.vehicle_slug
            }
        }
    })

    return {
        paths: paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps(context) {

    const vehicle_slug = context.params.vehicleSlug

    const vehicleResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/detail/${vehicle_slug}`);
    const vehicle = await vehicleResponse.json();

    let url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/variant/detail`);

    vehicle.variants.forEach(item => url.searchParams.append('vehicleSlug', item.vehicle_slug))

    const variantReponse = await fetch(url.href)
    const variants = await variantReponse.json();

    return {
        props: {
            vehicle: vehicle,
            variants: variants
        },
        revalidate: 10
    };
}

const VehicleDetails = ({ vehicle, variants }) => {

    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <Head>
                <title>{`${vehicle.name} | Auto Promo PH`}</title>
                <meta name="description" content={vehicle.description} />
            </Head>
            <Layout>

                <Box className={styles.wrapper}>

                    <NavigationControl vehicle={vehicle} />

                    <Showcase vehicle={vehicle} />
                    <AvailableColors vehicle={vehicle} isDesktop={true} />

                    <TabContext value={value}>

                        <Box className={styles.tabWrapper}>
                            <TabList
                                onChange={handleChange}
                                variant="scrollable"
                            >
                                <Tab label='Overview' value='1' className={styles.tabLabel} />
                                <Tab label='Specifications' value='2' className={styles.tabLabel} />
                                <Tab label='Variants' value='3' className={styles.tabLabel} />
                                {vehicle.brand !== "Toyota" ? <Tab label='Price List' value='4' className={styles.tabLabel} /> : null}
                            </TabList>
                        </Box>

                        <TabPanel
                            value='1'
                            // sx={{ paddingLeft: 0, paddingRight: 0 }}
                            className={styles.tabPanel}
                        >
                            <Description vehicle={vehicle} />
                            <InteriorExterior vehicle={vehicle} />
                            <AvailableColors vehicle={vehicle} />
                        </TabPanel>

                        <TabPanel
                            value='2'
                            // sx={{ paddingLeft: 0, paddingRight: 0 }}
                            className={styles.tabPanel}
                        >
                            <Specifications vehicle={vehicle} />
                        </TabPanel>

                        <TabPanel
                            value='3'
                            // sx={{ paddingLeft: 0, paddingRight: 0 }}
                            className={styles.tabPanel}
                        >
                            <Variants vehicle={vehicle} variants={variants} />
                        </TabPanel>

                        <TabPanel
                            value='4'
                            // sx={{ paddingLeft: 0, paddingRight: 0 }}
                            className={styles.tabPanel}
                        >
                            <PriceList vehicle={vehicle} variants={variants} />
                        </TabPanel>

                    </TabContext>

                    <TradeIn vehicle={vehicle} />

                    <Suggestion brand_slug={vehicle.brand_slug} brand={vehicle.brand} />

                </Box>

            </Layout>
        </>
    )
}

export default VehicleDetails