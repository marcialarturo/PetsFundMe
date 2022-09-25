import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Container, Grid, Link, Typography } from '@mui/material'
import './Footer.css'
import logo from '../../../images/logou.png'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row"></div>

        <div className="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="row">
          Copyright &copy; {new Date().getFullYear()} PetsFoundMe
        </div>
      </div>
    </footer>
  )
}

export default Footer
