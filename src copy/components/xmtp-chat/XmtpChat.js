import React from 'react'
import { Client } from '@xmtp/xmtp-js'

function XmtpChat(props) {
  const { currentUser,signer } = props

  const [message, setMessage] = useState(null)
  const [xmtpconnection, setXmtpconnection] = useState(null)
  const [chatMessages, setChatMessages] = useState(null)
  const [buyerInput, setBuyerInput] = useState(null)
  const [inputText, setInputText] = useState(null)
  const sender = '0x11Afb8521CbF03C3508378E41d4C5b7e2C90b233'

  const connectXmtpClient = async () => {
    const xmtp = await Client.create(signer)
    setXmtpconnection(xmtp)
    // Start conversation with Organizer
    const conversation = await xmtp.conversations.newConversation(sender)
    // Load all messages in the conversation
    const messages = await conversation.messages()
    const allConversations = await xmtp.conversations.list()

    const tempMsgs = []
    for (let msg of messages) {
      if (
        msg.recipientAddress == '0x11Afb8521CbF03C3508378E41d4C5b7e2C90b233' &&
        msg.senderAddress == '0xf4eA652F5B7b55f1493631Ea4aFAA63Fe0acc27C'
      ) {
        tempMsgs.push(msg)
      }
    }
    setChatMessages(tempMsgs)
    for await (const message of await conversation.streamMessages()) {
      console.log(`[${message.senderAddress}]: ${message.text}`)
    }
  }

  const sendXmtpMesg = async () => {
    const xmtp = await Client.create(signer)
    // Start conversation with Organizer
    const conversation = await xmtp.conversations.newConversation(sender)
    // Send a message
    const send = await conversation.send(message)
    const messages = await conversation.messages()
    console.log('🚀messages', messages)
    setBuyerInput(inputText)
  }

  const initilizeXMTP = () => {
    // Create the client with your wallet. This will connect to the XMTP development network by default
    const xmtp = await Client.create(wallet)
  }
  return <div></div>
}

export default XmtpChat
