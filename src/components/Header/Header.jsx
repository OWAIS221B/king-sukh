import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const drawerWidth = 240
const navItems = ['Home', 'About', 'Contact']

const route = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Rooms', link: '/rooms' },
  { name: 'Gallery', link: '/gallery' },
  { name: 'Contact', link: '/contact-us' },
]

const mobileRoute = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: 'services' },
]

function Header(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
  <Box
    onClick={handleDrawerToggle}
    sx={{
      textAlign: 'center',
      backgroundColor: '#111827',
      height: '100%',
      color: '#F3F4F6',
    }}
  >
    <Typography
      variant="h6"
      sx={{ my: 2, color: '#3B82F6', fontWeight: 600 }}
    >
      Kingsukh Inn & Stay
    </Typography>
    <Divider sx={{ borderColor: '#374151' }} />
    <List>
      {mobileRoute.map((item) => (
        <ListItem key={item.name} disablePadding>
          <ListItemButton
            component={Link}
            to={item.link}
            sx={{
              justifyContent: 'center',
              py: 1.5,
              '&:hover': {
                backgroundColor: '#1E293B',
                color: '#3B82F6',
              },
            }}
          >
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontSize: '1rem',
                fontWeight: 500,
                textAlign: 'center',
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
)


  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#111827' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: '#F3F4F6',
              fontWeight: 600,
            }}
          >
            <Link to="/">Kingsukh Inn & Stay</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {route.map((item) => (
              <Link to={item.link} key={item.name}>
                <Button
                  sx={{
                    color: '#F3F4F6',
                    fontWeight: 500,
                    mx: 1,
                    '&:hover': {
                      backgroundColor: '#1E293B',
                      color: '#3B82F6',
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#111827',
              color: '#F3F4F6',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  )
}

Header.propTypes = {
  window: PropTypes.func,
}

export default Header
