import React, { useState, useEffect } from 'react'
import {
  Container,
  Chip,
  Card,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ENS from '../../../images/ENS.png'
import Twitter from '../../../images/twitter.png'
import Instagram from '../../../images/instagram.png'
import Website from '../../../images/website.png'
import Banner from '../../../images/website.png'
import GitHub from '../../../images/GitHub.png'

const icons = {
  ens: ENS,
  twitter: Twitter,
  instagram: Instagram,
  website: Website,
  banner: Banner,
  github: GitHub,
}

function MyLinks({
  isUserLocked,
  requestFollow,
  lockedProfile,
  selectedProfile,
  visitSite,
  currentAccount,
}) {
  const [nfts, setNfts] = useState([])
  console.log('nfts', nfts)
  const [items, setItems] = useState([])
  console.log(' items', items)
  const [loading, setLoading] = useState(false)

  const getNFTFromCovalent = async () => {
    if (!currentAccount) {
      alert('Please connect your wallet!')
      return
    }

    try {
      const nfts = await fetch(
        'https://api.covalenthq.com/v1/137/address/0x11760DB13aE3Aa5Bca17fC7D62172be2A2Ea9C11/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=ckey_2d7edb40645d4d74bb59eab31d9',
      )

      const allNFTS = await nfts.json()
      console.log('allNFTS', allNFTS)
      const nftPortIsAtFor = allNFTS.data.items[4]

      if (allNFTS) {
        const allData = allNFTS?.data?.items[4]
        console.log(' allData', allData)
        // setAllInfoForBookSwap(allData)
        const onlyNFTs = allData?.nft_data
        console.log(' onlyNFTs', onlyNFTs)
        // setDonatedNFTForBookSwap(onlyNFTs)

        setNfts(onlyNFTs)
        setItems(allNFTS?.data?.items)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getNFTFromCovalent()
  }, [])

  return (
    <div>
      {loading ? (
        <CircularProgress style={{ marginTop: '1rem' }} />
      ) : (
        <TableContainer component={Paper}>
          <br />
          <br />
          <p
            style={{
              float: 'left',
              paddingLeft: '.8rem',
              color: 'gray',
              fontSize: '.9rem',
            }}
          >
            Here are some NFT donated to this wallet address
          </p>
          <br />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Symbol</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {nfts &&
                nfts.map((legislator, key) => {
                  let overallRating, overallBlkRating
                  if (legislator.AverageRating) {
                    overallRating = legislator.overallRating
                  }
                  if (legislator.AverageBLKRating) {
                    overallBlkRating = legislator.overallBlkRating
                  }
                  return (
                    <TableRow key={key}>
                      <TableCell>
                        <img
                          src={legislator.external_data.image}
                          style={{ width: '100px' }}
                          alt=""
                        />
                      </TableCell>

                      <TableCell>{legislator.token_id}</TableCell>

                      <TableCell className="line-break">
                        {legislator.external_data.name}
                      </TableCell>

                      <TableCell align="center">
                        <a
                          href={`https://mumbai.polygonscan.com/address/${legislator.contract_address}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ChevronRightIcon
                            fontSize="large"
                            style={{ color: 'blue' }}
                          />
                        </a>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default MyLinks
