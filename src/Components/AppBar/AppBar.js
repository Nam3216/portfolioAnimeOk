import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
  
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Coding City
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <a href="#home" >
                <MenuItem key={1} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                </a>
                <a href="#bio" >
                <MenuItem key={2} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Bio</Typography>
                </MenuItem>
                </a>
                <a href="#proyectos" >
                <MenuItem key={3} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Proyectos</Typography>
                </MenuItem>
                </a>
                <a href="#contacto" >
                <MenuItem key={4} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contacto</Typography>
                </MenuItem>
                </a>
              
            </Menu>
          </Box>
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Coding City
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <a href="#home" >
              <Button
                key={5}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              </a>
              <a href="#bio" >
              <Button
                key={6}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Bio
              </Button>
              </a>
              <a href="#proyectos" >
              <Button
                key={7}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Proyectos
              </Button>
              </a>
              <a href="#contacto" >
              <Button
                key={8}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Contacto
              </Button>
              </a>
      
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;