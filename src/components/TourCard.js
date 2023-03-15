
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import {Box} from '@mui/material';
const TourCard = ()=>{
    return(
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
                className='img'
                />
                <Box paddingX={1}>
                <Typography variant='subtitle1' component="h2">Immerse into the falls</Typography>
                </Box>
                <Box
                sx={{
                    display:"flex"
                    //{ alignItems:"center"}
                }

                }></Box>
            </Paper>
        </Grid>
        
    )
}
export default TourCard