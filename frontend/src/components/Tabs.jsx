import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab }from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';
import { ListItemButton, List, ListItemIcon, ListItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListItemText from '@mui/material/ListItemText';
import Autocomplete from '@mui/material/Autocomplete';
import ProductList from './product/ProductList';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [products, setProducts] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <Box
            sx={{
            //borderBottom: 1,
            //borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}
        >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#4CAF50', // indicador debajo
                },
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                ml: 1,
                mr: 1,
                backgroundColor: '#e9e9e9',
                borderRadius: '7px',
              }}
            >
              <Tab
                label="All"
                {...a11yProps(0)}
                sx={{
                  textTransform: 'none',
                  color: 'gray', 
                  '&.Mui-selected': {
                    color: '#4CAF50', 
                  },
                }}
              />
              <Tab
                label="Active"
                {...a11yProps(1)}
                sx={{
                  textTransform: 'none',
                  color: 'gray',
                  '&.Mui-selected': {
                    color: '#4CAF50',
                  },
                }}
              />
              <Tab
                label="Archived"
                {...a11yProps(2)}
                sx={{
                  textTransform: 'none',
                  color: 'gray',
                  '&.Mui-selected': {
                    color: '#4CAF50',
                  },
                }}
              />
              <Tab
                label="Deleted"
                {...a11yProps(3)}
                sx={{
                  textTransform: 'none',
                  color: 'gray',
                  '&.Mui-selected': {
                    color: '#4CAF50',
                  },
                }}
              />
            </Tabs>

            <List sx={{ display: 'flex', alignItems: 'center' }} >
                <ListItem>
                    <ListItemText>
                    <div style={{ display: 'none' }}>
                    <ProductList onProductsLoaded={(loaded) => {
                      setProducts(loaded);
                      setFilteredProducts(loaded);
                    }} />
                    </div>
                    {products.length > 0 && (
                      <Autocomplete
                        disablePortal
                        options={products.map(p => p.product_name)}
                        open={inputValue.length > 0}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        sx={{
                          width: 200,
                          ml: 1,
                          mr: 1,
                          backgroundColor: '#e9e9e9',
                          borderRadius: 0,
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Search"
                            variant="standard"
                            InputLabelProps={{
                              sx: {
                                paddingLeft: 1,
                                fontSize: 15,
                                color: 'gray',
                                '&.Mui-focused': {
                                  color: '#4CAF50',
                                },
                              },
                            }}
                            sx={{
                              '& .MuiInput-underline:before': {
                                borderBottom: '2px solid #4CAF50', 
                              },
                              '& .MuiInput-underline:hover:before': {
                                borderBottom: '2px solid #388E3C', 
                              },
                              '& .MuiInput-underline:after': {
                                borderBottom: '3px solid #4CAF50', 
                              },
                            }}
                          />
                        )}
                      />
                    )}
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <FilterListIcon sx={{ fontSize: 30 }}/>
                    </ListItemIcon>
                </ListItem>

                <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                        <ListItemButton 
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              ml: 1,
                              mr: 1,
                              backgroundColor: '#91D150',
                              borderRadius: '7px',
                              '&:hover': {
                                backgroundColor: '#2F3636',
                                transform: 'scale(1.05)',
                                '& .MuiListItemIcon-root': {
                                  color: '#91D150',
                                },
                                '& .MuiListItemText-root .MuiTypography-root': {
                                    color: '#91D150',
                                }
                              } 
                            }}
                        >
                        <ListItemIcon
                            sx={{
                                color: '#2F3636',
                                '&:hover': {
                                    color: '#91D150',
                                }
                            }}
                        >
                            <AddIcon sx={{ fontSize: 30 }}/>
                        </ListItemIcon>
                        <ListItemText primary="Add" 
                            sx={{ color: '#black', fontWeight: 'bold' }}
                            
                            />
                        </ListItemButton>
                </ListItem>            
            </List>
        </Box>
      </Box>
  );
}
