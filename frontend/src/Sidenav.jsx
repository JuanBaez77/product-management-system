import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List disablePadding>
          <ListItem disablePaddingsg sx={{height: 50,}} onClick={() => {navigate("/")} }>
              <ListItemButton
                sx={{
                  height: '50px',      
                  width: '100%',      
                  px: 2.5,
                  justifyContent: open ? 'initial' : 'center',
                  alignItems: 'center', 
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                />
            </ListItemButton>
          </ListItem>
          <ListItem disablePaddingsg sx={{height: 50,}} onClick={() => {navigate("/products")} }>
              <ListItemButton
                sx={{
                  height: '50px',      
                  width: '100%',      
                  px: 2.5,
                  justifyContent: open ? 'initial' : 'center',
                  alignItems: 'center', 
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Products"
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                />
            </ListItemButton>
          </ListItem>
          <ListItem disablePaddingsg sx={{height: 50,}} onClick={() => {navigate("/settings")} }>
              <ListItemButton
                sx={{
                  height: '50px',      
                  width: '100%',      
                  px: 2.5,
                  justifyContent: open ? 'initial' : 'center',
                  alignItems: 'center', 
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Settings"
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
