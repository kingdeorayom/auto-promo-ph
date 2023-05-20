import Layout from "@/layouts/Layout"
import { Box, Grid, Typography } from "@mui/material"
import styles from '../styles/Home.module.css'
import Image from "next/image"
import mitsubishi from '../public/vehicles/mitsubishi-g4.webp'

import "react-multi-carousel/lib/styles.css";
import Link from "next/link"

const Home = () => {

  return (
    <Layout>
      <Typography fontSize='2rem' variant="h1" fontWeight='600'>Featured Vehicles</Typography>
      <Typography fontSize='1rem' variant="body1" color='secondary'>Featured vehicles curated just for you</Typography>

      <Grid container my={1} rowSpacing={5} columnSpacing={3}>

        <Grid item xs={12} sm={6} lg={3}>
          <Box>
            <Image
              src={mitsubishi}
              alt="Mitsubishi Mirage G4"
              className={styles.vehicleImage}
            />
            <Typography fontWeight='500'>Mitsubishi Mirage G4</Typography>
            <Typography color='secondary'>PHP 768,000.00</Typography>
            <Typography color='secondary'>DP starts @ PHP 23,829.00</Typography>
            <Link href='https://www.google.com'>
              <Typography variant="button" fontWeight='500' color='primary.main'>
                VIEW MORE INFORMATION
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Box>
            <Image
              src={mitsubishi}
              alt="Mitsubishi Mirage G4"
              className={styles.vehicleImage}
            />
            <Typography fontWeight='500'>Mitsubishi Mirage G4</Typography>
            <Typography color='secondary'>PHP 768,000.00</Typography>
            <Typography color='secondary'>DP starts @ PHP 23,829.00</Typography>
            <Link href='https://www.google.com'>
              <Typography variant="button" fontWeight='500' color='primary.main'>
                VIEW MORE INFORMATION
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Box>
            <Image
              src={mitsubishi}
              alt="Mitsubishi Mirage G4"
              className={styles.vehicleImage}
            />
            <Typography fontWeight='500'>Mitsubishi Mirage G4</Typography>
            <Typography color='secondary'>PHP 768,000.00</Typography>
            <Typography color='secondary'>DP starts @ PHP 23,829.00</Typography>
            <Link href='https://www.google.com'>
              <Typography variant="button" fontWeight='500' color='primary.main'>
                VIEW MORE INFORMATION
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Box>
            <Image
              src={mitsubishi}
              alt="Mitsubishi Mirage G4"
              className={styles.vehicleImage}
            />
            <Typography fontWeight='500'>Mitsubishi Mirage G4</Typography>
            <Typography color='secondary'>PHP 768,000.00</Typography>
            <Typography color='secondary'>DP starts @ PHP 23,829.00</Typography>
            <Link href='https://www.google.com'>
              <Typography variant="button" fontWeight='500' color='primary.main'>
                VIEW MORE INFORMATION
              </Typography>
            </Link>
          </Box>
        </Grid>

      </Grid>

    </Layout>
  )
}

export default Home