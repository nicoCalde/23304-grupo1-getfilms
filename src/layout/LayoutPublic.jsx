import { Link, AppBar, Button, Container, GlobalStyles, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Outlet, Link as RLink } from 'react-router-dom';
import Copyright from '../components/Copyright';
import { useAuth } from '../components/useAuth';
import Logo from '../logo.png'
const footers = [
  {
    title: 'Compania',
    description: ['Preguntas frecuentes', 'Historia', 'Contacto'],
  },
  {
    title: 'Links',
    description: [
      'Centro de ayuda',
      'Empleos',
      'Preferencias',
      'Desarrolladores',
    ],
  },
  {
    title: 'Legales',
    description: ['Privacidad', 'Terminos'],
  },
];

const LayoutPublic = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          
          <Typography color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="Logo" height={100} />  
          </Typography>
            <nav>
            <RLink to={'/plans'}>
              </RLink>
              <RLink to={'/plans'}>
                Planes
              </RLink>
            </nav>
            <RLink to={'/signup'}>
            <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Registro
              </Button>
            </RLink>
          
          
          <RLink to={'/login'}>
            <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Iniciar Sesion
            </Button>
          </RLink>
        </Toolbar>
      </AppBar>


      <Outlet />

      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
};

export default LayoutPublic;