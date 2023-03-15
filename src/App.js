import TourCard from './components/TourCard'
import './App.css';
import Container from '@mui/material/Container';
import {Grid} from "@mui/material"
function App() {
  return (
    <div >
      <Container>
        <Grid container spacing={5}>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
