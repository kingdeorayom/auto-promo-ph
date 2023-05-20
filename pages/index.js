import Image from "next/image"
import Link from "next/link"
import Layout from "@/layouts/Layout"
import { Box, Grid, Typography } from "@mui/material"
import styles from '../styles/Home.module.css'
import FeaturedVehicles from "@/components/Home/FeaturedVehicles"
import mitsubishi from '../public/vehicles/mitsubishi-g4.webp'
import BodyTypeSearch from "@/components/Home/BodyTypeSearch"


const Home = () => {

  return (
    <Layout>

      <FeaturedVehicles />
      <BodyTypeSearch />

    </Layout>
  )
}

export default Home