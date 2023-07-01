import Layout from "@/layouts/Layout"
import FeaturedVehicles from "@/components/Home/FeaturedVehicles"
import AllVehicles from "@/components/Home/AllVehicles"
import BodyTypeSearch from "@/components/Home/BodyTypeSearch"
import BudgetSearch from "@/components/Home/BudgetSearch"
import Banner from "@/components/Home/Banner"
import SearchBox from "@/components/Search/SearchBox"
import Welcome from "@/components/Home/Welcome"
import Head from "next/head"
import { Box, Typography } from "@mui/material"
import styles from '@/styles/Home.module.css'

const Home = () => {

  return (
    <>
      <Head>
        <title>Explore | Auto Promo PH</title>
        <meta name="description" content="Welcome to Auto Promo PH. Explore, or easily search for vehicles using our search field below." />
      </Head>
      <Layout>
        <Box className={styles.welcome}>
          <Box sx={{ textAlign: 'center', mt: 10, mb: 3 }}>
            <Welcome />
            <SearchBox autoFocus={false} />
            {/* <Typography color='white'>or</Typography>
            <Box sx={{ backgroundColor: 'white', maxWidth: '200px', borderRadius: 1, padding: .5 }}>
              <Typography>Explore</Typography>
            </Box> */}
          </Box>
          <Box className={styles.overlayBackground}></Box>
        </Box>
        <Box className={styles.wrapper}>
          <FeaturedVehicles isHome={true} hasSeeAll={true} />
          <BodyTypeSearch />
          <BudgetSearch />
          <AllVehicles isHome={true} hasSeeAll={true} />
          <Banner />
        </Box>
      </Layout>
    </>
  )
}

export default Home