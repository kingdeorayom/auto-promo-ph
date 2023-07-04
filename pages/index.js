import Layout from "@/layouts/Layout"
import FeaturedVehicles from "@/components/Home/FeaturedVehicles"
import AllVehicles from "@/components/Home/AllVehicles"
import BodyTypeSearch from "@/components/Home/BodyTypeSearch"
import BudgetSearch from "@/components/Home/BudgetSearch"
import Banner from "@/components/Home/Banner"
import SearchBox from "@/components/Search/SearchBox"
import Welcome from "@/components/Home/Welcome"
import Head from "next/head"
import { Box } from "@mui/material"
import styles from '@/styles/Home.module.css'
import BrandSearch from "@/components/Home/BrandSearch"
import CarouselBanner from "@/components/Home/CarouselBanner"
import Ratings from "@/components/Home/Ratings"

export async function getStaticProps() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`);
  const brands = await response.json();

  return {
    props: {
      brands: brands,
    }
  };
}

const Home = ({ brands }) => {

  return (
    <>
      <Head>
        <title>Explore | Auto Promo PH</title>
        <meta name="description" content="Welcome to Auto Promo PH. Explore, or easily search for vehicles using our search field below." />
      </Head>
      <Layout>
        <Box className={styles.welcome}>
          <Box sx={{ textAlign: 'center', mt: 10, mb: 3, paddingLeft: '15px', paddingRight: '15px' }}>
            <Welcome />
            <SearchBox autoFocus={false} />
          </Box>
          <Box className='overlayBackground'></Box>
        </Box>
        <Box className={styles.wrapper}>
          <FeaturedVehicles isHome={true} hasSeeAll={true} />
          <CarouselBanner />
          <BrandSearch brands={brands} />
          <BodyTypeSearch />
          <BudgetSearch />
          <AllVehicles isHome={true} hasSeeAll={true} />
        </Box>
        <Banner />
        <Ratings />
      </Layout>
    </>
  )
}

export default Home