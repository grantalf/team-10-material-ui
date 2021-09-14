import logo from './logo.svg';
import './App.css';
import hobbies from './hobbyData.js'
import InfoCard from './InfoCard.js'
import Grid from '@material-ui/core/Grid'
import { Paper } from '@material-ui/core';


function App() {
  return (
    <>
      <Grid container>
        {hobbies.map((hobby, i) => {
          return (
            <Grid item xs={12} sm={6} med={3}>
              <InfoCard hobby={hobby}/>
            </Grid>
          )
        })}
      </Grid>
    </>
  );
}

export default App;
