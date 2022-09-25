import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router'
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Card,
  Chip,
} from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import './Profile.css'
import userBGimage from '../../../images/backgroundIMG.png'
import profileIcon from '../../../images/profile-icon.png'
import donation from '../../../images/donation.png'
import TableUpdates from './TableUpdates'

// import { doesFollow } from '../../../Phase/doesFollow'
// import { follow } from '../../../Phase/follow'
// import { displayPhase } from '../../../Phase/displayPhase'
import MyLinks from './MyLinks'
import Followers from './Followers'
import Following from './Following'

const dataUpdates = [
  {
    created: 'August 23, 2022',
    author: 'Annie Loizzi',
    update:
      'Cooper is making some positive progress this week. Following is an update from the Roberts family:  This week, we are happy to report that Cooper IV and PICC lines have been removed. He no longer requires IV pain medicine and antibiotics.',
  },
  {
    created: 'August 23, 2022',
    author: 'Annie Loizzi',
    update:
      'Cooper is making some positive progress this week. Following is an update from the Roberts family:  This week, we are happy to report that Cooper IV and PICC lines have been removed. He no longer requires IV pain medicine and antibiotics.',
  },
  {
    created: 'August 23, 2022',
    author: 'Annie Loizzi',
    update:
      'Cooper is making some positive progress this week. Following is an update from the Roberts family:  This week, we are happy to report that Cooper IV and PICC lines have been removed. He no longer requires IV pain medicine and antibiotics.',
  },
]

function Profile({
  account,
  currentAccount,
  selectedProfile,
  setDonateNfts,
  setDonateStream,
}) {
  const { userAddress } = useParams()
  const history = useHistory()
  console.log('selectedProfile', selectedProfile)
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {}, [])

  useEffect(() => {
    // getProfile(userAddress)
  }, [userAddress])

  const donate = async (e) => {
    setDonateStream(false)
    history.push(`/donate`)
  }
  const donateStream = async (e) => {
    setDonateStream(true)
    history.push(`/donate`)
  }

  const donateNFTs = async (e) => {
    setDonateNfts(true)
    history.push(`/donate`)
  }

  const requestFollow = async () => {
    // const follower = currentAccount
    // const isFollower = await follow(follower, selectedProfile.address)
    // await isFollower.wait()
    // setShowProfile(true)
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
      className="page-community"
      style={{ minHeight: '70vh', paddingBottom: '1rem' }}
    >
      <div>
        {selectedProfile ? (
          <Box sx={{ width: '100%' }}>
            <br />
            <br />
            <br />
            <p className="title-fundraiser"> {selectedProfile.title}</p>
            <br />

            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={8}>
                <img
                  src={selectedProfile.image}
                  alt="community"
                  className="foundraiser-img"
                />
                <br />
                <br />

                <div className="outer">
                  <img
                    src={profileIcon}
                    alt="profileIcon"
                    className="profile-icon"
                  />
                  <p>
                    <strong>
                      {`${selectedProfile.organizer.substring(32)}...`}{' '}
                    </strong>
                    is organizing this fundraiser
                  </p>
                </div>

                <br />
                <hr style={{ border: '1px solid #c8c8c8' }} />
                <br />
                <p className="description">{selectedProfile.description}</p>
                <br />
                <br />
                <Chip
                  className="profile-chip"
                  label={` Category: ${selectedProfile.category}`}
                  variant="outlined"
                />
                <Chip
                  className="profile-chip"
                  label={` Created at: ${selectedProfile.creationDate}`}
                  variant="outlined"
                />
                <Chip
                  className="profile-chip"
                  label={`Fundraiser id: ${selectedProfile.fundraiserId}`}
                  variant="outlined"
                />
                <br />
                <br />
                <hr style={{ border: '1px solid #c8c8c8' }} />
                <br />
                <br />

                <p className="title-fundraiser"> Updates</p>
                <TableUpdates />
              </Grid>

              <Grid p xs={4} className="grid-rigth-side">
                <Card
                  style={{
                    width: '300px',
                    padding: '1.5rem',
                    float: 'right',
                  }}
                >
                  <div className="page-wallet-address">
                    <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                      $
                      {selectedProfile.totalDonations === '0'
                        ? '0.00'
                        : selectedProfile.totalDonations}
                      <span
                        style={{
                          fontSize: '.94rem',
                          color: 'rgb(90 87 87)',
                          paddingLeft: '0.3rem',
                        }}
                      >
                        raised of $ {selectedProfile.targetAmmount}
                      </span>
                    </p>
                    <br />
                    <LinearProgress variant="determinate" value={50} />

                    <p style={{ fontSize: '.9rem', color: 'rgb(90 87 87)' }}>
                      30.3K donations
                    </p>
                    <br />

                    <br />

                    <Button
                      style={{
                        width: '100%',
                        background:
                          'linear-gradient(180deg,#ffde9e 50%,#fcb957)',
                        color: 'black',
                      }}
                      onClick={donate}
                    >
                      Donate Now
                    </Button>
                    <br />
                    <br />
                    <Button
                      style={{
                        width: '100%',
                        background:
                          'linear-gradient(180deg,#ffde9e 50%,#fcb957)',
                        color: 'black',
                      }}
                      onClick={donateStream}
                    >
                      Stream Payment By Superfluid
                    </Button>
                    <br />
                    <br />
                    <Button
                      onClick={donateNFTs}
                      style={{
                        width: '100%',
                        background:
                          'linear-gradient(180deg,#fdb933 35.42%,#f58131 139.58%)',
                        color: 'black',
                      }}
                    >
                      Donate NFT By NftPort
                    </Button>
                    <br />
                    <br />

                    <Button
                      onClick={donateNFTs}
                      style={{
                        width: '100%',
                        background:
                          'linear-gradient(180deg,#310242 35.42%,#2348cb 139.58%)',
                        color: 'white',
                      }}
                    >
                      Chat powered by XMTP
                    </Button>
                    <br />
                    <br />

                    <img
                      src={donation}
                      alt="profileIcon"
                      className="donation-img"
                    />
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Button variant="contained" color="primary" component={Link} to="/">
            Refresh
          </Button>
        )}
      </div>
      <br />
      <Typography className="subtitle" color="textPrimary" gutterBottom>
        Updates comming soon...
      </Typography>
      <br /> <br />
    </Container>
  )
}

export default Profile
