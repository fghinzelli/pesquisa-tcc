import DefaultCard from '../components/Card';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DefaultCard />
        </Grid>
        <Grid item xs={12}>
          <DefaultCard />
        </Grid> 
      </Grid>
  )
}
