import React from 'react';
import Sidenav from '../Sidenav.jsx';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Home() {
    return (
        <>
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Sidenav />
            <Box sx={{ flexGrow: 1 }}>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(255,0,0,0.1)',
                    padding: 0,
                }}
                >
                <h1 style={{ margin: 0 }}>Home</h1>
                </Box>
            </Box>
        </Box>
        </>
    );
}