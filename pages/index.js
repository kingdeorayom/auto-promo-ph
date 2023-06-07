import Layout from "@/layouts/Layout"
import FeaturedVehicles from "@/components/Home/FeaturedVehicles"
import BodyTypeSearch from "@/components/Home/BodyTypeSearch"
import BudgetSearch from "@/components/Home/BudgetSearch"
import Banner from "@/components/Home/Banner"
import SearchBox from "@/components/Search/SearchBox"
import Welcome from "@/components/Home/Welcome"

const Home = () => {

  return (
    <Layout>
      <Welcome />
      <SearchBox />
      <FeaturedVehicles />
      <BodyTypeSearch />
      <BudgetSearch />
      <Banner />
    </Layout>
  )
}

export default Home