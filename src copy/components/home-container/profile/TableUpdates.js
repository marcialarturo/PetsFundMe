import React, { useState } from 'react'
import { connect } from '@tableland/sdk'
// import { useNavigate } from 'react-router-dom'
// import { db } from '../config-firebase'
// import { collection, doc, updateDoc, getDocs, addDoc } from 'firebase/firestore'
function Updates() {
  // const usersCollectionRef = collection(db, 'references')
  // const navigate = useNavigate()
  const [tableland, setTableland] = useState('')
  const [review, setReview] = useState(
    'This family of cats is doing pretty good so far.',
  )
  const [reviewerWallet, setReviewerWallet] = useState(
    '0xf4eA652F5B7b55f1493631Ea4aFAA63Fe0acc27C',
  )
  const [nftImageCompanyLink, setNftImageCompanyLink] = useState('')
  const [employeeWalletAddress, setEmployeeWalletAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [tableName, setTableName] = useState('')

  // create initializeTableLand & connect and checkCreateTable onSubmit call writeToTableLand
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
    } catch (error) {
      console.log(error)
    }
  }

  const initializedTableLand = async () => {
    const tableland = await connect({
      network: 'testnet',
      chain: 'polygon-mumbai',
    })
    setTableland(tableland)
  }

  const checkOrCreateTableLand = async (e) => {
    e.preventDefault()
    const tableList = await tableland.list()
    if (tableList.length === 0) {
      createTableLand()
    }
    console.log('tableList', tableList)
    console.log('tableList', tableList.length)

    // write to TableLand
    writeToTableLand()
  }

  const createTableLand = async () => {
    const { name } = await tableland.create(
      `review text,
        reviewerWallet text,
        id int, primary key (id)`, // Table schema definition
      `myReviewTable`, // Optional `prefix` used to define a human-readable string
    )
    setTableName(name)
  }

  const writeToTableLand = async () => {
    const writeRes = await tableland.write(
      `INSERT INTO ${tableName} VALUES (0, 'The Cat Family is getting a little be better, yay!', '0x16760DB13aE3Aa5Bca17fC7D62172be2A2Ea9C45', `,
      // `INSERT INTO ${tableName} (review, reviewerWallet, id) VALUES ('Was a great book', '0xf4eA652F5B7b55f1493631Ea4aFAA63Fe0acc27C', 0);`,
    )
    // const writeRes = await tableland.write(
    //   `INSERT INTO ${tableName} (review, reviewerWallet, id) VALUES (${review}, ${reviewerWallet}, 0);`,
    // )
    console.log(' writeRes', writeRes)
    readFromTableLand()
  }

  // employeer should getStudentTable first & then writeToTableLand
  const getStudentTable = async () => {
    const studentWallet = '0xf4eA652F5B7b55f1493631Ea4aFAA63Fe0acc27C'
    const res = await fetch(
      `${tableland.options.host}/chain/${tableland.options.chainId}/tables/controller/${studentWallet}`,
    ).then((r) => r.json())
    console.log(' myres', res)
  }

  const readFromTableLand = async () => {
    // Perform a read query, requesting all rows from the table
    console.log('tableName', tableName)
    const readRes = await tableland.read(`SELECT * FROM ${tableName};`)
    console.log('readRes', readRes)
  }

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="text-center">
        {tableland ? (
          <div className="">
            <h2 className="text-center">Leave your update powered by Tableland</h2>
            <div className="content-form">
              <div className="card" style={{ width: '55%' }}>
                <form
                  action=""
                  className="form-inline"
                  onSubmit={(e) => checkOrCreateTableLand(e)}
                >
                  <label htmlFor="address" className="form-label">
                    Type your review
                  </label>

                  <div className="mb-3">
                    <textarea
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder=""
                      defaultValue={review}
                      onChange={(e) => setReview(e.target.value)}
                      rows="5"
                      cols="33"
                    ></textarea>
                  </div>

                  {/* loading icons */}
                  <div className="mb-3">
                    {loading ? (
                      <div>
                        <h3>Posting...</h3>
                        <div
                          className="spinner-grow text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-secondary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-success"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-warning"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-info" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-light" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-dark" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>

                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={initializedTableLand}
            type="button"
            className="btn btn-lg btn-success"
          >
            Connect To TableLand ➡
          </button>
        )}
      </div>
    </div>
  )
}

export default Updates
