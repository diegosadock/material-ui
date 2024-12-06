import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #ff758c, #ff7eb3)', 
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <Typography
        variant="h4"
        color="white"
        sx={{
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        Análise e Desenvolvimento de Sistemas
      </Typography>
      <Typography
        variant="h6"
        color="white"
        sx={{
          fontWeight: '300',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
        }}
      >
        Aula: Material-UI - Atividade Prática Módulo 10
      </Typography>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{
          marginTop: '1rem',
          fontStyle: 'italic',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
        }}
      >
        Aluna: Shirlene Teles da Silva
      </Typography>
    </Box>
  );
};

export default Home;
