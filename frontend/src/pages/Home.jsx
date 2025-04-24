import React from 'react';
import Sidenav from '../Sidenav.jsx';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Home() {
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            
            <Box sx={{ width: '240px', flexShrink: 0 }}>
                <Sidenav />
            </Box>

            <Box sx={{ flexGrow: 1, padding: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'red',
                        padding: '16px',
                    }}
                >
                    <Typography variant="h4" component="h1" sx={{ margin: 0 }}>
                        Home
                    </Typography>
                </Box>

                <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                    Home
                </Typography>
            </Box>
        </Box>
    );
}
