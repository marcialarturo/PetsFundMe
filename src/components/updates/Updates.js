import { useEffect, useState } from 'react'
import { connect } from '@tableland/sdk'

function Updates(props) {
  useEffect(() => {
    initializeTableLand()
  }, [])

  const initializeTableLand = async () => {
    // Establish  connection
    const tableland = await connect({
      network: 'testnet',
      chain: 'polygon-mumbai',
    })
    // Create table
    const { name } = await tableland.create(
      `id int primary key, message text, userAddress, text`,
      `updates`,
    )

    // Wait for the table to be created, then query
    const writeRes = await tableland.write(
      `INSERT INTO ${name} VALUES (0, 'The Cat Family is getting a little be better, yay!', '0x16760DB13aE3Aa5Bca17fC7D62172be2A2Ea9C45', `,
    )
    const readRes = await tableland.read(`SELECT * FROM ${name}`)
    console.log('🚀 readRes', readRes)
  }

  return <div></div>
}

export default Updates
