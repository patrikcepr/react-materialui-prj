import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Save, Delete } from '@mui/icons-material';
import { green, orange } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: orange[600],
    },
  },
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
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <ButtonStyled />
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
    </ThemeProvider>
  );
}

export default App;
