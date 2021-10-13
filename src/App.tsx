import React from 'react';
import './App.css';

import Home from './components/pages/HomeDashboard/HomeDashboard';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header'
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

// Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#28699a',
    },
    secondary: {
      main: '#3cb24c',
    },
    background: {
      default: '#ece6e2',
    },
    error: {
      main: '#c2293a',
    },
    info: {
      main: '#00e7ff',
    },
  }
});

function App() {

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
      <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;







/* Other Not Used

// THEME

<ThemeProvider<MyTheme>
          theme={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          }}>
</ThemeProvider>

// TODO: FROM MATERIAL UI Website, take out unless we want to add more properties

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

function DeepChild() {
  const classes = useStyles();

  return (
      <button type="button" className={useStyles().root}>
        Theme nesting
      </button>
  );
}
const buttonTheme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
'
interface MyTheme {
  background: string;
  boxShadow: string;
}

const useStyles = makeStyles((theme: MyTheme) => ({
  root: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));



 */
