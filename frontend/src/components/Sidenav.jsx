import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SettingsIcon from '@mui/icons-material/Settings';


const drawerWidthOpen = 240;
const drawerWidthClosed = 65;


const openedMixin = (theme) => ({
  width: drawerWidthOpen,
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
    width: drawerWidthOpen,
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

export default function Sidenav({ open, setOpen }) {
  const navigate = useNavigate();


  return (
    <Box sx={{ 
      display: 'flex', 
      flexGrow: 1,
      marginTop: 0,
      }}>
      <CssBaseline />
      <Drawer
        variant={'permanent'}
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          width: open ? drawerWidthOpen : drawerWidthClosed,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
             width: open ? drawerWidthOpen : drawerWidthClosed,
            transition: 'width 0.3s ease',
            overflowX: 'hidden',
          },
        }}
      >
        <DrawerHeader sx={{ backgroundColor: '#28232E' }}>
          <ListItem>
            <Typography variant="h6" noWrap component="div">
              <b style={{color: '#91D150', fontSize: 30,}}>MyDash</b>
            </Typography>
          </ListItem>
          <IconButton onClick={() => setOpen(!open)} 
              sx={{ 
                ':hover': {
                  backgroundColor: '#2F3636',
                },
                color: '#91D150',
                outline: 'none', 
                boxShadow: 'none', 
                marginRight: '4px',
                '&:focus': { 
                  outline: 'none',
                  boxShadow: 'none',
                }, 
              }}
            >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ backgroundColor: 'black', height: '2px' }}/>
        <List disablePadding sx={{ backgroundColor: '#28232E', height: '100%' }}>
          <ListItem disablePadding sx={{height: 50,}} onClick={() => {navigate("/")} }>
              <ListItemButton
                disableRipple
                sx={{
                  height: '50px',      
                  width: '100%',      
                  px: 2.5,
                  justifyContent: open ? 'initial' : 'center',
                  alignItems: 'center', 
                  '&:hover': {
                    backgroundColor: '#91D150',
                    transform: 'scale(1.05)',
                    '& .MuiListItemIcon-root': {
                      color: 'black',
                    },
                    '& .MuiListItemText-root .MuiTypography-root': {
                      color: 'black',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    '&:hover': {
                      color: 'black',
                      transition: 'color 0.3s ease',
                    },
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  sx={{
                    opacity: open ? 1 : 0,
                    color: 'white',
                  }}
                />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{height: 50}} onClick={() => {navigate("/products")} }>
          <ListItemButton
                disableRipple
                sx={{
                  height: '50px',      
                  width: '100%',      
                  px: 2.5,
                  justifyContent: open ? 'initial' : 'center',
                  alignItems: 'center', 
                  '&:hover': {
                    backgroundColor: '#91D150',
                    transform: 'scale(1.05)',
                    '& .MuiListItemIcon-root': {
                      color: 'black',
                    },
                    '& .MuiListItemText-root .MuiTypography-root': {
                      color: 'black',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    '&:hover': {
                      color: 'black',
                      transition: 'color 0.3s ease',
                    },
                  }}
                >
                  <FolderCopyIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Products"
                  sx={{
                    opacity: open ? 1 : 0,
                    color: 'white',
                    fontFamily: 'montserrat',
                  }}
                />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{height: 50,}} onClick={() => {navigate("/settings")} }>
          <ListItemButton
                disableRipple
                sx={{
                  height: '50px',      
                  width: '100%',      
                  px: 2.5,
                  justifyContent: open ? 'initial' : 'center',
                  alignItems: 'center', 
                  '&:hover': {
                    backgroundColor: '#91D150',
                    transform: 'scale(1.05)',
                    '& .MuiListItemIcon-root': {
                      color: 'black',
                    },
                    '& .MuiListItemText-root .MuiTypography-root': {
                      color: 'black',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    '&:hover': {
                      color: 'black',
                      transition: 'color 0.3s ease',
                    },
                  }}
                >
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Settings"
                  sx={{
                    opacity: open ? 1 : 0,
                    color: 'white',
                  }}
                />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{ backgroundColor: 'black', height: '2px' }}/>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
