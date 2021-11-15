import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  AppBar,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Save, Delete, Menu } from '@mui/icons-material';
// import { green, orange } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

//Typography
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 64,
    },
  },
  // palette: {
  //   primary: {
  //     main: green[600],
  //   },
  //   secondary: {
  //     main: orange[600],
  //   },
  // },
});

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(80deg, #fe688b, #ff8e53)',
    color: '#fff !important',
    border: 0,
    borderRadius: '15px !important',
    padding: '5px 30px !important',
    marginBottom: '15px !important',
  },
});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
};

const CheckBoxMine = () => {
  const [checked, setChecked] = useState(false);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          // onChange={(e) => {
          //   setChecked(e.target.checked);
          // }}
          icon={<Save />}
          checkedIcon={<Save />}
          onClick={() => {
            setChecked(!checked);
          }}
          inputProps={{
            'aria-label': 'primary checked',
          }}
        />
      }
      label='Testing Checkbox'
    />
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm'>
        <div className='App'>
          <header className='App-header'>
            <AppBar color='secondary'>
              <Toolbar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant='h5'>Material UI Theming</Typography>
                <Button style={{ color: '#000000de', fontSize: '1.5rem' }}>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h1'>Welcome to Material UI</Typography>
            <Typography variant='h4'>Learn how to use Material UI</Typography>
            <img src={logo} className='App-logo' alt='logo' />
            <ButtonStyled />
            <Grid container spacing={2} justifyContent='center'>
              <Grid item xs={12} sm={3}>
                <Paper style={{ height: '75px', width: '100%' }} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper style={{ height: '75px', width: '100%' }} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper style={{ height: '75px', width: '100%' }} />
              </Grid>
            </Grid>
            <TextField
              variant='standard'
              color='primary'
              type='e-mail'
              label='E-mail'
              placeholder='place@hold.er'
            />
            <CheckBoxMine color='primary' />
            <ButtonGroup
              variant='contained'
              size='large'
              color='secondary'
              style={{ fontSize: 20 }}
              href='#'
            >
              <Button startIcon={<Save />}>Save</Button>
              <Button startIcon={<Delete />}>Discard</Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
