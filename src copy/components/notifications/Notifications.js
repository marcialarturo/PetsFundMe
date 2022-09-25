import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link, withRouter } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Grid,
  Container,
  Typography,
  Button,
  Chip,
  Card,
} from '@mui/material'
import Paper from '@mui/material/Paper'
import './Notifications.css'
import imgPlaceHolder from '../../images/imgPlaceHolder.png'

function Notifications() {
  const { petId } = useParams()
  const { confirmed, setConfirmed } = useState('')
  // Add variables

  const requestFollow = (e) => {
    e.preventDefault()
    console.log('requestFollow')
  }
  const handleImage = (event) => {}

  const handleSubmit = async (e) => {}

  return (
    <Container
      className="root-pet-details"
      style={{ minHeight: '50vh', maxWidth: '700px', paddingBottom: '3rem' }}
    >
      <p
        style={{
          padding: '1rem',
          paddingLeft: '0rem',
          fontSize: '2rem',
          fontWeight: 'bolder',
        }}
      >
        Notifications
      </p>
      <p style={{ padding: '0.2rem' }}>Today</p>
      <Paper
        variant="outlined"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.9rem',
        }}
      >
        <Avatar />
        <div className="details">
          <p className="address">
            0xB0....78f
            <span> requested to follow you</span>
          </p>
          <p className="time">18hrs</p>
        </div>
        <div>
          <Button className="phase-btn mr-1" variant="contained">
            Accept
          </Button>
          <Button className="whiteLink">Nevermind</Button>
        </div>
      </Paper>
      <br />

      <Paper
        variant="outlined"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.9rem',
        }}
      >
        <Avatar />
        <div className="details">
          <p className="address">
            0xB0....78f
            <span> requested to follow you</span>
          </p>
          <p className="time">18hrs</p>
        </div>
        <div>
          <Button className="phase-btn mr-1" variant="contained">
            Accept
          </Button>
          <Button className="whiteLink">Nevermind</Button>
        </div>
      </Paper>
      <br />

      {/* old */}
      <Paper
        variant="outlined"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.9rem',
        }}
      >
        <Avatar />
        <div className="details">
          <p style={{ flex: 1 }}>
            0xB0....78f
            <span> requested to follow you</span>
          </p>
          <p className="time">18hrs</p>
        </div>
        <div style={{ flex: 1 }}>{/* if nothing give flex:1  */}</div>
      </Paper>
      <br />

      <Paper
        variant="outlined"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.9rem',
        }}
      >
        <Avatar />
        <div className="details">
          <p className="address">
            0xB0....78f
            <span> requested to follow you</span>
          </p>
          <p className="time">18hrs</p>
        </div>
        <Button className="phase-btn" variant="contained">
          Accept
        </Button>
        <Button className="whiteLink">Nevermind</Button>
      </Paper>
      <br />
      <br />
      <p style={{ padding: '0.2rem' }}>This week</p>
      <Paper
        variant="outlined"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.9rem',
        }}
      >
        <Avatar />
        <div className="details">
          <p className="address">
            0xB0....78f
            <span> requested to follow you</span>
          </p>
          <p className="time">18hrs</p>
        </div>
        <Button className=""></Button>
        <Button className=""></Button>
      </Paper>
      <br />

      <Paper
        variant="outlined"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.9rem',
        }}
      >
        <Avatar />
        <div className="details">
          <p className="address">
            0xB0....78f
            <span> requested to follow you</span>
          </p>
          <p className="time">18hrs</p>
        </div>
        <Button className="phase-btn" variant="contained">
          Accept
        </Button>
        <Button className="whiteLink">Nevermind</Button>
      </Paper>
      <br />

      <br />
    </Container>
  )
}

export default Notifications
