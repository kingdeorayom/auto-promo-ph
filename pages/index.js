import Layout from "@/layouts/Layout"
import FeaturedVehicles from "@/components/Home/FeaturedVehicles"
import BodyTypeSearch from "@/components/Home/BodyTypeSearch"
import BudgetSearch from "@/components/Home/BudgetSearch"
import Banner from "@/components/Home/Banner"

const Home = () => {

  return (
    <Layout>
      <FeaturedVehicles />
      <BodyTypeSearch />
      <BudgetSearch />
      <Banner />
    </Layout>
  )
}

export default Home