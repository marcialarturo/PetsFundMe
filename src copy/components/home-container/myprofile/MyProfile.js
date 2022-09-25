import React, { useState, useEffect, createRef } from 'react'
import { useParams } from 'react-router'
import {
  Container,
  Chip,
  Card,
  Paper,
  Tabs,
  Tab,
  TextField,
  MenuItem,
} from '@mui/material'
import '../profile/Profile.css'
import userBGimage from '../../../images/bg.png'
import copy from '../../../images/copy.png'
import lockedProfile from '../../../images/locked.png'
// import { doesFollow } from '../../../Phase/doesFollow'
// import { follow } from '../../../Phase/follow'
import MyLinks from '../profile/MyLinks'
import Followers from '../profile/Followers'
import Following from '../profile/Following'
import noImageProfile from '../../../images/noImageProfile.jpg'
// import { displayPhase } from '../../../Phase/displayPhase'

function MyProfile({ account, currentAccount, selectedProfile }) {
  const [avatar, setAvatar] = useState('')
  console.log('🚀 ~ file: MyProfile.js ~ line 28 ~ MyProfile ~ avatar', avatar)
  const { petId } = useParams()
  const [userProfile, setUserProfile] = useState({})
  const [showProfile, setShowProfile] = useState(false)
  const avatarType = createRef()

  const setAvatarHelper = (e) => {
    e.preventDefault()
    console.log('sa', e.target.value)
    setAvatar(e.target.value)
    localStorage.setItem('profileImage', e.target.value)
  }

  useEffect(() => {
    const localprofileImage = localStorage.getItem('profileImage')
    if (localprofileImage !== '') {
      setAvatar(localprofileImage)
    }
    // getProfile()
  }, [])

  // const getProfile = async () => {
  //   const user = await displayPhase(currentAccount)
  //   console.warn(user)
  //   setUserProfile(user)
  // }

  const requestFollow = async () => {
    const follower = currentAccount
    // const isFollower = await follow(follower, selectedProfile.address)
    // console.log(' isFollower', isFollower)
    const a = await setTimeout(function () {
      setShowProfile(true)
    }, 2000)
  }

  const visitSite = (site) => {
    const link = site.value
    if (link) {
      window.open(link, '_blank')
    } else {
      window.open(site, '_blank')
    }
  }

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container
      className="root-pet-details"
      style={{ minHeight: '50vh', paddingBottom: '3rem' }}
    >
      <center>
        <Card
          style={{
            maxWidth: '500px',
            paddingBottom: '3rem',
            position: 'relative',
            borderRadius: '13px',
          }}
        >
          <img
            style={{
              width: '100%',
              height: '180px',
              position: 'relative',
              top: '0',
              left: '0',
            }}
            src={userProfile.banner || userBGimage}
            alt="userBGimage"
          />
          <img
            style={{
              position: 'absolute',
              top: '86px',
              left: '30px',
              border: '3px solid white',
              borderRadius: '13px',
              width: '120px',
              height: '125px',
            }}
            src={
              avatar
                ? `https://avatars.dicebear.com/api/avataaars/${avatar}.svg?background=%230000ff`
                : noImageProfile
            }
            alt="userImage"
          />

          <div
            style={{
              paddingBottom: '3rem',
              width: '100%',
              paddingTop: '.5rem',
            }}
          >
            <TextField
              style={{
                width: '120px',
                float: 'right',
                height: '80px',
                paddingRight: '1rem',
              }}
              fullWidth
              label="Change avatar"
              name="profileType"
              select
              onChange={setAvatarHelper}
              value={avatar}
              ref={avatarType}
            >
              <MenuItem value="micah">Micah</MenuItem>
              <MenuItem value="avataaars">Avataaars</MenuItem>
              <MenuItem value="human">Human</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="bottts">Bottts</MenuItem>
              <MenuItem value="identicon">Identicon</MenuItem>
              <MenuItem value="jdenticon">Jdenticon</MenuItem>
            </TextField>
          </div>
          <br />
          <p className="profile-wallet">
            {currentAccount
              ? currentAccount
              : '0x5e1b802905c9730C8474eED020F800CC38A6A42E'}

            <img className="profile-wallet-copy" src={copy} alt="copy.png" />
          </p>
          <p className="prof-description">
            {userProfile.description || userProfile.bio}
          </p>

          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Profile" />
              <Tab label="Followers" />
              <Tab label="Following" />
            </Tabs>
          </Paper>
          <hr />
          {value === 0 && (
            <MyLinks
              requestFollow={requestFollow}
              lockedProfile={lockedProfile}
              selectedProfile={userProfile}
              visitSite={visitSite}
              currentAccount={currentAccount}
            />
          )}
          {value === 1 && <Followers />}
          {value === 2 && <Following />}
        </Card>
      </center>
    </Container>
  )
}

export default MyProfile
