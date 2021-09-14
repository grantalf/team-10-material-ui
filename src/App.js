import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import { Paper } from '@material-ui/core';

function App() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            Francine
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            Marina
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            Jorge
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            Grant
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
