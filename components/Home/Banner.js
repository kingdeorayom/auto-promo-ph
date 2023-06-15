import Link from 'next/link'
import Image from 'next/image';
import { Button, Grid, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import man_working from '@/public/man_working.svg'
// import styles from '@/styles/Home.module.css'

const Banner = () => {
    return (
        <Grid
            container
            mt={2}
            mb={4}
            rowSpacing={3}
            sx={{
                backgroundColor: '#E6F2FF',
                borderRadius: 5,
                px: 5,
                py: 2,
            }}
        >
            <Grid item xs={12} md={9}>
                <Typography fontWeight='500' variant='h4' fontSize='2rem' marginBottom={2}>Drive your dream car home today</Typography>
                <Typography variant='h4' fontSize='1rem' marginBottom={3} color='secondary' lineHeight={1.5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi molestias iure corrupti quam deserunt odit, obcaecati accusantium quasi tenetur ipsam repellat quibusdam aut soluta, ratione architecto fuga ullam asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque qui totam asperiores aliquam aperiam enim animi incidunt suscipit, dignissimos, non modi. Nobis quasi libero maiores atque. Error, voluptatem deleniti!</Typography>
                <Link href='/contact'>
                    <Button variant="contained" endIcon={<EastIcon />} disableElevation size="large">Apply Now</Button>
                </Link>
            </Grid>
            <Grid item xs={12} md={3}>
                <Image
                    src={man_working}
                    height={250}
                    width={250}
                    alt="Man working"
                // className={styles.bannerImage}
                />
            </Grid>
        </Grid >
    )
}

export default Banner