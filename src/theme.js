// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63', // Rosa forte (cor principal)
    },
    secondary: {
      main: '#9c27b0', // Roxo (cor secundária)
    },
    background: {
      default: '#f3e5f5', // Fundo lilás claro
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      color: '#e91e63', // Cor rosa no título principal
    },
    h2: {
      fontWeight: 600,
      color: '#9c27b0', // Cor roxa no subtítulo
    },
  },
});

export default theme;
