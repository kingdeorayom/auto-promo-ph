import { Typography } from '@mui/material'
import styles from '@/styles/Details.module.css'

const Description = ({ vehicle }) => {
  return (
    <>
      <Typography fontSize='1.5rem' variant="h2" fontWeight='800' mt={0} mb={2} color='#343434'>{`About ${vehicle.name}`}</Typography>
      {/* <Alert severity='info' sx={{ mt: 4, mb: 2, fontSize: '1rem' }}>{vehicle.description}</Alert> */}
      <Typography fontSize='1rem' variant="subtitle1" color='#343434' mb={2} className={styles.description}>{vehicle.description}</Typography>
    </>
  )
}

export default Description