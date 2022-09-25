import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './ProfileList.css'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material'

import { apiKey } from '../../../../APIKEYS'
// import CircularStatic from '../../../commons/CircularProgressWithLabel'
// import { displayAll } from '../../../../Phase/displayAll'

function ProfileList({ account, contractData, setSelectedProfile, data }) {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    // const loaddata = async () => {
    //   try {
    //     setLoading(true)
    //     const getAllProfiles = await displayAll()
    //     console.log(getAllProfiles)
    //     setProfiles(getAllProfiles)
    //     setLoading(false)
    //   } catch (error) {
    //     console.log(error)
    //     setLoading(false)
    //   }
    // }
    // loaddata()
  }, [])

  const details = (fundraiser) => {
    localStorage.removeItem('selectedProfile')
    localStorage.setItem('selectedProfile', fundraiser)
    setSelectedProfile(fundraiser)
    history.push(`/profile/details/${fundraiser.fundraiserId}`)
  }

  return (
    <div style={{ minHeight: '60vh', borderRadius: '24px' }}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Grid spacing={40} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.length ? (
              data.map((fundraiser, index) => (
                <Grid item md={3} spacing={1} className="swap-card" key={index}>
                  <Card
                    sx={{ maxWidth: 240 }}
                    onClick={() => details(fundraiser)}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={fundraiser.avatar || fundraiser.image}
                      alt="Profile"
                    />
                    <CardContent>
                      <Typography fontSize="12px" className="card-header-swap">
                        {fundraiser.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <h2>No Profiles Yet...</h2>
            )}
          </Grid>
        </div>
      )}
    </div>
  )
}

export default ProfileList
