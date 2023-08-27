import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CreateTrackingPlan from './components/CreateTrackingPlan';
import ListTrackingPlans from './components/ListTrackingPlans';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const App: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tracking App
            </Typography>
            <Button component={Link} to="/" color="inherit">
              Create Tracking Plan
            </Button>
            <Button component={Link} to="/list" color="inherit">
              Tracking Plans
            </Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ marginTop: 2 }}>
          <Routes>
            <Route path="/" element={<CreateTrackingPlan />} />
            <Route path="/list" element={<ListTrackingPlans />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </Container>
      </Router>
    </Box>
  );
};

export default App;
