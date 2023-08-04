import styles from './page.module.css'
import Button from '../components/button'
import Grid from '../components/grid'

const Home = () => (
  <main className={styles.main}>
    <Grid>
      <div style={{ backgroundColor: '#a0f' }}>Blarg</div>
      <Button>Hi</Button>
    </Grid>
  </main>
)

export default Home
