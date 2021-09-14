import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import { Paper } from '@material-ui/core';
import hobbies from './hobbyData.js'

function App() {
  return (
    <>
      <Grid container>
        {hobbies.map((hobby, i) => 
            <Grid item xs={12} sm={6} med={3}>
            <Paper>
              Hello!  My name is {hobby.name}.  My favorite hobby is {hobby.interests} and my favorite food is {hobby.favoriteFood}
            </Paper>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default App;
