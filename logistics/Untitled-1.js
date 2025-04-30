// Updated React Components with Material UI Integration

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Global CSS Reset and Fonts via CssBaseline
const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <CssBaseline />
      {/* Navbar with Material UI */}
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Umris Enterprise
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {['Home', 'About', 'Services', 'Contact'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{ flexGrow: 1, paddingTop: 8, textAlign: 'center', backgroundColor: '#f4f7fa', minHeight: '100vh' }}
      >
        <header className="App-header">
          <Box
            component="img"
            src="/logo192.png"
            alt="logo"
            sx={{
              height: '40vmin',
              animation: 'spin 20s linear infinite',
              '@keyframes spin': {
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' },
              },
            }}
          />
          <Typography variant="h4" sx={{ marginY: 4, color: '#282c34' }}>
            Welcome to Umris Enterprise
          </Typography>
          <Typography variant="body1" sx={{ marginY: 2, color: '#555' }}>
            Explore our logistics and transportation services tailored to your needs.
          </Typography>
        </header>
      </Box>
    </>
  );
};

export default App;
