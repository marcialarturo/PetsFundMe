import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EmailIcon from '@mui/icons-material/Email'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import './Navbar.css'
import logo from '../../../images/logou.png'

export const Navbar = ({
  currentAccount,
  connectWallet,
  disconnectWallet,
  hasProfile,
  unstoppableLogin,
  userUD,
}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <EmailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div className="grow">
      <AppBar position="static" className="nav-bar">
        <Toolbar>
          {currentAccount ? (
            <>
              <Button className="whiteLink" component={Link} to="/">
                PetsFoundMe
              </Button>
              <Button className="whiteLink" component={Link} to="/">
                Home
              </Button>
              <Button className="whiteLink" component={Link} to="/my-profile">
                Profile
              </Button>
              <Button className="whiteLink" component={Link} to="/create">
                Create
              </Button>
            </>
          ) : (
            <>
              <Button className="whiteLink" component={Link} to="/">
                Home
              </Button>
            </>
          )}

          <div className="grow" />

          {currentAccount ? (
            <>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  background:
                    'linear-gradient(180deg,#91e1f9 35.42%,#f533e8 139.58%)',
                  color: 'white',
                  fontSize: '1rem',
                }}
                endIcon={<VerifiedUserIcon />}
              >
                {currentAccount}
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: '#FF835B', color: 'white' }}
                onClick={connectWallet}
              >
                Connect Wallet
              </Button>
            </>
          )}

          {userUD ? (
            <>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  background:
                    'linear-gradient(180deg,#09bf02 35.42%,#1cd603 139.58%)',
                  color: 'white',
                  fontSize: '1rem',
                }}
                endIcon={<VerifiedUserIcon />}
              >
                {userUD}
              </Button>
              <Button
                style={{ color: 'black' }}
                to="/"
                onClick={disconnectWallet}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginLeft: '.5rem',
                  backgroundColor: '#0bc704',
                  color: 'white',
                }}
                onClick={unstoppableLogin}
              >
                Connect with Unstoppable Domain
              </Button>
            </>
          )}

          {/* <div className="sectionDesktop">

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className="sectionMobile">
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div> */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}
