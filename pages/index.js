import Layout from "@/layouts/Layout"
import FeaturedVehicles from "@/components/Home/FeaturedVehicles"
import BodyTypeSearch from "@/components/Home/BodyTypeSearch"
import BudgetSearch from "@/components/Home/BudgetSearch"
import Banner from "@/components/Home/Banner"
import SearchBox from "@/components/Search/SearchBox"
import Welcome from "@/components/Home/Welcome"
import Head from "next/head"

const Home = () => {

  return (
    <>
      <Head>
        <title>Explore | Auto Promo PH</title>
        <meta name="description" content="Welcome to Auto Promo PH. Explore, or easily search for vehicles using our search field below." />
      </Head>
      <Layout>
        <Welcome />
        <SearchBox />
        <FeaturedVehicles />
        <BodyTypeSearch />
        <BudgetSearch />
        <Banner />
      </Layout>
    </>
  )
}

export default Home